import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material'; // Or the theme you chose

import { FormlyWikiComponent } from './formly-wiki.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // For Material components

describe('FormlyWikiComponent', () => {
  let component: FormlyWikiComponent;
  let fixture: ComponentFixture<FormlyWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // FormlyWikiComponent is standalone, so it's imported directly.
      // It also imports ReactiveFormsModule, FormlyModule, and FormlyMaterialModule.
      imports: [
        FormlyWikiComponent, // The standalone component itself
        ReactiveFormsModule,
        FormlyModule.forRoot({}), // Basic Formly setup for testing
        FormlyMaterialModule,
        NoopAnimationsModule // Often needed for Material components in tests
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Formly Integration Examples');
  });

  it('should display the setup instructions subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Setting up ngx-formly');
  });
});
