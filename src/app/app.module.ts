import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainingAttendeeListComponent } from './attendees-module/training-attendee-list/training-attendee-list.component';
import { ButtonComponentComponent } from './attendees-module/button-component/button-component.component';
import { DropdownComponent } from './attendees-module/dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Add note: How to add angular material component..


@NgModule({
  declarations: [
    AppComponent,
    TrainingAttendeeListComponent,
    ButtonComponentComponent,
    DropdownComponent,
    HomeComponent,
    PagenotfoundComponent,
    RoutingComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
    
  ],
  exports: [
    MatCheckboxModule 
  ],
  providers: [], // any service that you want at root level. Like any ErrorLoggerService for example
  bootstrap: [AppComponent]
})
export class AppModule { }
