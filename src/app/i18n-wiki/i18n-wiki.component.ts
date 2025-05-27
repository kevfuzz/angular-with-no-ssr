import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor, etc.

@Component({
  selector: 'app-i18n-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i18n-wiki.component.html',
  styleUrls: ['./i18n-wiki.component.scss']
})
export class I18nWikiComponent {
  // public itemCount: number = 1;
  // public gender: string = 'female';

  // // Method to cycle through values for demo
  // cycleItemCount() { this.itemCount = (this.itemCount + 1) % 6; }
  // cycleGender() { const genders = ['male', 'female', 'other']; this.gender = genders[(genders.indexOf(this.gender) + 1) % genders.length]; }
}
