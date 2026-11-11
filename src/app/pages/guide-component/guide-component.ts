import { Component, signal } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guide-component',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './guide-component.html',
  styleUrl: './guide-component.css',
})
export class GuideComponent {

  sideBarOpen = signal<boolean>(true);

  toggleSideBar(){
    this.sideBarOpen.set(!this.sideBarOpen())
  }

}
