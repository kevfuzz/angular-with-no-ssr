import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor, etc.

@Component({
  selector: 'app-testing-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-wiki.component.html',
  styleUrls: ['./testing-wiki.component.scss']
})
export class TestingWikiComponent {

}
