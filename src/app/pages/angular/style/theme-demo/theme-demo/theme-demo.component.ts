import { Component, OnInit } from '@angular/core';

interface Theme {
  code: string,
  text: string;
}

@Component({
  selector: 'app-theme-demo',
  templateUrl: './theme-demo.component.html',
  styleUrls: ['./theme-demo.component.scss']
})
export class ThemeDemoComponent implements OnInit {

  currentThemeCode: string | number;

  lstOfTheme: Theme[] = [
    { code: 'default', text: 'Default 默认' },
    { code: 'dark',    text: 'Dark 暗色' },
    { code: 'vue',     text: 'vue 样式' }
  ]

  constructor() { }

  ngOnInit(): void {
    this.currentThemeCode = 'default';
  }

  activeTabChange(e: any) {
    console.log(e);
  }
}
