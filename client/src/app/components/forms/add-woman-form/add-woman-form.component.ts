import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { WomenService } from 'src/app/services/women.service';

@Component({
  selector: 'app-add-woman-form',
  templateUrl: './add-woman-form.component.html',
  styleUrls: ['./add-woman-form.component.css'],
})
export class AddWomanFormComponent implements OnInit {
  constructor(
    public womenService: WomenService,
    public apiService: ApiService,
    public nav: Router
  ) {}

  ngOnInit(): void {}
}
