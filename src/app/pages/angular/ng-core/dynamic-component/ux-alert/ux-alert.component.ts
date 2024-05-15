import { Component, EventEmitter, Output } from '@angular/core';

type UxAlertTheme = 'primary' | 'success' | 'danger';

export interface UxAlertOptions {
  content: string;
  theme?: UxAlertTheme;
}

@Component({
  selector: 'app-ux-alert',
  templateUrl: './ux-alert.component.html',
  styleUrls: ['./ux-alert.component.scss']
})
export class UxAlertComponent {
  options: Required<UxAlertOptions> = {
    content: '',
    theme: 'primary'
  }

  @Output() closed = new EventEmitter<void>();

  setOptions(options: UxAlertOptions) {
    this.options = { ...this.options, ...options };
  }

}
