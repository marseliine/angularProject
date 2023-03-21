// @ts-ignore
// @ts-ignore

import {switchMap} from "rxjs/operators";
import {formatNumber} from "@angular/common";
import {Component, NgModule, OnInit, VERSION} from '@angular/core';
// @ts-ignore
import SeatsInterface from "/../seats/seats-interface.component";
import {BehaviorSubject, Observable} from "rxjs";
// @ts-ignore
import {ModalsService} from "./modals/modals.service";
import {DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormMode} from "./form-mode";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { SeatsService } from "../../seats/seats.service";

@Component({
  selector: 'seats-app',
  templateUrl: './SeatsModalsForm.html',
  providers: [MessageService]
})
export class SeatsModalComponent implements OnInit {
  // private config: any;
  // @ts-ignore
  mode: string = this.config.data.mode;
 seatsModal = new FormGroup({
    aircraft_code: new FormControl(null, [Validators.required, Validators.maxLength(3)]),
    seat_no: new FormControl(null, [Validators.required]),
  })
  // @ts-ignore
  private SeatsService: any;
  // private ref: any;

  constructor(public ref: DynamicDialogRef, private seatsService: SeatsService, public config: DynamicDialogConfig) {
    console.log(config.data)
  }

  ngOnInit() {
    if (this.mode === FormMode.edit) {
      const code = this.config.data.code;
      const nome = this.config.data.nome;
      this.seatsService.getSeat(code, nome)
        .subscribe((seats) => {
          this.seatsModal.setValue({
            aircraft_code: seats.aircraft_code,
            seat_no: seats.seat_no
          });
        });
    }
  }
  async onSubmit() {
    const formData = this.seatsModal.value;
    console.log(formData);

    if (this.mode === FormMode.edit) {
      const code = this.config.data.code;
      this.SeatsService.updateSeats(formData, code).subscribe();
    } else {
      this.SeatsService.addSets(formData).subscribe();
    }
    await this.ref.close();
  }
}
