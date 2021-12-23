import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  getAllEvents(): Observable<Event[]> {
    this.http
      .get<string>('https://www.cultura.gal/v1/axenda/')
      .subscribe((res) => console.info(res));
    return this.http.get<Event[]>(
      'https://www.cultura.gal/v1/axenda/eventos.json?idioma=gl&concello=270'
    );
  }
}
