import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-workspace-modal',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './create-workspace-modal.component.html',
  styleUrl: './create-workspace-modal.component.scss'
})
export class CreateWorkspaceModalComponent {
  @ViewChild('createWorkspaceModal') dialog!: ElementRef<HTMLDialogElement>;
  

  createWorkspaceForm = new FormGroup ({
    title: new FormControl('',Validators.required),
    description: new FormControl(''),
  })

  // get title() {
  //   return this.createWorkspaceForm.get('title');
  // }

  onSubmit() {

  }

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
  }
}
