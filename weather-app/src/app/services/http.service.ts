import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ResponseWeather } from '../models/weatherresponse.model';

@Injectable({
  providedIn: 'root'
})

export class HTTPRequest {

  constructor(private http: HttpClient) { }

  LoadCurrentWeather(position: GeolocationPosition): Observable<ResponseWeather> {
    let lat: number = position.coords.latitude;
    let lon: number = position.coords.longitude;
    return this.http.get<ResponseWeather>("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=a61e4cf1d203d6e7a118af89108ac797");
  }

}


