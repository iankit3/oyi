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
var post_data_service_1 = require("../../services/post-data.service");
var AddNewAdmin = (function () {
    function AddNewAdmin(post) {
        this.post = post;
        this.model = { username: 'ankit', password: 'test2341' };
    }
    AddNewAdmin.prototype.onSubmit = function () {
    };
    AddNewAdmin.prototype.newAdmin = function () {
        var _M = this.model;
        console.log(_M);
        debugger;
        var url = 'https://oyicab.herokuapp.com/api/signup';
        var body = "name=" + _M.username + "&password=" + _M.password + "&userType=1";
        this.post.postData(url, body).then(function (res) {
            console.log(res);
            if (res.statusText == "OK") {
                //this.newdriveradded = true;
                window.alert("New Admin named " + _M.username + " added");
            }
        });
    };
    AddNewAdmin.prototype.ngOnInit = function () { };
    return AddNewAdmin;
}());
AddNewAdmin = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'AddNewAdmin',
        templateUrl: '../../myTemplates/add_new_admin.html'
    }),
    __metadata("design:paramtypes", [post_data_service_1.PostDataService])
], AddNewAdmin);
exports.AddNewAdmin = AddNewAdmin;
//# sourceMappingURL=AddNewAdmin.js.map