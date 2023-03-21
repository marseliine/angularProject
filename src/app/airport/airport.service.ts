import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AirportInterfaceComponent} from "./airport-interface.component";
import {Observable} from 'rxjs';
import { SERVER} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient, @Inject(SERVER) private enviroment: any) {
  }

  getAirports() {
    return this.http.get(this.enviroment )
  }

  getAirport(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.enviroment}/airports`)
  }

  addNewAirport(airport: any) {
    console.log("------------------>>")
    return this.http.post(this.enviroment , airport);
  }

  deleteAirport(airport_code: any) {
    return this.http.delete(`${this.enviroment }/${airport_code}`);
  }

  updateAirport(airport: AirportInterfaceComponent): Observable<AirportInterfaceComponent> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    const httpOptions = {
      headers: headers,
    };

    console.log(`${this.enviroment } + ${airport.airport_code}`);
    let url = `${this.enviroment}/airports/${airport.airport_code}`
    return this.http.put<AirportInterfaceComponent>(url, airport, httpOptions)
  }
}
