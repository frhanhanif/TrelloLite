import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CdkDrag, CdkDragDrop,CdkDropList,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import CreateWorkspacesComponent from '../create-workspaces/create-workspaces.component';

@Component({
  selector: 'app-workspace-board',
  standalone: true,
  imports: [SidebarComponent,CdkDropList,CdkDrag,CreateWorkspacesComponent],
  templateUrl: './workspace-board.component.html',
  styleUrl: './workspace-board.component.scss'
})
export default class WorkspaceBoardComponent {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
