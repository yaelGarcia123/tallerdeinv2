import { Component } from '@angular/core';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent {

  isCollapsed = false;
  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
