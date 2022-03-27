import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyInterface } from '../interfaces/company-interface';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  companies: CompanyInterface[] = [{
   // id: 1,
    name: 'Tietoevry',
    address: 'Pune'
    },
    {
      name: 'Paypal',
      address:'Banglore'
    },
    {
      name: 'Microsoft',
      address:'Hyderabad'
    }];

  constructor() {}
  public getCompanies(): any {
    // returning Observables
    let companiesObservable = new Observable(observer => {
        setTimeout(() => {
            observer.next(this.companies.filter((company) => company.name !== 'Paypal'));
            // let filterResult = this.companies.filter((company) => company.name !== 'Paypal');
        }, 1000);
    });

    // companiesObservable = this.companiesObservable.filter((msg) => msg.serverId !== serverId);

    return companiesObservable;
}
}
