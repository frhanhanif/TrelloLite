import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Workspace} from '../shared/workspace'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataStorage = 'workspaces';
  constructor() { }

  getData():Observable<any> {
    const data = localStorage.getItem(this.dataStorage);
    return of(data ? JSON.parse(data) : { workspaces: [] });
  }
}
