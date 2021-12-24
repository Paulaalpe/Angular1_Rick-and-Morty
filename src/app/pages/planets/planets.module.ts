import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetsCardComponent } from './components/planets/planets-card/planets-card.component';


@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetsCardComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class PlanetsModule { }
