import { Icharacters } from 'src/app/models/icharacters';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() public character!:Icharacters 

  constructor() { }

  ngOnInit(): void {
  }

}
