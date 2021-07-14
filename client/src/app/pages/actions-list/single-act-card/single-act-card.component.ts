import { Component, Input, OnInit } from '@angular/core';
import { Action } from 'src/app/models/models';

@Component({
  selector: 'app-single-act-card',
  templateUrl: './single-act-card.component.html',
  styleUrls: ['./single-act-card.component.css'],
})
export class SingleActCardComponent implements OnInit {
  @Input() action: Action = new Action();

  constructor() {}

  ngOnInit(): void {}
}
