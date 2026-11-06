import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  isSideBarOpen = signal(true);


  toggleSideBar(){
    this.isSideBarOpen.set(!this.isSideBarOpen());
  }

}
