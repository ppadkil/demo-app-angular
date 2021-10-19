import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';


@NgModule({
  declarations: [
    DummyComponentComponent
  ],
  imports: [
    CommonModule,
    DummyRoutingModule
  ]
})
export class DummyModule { }
