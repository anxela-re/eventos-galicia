import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Event } from '../models/event.interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiKey: string;
  constructor(private http: HttpClient) {
    this.apiKey = '9GFKKUObdXX8vmh0vYNJL7beY3Ae9GOA';
  }

  getAllEvents(): Observable<Event[]> {
    return this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${this.apiKey}&locale=*&includeTBA=yes&includeTBD=yes&city=santiago%20de%20compostela`
      )
      .pipe(
        catchError(this.handleError),
        map((res: any) => {
          return res._embedded.events.map((item: Event) => {
            return item;
          });
        })
      );
  }

  getEventById(id: string): Observable<Event> {
    return this.http
      .get<Event>(
        `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${this.apiKey}&locale=*`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
