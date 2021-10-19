import { AstTransformer } from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AttendeesService } from 'src/app/services/attendees.service';

@Component({
  selector: 'app-training-attendee-list',
  templateUrl: './training-attendee-list.component.html',
  styleUrls: ['./training-attendee-list.component.css']
})
export class TrainingAttendeeListComponent implements OnInit, OnDestroy, OnChanges, 
AfterContentInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  // The code in this class drives the component's behavior.
  buttonText = 'Display Names';
  fontColor = 'yellow';
  visible = false;
  
  constructor(private attendeeService: AttendeesService) { 
    console.log("AppComponent: Constructor");
    let show: boolean = true;
    let textValue: string = 'Two way data binding';

    // Typescript notifies you at compile time, whereas,
    // Javascript do not let you know this till the time you run in browser..
    // let str: string;
    // str = 'foo';
    // str = 3;
   
  }


  public displayNames(event: Event){
    this.visible = !this.visible;
  }

  public getCount(){
    let count = this.attendeeService.getCount();
    alert('Count is ' + count);
  }

  ngOnInit(): void {
    // Used for: 
    // To perform complex initializations shortly after construction.
     console.log("AppComponent: OnInit");

  }


  // Angular Lifecycle event of a component

  ngOnChanges() {
     // Used for: 
    // whenever it detects changes to input properties (@Input) of the component
    console.log("AppComponent: OnChanges");
  }

  // ngDoCheck() {
  //   console.log("AppComponent: DoCheck");
  // }

  ngAfterContentInit() {
    // hooks that Angular calls after Angular projects external content into the component
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  // hooks that Angular calls after it creates a component's child views. 
  console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    // Used for 
    // Unsubscribeing from events, timers, service instances. 
    console.log("AppComponent:OnDestroy");
  }

}
