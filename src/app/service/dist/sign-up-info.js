"use strict";
exports.__esModule = true;
exports.SignUpInfo = void 0;
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = ['user'];
    }
    return SignUpInfo;
}());
exports.SignUpInfo = SignUpInfo;
