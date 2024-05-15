import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-list-demo',
  templateUrl: './drop-list-demo.component.html',
  styleUrls: ['./drop-list-demo.component.scss']
})
export class DropListDemoComponent {

  lstOfItem = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lstOfItem, event.previousIndex, event.currentIndex);
  }

}
