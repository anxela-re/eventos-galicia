import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  { path: 'event/:id', component: EventComponent },
  {
    path: '**',
    component: EventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
