import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-view-actions',
  templateUrl: './view-actions.component.html',
  styleUrls: ['./view-actions.component.css'],
})
export class ViewActionsComponent implements OnInit {
  constructor(public bankService: BankService, public apiService: ApiService) {}

  ngOnInit(): void {}
}
