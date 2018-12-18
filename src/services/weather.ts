import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WeatherService {
  private apiKey = 'YOUR OPEN WEATHER API';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';
  constructor(private http: HttpClient) {}

  getWeather() {
    let city;
    if(localStorage.city !== undefined) {
       city = localStorage.city;
    } else {
      city = "Sylhet";
    }
    let url = `${this.baseUrl}weather?appId=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }

}
