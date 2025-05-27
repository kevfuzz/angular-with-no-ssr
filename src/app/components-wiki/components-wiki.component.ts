import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor, etc., and good practice

@Component({
  selector: 'app-components-wiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components-wiki.component.html',
  styleUrls: ['./components-wiki.component.scss']
})
export class ComponentsWikiComponent {

}
