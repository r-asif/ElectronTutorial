import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { CarsComponent } from '../cars/cars.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent,
    CarsComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
