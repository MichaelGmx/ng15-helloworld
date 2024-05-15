import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { GoogleMapsModule } from '@angular/google-maps';

import { GoogleMapRoutingModule } from './google-map-routing.module';

import { GoogleMapComponent } from './google-map.component';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { DirectionComponent } from './direction/direction.component';
import { StreetViewComponent } from './street-view/street-view.component';

import { UxGoogleMapService } from './google-map.service';

@NgModule({
  declarations: [
    GoogleMapComponent,
    GeocoderComponent,
    DirectionComponent,
    StreetViewComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,

    GoogleMapsModule,          // Google Map 官方Module

    GoogleMapRoutingModule
  ],
  providers: [
    UxGoogleMapService
  ]
})
export class GoogleMapModule { }
