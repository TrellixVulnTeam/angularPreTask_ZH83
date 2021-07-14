import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public bankService: BankService, public apiService: ApiService) {}

  ngOnInit(): void {}
}
