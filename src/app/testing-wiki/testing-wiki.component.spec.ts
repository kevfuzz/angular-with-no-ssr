import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingWikiComponent } from './testing-wiki.component';
import { CommonModule } from '@angular/common';

describe('TestingWikiComponent', () => {
  let component: TestingWikiComponent;
  let fixture: ComponentFixture<TestingWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestingWikiComponent, CommonModule ] // TestingWikiComponent is standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title "Testing in Angular"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Testing in Angular');
  });

  it('should display the "Why Test Your Application?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Why Test Your Application?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Types of Tests in Angular" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Types of Tests in Angular')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
  
  it('should display the "Unit Testing in Angular" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Unit Testing in Angular')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
