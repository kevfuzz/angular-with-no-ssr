import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import if using formControl directly

@Component({
  selector: 'app-formly-custom-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <label [for]="id">{{ props.label }}</label>
      <input [type]="props.type || 'text'" [formControl]="formControl" [formlyAttributes]="field" [id]="id" class="custom-input-style">
      <div *ngIf="showError" style="color: red;">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
  styles: [`.custom-input-style { border: 2px solid steelblue; padding: 5px; }`]
})
export class FormlyCustomInputComponent extends FieldType<FormlyFieldConfig> {}
