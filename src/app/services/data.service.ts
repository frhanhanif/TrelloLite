import { Injectable } from '@angular/core';
import {WorkspaceData} from '../shared/workspacedata'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private workspaceData: WorkspaceData[] = [];
  private storageKey = 'workspacesData'

  constructor() {
    this.workspaceData = this.getData(); // Initialize from localStorage
   }

  //  loadStorage(){
  //   const data = localStorage.getItem('workspacesData');
  //   this.workspaceData = data ? JSON.parse(data) : [];
  //  }

   saveLocalStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.workspaceData));
   }

  getData():WorkspaceData[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addWorkspace(workspaceData: WorkspaceData): void {
    this.workspaceData.push(workspaceData);
    this.saveLocalStorage()
  }
}
