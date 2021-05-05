import { Component, OnInit } from '@angular/core';

interface Appdisplay {
  city: string,
  coordinates: Coord,
  degrees: Main
  weather: string,
  wind: number
}

interface Coord {
  lat: number,
  long: number
}

interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
