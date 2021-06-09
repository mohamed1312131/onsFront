"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.form = {
            username: null,
            email: null,
            password: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form, username = _a.username, email = _a.email, password = _a.password;
        this.authService.register(username, email, password).subscribe(function (data) {
            console.log(data);
            _this.isSuccessful = true;
            _this.isSignUpFailed = false;
            _this.route.navigate(['login']);
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isSignUpFailed = true;
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
