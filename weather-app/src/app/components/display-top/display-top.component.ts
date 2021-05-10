import { Component } from '@angular/core';
import { HTTPRequest } from '../../services/http.service';
import { ResponseWeather } from '../../models/weatherresponse.model';


@Component({
  selector: 'app-display-top',
  templateUrl: './display-top.component.html',
  styles: ['#top {margin-bottom: 100px}',
  '.city {text-align: right}'
]
})

export class DisplayTopComponent {
  public weatherData: ResponseWeather;

  constructor(public httpRequest: HTTPRequest) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          httpRequest.LoadCurrentWeather(position).subscribe((response)=>{
            this.weatherData = response;
            console.log(this.weatherData = response);
          });
        });
    }

  }

}
