
import { Component, OnInit } from '@angular/core';
import {SeatsService} from "./seats/seats.service";
import {SeatsInterface} from "./seats/seats-interface.component";

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seats: SeatsInterface[] = [];
  columns: {field: (seats: SeatsInterface) => string, header: string}[] = [
    {field: (seats: SeatsInterface) => aircraft_code, header: 'Код самолета'},
    {field: (seats: SeatsInterface) => seat_no, header: 'Номер места'},
  ];
  constructor(private seatsService: SeatsService) { }

  ngOnInit(): void {
    // this.getAircrafts();
  }

  // getAircrafts(): void {
  //   this.aircraftService.getAircrafts()
  //     .subscribe(aircrafts => this.aircrafts = aircrafts);
  // }

  // getTest():void {
  //   return console.log(this.columns, this.aircrafts);
  // }
}

