import { Component, OnInit } from '@angular/core';
import { CompanyInterface } from '../interfaces/company-interface';
import { AttendeesService } from '../services/attendees.service';
import { CompaniesService } from '../services/companies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public count = 0;
  companies: CompanyInterface[] = [];


  constructor(private attendeesService: AttendeesService, private companyService: CompaniesService) { 
    // second way of getting centralized state data after Input and Output decorators through service
    this.count = this.attendeesService.getCount();
  }


  ngOnInit(): void {
    // third way of getting centralized state data using Observables
    const companiesObservable = this.companyService.getCompanies();
    companiesObservable.subscribe((companiesData: CompanyInterface[]) => {
        this.companies = companiesData;
    });
  }

}
