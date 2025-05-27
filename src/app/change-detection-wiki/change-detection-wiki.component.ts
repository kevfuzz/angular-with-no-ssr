import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor, etc.

@Component({
  selector: 'app-change-detection-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection-wiki.component.html',
  styleUrls: ['./change-detection-wiki.component.scss']
})
export class ChangeDetectionWikiComponent {

}
