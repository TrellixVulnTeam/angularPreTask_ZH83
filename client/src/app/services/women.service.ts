import { Injectable } from '@angular/core';
import { User, Woman } from '../models/models';
import { ApiService } from './api.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class WomenService {
  _womenARR: Array<Woman> = [];
  _currentUser: Array<User> = [];
  result: any = {};
  constructor(
    public apiService: ApiService // public userService: UsersService
  ) {}
  // api:  http://www.localhost:5004/women/getWomenByUserID?UserID=1
  async getWomenByUserID(url: string) {
    this._womenARR = (await this.apiService.createGetService(
      url
    )) as Array<Woman>;
    console.log('_womenARR: ', this._womenARR);
  }
}
