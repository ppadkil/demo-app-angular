import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    AboutComponent,
  ],
})
export class LazyModule { }

