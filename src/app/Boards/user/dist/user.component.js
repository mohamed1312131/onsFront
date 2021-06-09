"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var model_component_1 = require("../model/model.component");
var UserComponent = /** @class */ (function () {
    function UserComponent(modalService, userService, router, tokenStorage) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.name = this.tokenStorage.getUsername();
        this.userService.getAllUser().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        });
    };
    UserComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(model_component_1.ModelComponent);
        modalRef.componentInstance.name = id;
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            _this.ngOnInit();
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
