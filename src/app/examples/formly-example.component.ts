import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'app-formly-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyMaterialModule],
  templateUrl: './formly-example.component.html'
})
export class FormlyExampleComponent {
  form = new FormGroup({});
  model: any = {};
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
        label: 'Password',
        type: 'password',
        required: true
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
