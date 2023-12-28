import { Component, Input } from '@angular/core';

@Component({
  selector: 'hio-menu-card',
  templateUrl: './hio-menu-card.component.html',
  styleUrl: './hio-menu-card.component.scss',
})
export class HioMenuCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() text!: string;
}
