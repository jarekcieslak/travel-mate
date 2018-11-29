import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../services/data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isElevated = false;
  random = Math.floor(Math.random() * Math.floor(15));

  @Input()
  tour: Tour;

  @Input()
  index: number;

  constructor() {
  }

  ngOnInit() {
  }

  elevate(shouldElevate: boolean) {
    this.isElevated = shouldElevate;
  }
}
