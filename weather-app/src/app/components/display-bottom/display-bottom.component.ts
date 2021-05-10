import { I18nContext } from '@angular/compiler/src/render3/view/i18n/context';
import { Component } from '@angular/core';
import { HTTPRequest } from '../../services/http.service';
import { ResponseWeather } from '../../models/weatherresponse.model';

@Component({
  selector: 'app-display-bottom',
  templateUrl: './display-bottom.component.html',
  styles: [
    '#bottom .col {text-align: center}'
  ]
})


export class DisplayBottomComponent {
  public weatherData: ResponseWeather;

  constructor(public httpRequest: HTTPRequest) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          httpRequest.LoadCurrentWeather(position).subscribe((response)=>{
            this.weatherData = response;
          });
        });
    }

  }


}
