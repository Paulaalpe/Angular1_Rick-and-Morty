import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './../../shared/services/http-request.service';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
  
})
export class CharactersModule { }
