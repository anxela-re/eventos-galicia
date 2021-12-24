import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.interface';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  event!: Event;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    const identifier = this.route.snapshot.paramMap.get('id');
    if (identifier) {
      this.eventsService.getEventById(identifier).subscribe(
        (event) => {
          if (!event) {
            this.router.navigateByUrl('/');
          }
          this.event = event;
        },
        (error) => this.router.navigateByUrl('/')
      );
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
