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

  //   // DELETE (woman)
  // exports.deleteWomanByID = async (req, res) => {
  //   let woman = await con.execute(`DELETE FROM women WHERE ID=${req.query.ID}`);
  //   res.send(woman[0]);
  // };

  async deleteWomen(url: string, ID?: number, userId?: number) {
    // console.log('userId: ', userId);
    // console.log('url: ', url);
    this.result = (await this.apiService.createGetService(url + ID)) as any;
    this.getWomenByUserID(`/women/getWomenByUserID?UserID=${userId}`);
    console.log('_womenARR AFTER delete: ', this._womenARR);
    this.nav.navigate(['womenList']);
  }
  // URL:   http://www.localhost:5004/women/deleteWomanByID?ID=

  async addWomanByUserID(url: string, userId?: number) {
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
