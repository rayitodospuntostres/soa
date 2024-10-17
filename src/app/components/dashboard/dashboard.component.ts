import { Component, ViewEncapsulation } from '@angular/core';
import { PrimengpruebaComponent } from "./primengprueba/primengprueba.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimengpruebaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

}
