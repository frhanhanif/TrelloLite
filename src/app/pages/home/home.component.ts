import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { CreateWorkspaceModalComponent } from '../../modal/create-workspace-modal/create-workspace-modal.component';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { WorkspaceData } from '../../shared/workspacedata';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CreateWorkspaceModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  constructor(private appComponent: AppComponent, private dataService: DataService) {}

  workspaces : WorkspaceData[] = [];

  showCreateWorkspaceModal() {
    this.appComponent.openModal();
  }

  ngOnInit(): void {
    this.workspaces = this.dataService.getData();
    console.log(this.dataService.getData())
  }

  addWorkspace(newWorkspace: WorkspaceData): void {
    this.dataService.addWorkspace(newWorkspace); // Call the service to add new workspace
  }
}
