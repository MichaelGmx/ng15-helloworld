import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-refresh-candeactivate',
  templateUrl: './refresh-candeactivate.page.html',
  styleUrls: ['./refresh-candeactivate.page.scss'],
})
export class RefreshCandeactivatePage {

  // 參考： https://medium.com/@altamashali/angular-candeactivate-guard-e9069e1adf0f

  private isChangesSaved: boolean;
  private allowNavigation: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  // @HostListener('window:beforeunload', ['$event'])
  // onBeforeUnload(event: Event): void {
  //   this.isNavigationAllowed(true).then(
  //    (isNavigationAllowed: boolean) => {
  //      if (event && !isNavigationAllowed) {
  //                  event.preventDefault();
  //                  event.returnValue = false;
  //        }
  //     });
  // }

  // private isNavigationAllowed(beforeunloadEvent = false): Promise<boolean> {
  //   return new Promise<boolean> ( (resolve) => {
  //     if(this.isChangesSaved){
  //       resolve(true);
  //     } else {
  //       if(beforeunloadEvent){
  //         resolve(false);
  //       } else {
  //         // this.confirmDialog.open();
  //         this.allowNavigation.subscribe(
  //           isConfirmed => resolve(isConfirmed)
  //         )
  //       }
  //     }
  //   });
  // }

  // unloadHandler(event: Event) {
  //   event.preventDefault();
  //   event.returnValue = false;

  //   this.uxIonicService.showConfirm({
  //     header: '刷新頁面？',
  //     message: `確認要 <strong>刷新頁面</strong> 嗎？<br>
  //               刷新頁面 會返回選擇頁`,
  //     btnSubmit: {
  //       btnText: '確認',
  //       handler: _ => {
  //         console.log('返回');
  //         // event.preventDefault();
  //         event.returnValue = false;
  //       }
  //     }
  //   });
  // }

}
