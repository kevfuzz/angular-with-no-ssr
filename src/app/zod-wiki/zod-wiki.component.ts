import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import * as z from 'zod';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core'; // Import Formly types
import { FormlyMaterialModule } from '@ngx-formly/material'; // Conceptual import for Formly Material theme

@Component({
  selector: 'app-zod-wiki',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}), // Basic Formly setup, can be enhanced with validators/wrappers
    FormlyMaterialModule      // For Material UI components with Formly
  ],
  templateUrl: './zod-wiki.component.html',
  styleUrls: ['./zod-wiki.component.scss']
})
export class ZodWikiComponent implements OnInit {
  // Define Zod Schema (reusing from reactive forms example)
  UserSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Provide a valid email address" }),
    age: z.number({ invalid_type_error: "Age must be a number" })
           .min(18, { message: "Must be 18 or older" })
           .optional(),
    bio: z.string().max(100, { message: "Bio cannot exceed 100 characters" }).optional()
  });

  // Properties for Angular Reactive Form example
  reactiveForm: FormGroup;

  // Properties for Formly example
  formlyForm = new FormGroup({});
  formlyModel: any = {};
  formlyFields: FormlyFieldConfig[] = [];

  constructor() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(null),
      bio: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Initialize model for Formly (can be empty or with defaults)
    this.formlyModel = {
        username: 'formlyUser',
        email: 'formly@example.com',
        // age: 25 // Optional
    };
    this.formlyFields = this.mapZodToFormlyFields(this.UserSchema);
  }

  // Zod to Formly mapping utility (simplified)
  mapZodToFormlyFields(schema: z.ZodObject<any, any, any>): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [];
    const shape = schema.shape;

    for (const key in shape) {
      const zodType = shape[key] as z.ZodTypeAny; // Type assertion for easier access
      const field: FormlyFieldConfig = { key: key };

      // Basic type mapping
      if (zodType instanceof z.ZodString) {
        field.type = 'input';
        // Check for specific string formats/checks
        // @ts-ignore: _def is internal but useful for inspection here
        if (zodType._def.checks) {
          // @ts-ignore
          for (const check of zodType._def.checks) {
            if (check.kind === 'email') field.props = { ...field.props, type: 'email' };
            // @ts-ignore
            if (check.kind === 'min') field.props = { ...field.props, minLength: check.value };
            // @ts-ignore
            if (check.kind === 'max') field.props = { ...field.props, maxLength: check.value };
          }
        }
      } else if (zodType instanceof z.ZodNumber) {
        field.type = 'input';
        field.props = { ...field.props, type: 'number' };
      } else if (zodType instanceof z.ZodBoolean) {
        field.type = 'checkbox';
      } else if (zodType instanceof z.ZodOptional || zodType instanceof z.ZodDefault) {
          // Handle optional or default by inspecting the inner type
          // @ts-ignore
          const innerType = zodType._def.innerType || zodType._def.type;
          if (innerType instanceof z.ZodString) field.type = 'input';
          else if (innerType instanceof z.ZodNumber) {
            field.type = 'input';
            field.props = { ...field.props, type: 'number' };
          } else if (innerType instanceof z.ZodBoolean) field.type = 'checkbox';
      }
      // Add more mappings for other Zod types as needed

      field.props = { ...field.props, label: key.charAt(0).toUpperCase() + key.slice(1) };
      if (!zodType.isOptional()) {
        field.props.required = true;
      }
      
      // Extract Zod messages for Formly validation (simplified for required, minLength, maxLength, email)
      // @ts-ignore
      const zodDef = zodType._def;
      if (zodDef.checks) {
        // @ts-ignore
        for (const check of zodDef.checks) {
          if (check.message) {
            if (check.kind === 'min' && field.props?.minLength) {
              field.validation = { ...field.validation, messages: { minLength: check.message } };
            } else if (check.kind === 'max' && field.props?.maxLength) {
              field.validation = { ...field.validation, messages: { maxLength: check.message } };
            } else if (check.kind === 'email') {
              field.validation = { ...field.validation, messages: { email: check.message } };
            }
          }
        }
      }
       // If required is true and there's a message on the Zod type directly (e.g. from .nonempty())
      if (field.props?.required && zodDef.message) {
        field.validation = { ...field.validation, messages: { required: zodDef.message } };
      }


      fields.push(field);
    }
    return fields;
  }

  // Submit handler for Angular Reactive Form
  onSubmit() {
    if (this.validateFormWithZod()) {
      console.log('Reactive form submitted with Zod validation:', this.reactiveForm.value);
      alert('Reactive Form is valid! ' + JSON.stringify(this.reactiveForm.value));
    } else {
      console.log('Reactive form is invalid based on Zod schema.');
      this.reactiveForm.markAllAsTouched();
    }
  }

  // Validation for Angular Reactive Form
  validateFormWithZod(): boolean {
    this.reactiveForm.setErrors(null);
    Object.keys(this.reactiveForm.controls).forEach(key => {
      this.reactiveForm.get(key)?.setErrors(null);
    });
    const result = this.UserSchema.safeParse(this.reactiveForm.value);
    if (!result.success) {
      const zodErrors = result.error.flatten();
      for (const fieldName in zodErrors.fieldErrors) {
        if (this.reactiveForm.get(fieldName)) {
          // @ts-ignore
          this.reactiveForm.get(fieldName)?.setErrors({ 'zod': zodErrors.fieldErrors[fieldName][0] });
        }
      }
      if (zodErrors.formErrors.length) {
        this.reactiveForm.setErrors({ 'zodForm': zodErrors.formErrors[0] });
      }
      return false;
    }
    return true;
  }

  // Submit handler for Formly form
  onFormlySubmit() {
    const result = this.UserSchema.safeParse(this.formlyModel);
    if (result.success) {
      console.log('Formly form submitted with Zod validation:', this.formlyModel);
      alert('Formly Form is valid! ' + JSON.stringify(this.formlyModel));
    } else {
      alert('Formly data is invalid. Check console for Zod errors.');
      console.error('Zod validation errors for Formly:', result.error.flatten());
      // Manual error mapping to Formly form/fields would be complex and is omitted here.
      // For example, to set an error on a specific field:
      // this.formlyForm.get('username')?.setErrors({ 'zod': 'Error from Zod' });
    }
  }

  // Getters for Reactive Form controls
  get usernameControl() { return this.reactiveForm.get('username'); }
  get emailControl() { return this.reactiveForm.get('email'); }
  get ageControl() { return this.reactiveForm.get('age'); }
  get bioControl() { return this.reactiveForm.get('bio'); }
}
