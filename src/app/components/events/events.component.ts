import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.interface';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe(
      (events) => {
        this.events = events;
      },
      (error) => console.info(error)
    );
  }
}
