import { Component } from '@angular/core';

interface Hero {
  id: string;
  name: string;
}

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.scss']
})
export class NgForDemoComponent {

  heros: Hero[] = [
    { id: 'hero_0', name: '盖伦' },
    { id: 'hero_1', name: '赵信' },
    { id: 'hero_2', name: '嘉文' },
    { id: 'hero_3', name: '易大师' },
    { id: 'hero_4', name: '泰达米尔' }
  ];

  newName = '';

  constructor() { }

  trackByHero(index: number, hero: Hero): string {
    return hero.id;   // 根据id判断变化
  }

  add() {
    const newHero: Hero = {
      id: new Date().getTime().toString(),
      name: this.newName
    }
    this.heros.push(newHero);
  }

  reset() {
    this.heros = [
      { id: 'hero_0', name: '盖伦' },
      { id: 'hero_1', name: '赵信2' },
      { id: 'hero_2', name: '嘉文3' },
      { id: 'hero_3', name: '易大师' },
      { id: 'hero_4', name: '泰达米尔' }
    ]
  }
}
