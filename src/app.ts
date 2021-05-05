import { Callbacks } from "jquery";
import {Binding} from "./utils/binding";
declare const document: any;

interface Patient {
    "patientID": string,
    "submittedStatus": string,
    "patientType": string,
    "submissionDate": number
}

let listOne: string[] = ['probo', 'primia', 'procolo', 'principio', 'ponziana', 'principia', 'prescillo', 'primitiva', 'primiano','prasseda', 'primiana', 'primiero', 'primina', 'pomponio', 'primitivo', 'principessa', 'prassede', 'primilio', 'prassitele', 'primino', 'prisca', 'primillo', 'primio', 'primiera', 'proba', 'priscilla', 'prisco', 'gigi', 'primetto'];
let listTwo: string[] = ['violantina', 'vinicio gaspare', 'vettore', 'virgilio', 'vezzoso', 'vinca', 'velmino', 'vezzosa', 'verardino', 'violanda', 'vespasiana', 'viscardo', 'vinicio eurus', 'violanta', 'vigilia', 'velmo', 'venuto', 'violando', 'veturio', 'venerina', 'vetulia', 'verena', 'vera', 'venzo', 'verbena', 'vetulio', 'veo', 'violanto', 'verdiano', 'viola', 'vito', 'violante', 'veneria', 'verter', 'venerando', 'vezia', 'virginia', 'velmina', 'verardo', 'venerio', 'venere', 'virginio', 'verdiana', 'venerino', 'veneranda', 'vitino', 'vincenza', 'vita', 'verther', 'verdun', 'violo', 'vismaro', 'veronico', 'violantino', 'verando', 'vica', 'velma', 'virgilia', 'viridiana', 'veturia', 'virna', 'vespasiano', 'vettorino', 'vezio'];

//Unione array
let listT = [...listOne,...listTwo];

//ordinare l’array in ordine alfabetico
listT.sort();
console.log(listT);

//Rimuovere gigi dall'array
//Funzione 1
function findAndDelete (myarray: string[], find: string) {
    myarray.forEach((element: string, index)=>{
        if(element == find) listT.splice(index,1);
    })
};
findAndDelete(listT, 'gigi');
/*Funzione 2 
listT.forEach((element,index)=>{
    if(element=='gigi') listT.splice(index,1);
 });*/


 //Filtrare per “Mario”
 function filterArray (element: string) {
    if(element === 'mario'){
        console.log(element);
    } else {
        console.log("No name found");
    }
 }
 let myfilter = listT.filter(filterArray);


//Stampare tutti i nomi in console mediate l’utilizzo di interpolazione
function addName (myarray: string[]): void {
    myarray.forEach((element: string)=>{
        element =`Name: ${element}`;
        console.log(element);
    })
};
addName(listT);

//TEST 4
function getUserInput(): void {
    let userInput  : string = (document.getElementById("user-input")as HTMLInputElement).value;
    if (userInput) {
        //Eliminare gli spazi all'interno della riga
        let nospaceInput : string = userInput.replace(/\s/g, "");
        console.log(nospaceInput);

        //La prima lettere di ogni parola deve essere in maiuscolo
        let capitalizedInput: string = wordsCapitalize(userInput);
        console.log(capitalizedInput);

        //Eliminare i caratteri speciali
        let nospecialCar: string = capitalizedInput.replace(/[^a-zA-Z ]/g, "");
        console.log(nospecialCar);

        //one-way-binding
        let userInputDiv = document.getElementById("user-input")as HTMLInputElement;
        let bind = new Binding(userInputDiv, );
        console.log(bind);

    } else {
        console.log("No text found");
    }
    
}

function wordsCapitalize(e : string) {
    let inputToArray = e.trim().split(' ');
    for(var i = 0 ; i < inputToArray.length ; i++){
        inputToArray[i] = inputToArray[i][0]?.toUpperCase() + inputToArray[i]?.substr(1);
    }   
    let arrayToString= inputToArray.toString().replace(/\,/g, "");
    return arrayToString;
}

//Test 5
function pushUserInput(e:string) {
    const container: HTMLElement = document.getElementsByClassName("display-text")[0];
    let strongTag : HTMLElement = document.createElement('strong');
    strongTag.textContent = `${e}`;
    container.appendChild(strongTag);
}


declare module weatherResponse {

    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
    }

    export interface Clouds {
        all: number;
    }

    export interface Sys {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }

    export interface RootObject {
        coord: Coord;
        weather: Weather[];
        base: string;
        main: Main;
        visibility: number;
        wind: Wind;
        clouds: Clouds;
        dt: number;
        sys: Sys;
        timezone: number;
        id: number;
        name: string;
        cod: number;
    }

}


function getMeteo(e:string):void {
    let city : string = (document.getElementById("location")as HTMLInputElement).value;
    let queryUrl: any = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a61e4cf1d203d6e7a118af89108ac797";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.response);
          let val = JSON.parse(this.response);
          
          document.getElementById('city').append(`${val.name}`);
          document.getElementById('weather').append(`${val.weather[0].main}`);
          document.getElementById('lat').append(`${val.coord.lat}`);
          document.getElementById('lon').append(`${val.coord.lon}`);
          document.getElementById('wind').append(`${val.wind.speed}`);
          document.getElementById('feels-like').append(`${val.main.feels_like}`);
        }
      };
      xhttp.open("GET", queryUrl, true);
      xhttp.send();
}

function getBrowserMeteo(position: GeolocationPosition):void {
    debugger;
    let lat: number = position.coords.latitude;
    let lon: number = position.coords.longitude;
    let queryUrl= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=a61e4cf1d203d6e7a118af89108ac797";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.response);
          let val = JSON.parse(this.response);
          document.getElementById('city').append(`${val.name}`);
          document.getElementById('weather').append(`${val.weather[0].main}`);
          document.getElementById('lat').append(`${val.coord.lat}`);
          document.getElementById('lon').append(`${val.coord.lon}`);
          document.getElementById('wind').append(`${val.wind.speed}`);
          document.getElementById('feels-like').append(`${val.main.feels_like}`);
        }
      };
      xhttp.open("GET", queryUrl, true);
      xhttp.send();
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getBrowserMeteo)
    }
  }

  
  
  