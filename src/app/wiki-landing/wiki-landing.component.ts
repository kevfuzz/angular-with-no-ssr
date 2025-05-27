import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-wiki-landing',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './wiki-landing.component.html',
  styleUrls: ['./wiki-landing.component.scss']
})
export class WikiLandingComponent {

}
