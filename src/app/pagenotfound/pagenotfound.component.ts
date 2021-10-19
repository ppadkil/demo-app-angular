import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendeesService } from '../services/attendees.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  public count = 0;
  

  constructor(private attendeesService: AttendeesService, private router: Router) { 
    this.count = this.attendeesService.getCount();
  }

  ngOnInit(): void {
  }
  public redirectToHome() {
    this.router.navigate(['home']);
  }

}
