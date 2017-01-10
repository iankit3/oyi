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
var http_1 = require("@angular/http");
var post_data_service_1 = require("../../services/post-data.service");
var BookNewTaxi = (function () {
    function BookNewTaxi(http, post, ngZone) {
        this.http = http;
        this.post = post;
        this.ngZone = ngZone;
        this.model = { pickLocation: 'BTM', dropLocation: 'HSR', phone: '9999999999', vehicleType: 'shuttle', paymentMode: 'cash' };
        this.pick_sugg = [];
        this.drop_sugg = [];
    }
    BookNewTaxi.prototype.ngOnInit = function () {
    };
    BookNewTaxi.prototype.updateDropLoc = function (ev) {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
            ev.target.value + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then(function (res) {
            res = res.json();
            _this.drop_sugg = res['predictions'];
            _this.model.dropLocation = res['predictions'][0].description;
        });
    };
    BookNewTaxi.prototype.updatePickLoc = function (ev) {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
            ev.target.value + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then(function (res) {
            res = res.json();
            _this.pick_sugg = res['predictions'];
            _this.model.pickLocation = res['predictions'][0].description;
        });
    };
    BookNewTaxi.prototype.onSubmit = function () {
    };
    BookNewTaxi.prototype.newTaxi = function () {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
            this.model.dropLocation
            + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then(function (res) {
            res = res.json();
            res = res['results']['0'];
            _this.dropLatitude = res['geometry']['location']['lat'];
            _this.dropLongitude = res['geometry']['location']['lng'];
            _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
                _this.model.pickLocation
                + '&key=AIzaSyBNzLtV4gH5QqEx4f6WS6j-L0FIBwyJMow').toPromise().then(function (res) {
                res = res.json();
                res = res['results']['0'];
                _this.pickupLatitude = res['geometry']['location']['lat'];
                _this.pickupLongitude = res['geometry']['location']['lng'];
                _this.postOnFinish();
            });
        });
    };
    BookNewTaxi.prototype.postOnFinish = function () {
        var _this = this;
        var url = 'https://oyicab.herokuapp.com/api/book_ride_from_admin';
        var body = 'pickupLatitude=' + this.pickupLatitude +
            '&pickupLongitude=' + this.pickupLongitude +
            '&dropLatitude=' + this.dropLatitude +
            '&dropLongitude=' + this.dropLongitude +
            '&phone=' + this.model.phone +
            '&vehicleType=' + this.model.vehicleType +
            '&paymentMode=' + this.model.paymentMode;
        this.post.postData(url, body).then(function (res) {
            if (res.statusText == "OK") {
                alert('Your ' + _this.model.vehicleType + " is booked");
            }
        });
    };
    return BookNewTaxi;
}());
BookNewTaxi = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'BookNewTaxi',
        templateUrl: '../../myTemplates/book_new_taxi.html'
    }),
    __metadata("design:paramtypes", [http_1.Http,
        post_data_service_1.PostDataService,
        core_1.NgZone])
], BookNewTaxi);
exports.BookNewTaxi = BookNewTaxi;
//# sourceMappingURL=BookNewTaxi.js.map