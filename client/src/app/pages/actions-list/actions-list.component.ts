import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css'],
})
export class ActionsListComponent implements OnInit {
  constructor(public bankService: BankService, public apiService: ApiService) {}

  ngOnInit(): void {}
}
