
import {SERVER} from "../app.module";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {SeatsInterface} from "./seats-interface.component";
import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  private seatsUrl = '/seats';

  constructor(private http: HttpClient,
              @Inject(SERVER) private environment: any) {
  }
  getSeat(code: string, nome: string): Observable<any> {
    const url = `${this.environment}${this.seatsUrl}/${code}/${nome}`;
    return this.http.get<any>(url);
  }
  getSeats(): Observable<SeatsInterface[]> {
    const url = `${this.environment}${this.seatsUrl}`;
    return this.http.get<SeatsInterface[]>(url)
      .pipe(
        catchError(this.handleError<SeatsInterface[]>([]))
      );
  }

  addSeats(body: SeatsInterface | undefined): Observable<SeatsInterface> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    };
    const url = `${this.environment}${this.seatsUrl}`;
    return this.http.post<SeatsInterface>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError<SeatsInterface>())
      );
  }

  updateSeats(body: SeatsInterface): Observable<SeatsInterface> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    };
    const url = `${this.environment}${this.seatsUrl}/${body.aircraft_code}/${body.seat_no}`;
    return this.http.put<SeatsInterface>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError<SeatsInterface>())
      );
  }

  deleteSeats(code: string, nome: string): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = `${this.environment}${this.seatsUrl}/${code}/${nome}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError<SeatsInterface[]>([]))
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
