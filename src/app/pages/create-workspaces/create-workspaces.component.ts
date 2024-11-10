import { Component, ViewChild } from '@angular/core';
import { CreateWorkspaceModalComponent } from '../../modal/create-workspace-modal/create-workspace-modal.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-workspaces',
  standalone: true,
  imports: [CreateWorkspaceModalComponent],
  templateUrl: './create-workspaces.component.html',
  styleUrl: './create-workspaces.component.scss'
})
export default class CreateWorkspacesComponent {
  constructor(private appComponent: AppComponent) {}

  showCreateWorkspaceModal() {
    this.appComponent.openModal();
  }
}
