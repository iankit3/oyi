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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./components/root/app.component");
var application_component_1 = require("./components/application/application.component");
var login_component_1 = require("./components/root/login.component");
//import { TrackDrivers } from './TrackDrivers';
var KeysPipe_1 = require("./filters/KeysPipe");
var get_data_service_1 = require("./services/get-data.service");
var post_data_service_1 = require("./services/post-data.service");
var AuthenticationService_1 = require("./services/AuthenticationService");
var limit_access_service_1 = require("./services/limit-access.service");
var application_module_1 = require("./components/application/application.module");
var app_routing_1 = require("./app.routing");
var application_routing_1 = require("./components/application/application.routing");
var logged_in_guard_1 = require("./services/logged-in-guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.AppRoutingModule,
            application_module_1.ApplicationModule,
            application_routing_1.ApplicationRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            application_component_1.ApplicationComponent,
            login_component_1.LoginComponent,
            // AddNewDriver,
            // BookNewTaxi,
            // ViewAllCustomers,
            // ViewAllDrivers,
            // DelDriver,
            // DisplayAllRides,
            // AddNewAdmin ,
            // DelAdmin,
            KeysPipe_1.KeysPipe,
        ],
        providers: [
            logged_in_guard_1.LoggedInGuard, AuthenticationService_1.AuthenticationService, post_data_service_1.PostDataService, get_data_service_1.GetDataService, limit_access_service_1.LimitAccess
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map