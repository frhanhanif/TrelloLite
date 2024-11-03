import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  collapsed = signal(false);

  toggleCollapsed() {
    this.collapsed.update(value => !value)
  }
  
  constructor() { }
}
