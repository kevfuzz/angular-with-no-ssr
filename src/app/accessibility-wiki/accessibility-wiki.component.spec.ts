import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibilityWikiComponent } from './accessibility-wiki.component';
import { CommonModule } from '@angular/common';

describe('AccessibilityWikiComponent', () => {
  let component: AccessibilityWikiComponent;
  let fixture: ComponentFixture<AccessibilityWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccessibilityWikiComponent, CommonModule ] // AccessibilityWikiComponent is standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title "Web Accessibility (a11y) in Angular"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Web Accessibility (a11y) in Angular');
  });

  it('should display the "What is Web Accessibility (a11y)?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('What is Web Accessibility (a11y)?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Key Principles of Accessibility (WCAG)" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Key Principles of Accessibility (WCAG)')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
