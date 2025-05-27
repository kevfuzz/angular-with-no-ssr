import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreFormsWikiComponent } from './core-forms-wiki.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for testing
import { CommonModule } from '@angular/common'; // Import CommonModule for testing

describe('CoreFormsWikiComponent', () => {
  let component: CoreFormsWikiComponent;
  let fixture: ComponentFixture<CoreFormsWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Since CoreFormsWikiComponent is standalone, it's imported directly.
      // FormsModule and CommonModule are also needed for its template.
      imports: [ CoreFormsWikiComponent, FormsModule, CommonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreFormsWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "Angular Core Forms"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Angular Core Forms');
  });

  describe('Template-Driven Form', () => {
    it('should initialize with an empty templateDrivenData object', () => {
      expect(component.templateDrivenData).toEqual({});
    });

    it('submit button should be disabled initially when form is invalid', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;
      expect(button.disabled).toBeTrue();
    });

    it('submit button should be enabled when form is valid', async () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;
      const nameInput = compiled.querySelector('input[name="name"]') as HTMLInputElement;
      const emailInput = compiled.querySelector('input[name="email"]') as HTMLInputElement;

      nameInput.value = 'Test User';
      nameInput.dispatchEvent(new Event('input'));
      emailInput.value = 'test@example.com';
      emailInput.dispatchEvent(new Event('input'));
      
      fixture.detectChanges(); // Trigger change detection
      await fixture.whenStable(); // Wait for async operations

      expect(button.disabled).toBeFalse();
    });

    it('should call onTemplateSubmit and update templateDrivenData on valid form submission', async () => {
      spyOn(component, 'onTemplateSubmit').and.callThrough();
      spyOn(console, 'log'); // Spy on console.log

      const compiled = fixture.nativeElement as HTMLElement;
      const nameInput = compiled.querySelector('input[name="name"]') as HTMLInputElement;
      const emailInput = compiled.querySelector('input[name="email"]') as HTMLInputElement;
      const form = compiled.querySelector('form') as HTMLFormElement;

      nameInput.value = 'Test User';
      nameInput.dispatchEvent(new Event('input'));
      emailInput.value = 'test@example.com';
      emailInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      await fixture.whenStable();

      form.dispatchEvent(new Event('submit')); // Simulate form submission
      fixture.detectChanges();
      await fixture.whenStable();
      
      const expectedData = { name: 'Test User', email: 'test@example.com' };
      expect(component.onTemplateSubmit).toHaveBeenCalledWith(expectedData);
      expect(component.templateDrivenData).toEqual(expectedData);
      expect(console.log).toHaveBeenCalledWith('Template-driven form submitted:', expectedData);

      // Check if submitted data is displayed
      const preElement = compiled.querySelector('pre');
      expect(preElement).toBeTruthy();
      if (preElement) {
        expect(JSON.parse(preElement.textContent || '{}')).toEqual(expectedData);
      }
    });
  });
});
