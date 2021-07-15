import { Component, Input, OnInit } from '@angular/core';
import { Woman } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';
import { WomenService } from 'src/app/services/women.service';

@Component({
  selector: 'app-single-woman-card',
  templateUrl: './single-woman-card.component.html',
  styleUrls: ['./single-woman-card.component.css'],
})
export class SingleWomanCardComponent implements OnInit {
  @Input() woman: Woman = new Woman();

  constructor(
    public womenService: WomenService,
    public usersService: UsersService,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {}
}
