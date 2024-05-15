import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { RefreshCandeactivatePage } from './refresh-candeactivate.page';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<RefreshCandeactivatePage> {

  canDeactivate(
    component: RefreshCandeactivatePage,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Get the Crisis Center ID
    console.log(currentRoute.paramMap.get('id'));

    // Get the current URL
    console.log(currentState.url);

    return true;

    // return component.dialogService.confirm('Discard changes?');
  }
  
}
