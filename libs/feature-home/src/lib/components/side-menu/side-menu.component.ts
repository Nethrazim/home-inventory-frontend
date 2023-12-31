import { Component } from '@angular/core';

@Component({
  selector: 'hio-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  activeState : boolean[] = [false, false];

  onLinkClicked(index: number)
  {
    this.activeState = [false, false];
    this.activeState[index] = true;
  }
}
