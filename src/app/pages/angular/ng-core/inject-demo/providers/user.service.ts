import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class UserService {

  _user: User;

  constructor() { }

  get user() {
    return this._user;
  }

  set user(user: User) {
    this._user = {
      ...user,
      age: 18
    }
  }

}
