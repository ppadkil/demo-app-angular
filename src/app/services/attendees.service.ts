import { Injectable } from '@angular/core';
// Will use this with service call example
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  constructor() { }
  getCount() {
    // Your logic for a service call using HTTPClient get
    return 50;
  }

  // constructor(private httpClient: HttpClient) { }

	// public get(){  
	// 	return this.httpClient.get(this.SERVER_URL);  
	// }  
}
