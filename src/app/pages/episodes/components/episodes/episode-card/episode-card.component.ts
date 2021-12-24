import { Iepisodes } from './../../../../../models/iepisodes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
  @Input() public episode!: Iepisodes

  constructor() { }

  ngOnInit(): void {
  }

}
