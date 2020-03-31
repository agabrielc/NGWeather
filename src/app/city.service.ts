import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CityService implements OnInit{
  URI: string;

  constructor(private http: HttpClient) {
    this.URI = 'http://api.openweathermap.org/data/2.5/weather?APPID=2ebb8d634e6ad8b6841eb487bcd37103&id=';
  }

  getWeather(cityId){
    return this.http.get(this.URI + cityId);
  }
  ngOnInit(): void {
  }
}

