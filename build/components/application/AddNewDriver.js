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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var post_data_service_1 = require("../../services/post-data.service");
var Driver_1 = require("../../models/Driver");
var AddNewDriver = (function () {
    function AddNewDriver(router, http, post) {
        this.router = router;
        this.http = http;
        this.post = post;
        this.model = new Driver_1.Driver(18, 'Dr Dre', 1020, 'M', 'email@aXY.com', 'BMW', 'cab', 3, '123m', 'ka31123', 1213, 'password');
        this.submitted = false;
        this.newdriveradded = false;
    }
    AddNewDriver.prototype.onSubmit = function () {
        this.submitted = true;
    };
    AddNewDriver.prototype.newDriver = function () {
        var _this = this;
        var _M = this.model;
        var url = 'https://oyicab.herokuapp.com/api/register_new_driver';
        var body = "allowed_passenger=" + _M.allowed_passenger + "&email=" + _M.email + "&gender=" + _M.gender + "&name=" + _M.name + "&phone=" + _M.phone + "&vehicle_info=" + _M.vehicle_info + "&vehicle_license=" + _M.vehicle_license + "&vehicle_registration=" + _M.vehicle_registration + "&vehicle_type=" + _M.vehicle_type + "&password=" + _M.password;
        this.post.postData(url, body).then(function (res) {
            console.log(res);
            if (res.statusText == "OK") {
                _this.newdriveradded = true;
                window.alert("new driver named " + _M.name + " added");
            }
        });
    };
    AddNewDriver.prototype.ngOnInit = function () { };
    return AddNewDriver;
}());
AddNewDriver = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'AddNewDriver',
        templateUrl: '../../myTemplates/add_new_driver.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        post_data_service_1.PostDataService])
], AddNewDriver);
exports.AddNewDriver = AddNewDriver;
//# sourceMappingURL=AddNewDriver.js.map