import { Component } from '@angular/core';

import { UxGoogleMapService } from '../google-map.service';

@Component({
  selector: 'app-street-view',
  templateUrl: './street-view.component.html',
  styleUrls: ['./street-view.component.scss']
})
export class StreetViewComponent {

  mapEl?: google.maps.Map;

  // Map Options
  mapOptions: google.maps.MapOptions = {
    center: { lat: 22.322, lng: 114.173 },           // 香港地圖 中心點
    zoom: 12,                                        // 默認 縮放倍數

    disableDefaultUI: true,                          // 禁用默認UI(使用自定義UI)
    styles: this.uxGoogleMapService.mapStyleDark(),  // 自定義UI

    // 自定義 街景Control 選項
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT,
    },
  };


  streetViewService = new google.maps.StreetViewService();
  panorama: google.maps.StreetViewPanorama;

  constructor(
    private uxGoogleMapService: UxGoogleMapService,
  ) { }

  // 地圖初始化完成
  onMapReady(map: google.maps.Map): void {
    this.mapEl = map;
    this.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        pov: { heading: 270, pitch: 0 },
      }
    );

    // 監聽 Map 點擊事件
    this.mapEl.addListener('click', (event) => {
      this.streetViewService.getPanorama({ location: event.latLng, radius: 50 })
        .then((value: google.maps.StreetViewResponse) => {
          if (value) {
            this.showStreetView(value);
          }
        }).catch(e => {
          console.error("Street View data not found for this location.");
        })
    });
  }

  private showStreetView({ data }) {
    const location = data.location;

    this.panorama.setPano(location.pano);
    this.mapEl.setStreetView(this.panorama);
  }

}
