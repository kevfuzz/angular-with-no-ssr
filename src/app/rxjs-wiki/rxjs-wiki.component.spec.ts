import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsWikiComponent } from './rxjs-wiki.component';
import { CommonModule } from '@angular/common';

describe('RxjsWikiComponent', () => {
  let component: RxjsWikiComponent;
  let fixture: ComponentFixture<RxjsWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RxjsWikiComponent, CommonModule ] // RxjsWikiComponent is standalone
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('RxJS in Angular');
  });
});
