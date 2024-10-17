import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class PrincipalComponent {

}
