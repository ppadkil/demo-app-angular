import { Injectable } from '@angular/core';
// We can use HttpClient module's get, post, put method when giving actual api calls and dealing with json
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // used root so that the service is available globally 
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
