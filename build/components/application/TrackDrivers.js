"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TrackDrivers = (function () {
    function TrackDrivers() {
    }
    TrackDrivers.prototype.ngOnInit = function () {
        // var icon = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png",
        //     new google.maps.Size(32, 32), new google.maps.Point(0, 0),
        //     new google.maps.Point(16, 16));
        // var center = null;
        // var map = null;
        // var currentPopup;
        // var bounds = new google.maps.LatLngBounds();
        // function addMarker(lat, lng, info) {
        //     var pt = new google.maps.LatLng(lat, lng);
        //     bounds.extend(pt);
        //     var marker = new google.maps.Marker({
        //         position: pt,
        //         icon: icon,
        //         map: map,
        //     });
        //     var popup = new google.maps.InfoWindow({
        //     });
        //     popup.setContent(info);
        //     popup.open(map, marker);
        //     google.maps.event.addListener(marker, "click", function () {
        //         if (currentPopup != null) {
        //             currentPopup.close();
        //             currentPopup = null;
        //         }
        //         popup.open(map, marker);
        //         currentPopup = popup;
        //     });
        //     google.maps.event.addListener(popup, "closeclick", function () {
        //         map.panTo(center);
        //         currentPopup = null;
        //     });
        // }
        // function initMap() {
        //     map = new google.maps.Map(document.getElementById("map"), {
        //         center: new google.maps.LatLng(0, 0),
        //         zoom: 1,
        //         mapTypeId: google.maps.MapTypeId.ROADMAP,
        //         mapTypeControl: false,
        //         mapTypeControlOptions: {
        //             style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        //         },
        //         navigationControl: true,
        //         navigationControlOptions: {
        //             style: google.maps.NavigationControlStyle.SMALL
        //         }
        //     });
        //     center = bounds.getCenter();
        //     map.fitBounds(bounds);
        //}
        // initMap();
    };
    return TrackDrivers;
}());
TrackDrivers = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'TrackDrivers',
        templateUrl: '../../myTemplates/track_drivers.html'
    }),
    __metadata("design:paramtypes", [])
], TrackDrivers);
exports.TrackDrivers = TrackDrivers;
//# sourceMappingURL=TrackDrivers.js.map