import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { TrainingAttendeeListComponent } from '../attendees-module/training-attendee-list/training-attendee-list.component';
import { LazyModule } from '../lazy/lazy.module';
import { RoutingComponentComponent } from '../routing-component/routing-component.component';

const routes: Routes = [

    {path: '', component: TrainingAttendeeListComponent},
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},  
    {path: 'routingcomponent', component: RoutingComponentComponent},  
    { 
        path: 'lazy', 
        loadChildren: () => import(`../lazy/lazy.module`).then(
          module => module.LazyModule
        )
      },
    {path: 'lazy', loadChildren: '../lazy/lazy.module#LazyModule'},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
imports: [
RouterModule.forRoot(routes),
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }