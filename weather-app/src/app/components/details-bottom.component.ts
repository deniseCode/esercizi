import { Component, Input } from '@angular/core';
import { Details } from '../models/details-weather.model';
import { HTTPRequest } from '../services/http.service';
import { ResponseWeather } from '../models/weatherresponse.model';

@Component({
  selector: 'details-bottom',
  template: `
	<div *ngFor="let detail of details">
		<div class="col">
			<img src="{{detail.icon}}">
			<p id="title" class="fs-6 fw-light">{{detail.label}}</p>
			<p>{{detail.desc}}</p>
		</div>
	</div>	
`
})


export class DetailsBottomComponent {

	details : Details[] = [
		{ 
			label: "Feels like", icon: "../../../assets/images/temperature.svg", desc: "{{weatherData.main.feels_like}}°" 
		},
		{ 
			label: "Humidity", icon: "../../../assets/images/water.svg", desc: "{{weatherData.main.humidity}}" 
		},
		{ 
			label: "Wind", icon: "../../../assets/images/wind.svg", desc: "{{weatherData.wind.speed}} km/h" 
		}
	]
	
}