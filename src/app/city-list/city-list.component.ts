import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from '../city.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.sass']
})
export class CityListComponent implements OnInit {

constructor(private cityService: CityService) {

 }

 cities: City[] = [
    {
      id: 292223,
     name:  'Dubai'
    },
    {
      id: 1850147,
     name:  'Tokyo'
    },
    {
      id: 2147714,
     name:  'Sydney'
    },
    {
      id: 2643743,
     name:  'Londres'
    },
    {
      id: 2950158,
     name:  'Berlín'
    },
    {
      id: 2968815,
     name:  'Paris'
    },
    {
      id: 3435910,
     name:  'Buenos Aires'
    },
    {
      id: 3451190,
     name:  'Rio de Janeiro'
    },
    {
      id: 3601783,
     name:  'San Pedro Sula'
    },
    {
      id: 5128638,
     name:  'Nueva York'
    },
    {
      id: 5601538,
     name:  'Moscú'
    }
 ];

  @Output () getData = new EventEmitter();

  ngOnInit() {
  }

  changeCity(city) {
  this.cityService.getWeather(city.id).subscribe(
    res => this.getData.emit(res) ,
    err => console.log(err)
  );

 }

}
