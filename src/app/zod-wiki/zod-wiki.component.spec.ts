import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Zod component will use Reactive Forms
import { ZodWikiComponent } from './zod-wiki.component';

describe('ZodWikiComponent', () => {
  let component: ZodWikiComponent;
  let fixture: ComponentFixture<ZodWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // ZodWikiComponent is standalone, so it's imported directly.
      // It also imports ReactiveFormsModule.
      imports: [ ZodWikiComponent, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Zod Integration for Validation');
  });

  it('should display the Zod setup instructions subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Setting up Zod');
  });
});
