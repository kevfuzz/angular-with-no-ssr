import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateManagementWikiComponent } from './state-management-wiki.component';
import { CommonModule } from '@angular/common';

describe('StateManagementWikiComponent', () => {
  let component: StateManagementWikiComponent;
  let fixture: ComponentFixture<StateManagementWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StateManagementWikiComponent, CommonModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateManagementWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('State Management in Angular');
  });

  it('should display the "What is Application State?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('What is Application State?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Why is State Management Important?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Why is State Management Important?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Common Challenges in State Management" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Common Challenges in State Management')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
