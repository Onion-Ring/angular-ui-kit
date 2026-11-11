import { Component, input } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  isSideBarOpen = input.required<boolean>();




}
