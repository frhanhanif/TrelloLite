import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateWorkspaceModalComponent } from '../../modal/create-workspace-modal/create-workspace-modal.component';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { Workspace } from '../../shared/workspace'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CreateWorkspaceModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  constructor(private appComponent: AppComponent, private dataService: DataService) {}

  title : string[] = []

  showCreateWorkspaceModal() {
    this.appComponent.openModal();
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((resp) => this.title = resp.workspaces.map((workspace: Workspace) => workspace.title))
  }
}
