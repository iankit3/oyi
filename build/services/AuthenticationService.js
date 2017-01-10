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
//import { Observable } from 'rxjs';
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loggedIn = false;
        this.URL = 'https://oyicab.herokuapp.com/api/login';
        this._token = "";
        this.loggedIn = !!localStorage.getItem('token');
    }
    AuthenticationService.prototype.getToken = function () {
        var __token = "";
        //if(this.loggedIn){
        __token = this._token;
        // } 
        return __token;
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var body = "username=" + user.username + "&password=" + user.password;
        return this.http.post(this.URL, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.status == 'OK') {
                _this._token = res.token;
                localStorage.setItem('token', res.token);
                localStorage.setItem('user_type', res.userType);
                _this.loggedIn = true;
            }
            return res;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=AuthenticationService.js.map