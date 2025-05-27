import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; // Import FormControl
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyCustomInputComponent } from '../formly-custom-input/formly-custom-input.component'; // Adjust path as needed

@Component({
  selector: 'app-formly-wiki',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyMaterialModule, // Material theme for Formly
    FormlyModule.forRoot({ // Configure Formly
      types: [
        { name: 'custom-input', component: FormlyCustomInputComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is definitely required!' },
      ],
    }),
    // Note: In a real app, individual Angular Material modules like MatInputModule,
    // MatCheckboxModule, MatSelectModule, MatButtonModule would also be needed here
    // for the FormlyMaterialModule fields to render correctly.
  ],
  templateUrl: './formly-wiki.component.html',
  styleUrls: ['./formly-wiki.component.scss']
})
export class FormlyWikiComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor() { }

  ngOnInit(): void {
    this.model = {
      email: 'user@example.com',
      name: '',
      agreeToTerms: false,
      country: null,
      customInputDemo: '',
      minLengthDemo: '',
      customValidatorDemo: ''
    };

    this.fields = [
      // ... (keep existing fields like name, email, agreeToTerms, country)
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Full Name',
          placeholder: 'Enter your full name',
          required: true,
        },
      },
      {
        key: 'email',
        type: 'input',
        props: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
          type: 'email',
        },
        validation: {
          messages: {
            email: 'Not a valid email address',
          },
        },
      },
      {
        key: 'agreeToTerms',
        type: 'checkbox',
        props: {
          label: 'I agree to the terms and conditions.',
          required: true,
        },
      },
      {
        key: 'country',
        type: 'select',
        props: {
          label: 'Country',
          placeholder: 'Select country',
          required: true,
          options: [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
          ],
        },
      },
      // New fields for custom type and validation
      {
        key: 'customInputDemo',
        type: 'custom-input', // Use the registered custom type
        props: {
          label: 'Custom Input Field',
          placeholder: 'Enter value for custom field',
          required: true, // This will use the global 'required' message
        },
      },
      {
        key: 'minLengthDemo',
        type: 'input', // Standard material input
        props: {
          label: 'Min Length Demo (min 5)',
          placeholder: 'Enter at least 5 characters',
          required: true,
          minLength: 5,
        },
        validation: {
          messages: {
            minLength: 'This field must be at least 5 characters long.', // Field-specific message
          },
        },
      },
      {
        key: 'customValidatorDemo',
        type: 'input',
        props: {
          label: 'Custom Formly Validator (cannot be "test")',
          placeholder: 'Enter value',
          required: true,
        },
        validators: {
          // Custom validation function directly in field config
          custom: {
            expression: (c: FormControl) => c.value !== 'test',
            message: 'The value cannot be "test".',
          },
        },
      }
    ];
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formly form submitted:', this.model);
      alert(JSON.stringify(this.model));
    } else {
      console.log('Formly form is invalid');
    }
  }
}
