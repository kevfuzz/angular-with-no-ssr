# Angular Form Wiki

This document demonstrates how to work with **Reactive Forms**, create **custom validators**, integrate **Zod** for schema validation, and leverage **Formly** for dynamic forms in Angular.

## 1. Setting up Reactive Forms

1. Import `ReactiveFormsModule` in your `AppComponent` or feature module.
   ```ts
   import { ReactiveFormsModule } from '@angular/forms';
   
   @NgModule({
     imports: [ReactiveFormsModule]
   })
   export class AppModule {}
   ```
2. Create a form group and bind it in your template.
   ```ts
   import { FormBuilder, Validators } from '@angular/forms';
   
   @Component({ selector: 'app-login', templateUrl: './login.component.html' })
   export class LoginComponent {
     loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', Validators.required]
     });

     constructor(private fb: FormBuilder) {}
   }
   ```
   ```html
   <form [formGroup]="loginForm" (ngSubmit)="submit()">
     <input formControlName="email" type="email" />
     <input formControlName="password" type="password" />
     <button type="submit">Login</button>
   </form>
   ```

## 2. Creating Custom Validators

Custom validators let you enforce domain-specific rules. A validator is a function that returns either `null` (valid) or an object describing the error.

Example: validate that two password fields match.
```ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordsMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  };
}
```
Use it when building the form group:
```ts
this.form = this.fb.group(
  {
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },
  { validators: passwordsMatch() }
);
```

## 3. Validating with Zod

[Zod](https://github.com/colinhacks/zod) is a TypeScript-first schema validation library that pairs nicely with reactive forms.

1. Install Zod:
   ```bash
   npm install zod
   ```
2. Define a Zod schema and validate form values:
   ```ts
   import { z } from 'zod';

   const loginSchema = z.object({
     email: z.string().email(),
     password: z.string().min(6)
   });

   submit() {
     const result = loginSchema.safeParse(this.loginForm.value);
     if (!result.success) {
       console.error(result.error.format());
     } else {
       // use result.data
     }
   }
   ```

## 4. Building Dynamic Forms with Formly

[Formly](https://formly.dev) generates forms dynamically from a configuration object.

1. Install the core and a UI module (example using Material):
   ```bash
   npm install @ngx-formly/core @ngx-formly/material
   ```
2. Import `FormlyModule` and a UI module in your application:
   ```ts
   import { FormlyModule } from '@ngx-formly/core';
   import { FormlyMaterialModule } from '@ngx-formly/material';

   @NgModule({
     imports: [FormlyModule.forRoot(), FormlyMaterialModule]
   })
   export class AppModule {}
   ```
3. Describe fields and bind them to a `FormGroup`:
   ```ts
   fields: FormlyFieldConfig[] = [
     {
       key: 'email',
       type: 'input',
       templateOptions: {
         label: 'Email',
         required: true
       }
     },
     {
       key: 'password',
       type: 'input',
       templateOptions: {
         type: 'password',
         label: 'Password',
         required: true
       }
     }
   ];
   form = new FormGroup({});
   model = {};
   ```
   ```html
   <form [formGroup]="form" (ngSubmit)="submit()">
     <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
     <button type="submit">Submit</button>
   </form>
   ```

With these techniques you can build robust forms, apply powerful validation, and generate form layouts dynamically.

## 5. Example Components

Two example components are included in this repository under `src/app/examples`.

1. **ReactiveFormExampleComponent** demonstrates reactive forms, a custom
   `passwordsMatch` validator and validation with Zod. The template renders a
   basic login form and reports errors when passwords do not match or the Zod
   schema fails.
2. **FormlyExampleComponent** showcases how to build the same form
   configuration using Formly. Fields are declared as an array of
   `FormlyFieldConfig` objects to generate the form dynamically.

Routes have been added in `app.routes.ts` so you can navigate to `/reactive` or
`/formly` to see each demo when running `ng serve`.
