import { Component, Input } from '@angular/core';
import { ResponseWeather } from '../models/weatherresponse.model';

@Component({
  selector: 'details-bottom',
  template: `
	<div class="row">
		<div *ngFor="let detail of details" class="col">
			<img src="{{detail.icon}}">
			<p id="title" class="fs-6 fw-light">{{detail.label}}</p>
			<p>{{detail.desc}}</p>
		</div>	
	</div>
`
})


export class DetailsBottomComponent {
	
	private _weather: ResponseWeather;

	get weather(): ResponseWeather { return this._weather; }
	@Input() set weatherData(newweather : ResponseWeather) {
	  this._weather = (newweather);
	  this.details = [
		{ 
			label: "Feels like", icon: "../../../assets/images/temperature.svg", desc: newweather.main.feels_like 
		},
		{ 
			label: "Humidity", icon: "../../../assets/images/water.svg", desc: newweather.main.humidity 
		},
		{ 
			label: "Wind", icon: "../../../assets/images/wind.svg", desc: newweather.wind.speed
		}
	]
	}
	
	public details: {label: string, icon: string, desc: number}[];
	
}
