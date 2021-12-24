import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeCardComponent } from './components/episodes/episode-card/episode-card.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeCardComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class EpisodesModule { }
