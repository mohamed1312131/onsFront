"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./ui/home/home.component");
var header_component_1 = require("./ui/header/header.component");
var logwith_component_1 = require("./Auth/logwith/logwith.component");
var login_component_1 = require("./Auth/login/login.component");
var signup_component_1 = require("./Auth/signup/signup.component");
var animations_1 = require("@angular/platform-browser/animations");
var slider_1 = require("@angular/material/slider");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angularx_social_login_1 = require("angularx-social-login");
var angularx_social_login_2 = require("angularx-social-login");
var nav_component_1 = require("./ui/nav/nav.component");
var menu_1 = require("@angular/material/menu");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                logwith_component_1.LogwithComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                home_component_1.HomeComponent,
                nav_component_1.NavComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                slider_1.MatSliderModule,
                ng_bootstrap_1.NgbModule,
                ng_bootstrap_1.NgbPaginationModule,
                ng_bootstrap_1.NgbAlertModule,
                angularx_social_login_1.SocialLoginModule,
                menu_1.MatMenuModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: false,
                        providers: [
                            {
                                id: angularx_social_login_2.GoogleLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_2.GoogleLoginProvider('614001727877-67rr6eoue62h0oujrms51k0060asirsm.apps.googleusercontent.com')
                            },
                            {
                                id: angularx_social_login_2.FacebookLoginProvider.PROVIDER_ID,
                                provider: new angularx_social_login_2.FacebookLoginProvider('275252797340811')
                            }
                        ]
                    }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
