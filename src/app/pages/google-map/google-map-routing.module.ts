import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoogleMapComponent } from './google-map.component';
import { DirectionComponent } from './direction/direction.component';
import { GeocoderComponent } from './geocoder/geocoder.component';
import { StreetViewComponent } from './street-view/street-view.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapComponent,
    children: [
      { path: 'geocoder', component: GeocoderComponent },
      { path: 'direction', component: DirectionComponent },
      { path: 'street-view', component: StreetViewComponent },

      { path: '', redirectTo: 'geocoder', pathMatch: 'full' },
      { path: '**', redirectTo: 'geocoder' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule { }
