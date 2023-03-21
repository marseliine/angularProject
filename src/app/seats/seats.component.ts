import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {SeatsInterface} from "./seats-interface.component";
import {SeatsService} from "./seats.service";
import {Observable} from "rxjs";
import {ModalsService} from "../modals/modals.service";
import {FormMode} from "../modals/SeatsModalsForm/form-mode";


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit{

  columns: {field: string, header: string}[] = [
    {field: 'aircraft_code', header: 'Номер самолета'},
    {field: `seat_no`, header: 'Номер места'},
  ];

  editMode = FormMode.edit;
  addMode = FormMode.add;
   code: any;
  constructor(@Inject(LOCALE_ID) public locale: string,
              private seatsService: SeatsService,
              private modalService: ModalsService) { }



  openEditor(mode: string,code: string| null, nome: string| null) {
    this.modalService.seatsEditor(mode,code, nome)
      //.subscribe( () =>  this._subject$.next(''));
  }

  deleteSeats(code: string, nome: string): void {
    this.seatsService.deleteSeats(code, nome).subscribe();
  }

  seatsRequest$: Observable<SeatsInterface[]> = this.seatsService.getSeats()

  ngOnInit(): void {
    this.code = this.columns[1].header
  }
  private seats: SeatsInterface | undefined;

  getSeats(): void {
    this.seatsService.getSeats().subscribe(result => console.log(result));
  }

  addSeats(aircraft: SeatsInterface): void {
    this.seatsService.addSeats(this.seats).subscribe();
  }

  updateSeats(aircraft: SeatsInterface): void {
    this.seatsService.updateSeats(aircraft).subscribe();
  }
}
