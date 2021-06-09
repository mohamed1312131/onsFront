"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminService = void 0;
var core_1 = require("@angular/core");
var AUTH_API = 'http://localhost:8080/api/test';
var AdminService = /** @class */ (function () {
    function AdminService(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/api/admin/users";
    }
    AdminService.prototype.getUserList = function () {
        return this.httpClient.get("" + this.baseURL);
    };
    AdminService.prototype.getUserById = function (id) {
        return this.httpClient.get(this.baseURL + "/" + id);
    };
    AdminService.prototype.updateUser = function (id, employee) {
        return this.httpClient.put(this.baseURL + "/" + id, employee);
    };
    AdminService.prototype.getAllUser = function () {
        return this.httpClient.get(AUTH_API + "/getAllUser");
    };
    AdminService.prototype.getMessages = function (id) {
        return this.httpClient.get(AUTH_API + "/getMessagesByUserId/" + id);
    };
    AdminService.prototype.send = function (id, message) {
        return this.httpClient.post(AUTH_API + "/sendMessage/" + id, message);
    };
    AdminService.prototype.getUserByUserName = function (name) {
        return this.httpClient.get(AUTH_API + "/getUserByUserName/" + name);
    };
    AdminService.prototype.deleteUser = function (id) {
        return this.httpClient["delete"](AUTH_API + "/deleteUser/" + id);
    };
    AdminService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
