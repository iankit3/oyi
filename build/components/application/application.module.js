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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var application_routing_1 = require("./application.routing");
var AddNewDriver_1 = require("./AddNewDriver");
var ViewAllCustomers_1 = require("./ViewAllCustomers");
var ViewAllDrivers_1 = require("./ViewAllDrivers");
var DelDriver_1 = require("./DelDriver");
//import { TrackDrivers } from './TrackDrivers';
var DisplayAllRides_1 = require("./DisplayAllRides");
var AddNewAdmin_1 = require("./AddNewAdmin");
var DelAdmin_1 = require("./DelAdmin");
var BookNewTaxi_1 = require("./BookNewTaxi");
var popup_1 = require("../../resuable_components/popup");
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    return ApplicationModule;
}());
ApplicationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            application_routing_1.ApplicationRoutingModule,
        ],
        declarations: [
            AddNewDriver_1.AddNewDriver, ViewAllCustomers_1.ViewAllCustomers, ViewAllDrivers_1.ViewAllDrivers, DelDriver_1.DelDriver, DisplayAllRides_1.DisplayAllRides,
            AddNewAdmin_1.AddNewAdmin, DelAdmin_1.DelAdmin, BookNewTaxi_1.BookNewTaxi,
            popup_1.Popup
        ]
    }),
    __metadata("design:paramtypes", [])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=application.module.js.map