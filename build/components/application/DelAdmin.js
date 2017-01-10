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
var DelAdmin = (function () {
    function DelAdmin(dataservice, psd) {
        this.dataservice = dataservice;
        this.psd = psd;
        this.model = { selected_admin_uid: 'defaultUID' };
    }
    DelAdmin.prototype.getData = function (url) {
        var _this = this;
        this.dataservice
            .getData(url)
            .then(function (res) {
            _this.rows = res.json().result.results;
            console.log(_this.rows);
        });
    };
    DelAdmin.prototype.delAdmin = function () {
        var _M = this.model;
        var url = 'https://oyicab.herokuapp.com/api/disable_user';
        var body = "uid=" + _M.selected_admin_uid + "&action=2";
        this.psd.postData(url, body).then(function (res) {
            if (res.status == "OK") {
                alert(res.message);
            }
        });
    };
    DelAdmin.prototype.ngOnInit = function () {
        this.getData('https://oyicab.herokuapp.com/api/get_users?user_type=1');
        //this.dataservice.postData('/api/get_drivers');
    };
    return DelAdmin;
}());
DelAdmin = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'DelAdmin',
        templateUrl: '../../myTemplates/del_admin.html'
    }),
    __metadata("design:paramtypes", [get_data_service_1.GetDataService,
        post_data_service_1.PostDataService])
], DelAdmin);
exports.DelAdmin = DelAdmin;
//# sourceMappingURL=DelAdmin.js.map