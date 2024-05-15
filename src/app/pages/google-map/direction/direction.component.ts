import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GoogleMap, MapDirectionsService } from '@angular/google-maps';

import { UxGoogleMapService } from '../google-map.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {
  @ViewChild('googleMap') googleMap: GoogleMap;

  // Map Options
  mapOptions: google.maps.MapOptions = {
    center: { lat: 22.322, lng: 114.173 },  // 香港地圖 中心點
    zoom: 12,
    disableDefaultUI: true
  };

  inputForm: FormGroup;

  directionsResult: google.maps.DirectionsResult;
  directionsRenderer: google.maps.DirectionsRenderer;

  constructor(
    private formBuilder: FormBuilder,
    private directionsService: MapDirectionsService
  ) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      // source: [''],
      // destination: ['']
      source: ['Whampoa Station, Hung Hom, Hong Kong'],
      destination: ['Hong Kong, Mong Kok, 九龍彌敦道688號旺角中心一期1302室']
    });
  }

  // Simple Direction Render
  getDirection(formValues) {
    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
      // waypoints: [],   // 途经点
      travelMode: google.maps.TravelMode.DRIVING
    }).subscribe(response => {
      if (response.status === 'OK') {
        this.directionsResult = response.result;
      } else {
        alert('Directions request failed due to "' + response.status + '"');
      }
    });
  }

  // 自定義 Direction Render
  customRenderDirection(formValues) {
    const options: google.maps.DirectionsRendererOptions = {
      map: this.googleMap.googleMap,
      suppressMarkers: true  // 不顯示Direction的默認Marker
    }
    this.directionsRenderer = new google.maps.DirectionsRenderer(options);

    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
      // waypoints: [],   // 途经点
      travelMode: google.maps.TravelMode.DRIVING,
      optimizeWaypoints: false
    }).subscribe(response => {
      if (response.status === 'OK') {
        this.directionsRenderer.setDirections(response.result);  // 
      } else {
        alert('Directions request failed due to "' + response.status + '"');
      }
    });
  }
}
