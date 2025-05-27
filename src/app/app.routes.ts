import { Routes } from '@angular/router';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { WikiLandingComponent } from './wiki-landing/wiki-landing.component';
import { CoreFormsWikiComponent } from './core-forms-wiki/core-forms-wiki.component';
import { FormlyWikiComponent } from './formly-wiki/formly-wiki.component';
import { ZodWikiComponent } from './zod-wiki/zod-wiki.component';
import { ComponentsWikiComponent } from './components-wiki/components-wiki.component';
import { RxjsWikiComponent } from './rxjs-wiki/rxjs-wiki.component';
import { StateManagementWikiComponent } from './state-management-wiki/state-management-wiki.component';
import { TestingWikiComponent } from './testing-wiki/testing-wiki.component';
import { ChangeDetectionWikiComponent } from './change-detection-wiki/change-detection-wiki.component';
import { I18nWikiComponent } from './i18n-wiki/i18n-wiki.component';
import { AccessibilityWikiComponent } from './accessibility-wiki/accessibility-wiki.component';

export const routes: Routes = [
  { path: 'signals-demo', component: SignalsDemoComponent },
  { path: 'wiki', component: WikiLandingComponent },
  { path: 'wiki/forms', component: CoreFormsWikiComponent },
  { path: 'wiki/forms/formly', component: FormlyWikiComponent },
  { path: 'wiki/forms/zod', component: ZodWikiComponent },
  { path: 'wiki/components', component: ComponentsWikiComponent },
  { path: 'wiki/rxjs', component: RxjsWikiComponent },
  { path: 'wiki/state-management', component: StateManagementWikiComponent },
  { path: 'wiki/testing', component: TestingWikiComponent },
  { path: 'wiki/change-detection', component: ChangeDetectionWikiComponent },
  { path: 'wiki/i18n', component: I18nWikiComponent },
  { path: 'wiki/accessibility', component: AccessibilityWikiComponent }
];
