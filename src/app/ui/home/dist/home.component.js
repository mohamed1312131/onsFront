"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(tokenStorage, userService) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.isLogged = false;
        this.message = {};
        this.user = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getUsername() != null) {
            this.isLogged = true;
            console.log(this.isLogged);
        }
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUserByUserName(this.tokenStorage.getUsername()).subscribe(function (data) {
            _this.user = data;
            _this.userService.send(_this.user.id, _this.message).subscribe(function (d) {
                console.log(d);
            });
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
