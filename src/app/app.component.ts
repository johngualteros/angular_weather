import { Component, OnInit } from '@angular/core';
import {WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather:any;
  constructor(private weatherService:WeatherService){

  }
  ngOnInit() {

  }
  getWeather(cityName:string, cityCode:string) {
    this.weatherService.getWeather(cityName,cityCode).subscribe(
      res=>this.weather=res,
      err=>console.log(err)
    )

  }
  submitLocation(cityName: HTMLInputElement,countryCode:HTMLInputElement){
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value,countryCode.value);
  
      cityName.value='';
      countryCode.value='';
      cityName.focus();
    }else{
      alert('Please enter city Name and/or country Code');
      cityName.focus();

    }

    return false;
  }
}
