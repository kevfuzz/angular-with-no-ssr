import { Component, OnInit, OnDestroy } from '@angular/core'; // Import OnDestroy
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs'; // Import Observable, of, Subscription
import { delay, map } from 'rxjs/operators'; // Import delay, map

// Custom validator to check if the input is 'forbiddenName'
function forbiddenNameValidator(control: AbstractControl): { [s: string]: boolean } | null {
  if (control.value === 'forbiddenName') {
    return { 'nameIsForbidden': true };
  }
  return null; // valid
}

// Custom async validator to check if a username is taken (simulated)
function uniqueUsernameValidator(control: AbstractControl): Observable<{ [s: string]: boolean } | null> {
  // Simulate API call
  return of(control.value).pipe(
    delay(1000), // Simulate network latency
    map(username => {
      const takenUsernames = ['testuser', 'admin', 'user123'];
      return takenUsernames.includes(username) ? { 'usernameTaken': true } : null;
    })
  );
}

@Component({
  selector: 'app-core-forms-wiki',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './core-forms-wiki.component.html',
  styleUrls: ['./core-forms-wiki.component.scss']
})
export class CoreFormsWikiComponent implements OnInit, OnDestroy { // Implement OnDestroy
  templateDrivenData: any = {};
  reactiveForm: FormGroup;
  advancedReactiveForm: FormGroup;
  private subscriptions = new Subscription(); // Helper to manage multiple subscriptions

  constructor() {
    // Initialize reactiveForm
    this.reactiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    // Initialize advancedReactiveForm
    this.advancedReactiveForm = new FormGroup({
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      subscribeToNewsletter: new FormControl(false),
      country: new FormControl('', Validators.required),
      customValidationInput: new FormControl('', [Validators.required, forbiddenNameValidator]),
      username: new FormControl('', Validators.required, uniqueUsernameValidator), // Added async validator here
      allowExtraInfo: new FormControl(false),
      extraInfo: new FormControl({ value: '', disabled: true }) // Initially disabled
    });
  }

  ngOnInit(): void {
    // Listen to value changes for allowExtraInfo
    const allowExtraInfoSub = this.advancedReactiveForm.get('allowExtraInfo')?.valueChanges.subscribe(checked => {
      const extraInfoControl = this.advancedReactiveForm.get('extraInfo');
      if (checked) {
        extraInfoControl?.enable();
      } else {
        extraInfoControl?.disable();
        extraInfoControl?.setValue(''); // Optionally clear value when disabled
      }
    });
    if (allowExtraInfoSub) {
      this.subscriptions.add(allowExtraInfoSub);
    }

    // Listen to status changes for the username control
    const usernameStatusSub = this.advancedReactiveForm.get('username')?.statusChanges.subscribe(status => {
      console.log('Username control status:', status);
      // Here you could update UI elements based on pending/valid/invalid status
    });
    if (usernameStatusSub) {
      this.subscriptions.add(usernameStatusSub);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); // Unsubscribe from all managed subscriptions
  }

  onTemplateSubmit(formValue: any) {
    this.templateDrivenData = formValue;
    console.log('Template-driven form submitted:', formValue);
  }

  onReactiveSubmit() {
    if (this.reactiveForm.valid) {
      console.log('Reactive form submitted:', this.reactiveForm.value);
    } else {
      console.log('Reactive form is invalid');
      this.reactiveForm.markAllAsTouched();
    }
  }

  onAdvancedReactiveSubmit() {
    if (this.advancedReactiveForm.valid) {
      console.log('Advanced reactive form submitted:', this.advancedReactiveForm.value);
    } else {
      console.log('Advanced reactive form is invalid');
      this.advancedReactiveForm.markAllAsTouched();
    }
  }

  // Getters for reactiveForm controls
  get reactiveName() {
    return this.reactiveForm.get('name');
  }

  get reactiveEmail() {
    return this.reactiveForm.get('email');
  }

  // Getters for advancedReactiveForm controls
  get ageControl() {
    return this.advancedReactiveForm.get('age');
  }

  get countryControl() {
    return this.advancedReactiveForm.get('country');
  }

  get customValidationInputControl() {
    return this.advancedReactiveForm.get('customValidationInput');
  }

  get usernameControl() {
    return this.advancedReactiveForm.get('username');
  }

  get extraInfoControl() {
    return this.advancedReactiveForm.get('extraInfo');
  }
}
