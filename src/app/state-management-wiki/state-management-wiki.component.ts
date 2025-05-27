import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDisplayComponent } from '../counter-display/counter-display.component'; // Adjust path
import { CounterControlsComponent } from '../counter-controls/counter-controls.component'; // Adjust path

@Component({
  selector: 'app-state-management-wiki',
  standalone: true,
  imports: [
    CommonModule,
    CounterDisplayComponent, // Add here
    CounterControlsComponent // Add here
  ],
  templateUrl: './state-management-wiki.component.html',
  styleUrls: ['./state-management-wiki.component.scss']
})
export class StateManagementWikiComponent {

}
