"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.httpInterceptorProviders = exports.AuthInterceptorInterceptor = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptorInterceptor = /** @class */ (function () {
    function AuthInterceptorInterceptor(token) {
        this.token = token;
    }
    AuthInterceptorInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptorInterceptor = __decorate([
        core_1.Injectable()
    ], AuthInterceptorInterceptor);
    return AuthInterceptorInterceptor;
}());
exports.AuthInterceptorInterceptor = AuthInterceptorInterceptor;
exports.httpInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }
];
