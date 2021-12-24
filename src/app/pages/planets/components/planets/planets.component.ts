import { Component, OnInit } from '@angular/core';
import { Iplanets } from 'src/app/models/iplanets';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  private URL: string = 'https://rickandmortyapi.com/api/location';
  public dataInfo: Iplanets[] = [];
  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.recoverPlanetsData();
  }




  public recoverPlanetsData() {
    this.httpRequestService.getData(this.URL).subscribe(
      (data:any) => {
        const results: Iplanets[] = data.results;
        const formattedResults = results.map(({ name, type, dimension, residents }) =>({
          name,
          type,
          dimension,
          residents
        })) 
    this.dataInfo = formattedResults;
  }
  )
  }

}



// public recoverEpisodes() {
//   this.httpRequestService.getData(this.URL).subscribe((data:any) => {
//     this.episodes = data;
//   }
// )
// }