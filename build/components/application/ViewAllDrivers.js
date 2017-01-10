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
var get_data_service_1 = require("../../services/get-data.service");
var post_data_service_1 = require("../../services/post-data.service");
var ViewAllDrivers = (function () {
    function ViewAllDrivers(dataservice, psd) {
        this.dataservice = dataservice;
        this.psd = psd;
        this.selectedCust = {};
        this.showpopup = false;
        this.showLoader = true;
    }
    ViewAllDrivers.prototype.getData = function (url) {
        var _this = this;
        this.dataservice
            .getData(url)
            .then(function (res) {
            _this.rows = res.json().result.results;
            _this.showLoader = false;
        });
    };
    ViewAllDrivers.prototype.delDriver = function (uid) {
        var _this = this;
        var url = 'https://oyicab.herokuapp.com/api/disable_user';
        var body = "uid=" + uid + "&action=2";
        this.psd.postData(url, body).then(function (res) {
            if (res.status == 200) {
                _this.showpopup = false;
                _this.rows.filter(function (e) { return e.uid = uid; });
                alert('Driver Disabled');
            }
        });
    };
    ViewAllDrivers.prototype.ngOnInit = function () {
        this.getData('https://oyicab.herokuapp.com/api/get_users?user_type=2');
        //this.dataservice.postData('/api/get_drivers');
    };
    return ViewAllDrivers;
}());
ViewAllDrivers = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ViewAllDrivers',
        templateUrl: '../../myTemplates/view_all_drivers.html',
        providers: [get_data_service_1.GetDataService]
    }),
    __metadata("design:paramtypes", [get_data_service_1.GetDataService,
        post_data_service_1.PostDataService])
], ViewAllDrivers);
exports.ViewAllDrivers = ViewAllDrivers;
//# sourceMappingURL=ViewAllDrivers.js.map