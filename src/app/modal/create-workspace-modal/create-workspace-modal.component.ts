import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { WorkspaceData } from '../../shared/workspacedata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workspace-modal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './create-workspace-modal.component.html',
  styleUrl: './create-workspace-modal.component.scss'
})
export class CreateWorkspaceModalComponent implements OnInit{
  createWorkspaceForm : FormGroup ;

  constructor(private fb: FormBuilder,private dataService:DataService, private router: Router) 
  {
    this.createWorkspaceForm = this.fb.group({
      title: ['', Validators.required], // Title is required
      description: [''] // Description is optional
    });
   }

  @ViewChild('createWorkspaceModal') dialog!: ElementRef<HTMLDialogElement>;
  
  ngOnInit(): void {

  }

  // get title() {
  //   return this.createWorkspaceForm.get('title');
  // }

  onSubmit() {
    if (this.createWorkspaceForm.valid) {
      const newWorkspace : WorkspaceData = this.createWorkspaceForm.value; // Get the form data
      this.dataService.addWorkspace(newWorkspace);
      console.log(newWorkspace)
    }
    this.close();
  }

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
  }

}
