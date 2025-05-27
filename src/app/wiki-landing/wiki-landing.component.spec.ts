import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiLandingComponent } from './wiki-landing.component';

describe('WikiLandingComponent', () => {
  let component: WikiLandingComponent;
  let fixture: ComponentFixture<WikiLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WikiLandingComponent ] // Use imports for standalone components
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main title "Welcome to the Angular Wiki!"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to the Angular Wiki!'); // WikiLanding uses H1 for its main title
  });
});
