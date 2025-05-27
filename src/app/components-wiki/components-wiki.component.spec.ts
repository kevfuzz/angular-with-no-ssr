import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsWikiComponent } from './components-wiki.component';
import { CommonModule } from '@angular/common';

describe('ComponentsWikiComponent', () => {
  let component: ComponentsWikiComponent;
  let fixture: ComponentFixture<ComponentsWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // ComponentsWikiComponent is standalone, so it's imported directly.
      // It also imports CommonModule.
      imports: [ ComponentsWikiComponent, CommonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Angular Components & Templates');
  });

  it('should display the "Component Basics" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Component Basics')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Input Properties (@Input())" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Input Properties (@Input())')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
