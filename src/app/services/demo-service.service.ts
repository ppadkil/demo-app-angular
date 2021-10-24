import { Injectable } from '@angular/core';
import { AttendeesService } from './attendees.service';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  public count = 0;

  // Example of using service instance through Dependency injection pattern
  constructor(private attendeesService: AttendeesService) { 
    this.count = this.attendeesService.getCount();
  }
}
