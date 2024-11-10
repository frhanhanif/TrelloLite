import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateWorkspaceModalComponent } from '../../modal/create-workspace-modal/create-workspace-modal.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CreateWorkspaceModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  constructor(private appComponent: AppComponent) {}

  showCreateWorkspaceModal() {
    this.appComponent.openModal();
  }
}
