import {Component, Input, OnInit} from "@angular/core";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {AirportService} from "../../airport/airport.service";
import {FormControl, FormGroup} from "@angular/forms";
// import {AirportInterfaceComponent, IHash} from "../../airport/airport";

@Component({
  selector: '#my',
  templateUrl: './airport-edit-add.modal.component.html',
})
export class AirportEditAddComponent {
  fullNameControl!: FormGroup; // fullNameControl должно быть отлично от null & undefined
  constructor(
    private airportService: AirportService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    console.log(config)
    let isAirportSet = this.config.data["airport"] !== undefined;

    this.fullNameControl = new FormGroup({
      "airportCode": new FormControl(isAirportSet ? this.config.data['airport'].airport_code : ''),
      "airportNameRu": new FormControl(isAirportSet ? this.config.data['airport'].airport_name['ru'] : ''),
      "airportNameEn": new FormControl(isAirportSet ? this.config.data['airport'].airport_name['en'] : '')
    })
  }
  update(airport_code: string, ru: string, en: string) {
    this.config.data['airport'].airport_name['ru'] = this.fullNameControl.controls['airportNameRu'].value
    this.config.data['airport'].airport_name['en'] = this.fullNameControl.controls['airportNameEn'].value
    console.log(this.fullNameControl.controls['airportNameRu'])
    this.airportService.updateAirport( this.config.data['airport']).subscribe(()=> {
      // this.config.data = this.airportService
      console.log(this.config.data)
    })
  }
  // close() {
  //   this.ref.close()
  // }
}
