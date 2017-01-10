"use strict";
var http_1 = require("@angular/http");
var AUTH = "";
var Head = (function () {
    function Head(auth) {
        AUTH = auth.getToken();
        debugger;
    }
    return Head;
}());
exports.contentHeaders = new http_1.Headers();
//contentHeaders.append('Accept', 'application/json');
exports.contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
exports.contentHeaders.append('Authorization', 'JWT' + AUTH);
//headers:
//Authorization: “JWT ” + token 
//# sourceMappingURL=Header.js.map