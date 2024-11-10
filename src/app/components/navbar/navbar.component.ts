import { Component } from '@angular/core';
import { SharedService } from "../../shared/shared.service";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public sharedService: SharedService) {}

}
