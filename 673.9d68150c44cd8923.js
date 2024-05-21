"use strict";(self.webpackChunkng15_helloworld=self.webpackChunkng15_helloworld||[]).push([[673],{673:(Te,E,o)=>{o.r(E),o.d(E,{GoogleMapModule:()=>Pe});var N=o(1508),c=o(4006),P=o(529),t=o(4650),w=o(6895),g=o(1135),k=o(9751),K=(o(7579),o(9841),o(3900)),_=(o(5698),o(4004));o(2722);const T=["*"];class u{_clearListeners(){for(const r of this._listeners)r.remove();this._listeners=[]}constructor(r){this._ngZone=r,this._pending=[],this._listeners=[],this._targetStream=new g.X(void 0)}getLazyEmitter(r){return this._targetStream.pipe((0,K.w)(e=>{const i=new k.y(a=>{if(!e)return void this._pending.push({observable:i,observer:a});const s=e.addListener(r,l=>{this._ngZone.run(()=>a.next(l))});if(s)return this._listeners.push(s),()=>s.remove();a.complete()});return i}))}setTarget(r){const e=this._targetStream.value;r!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(r),this._pending.forEach(i=>i.observable.subscribe(i.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const b={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},A="500px",Z="500px";let p=(()=>{class n{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||b}constructor(e,i,a){if(this._elementRef=e,this._ngZone=i,this._eventManager=new u(this._ngZone),this.height=A,this.width=Z,this._options=b,this.mapInitialized=new t.vpe,this.authFailure=new t.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,w.NF)(a),this._isBrowser){const s=window;this._existingAuthFailureCallback=s.gm_authFailure,s.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();const i=this.googleMap;i&&(e.options&&i.setOptions(this._combineOptions()),e.center&&this._center&&i.setCenter(this._center),e.zoom&&null!=this._zoom&&i.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&i.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,i){this._assertInitialized(),this.googleMap.fitBounds(e,i)}panBy(e,i){this._assertInitialized(),this.googleMap.panBy(e,i)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,i){this._assertInitialized(),this.googleMap.panToBounds(e,i)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":R(this.height)||A,e.width=null===this.width?"":R(this.width)||Z}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||b.center,zoom:this._zoom??e.zoom??b.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||b.mapTypeId}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[t.TTD],ngContentSelectors:T,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,i){1&e&&(t.F$t(),t._UZ(0,"div",0),t.Hsn(1))},encapsulation:2,changeDetection:0}),n})();const $=/([A-Za-z%]+)$/;function R(n){return null==n?"":$.test(n)?n:`${n}px`}let S=(()=>{class n{set directions(e){this._directions=e}set options(e){this._options=e}constructor(e,i){this._googleMap=e,this._ngZone=i,this._eventManager=new u(this._ngZone),this.directionsChanged=this._eventManager.getLazyEmitter("directions_changed")}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.directionsRenderer=new google.maps.DirectionsRenderer(this._combineOptions())}),this._assertInitialized(),this.directionsRenderer.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.directionsRenderer))}ngOnChanges(e){this.directionsRenderer&&(e.options&&this.directionsRenderer.setOptions(this._combineOptions()),e.directions&&void 0!==this._directions&&this.directionsRenderer.setDirections(this._directions))}ngOnDestroy(){this._eventManager.destroy(),this.directionsRenderer&&this.directionsRenderer.setMap(null)}getDirections(){return this._assertInitialized(),this.directionsRenderer.getDirections()}getPanel(){return this._assertInitialized(),this.directionsRenderer.getPanel()}getRouteIndex(){return this._assertInitialized(),this.directionsRenderer.getRouteIndex()}_combineOptions(){const e=this._options||{};return{...e,directions:this._directions||e.directions,map:this._googleMap.googleMap}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p),t.Y36(t.R0b))},n.\u0275dir=t.lG2({type:n,selectors:[["map-directions-renderer"]],inputs:{directions:"directions",options:"options"},outputs:{directionsChanged:"directionsChanged"},exportAs:["mapDirectionsRenderer"],features:[t.TTD]}),n})(),me=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),_e=(()=>{class n{constructor(e){this._ngZone=e}route(e){return new k.y(i=>{this._directionsService||(this._directionsService=new google.maps.DirectionsService),this._directionsService.route(e,(a,s)=>{this._ngZone.run(()=>{i.next({result:a||void 0,status:s}),i.complete()})})})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),fe=(()=>{class n{constructor(e){this._ngZone=e}geocode(e){return new k.y(i=>{this._geocoder||(this._geocoder=new google.maps.Geocoder),this._geocoder.geocode(e,(a,s)=>{this._ngZone.run(()=>{i.next({results:a||[],status:s}),i.complete()})})})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var M=o(4793);let ye=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["da-google-map"]],decls:1,vars:0,template:function(i,a){1&i&&t._UZ(0,"router-outlet")},dependencies:[M.lC],encapsulation:2})}return n})();var O=o(3889),D=o(9589),G=o(7150),v=o(1022),x=o(5471);const Me=["googleMap"];function ve(n,r){if(1&n&&t._UZ(0,"map-directions-renderer",19),2&n){const e=t.oxw();t.Q6J("directions",e.directionsResult)}}const be=function(){return[24,24]};let ze=(()=>{class n{constructor(e,i){this.formBuilder=e,this.directionsService=i,this.mapOptions={center:{lat:22.322,lng:114.173},zoom:12,disableDefaultUI:!0}}ngOnInit(){this.inputForm=this.formBuilder.group({source:["Whampoa Station, Hung Hom, Hong Kong"],destination:["Hong Kong, Mong Kok, \u4e5d\u9f8d\u5f4c\u6566\u9053688\u865f\u65fa\u89d2\u4e2d\u5fc3\u4e00\u671f1302\u5ba4"]})}getDirection(e){this.directionsService.route({origin:e.source,destination:e.destination,travelMode:google.maps.TravelMode.DRIVING}).subscribe(i=>{"OK"===i.status?this.directionsResult=i.result:alert('Directions request failed due to "'+i.status+'"')})}customRenderDirection(e){this.directionsRenderer=new google.maps.DirectionsRenderer({map:this.googleMap.googleMap,suppressMarkers:!0}),this.directionsService.route({origin:e.source,destination:e.destination,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1}).subscribe(a=>{"OK"===a.status?this.directionsRenderer.setDirections(a.result):alert('Directions request failed due to "'+a.status+'"')})}static#e=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.qu),t.Y36(_e))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-direction"]],viewQuery:function(i,a){if(1&i&&t.Gf(Me,5),2&i){let s;t.iGM(s=t.CRH())&&(a.googleMap=s.first)}},decls:39,vars:9,consts:[[1,"da-content-banner"],["routerLink","/"],[1,"da-content-banner-title"],[1,"summary-markdown"],[1,"da-content-wrapper"],[3,"daGutter"],[3,"daSpan","daXs"],[1,"da-content-card"],[1,"map-container"],["width","100%","height","100%",3,"options"],["googleMap",""],[3,"directions",4,"ngIf"],[1,"edit-panel"],[3,"formGroup"],[1,"input-item"],[1,"title"],["formControlName","source","type","text"],["formControlName","destination","type","text"],[3,"disabled","click"],[3,"directions"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"d-breadcrumb")(2,"d-breadcrumb-item")(3,"a",1),t._uU(4,"\u9996\u9875"),t.qZA()(),t.TgZ(5,"d-breadcrumb-item"),t._uU(6,"Google Map"),t.qZA(),t.TgZ(7,"d-breadcrumb-item"),t._uU(8,"Direction \u8def\u7ebf\u89c4\u5212"),t.qZA()(),t.TgZ(9,"div",2),t._uU(10," Direction \u793a\u4f8b "),t.qZA(),t.TgZ(11,"div",3)(12,"markdown"),t._uU(13,"\n      \u5b98\u65b9\u63a8\u8350\u4f7f\u7528 **@angular/google-map**\n    "),t.qZA()()(),t.TgZ(14,"div",4)(15,"da-layout-row",5)(16,"da-col-item",6)(17,"div",7)(18,"div",8)(19,"google-map",9,10),t.YNc(21,ve,1,1,"map-directions-renderer",11),t.qZA()(),t.TgZ(22,"div",12)(23,"form",13)(24,"div",14)(25,"label",15),t._uU(26,"Source"),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",14)(29,"label",15),t._uU(30,"Destination"),t.qZA(),t._UZ(31,"input",17),t.qZA(),t.TgZ(32,"div")(33,"d-button",18),t.NdJ("click",function(){return a.getDirection(a.inputForm.value)}),t._uU(34,"Get Directions"),t.qZA(),t._UZ(35,"br")(36,"br"),t.TgZ(37,"d-button",18),t.NdJ("click",function(){return a.customRenderDirection(a.inputForm.value)}),t._uU(38,"Custom Directions"),t.qZA()()()()()()()()),2&i&&(t.xp6(15),t.Q6J("daGutter",t.DdM(8,be)),t.xp6(1),t.Q6J("daSpan",24)("daXs",24),t.xp6(3),t.Q6J("options",a.mapOptions),t.xp6(2),t.Q6J("ngIf",a.directionsResult),t.xp6(2),t.Q6J("formGroup",a.inputForm),t.xp6(10),t.Q6J("disabled",a.inputForm.invalid),t.xp6(4),t.Q6J("disabled",a.inputForm.invalid))},dependencies:[w.O5,c._Y,c.Fj,c.JJ,c.JL,O.F,D.Y,G.r0,v.NX,v.GQ,x.lF,c.sg,c.u,p,S,M.rH],styles:[".da-content-banner[_ngcontent-%COMP%]{background-color:var(--devui-base-bg, #ffffff);padding:16px 20px;font-size:var(--devui-font-size-lg, 14px)}.da-content-banner-title[_ngcontent-%COMP%]{margin:12px 0 16px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold)}.da-content-wrapper[_ngcontent-%COMP%]{padding:12px}.da-content-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);padding:16px;border-bottom:1px solid var(--devui-dividing-line, #f2f2f3)}.da-content-card[_ngcontent-%COMP%]{overflow:hidden;background-color:var(--devui-base-bg, #ffffff);border-radius:var(--devui-border-radius-card, 6px);box-shadow:var(--devui-shadow-length-base, 0 2px 6px 0) var(--devui-light-shadow, rgba(37, 43, 58, .12))}[_nghost-%COMP%]     .devui-tag-item.epic{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.High{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger-line, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.Low{color:var(--devui-light-text, #ffffff);background-color:var(--devui-warning-line, #fa9841)}[_nghost-%COMP%]     .devui-tag-item.Medium{color:var(--devui-light-text, #ffffff);background-color:var(--devui-form-control-line, #d7d8da)}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item a, [_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item span{font-size:var(--devui-font-size-lg, 14px)!important}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item:last-child span{color:var(--devui-text, #252b3a)}button[_ngcontent-%COMP%]{padding:.5rem 1rem}.summary-markdown[_ngcontent-%COMP%]{background-color:#e6f7ff;padding:1rem;border:1px solid #91d5ff;border-radius:.3rem}.da-content-card[_ngcontent-%COMP%]{min-height:300px;padding:1.5rem;display:flex;flex-direction:row;align-items:flex-start}.map-container[_ngcontent-%COMP%]{width:600px;height:400px}.edit-panel[_ngcontent-%COMP%]{margin-left:12px}.edit-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{margin-bottom:12px}.edit-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-block;min-width:100px;margin-right:12px}.edit-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px}"]})}return n})(),L=(()=>{class n{constructor(e){this.mapGeocoder=e}convertedAddress(e){return this.mapGeocoder.geocode({address:e}).pipe((0,_.U)(i=>"OK"===i.status?i.results:null))}initGoogleMap(){const e=window,i=e.google;return i&&i.maps?Promise.resolve(i.maps):new Promise((a,s)=>{const l=document.createElement("script");l.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6CZ_yKQ5y-Pe4WkijEjGAoMS0H8hz0CU&region=HK&language=zh-HK",l.async=!0,l.defer=!0,document.body.appendChild(l),l.onload=()=>{const h=e.google;h&&h.maps?a(h.maps):s("google maps not available")}})}mapStyleDark(){return[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{weight:.5}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"},{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}static#e=this.\u0275fac=function(i){return new(i||n)(t.LFG(fe))};static#t=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();function Ie(n,r){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.formatted_address," ")}}const Oe=function(){return[24,24]},xe=function(){return[24,24]},Le=[{path:"",component:ye,children:[{path:"geocoder",component:(()=>{class n{constructor(e,i){this.formBuilder=e,this.uxGoogleMapService=i}ngOnInit(){this.geocoderFrom=this.formBuilder.group({orgAddress:[null,c.kI.required]})}ConvertAddress(){if(this.geocoderFrom.invalid)return void alert("\u8bf7\u5148\u8f93\u5165\u5730\u5740");const e=this.geocoderFrom.getRawValue().orgAddress;this.uxGoogleMapService.convertedAddress(e).subscribe(i=>{this.formatted_address=i?i[0].formatted_address:"\u8f6c\u6362\u6709\u8bef"})}static#e=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.qu),t.Y36(L))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-geocoder"]],decls:23,vars:6,consts:[[1,"da-content-banner"],["routerLink","/"],[1,"da-content-banner-title"],[1,"summary-markdown"],[1,"da-content-wrapper"],[3,"daGutter"],[3,"daSpan","daXs"],[1,"da-content-card"],[3,"formGroup"],["formControlName","orgAddress","type","text"],[3,"click"],[4,"ngIf"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"d-breadcrumb")(2,"d-breadcrumb-item")(3,"a",1),t._uU(4,"\u9996\u9875"),t.qZA()(),t.TgZ(5,"d-breadcrumb-item"),t._uU(6,"Google Map"),t.qZA(),t.TgZ(7,"d-breadcrumb-item"),t._uU(8,"Geocoder \u5730\u5740\u8f6c\u4e49"),t.qZA()(),t.TgZ(9,"div",2),t._uU(10," Geocoder \u793a\u4f8b "),t.qZA(),t.TgZ(11,"div",3)(12,"markdown"),t._uU(13,"\n      \u5b98\u65b9\u63a8\u8350\u4f7f\u7528 **@angular/google-map**\n    "),t.qZA()()(),t.TgZ(14,"div",4)(15,"da-layout-row",5)(16,"da-col-item",6)(17,"div",7)(18,"form",8),t._UZ(19,"input",9),t.qZA(),t.TgZ(20,"d-button",10),t.NdJ("click",function(){return a.ConvertAddress()}),t._uU(21,"Convert Address"),t.qZA(),t.YNc(22,Ie,2,1,"div",11),t.qZA()()()()),2&i&&(t.xp6(15),t.Q6J("daGutter",t.DdM(5,Oe)),t.xp6(1),t.Q6J("daSpan",24)("daXs",24),t.xp6(2),t.Q6J("formGroup",a.geocoderFrom),t.xp6(4),t.Q6J("ngIf",a.formatted_address))},dependencies:[w.O5,c._Y,c.Fj,c.JJ,c.JL,O.F,D.Y,G.r0,v.NX,v.GQ,x.lF,c.sg,c.u,M.rH],styles:[".da-content-banner[_ngcontent-%COMP%]{background-color:var(--devui-base-bg, #ffffff);padding:16px 20px;font-size:var(--devui-font-size-lg, 14px)}.da-content-banner-title[_ngcontent-%COMP%]{margin:12px 0 16px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold)}.da-content-wrapper[_ngcontent-%COMP%]{padding:12px}.da-content-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);padding:16px;border-bottom:1px solid var(--devui-dividing-line, #f2f2f3)}.da-content-card[_ngcontent-%COMP%]{overflow:hidden;background-color:var(--devui-base-bg, #ffffff);border-radius:var(--devui-border-radius-card, 6px);box-shadow:var(--devui-shadow-length-base, 0 2px 6px 0) var(--devui-light-shadow, rgba(37, 43, 58, .12))}[_nghost-%COMP%]     .devui-tag-item.epic{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.High{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger-line, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.Low{color:var(--devui-light-text, #ffffff);background-color:var(--devui-warning-line, #fa9841)}[_nghost-%COMP%]     .devui-tag-item.Medium{color:var(--devui-light-text, #ffffff);background-color:var(--devui-form-control-line, #d7d8da)}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item a, [_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item span{font-size:var(--devui-font-size-lg, 14px)!important}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item:last-child span{color:var(--devui-text, #252b3a)}button[_ngcontent-%COMP%]{padding:.5rem 1rem}.summary-markdown[_ngcontent-%COMP%]{background-color:#e6f7ff;padding:1rem;border:1px solid #91d5ff;border-radius:.3rem}.da-content-card[_ngcontent-%COMP%]{min-height:300px;padding:1.5rem}"]})}return n})()},{path:"direction",component:ze},{path:"street-view",component:(()=>{class n{constructor(e){this.uxGoogleMapService=e,this.mapOptions={center:{lat:22.322,lng:114.173},zoom:12,disableDefaultUI:!0,styles:this.uxGoogleMapService.mapStyleDark(),streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.BOTTOM_LEFT}},this.streetViewService=new google.maps.StreetViewService}onMapReady(e){this.mapEl=e,this.panorama=new google.maps.StreetViewPanorama(document.getElementById("pano"),{pov:{heading:270,pitch:0}}),this.mapEl.addListener("click",i=>{this.streetViewService.getPanorama({location:i.latLng,radius:50}).then(a=>{a&&this.showStreetView(a)}).catch(a=>{console.error("Street View data not found for this location.")})})}showStreetView({data:e}){this.panorama.setPano(e.location.pano),this.mapEl.setStreetView(this.panorama)}static#e=this.\u0275fac=function(i){return new(i||n)(t.Y36(L))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-street-view"]],decls:21,vars:5,consts:[[1,"da-content-banner"],["routerLink","/"],[1,"da-content-banner-title"],[1,"summary-markdown"],[1,"da-content-wrapper"],[3,"daGutter"],[3,"daSpan","daXs"],[1,"da-content-card"],[1,"map-container"],["width","100%","height","100%",3,"options","mapInitialized"],["id","pano"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"d-breadcrumb")(2,"d-breadcrumb-item")(3,"a",1),t._uU(4,"\u9996\u9875"),t.qZA()(),t.TgZ(5,"d-breadcrumb-item"),t._uU(6,"Google Map"),t.qZA(),t.TgZ(7,"d-breadcrumb-item"),t._uU(8,"StreetView \u8857\u666f"),t.qZA()(),t.TgZ(9,"div",2),t._uU(10," \u8857\u666fStreetView \u793a\u4f8b "),t.qZA(),t.TgZ(11,"div",3)(12,"markdown"),t._uU(13,"\n      \u5b98\u65b9\u63a8\u8350\u4f7f\u7528 **@angular/google-map**\n    "),t.qZA()()(),t.TgZ(14,"div",4)(15,"da-layout-row",5)(16,"da-col-item",6)(17,"div",7)(18,"div",8)(19,"google-map",9),t.NdJ("mapInitialized",function(l){return a.onMapReady(l)}),t.qZA()(),t._UZ(20,"div",10),t.qZA()()()()),2&i&&(t.xp6(15),t.Q6J("daGutter",t.DdM(4,xe)),t.xp6(1),t.Q6J("daSpan",24)("daXs",24),t.xp6(3),t.Q6J("options",a.mapOptions))},dependencies:[O.F,D.Y,v.NX,v.GQ,x.lF,p,M.rH],styles:[".da-content-banner[_ngcontent-%COMP%]{background-color:var(--devui-base-bg, #ffffff);padding:16px 20px;font-size:var(--devui-font-size-lg, 14px)}.da-content-banner-title[_ngcontent-%COMP%]{margin:12px 0 16px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold)}.da-content-wrapper[_ngcontent-%COMP%]{padding:12px}.da-content-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);padding:16px;border-bottom:1px solid var(--devui-dividing-line, #f2f2f3)}.da-content-card[_ngcontent-%COMP%]{overflow:hidden;background-color:var(--devui-base-bg, #ffffff);border-radius:var(--devui-border-radius-card, 6px);box-shadow:var(--devui-shadow-length-base, 0 2px 6px 0) var(--devui-light-shadow, rgba(37, 43, 58, .12))}[_nghost-%COMP%]     .devui-tag-item.epic{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.High{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger-line, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.Low{color:var(--devui-light-text, #ffffff);background-color:var(--devui-warning-line, #fa9841)}[_nghost-%COMP%]     .devui-tag-item.Medium{color:var(--devui-light-text, #ffffff);background-color:var(--devui-form-control-line, #d7d8da)}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item a, [_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item span{font-size:var(--devui-font-size-lg, 14px)!important}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item:last-child span{color:var(--devui-text, #252b3a)}button[_ngcontent-%COMP%]{padding:.5rem 1rem}.summary-markdown[_ngcontent-%COMP%]{background-color:#e6f7ff;padding:1rem;border:1px solid #91d5ff;border-radius:.3rem}.da-content-card[_ngcontent-%COMP%]{min-height:300px;padding:1.5rem}.map-container[_ngcontent-%COMP%]{width:600px;height:400px}#pano[_ngcontent-%COMP%]{width:480px;height:320px}"]})}return n})()},{path:"",redirectTo:"geocoder",pathMatch:"full"},{path:"**",redirectTo:"geocoder"}]}];let Ee=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[M.Bz.forChild(Le),M.Bz]})}return n})(),Pe=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({providers:[L],imports:[N.m,c.UX,P.JF,P.Ed,me,Ee]})}return n})()}}]);