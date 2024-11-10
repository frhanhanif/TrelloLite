import { Component, computed, Input, Signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule,MatListModule,
    MatIcon
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
  constructor(public sharedService: SharedService) {}

  sidebarWidth = computed(()=>this.sharedService.collapsed() ? '65px' : '200px')
}
