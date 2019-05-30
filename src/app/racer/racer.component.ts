import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './racer.component.html',
  styleUrls: ['./racer.component.css']
})
export class RacerComponent implements OnInit {

racers:Object; //tells typescript this var is an object when we view it

  constructor( private data: DataService ) { }

  ngOnInit() {

    this.data.getRaceCar().subscribe(racerData =>{
      this.racers = racerData["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"];
      console.log(racerData["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"])
    })

  }
}
