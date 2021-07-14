import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-add-action-form',
  templateUrl: './add-action-form.component.html',
  styleUrls: ['./add-action-form.component.css'],
})
export class AddActionFormComponent implements OnInit {
  constructor(public bankService: BankService, public apiService: ApiService) {}

  ngOnInit(): void {}
}
