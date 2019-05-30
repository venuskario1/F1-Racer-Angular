import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  f1racer_driver: string = "https://ergast.com/api/f1/2019/5/driverStandings.json" //This variable is a Typescript

  getRaceCar(){
    return this.http. get(this.f1racer_driver)
}

}