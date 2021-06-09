"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogwithComponent = void 0;
var core_1 = require("@angular/core");
var angularx_social_login_1 = require("angularx-social-login");
var LogwithComponent = /** @class */ (function () {
    function LogwithComponent(activeModal, authService, router) {
        this.activeModal = activeModal;
        this.authService = authService;
        this.router = router;
    }
    LogwithComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (data) {
            _this.userLogged = data;
            _this.isLogged = (_this.userLogged != null);
        });
    };
    LogwithComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login_1.GoogleLoginProvider.PROVIDER_ID).then(function (data) {
            console.log(data);
            _this.isLogged = true;
            _this.router.navigate(['/']);
        });
    };
    LogwithComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login_1.FacebookLoginProvider.PROVIDER_ID).then(function (data) {
            console.log(data);
            _this.router.navigate(['/']);
        });
    };
    LogwithComponent = __decorate([
        core_1.Component({
            selector: 'app-logwith',
            templateUrl: './logwith.component.html',
            styleUrls: ['./logwith.component.css']
        })
    ], LogwithComponent);
    return LogwithComponent;
}());
exports.LogwithComponent = LogwithComponent;
