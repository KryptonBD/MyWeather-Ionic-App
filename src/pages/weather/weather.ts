import {Component} from '@angular/core';
import {WeatherService} from "../../services/weather";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather;

  constructor(public weatherService: WeatherService) {}

  ionViewDidEnter(){
    this.weatherService.getWeather()
      .subscribe(data =>{
        this.weather = data;
      }),
      err => { console.log(err)},
      () => { console.log('done')}
  }

  getTemp(temp) {
    let rd = temp - 273.15;
    return rd.toFixed(1);
  }

  degToCompass(num) {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

}
