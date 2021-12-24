import { Iepisodes } from './../../../../models/iepisodes';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  private URL: string = 'https://rickandmortyapi.com/api/episode';
  public dataInfo: Iepisodes[] = [];
  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.recoverEpisodesData();
  }




  public recoverEpisodesData() {
    this.httpRequestService.getData(this.URL).subscribe(
      (data:any) => {
        const results: Iepisodes[] = data.results;
        const formattedResults = results.map(({ id, name, air_date, episode }) =>({
          id,
          name,
          air_date,
          episode
        }));
      this.dataInfo = formattedResults;
    
    })
  }

}
