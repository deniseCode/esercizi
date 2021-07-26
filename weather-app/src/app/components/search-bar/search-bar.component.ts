import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HTTPRequest } from 'src/app/services/http.service';
import { ResponseWeather } from 'src/app/models/weatherresponse.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'search-bar',
  template: `

  <form #templateForm="ngForm" (ngSubmit)="onSubmit(templateForm)">
    <div id="search-bar" class="col-sm-6">
      <div class="input-group mb-3">
        <input id="location" 
              [(ngModel)]="citySearch"
              name="citySearch"
              type="text" class="form-control" placeholder="search city" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button type="submit" class="btn btn-secondary">Search</button>
      </div>
    </div> 
  </form> 
  `,
  styles:[`
    #search-bar { margin: 0 auto;}
  `]
})
export class SearchBarComponent {
  form : FormGroup;
  citySearch : string;
  public cityWeatherData: ResponseWeather;
  @Input() emptyInput;

  constructor(public httpRequest: HTTPRequest) {}
   
  onSubmit = (templateForm) => {
    this.httpRequest.SearchCityWeather(this.citySearch).subscribe((response)=>{
      this.cityWeatherData = response;
      console.log(response);
    });
    this.emptyInput = false;
  }

}


