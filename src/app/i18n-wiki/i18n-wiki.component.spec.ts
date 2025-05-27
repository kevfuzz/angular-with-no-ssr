import { ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nWikiComponent } from './i18n-wiki.component';
import { CommonModule } from '@angular/common';

describe('I18nWikiComponent', () => {
  let component: I18nWikiComponent;
  let fixture: ComponentFixture<I18nWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ I18nWikiComponent, CommonModule ] // I18nWikiComponent is standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title "Internationalization (i18n) in Angular"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Internationalization (i18n) in Angular');
  });

  it('should display the "What is Internationalization (i18n)?" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('What is Internationalization (i18n)?')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Angular\'s Built-in i18n Approach" subsection', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3Elements = compiled.querySelectorAll('h3');
    let found = false;
    h3Elements.forEach((el) => {
      if (el.textContent?.includes('Angular\'s Built-in i18n Approach')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
  
  it('should display the "Marking Text for Translation in Templates" sub-heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h4Elements = compiled.querySelectorAll('h4');
    let found = false;
    h4Elements.forEach((el) => {
      if (el.textContent?.includes('Marking Text for Translation in Templates')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Pluralization" sub-heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h4Elements = compiled.querySelectorAll('h4');
    let found = false;
    h4Elements.forEach((el) => {
      if (el.textContent?.includes('Pluralization')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });

  it('should display the "Select (Gender or Other Conditional Messages)" sub-heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h4Elements = compiled.querySelectorAll('h4');
    let found = false;
    h4Elements.forEach((el) => {
      if (el.textContent?.includes('Select (Gender or Other Conditional Messages)')) {
        found = true;
      }
    });
    expect(found).toBeTrue();
  });
});
