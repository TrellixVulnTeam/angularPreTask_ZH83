import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  _womanNameInput: string = '';
  _dateOfBirthInput: string = '';
  _countryInput: string = '';
  _descriptionInput: string = '';
  constructor(
    public apiService: ApiService,
    public nav: Router // public userService: UsersService
  ) {}
  // api:  http://www.localhost:5004/women/getWomenByUserID?UserID=1
  async getWomenByUserID(url: string) {
    this._womenARR = (await this.apiService.createGetService(
      url
    )) as Array<Woman>;
    console.log('_womenARR: ', this._womenARR);
  }
  // exports.insertNewWoman = async (req, res) => {
  //   let woman = await con.execute(`INSERT INTO women(WomanName, DateOfBirth, Country, Description, UserID) VALUES ('${req.body.WomanName}','${req.body.DateOfBirth}','${req.body.Country}','${req.body.Description}','${req.body.UserID}')`);
  //   res.send(woman[0]);
  // };
  async addWomanByUserID(url: string, userId?: number) {
    console.log('userId: ', userId);
    console.log('url: ', url);
    if (
      this._womanNameInput === '' ||
      this._dateOfBirthInput === '' ||
      this._countryInput === '' ||
      this._descriptionInput === ''
    ) {
      alert('All fields must be provided');
    } else {
      let newWomanOB = {
        WomanName: this._womanNameInput,
        DateOfBirth: this._dateOfBirthInput,
        Country: this._countryInput,
        Description: this._descriptionInput,
        UserID: userId,
      };

      console.log('newWomanOB: ', newWomanOB);
      this.result = (await this.apiService.createPostService(
        url,
        newWomanOB
      )) as any;
      this.getWomenByUserID(`/women/getWomenByUserID?UserID=${userId}`);
      console.log('_womenARR WITH NEW: ', this._womenARR);
      this.nav.navigate(['womenList']);
    }
  }
}
