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
var application_component_1 = require("./application.component");
var AddNewDriver_1 = require("./AddNewDriver");
var ViewAllCustomers_1 = require("./ViewAllCustomers");
var ViewAllDrivers_1 = require("./ViewAllDrivers");
var DelDriver_1 = require("./DelDriver");
//import { TrackDrivers } from './TrackDrivers';
var DisplayAllRides_1 = require("./DisplayAllRides");
var AddNewAdmin_1 = require("./AddNewAdmin");
var DelAdmin_1 = require("./DelAdmin");
var BookNewTaxi_1 = require("./BookNewTaxi");
var logged_in_guard_1 = require("../../services/logged-in-guard");
var limit_access_service_1 = require("../../services/limit-access.service");
var route = [
    {
        path: '',
        component: application_component_1.ApplicationComponent,
        children: [
            {
                path: 'adddriver',
                component: AddNewDriver_1.AddNewDriver, canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: 'booknewtaxi',
                component: BookNewTaxi_1.BookNewTaxi, canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: 'viewallcustomers',
                component: ViewAllCustomers_1.ViewAllCustomers, canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: 'viewalldrivers',
                component: ViewAllDrivers_1.ViewAllDrivers, canActivate: [logged_in_guard_1.LoggedInGuard]
            },
            {
                path: 'deldriver',
                component: DelDriver_1.DelDriver, canActivate: [logged_in_guard_1.LoggedInGuard, limit_access_service_1.LimitAccess]
            },
            {
                path: 'displayallrides',
                component: DisplayAllRides_1.DisplayAllRides
            },
            {
                path: 'addnewadmin',
                component: AddNewAdmin_1.AddNewAdmin, canActivate: [logged_in_guard_1.LoggedInGuard, limit_access_service_1.LimitAccess]
            },
            {
                path: 'deladmin',
                component: DelAdmin_1.DelAdmin, canActivate: [logged_in_guard_1.LoggedInGuard, limit_access_service_1.LimitAccess]
            },
            {
                path: '',
                component: BookNewTaxi_1.BookNewTaxi, canActivate: [logged_in_guard_1.LoggedInGuard]
            },
        ]
    },
    {
        path: 'application',
        component: application_component_1.ApplicationComponent,
    }
];
var ApplicationRoutingModule = (function () {
    function ApplicationRoutingModule() {
    }
    return ApplicationRoutingModule;
}());
ApplicationRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(route)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], ApplicationRoutingModule);
exports.ApplicationRoutingModule = ApplicationRoutingModule;
//export const home_routing: ModuleWithProviders = RouterModule.forChild(route); 
//# sourceMappingURL=application.routing.js.map