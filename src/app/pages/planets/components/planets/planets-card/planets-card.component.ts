import { Iplanets } from './../../../../../models/iplanets';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-card',
  templateUrl: './planets-card.component.html',
  styleUrls: ['./planets-card.component.scss']
})
export class PlanetsCardComponent implements OnInit {
  @Input() public planet!:Iplanets

  constructor() { }

  ngOnInit(): void {
  }

}
