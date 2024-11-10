import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateWorkspaceModalComponent } from './modal/create-workspace-modal/create-workspace-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,NavbarComponent,CreateWorkspaceModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(CreateWorkspaceModalComponent) createWorkspaceModal!: CreateWorkspaceModalComponent;

  openModal() {
    this.createWorkspaceModal.open();
  }

  closeModal() {
    this.createWorkspaceModal.close();
  }
}
