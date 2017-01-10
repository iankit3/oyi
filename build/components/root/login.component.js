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
var AuthenticationService_1 = require("../../services/AuthenticationService");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        //constructor(private authenticationService: AuthenticationService, private router: Router) { }
        this.isLoggedIn = false;
        this.model = { username: "", password: "" };
        this.isLoggedIn = authenticationService.isLoggedIn();
    }
    LoginComponent.prototype.onSubmit = function (event) {
        debugger;
        event.preventDefault();
    };
    LoginComponent.prototype.newLogin = function () {
        var _this = this;
        var user = this.model;
        this.authenticationService.login(user).toPromise().then(function (res) {
            debugger;
            if (res.status == 'OK') {
                _this.router.navigate(['application']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        //templateUrl:'template/signin.html' ,
        //templateUrl:'/template/signin.html'
        template: "\n        <div class=\"col-md-4 col-md-offset-3\" style=\"padding:1em\">\n      <form (ngSubmit)=\"onSubmit()\" #loginform=\"ngForm\">\n             <div class=\"input-group mb15\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" class=\"form-control\" placeholder=\"Username\">\n             </div>\n             <br>\n              <div class=\"input-group mb15\">\n                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" placeholder=\"Password\">\n             </div>\n               <br>         \n              <div class=\"clearfix\">\n                 <div class=\"pull-left\">\n                     <div class=\"ckbox ckbox-primary mt10\">\n                         <input type=\"checkbox\" id=\"rememberMe\" value=\"1\">\n                         <label for=\"rememberMe\">Remember Me</label>\n                     </div>\n                 </div>\n\n                 <div class=\"pull-right\">\n                       <button (click)=\"newLogin(); false\" type=\"submit\" class=\"btn btn-success\">Sign In <i class=\"fa fa-angle-right ml5\"></i></button>\n                  </div>\n             </div>                      \n        </form>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [AuthenticationService_1.AuthenticationService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map