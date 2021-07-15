import { Component, Input, OnInit } from '@angular/core';
import { Woman } from 'src/app/models/models';

@Component({
  selector: 'app-single-woman-card',
  templateUrl: './single-woman-card.component.html',
  styleUrls: ['./single-woman-card.component.css'],
})
export class SingleWomanCardComponent implements OnInit {
  @Input() woman: Woman = new Woman();

  constructor() {}

  ngOnInit(): void {}
}
