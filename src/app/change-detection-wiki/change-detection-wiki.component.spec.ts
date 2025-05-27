import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionWikiComponent } from './change-detection-wiki.component';
import { CommonModule } from '@angular/common';

describe('ChangeDetectionWikiComponent', () => {
  let component: ChangeDetectionWikiComponent;
  let fixture: ComponentFixture<ChangeDetectionWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeDetectionWikiComponent, CommonModule ] // ChangeDetectionWikiComponent is standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title "Angular Change Detection"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Angular Change Detection');
  });

  it('should display the "What is Change Detection?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('What is Change Detection?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "How Angular Detects Changes (The Default Strategy)" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('How Angular Detects Changes (The Default Strategy)')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
  
  it('should display the "The Change Detection Cycle:" sub-heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h4Elements = compiled.querySelectorAll('h4');
    let found = false;
    h4Elements.forEach((el) => {
      if (el.textContent?.includes('The Change Detection Cycle:')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
