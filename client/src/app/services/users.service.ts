import { Injectable } from '@angular/core';
import { User } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _currentUser: Array<User> = [];
  _isAuthenticated: boolean = false;
  result: any = {};
  constructor(public apiService: ApiService) {}
  // api:  http://www.localhost:5004/users/getUserByID?Email='zoe@gmail.com'&Password='111'
  async getWomenByUserID(url: string) {
    this._currentUser = (await this.apiService.createGetService(
      `${url}?Email='${this._currentUser[0].Email}'&Password='${this._currentUser[0].Password}'`
    )) as Array<User>;
    console.log('_currentUser: ', this._currentUser);
  }

  isAuthenticated = () => {
    this._isAuthenticated
      ? (this._isAuthenticated = false)
      : (this._isAuthenticated = true);
    console.log('_isAuthenticated Now', this._isAuthenticated);
  };
}
