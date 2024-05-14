import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  template: `
    <label for="hero-name" class="title">Hero name: {{ hero }}</label>
    <input type="text" id="hero-name" [(ngModel)]="hero" />
  `,
  styleUrls: ['../../lifecycle-hook.scss'],
})
export class ChildViewComponent {

  hero = 'Megneta';

}
