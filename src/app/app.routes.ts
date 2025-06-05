import { Routes } from '@angular/router';
import { ReactiveFormExampleComponent } from './examples/reactive-form-example.component';
import { FormlyExampleComponent } from './examples/formly-example.component';

export const routes: Routes = [
  { path: 'reactive', component: ReactiveFormExampleComponent },
  { path: 'formly', component: FormlyExampleComponent },
];
