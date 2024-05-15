import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UxGoogleMapService } from '../google-map.service';

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss']
})
export class GeocoderComponent implements OnInit {
  geocoderFrom: FormGroup;

  formatted_address: string;

  constructor(
    private formBuilder: FormBuilder,
    private uxGoogleMapService: UxGoogleMapService
  ) { }

  ngOnInit(): void {
    this.geocoderFrom = this.formBuilder.group({
      orgAddress: [ null, Validators.required ]
    });

    // this.uxGoogleMapService.initGoogleMap();  // 进入页面前，初始化GoogleMap
  }

  // 转换 地址
  ConvertAddress() {
    if (this.geocoderFrom.invalid) {
      alert('请先输入地址');
      return;
    }

    const orgAddress = this.geocoderFrom.getRawValue().orgAddress;
    this.uxGoogleMapService.convertedAddress(orgAddress).subscribe(res => {
      if (res) {
        this.formatted_address = res[0].formatted_address;
      } else {
        this.formatted_address = '转换有误'
      }
    });
  }

  

}
