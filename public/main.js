(self["webpackChunkmyvinyl"] = self["webpackChunkmyvinyl"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_centre_authorization_signIn_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/centre/authorization/signIn/sign-in/sign-in.component */ 4063);
/* harmony import */ var _components_centre_authorization_signUp_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/centre/authorization/signUp/sign-up/sign-up.component */ 8080);
/* harmony import */ var _components_centre_showcase_artist_panel_artist_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/centre/showcase/artist-panel/artist-panel.component */ 2335);
/* harmony import */ var _components_centre_showcase_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/centre/showcase/home/home.component */ 7588);
/* harmony import */ var _components_centre_showcase_theme_information_theme_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/centre/showcase/theme-information/theme-information.component */ 348);
/* harmony import */ var _components_centre_showcase_theme_search_theme_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/centre/showcase/theme-search/theme-search.component */ 1743);
/* harmony import */ var _components_centre_showcase_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/centre/showcase/user-panel/user-panel.component */ 763);
/* harmony import */ var _components_centre_user_data_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/centre/user-data/verify-user/verify-user.component */ 6382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);











const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _components_centre_showcase_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent },
    { path: 'Artist', component: _components_centre_showcase_artist_panel_artist_panel_component__WEBPACK_IMPORTED_MODULE_2__.ArtistPanelComponent },
    { path: 'Profile/:username', component: _components_centre_showcase_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__.UserPanelComponent },
    { path: 'Theme', component: _components_centre_showcase_theme_information_theme_information_component__WEBPACK_IMPORTED_MODULE_4__.ThemeInformationComponent },
    { path: 'Search', component: _components_centre_showcase_theme_search_theme_search_component__WEBPACK_IMPORTED_MODULE_5__.ThemeSearchComponent },
    { path: 'Sign-In', component: _components_centre_authorization_signIn_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent },
    { path: 'Sign-Up', component: _components_centre_authorization_signUp_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent },
    { path: 'Verificar/:code', component: _components_centre_user_data_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_7__.VerifyUserComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_centre_centre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/centre/centre.component */ 1958);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);







function AppComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_p_3_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r2.GlobalVariables.notificationStatus = ""; return ctx_r2.GlobalVariables.notificationIsShowing = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r4.GlobalVariables.notificationAnswerFunction(); ctx_r4.GlobalVariables.notificationStatus = ""; return ctx_r4.GlobalVariables.notificationIsShowing = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "S\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r6.GlobalVariables.notificationStatus = ""; return ctx_r6.GlobalVariables.notificationIsShowing = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.mediaPath = '../assets/media';
        this.MyRootSprite = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__.MyRootSprite;
        this.GlobalVariables = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__.GlobalVariables;
        this.rootData = [];
        this.showRoot = false;
    }
    resetForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_0__.NotificationManage.enableScroll();
        src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__.GlobalVariables.blackScreenStatus = "";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 9, consts: [["id", "notification-container"], ["id", "close-alert", "class", "cursor-pointer", 3, "click", 4, "ngIf"], ["id", "answer-alert", "class", "cursor-pointer", 4, "ngIf"], ["id", "black-screen", 3, "click"], ["id", "close-alert", 1, "cursor-pointer", 3, "click"], ["id", "answer-alert", 1, "cursor-pointer"], [1, "white-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_p_3_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_div_click_5_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-centre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.GlobalVariables.notificationStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Alerta: ", ctx.GlobalVariables.notificationMessage, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.GlobalVariables.notificationCloseManual);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.GlobalVariables.notificationAnswer && ctx.GlobalVariables.notificationAnswerFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.GlobalVariables.blackScreenStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_centre_centre_component__WEBPACK_IMPORTED_MODULE_3__.CentreComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent], styles: ["#roots-notification-container[_ngcontent-%COMP%]{\n    position: relative;\n    min-width: 300px;\n    min-height: 200px;\n    background-color: white;\n    z-index: 20;\n}\n\n#root-base[_ngcontent-%COMP%], #root-eye[_ngcontent-%COMP%]{\n\n    position: absolute;\n\theight: 95px;\n\twidth: 95px;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxrQkFBa0I7Q0FDckIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsUUFBUTtDQUNSLGdDQUFnQzs7QUFFakMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdHMtbm90aWZpY2F0aW9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAyMDtcbn1cblxuI3Jvb3QtYmFzZSwgI3Jvb3QtZXlle1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHRoZWlnaHQ6IDk1cHg7XG5cdHdpZHRoOiA5NXB4O1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/pipes/DomSanitized */ 7605);
/* harmony import */ var _services_pipes_DateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/pipes/DateFormat */ 8174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_centre_centre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/centre/centre.component */ 1958);
/* harmony import */ var _components_centre_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/centre/showcase/showcase.component */ 8668);
/* harmony import */ var _components_centre_showcase_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/centre/showcase/home/home.component */ 7588);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _components_centre_showcase_theme_information_theme_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/centre/showcase/theme-information/theme-information.component */ 348);
/* harmony import */ var _components_centre_showcase_theme_search_theme_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/centre/showcase/theme-search/theme-search.component */ 1743);
/* harmony import */ var _components_centre_showcase_artist_panel_artist_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/centre/showcase/artist-panel/artist-panel.component */ 2335);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var _services_token_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/token-interceptor/token-interceptor.service */ 1603);
/* harmony import */ var _components_centre_authorization_signIn_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/centre/authorization/signIn/sign-in/sign-in.component */ 4063);
/* harmony import */ var _components_centre_authorization_signUp_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/centre/authorization/signUp/sign-up/sign-up.component */ 8080);
/* harmony import */ var _components_centre_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/centre/user-data/user-data.component */ 8871);
/* harmony import */ var _components_centre_showcase_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/centre/showcase/user-panel/user-panel.component */ 763);
/* harmony import */ var _components_centre_audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/centre/audio-bar/audio-bar/audio-bar.component */ 5094);
/* harmony import */ var _components_centre_user_data_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/centre/user-data/verify-user/verify-user.component */ 6382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__.TokenInterceptorService,
            multi: true
        },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__.HashLocationStrategy },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__.TooltipModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_25__.QuillModule.forRoot({
                modules: {
                    syntax: false,
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        //['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        //[{ 'script': 'sub'}, { 'script': 'super' }],      
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        //[{ 'direction': 'rtl' }],                         
                        //[{ 'size': ['small', false, 'large', 'huge'] }],
                        //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        //[{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', /*'image', 'video'*/]
                    ]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _components_centre_centre_component__WEBPACK_IMPORTED_MODULE_6__.CentreComponent,
        _components_centre_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__.ShowcaseComponent,
        _components_centre_showcase_home_home_component__WEBPACK_IMPORTED_MODULE_8__.HomeComponent,
        _components_centre_showcase_theme_information_theme_information_component__WEBPACK_IMPORTED_MODULE_9__.ThemeInformationComponent,
        _components_centre_showcase_theme_search_theme_search_component__WEBPACK_IMPORTED_MODULE_10__.ThemeSearchComponent,
        _components_centre_showcase_artist_panel_artist_panel_component__WEBPACK_IMPORTED_MODULE_11__.ArtistPanelComponent,
        _components_centre_authorization_signIn_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__.SignInComponent,
        _components_centre_authorization_signUp_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__.SignUpComponent,
        _components_centre_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_15__.UserDataComponent,
        _components_centre_showcase_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_16__.UserPanelComponent,
        _components_centre_audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_17__.AudioBarComponent,
        _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe,
        _services_pipes_DateFormat__WEBPACK_IMPORTED_MODULE_1__.DateFormat,
        _components_centre_user_data_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_18__.VerifyUserComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, ngx_quill__WEBPACK_IMPORTED_MODULE_25__.QuillModule] }); })();


/***/ }),

/***/ 986:
/*!***********************************!*\
  !*** ./src/app/classes/Artist.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Artist": () => (/* binding */ Artist)
/* harmony export */ });
/* harmony import */ var _Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Themes */ 4084);

class Artist {
    constructor(id_artist, name, surname, description, tags, themeList) {
        this.id_artist = id_artist;
        this.name = name;
        this.surname = surname;
        this.description = description;
        this.tags = tags;
        this.themeList = [];
        if (themeList) {
            themeList.forEach(theme => {
                this.themeList.push(new _Themes__WEBPACK_IMPORTED_MODULE_0__.Themes(theme.id, theme.name, theme.flag, theme.tags, theme.lyrics, theme.artist, theme.comments, theme.likes, theme.dislikes, theme.views));
            });
        }
    }
    setThemeList(themeList) {
        this.themeList = themeList;
    }
    setTheme(theme) {
        this.themeList.push(new _Themes__WEBPACK_IMPORTED_MODULE_0__.Themes(theme.id, theme.name, theme.flag, theme.tags, theme.lyrics, theme.artist, theme.comments, theme.likes, theme.dislikes, theme.views));
    }
    removeTheme(themeId) {
        let themeIndex = this.themeList.map(theme => { return theme.id; }).indexOf(themeId);
        let index = 1;
        if (themeIndex != -1) {
            this.themeList.splice(themeIndex, 1);
        }
        this.themeList.forEach(theme => {
            theme.id = `${this.id_artist}-${index}`;
            index++;
        });
    }
    removeAllThemes() {
        this.themeList = [];
    }
}


/***/ }),

/***/ 2102:
/*!***************************************!*\
  !*** ./src/app/classes/ArtistList.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistList": () => (/* binding */ ArtistList)
/* harmony export */ });
/* harmony import */ var _Artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist */ 986);

class ArtistList {
    constructor() {
        this.list = [];
    }
    setArtist(artist) {
        this.list.push(new _Artist__WEBPACK_IMPORTED_MODULE_0__.Artist(artist.id_artist, artist.name, artist.surname, artist.description, artist.tags, artist.themeList));
    }
    clearArtistList() {
        this.list = [];
    }
}


/***/ }),

/***/ 4643:
/*!**************************************!*\
  !*** ./src/app/classes/DragEvent.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragEvent": () => (/* binding */ DragEvent)
/* harmony export */ });
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);

class DragEvent {
    constructor(elementToDrag, elementsList, sendFunction) {
        DragEvent.elementToDrag = elementToDrag;
        DragEvent.elementsList = elementsList;
        DragEvent.sendFunction = sendFunction;
    }
    static dragEventListener(elementToDrag, elementsList, sendFunction) {
        if (elementToDrag && elementsList && sendFunction) {
            if (!this.instance) {
                this.instance = new DragEvent(elementToDrag, elementsList, sendFunction);
            }
            else {
                this.elementToDrag = elementToDrag;
                this.elementsList = elementsList;
                this.sendFunction = sendFunction;
            }
            DragEvent.createMouseMoveEventListener();
        }
        return this.instance;
    }
    static mouseUpCancelDrag() {
        if (DragEvent.positionGuide && DragEvent.elementToDrag.parentElement) {
            DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.elementToDrag, DragEvent.positionGuide);
            DragEvent.elementToDrag.classList.remove('in-drag');
            DragEvent.elementToDrag.style.position = 'relative';
            DragEvent.elementToDrag.style.zIndex = '1';
            DragEvent.elementToDrag.style.width = 'auto';
            DragEvent.elementToDrag.style.top = '0';
            DragEvent.removePositionGuide();
            DragEvent.dropAnimation();
            DragEvent.reorderList();
        }
        DragEvent.mouseUp = true;
        DragEvent.mouseDown = false;
        DragEvent.positionGuide = undefined;
        window.removeEventListener('mousemove', this.elementDrag);
        window.removeEventListener('mouseup', this.mouseUpCancelDrag);
    }
    static reorderList() {
        let parent = DragEvent.elementToDrag.parentElement;
        let newList = [];
        if (parent) {
            let elements = parent.childNodes;
            let cont = 0;
            for (let index = 0; index < elements.length; index++) {
                let element = elements[index];
                if (element.id) {
                    let idSplitted = element.id.split('-');
                    if (idSplitted[3] && idSplitted[4] && idSplitted[5]) {
                        let listId = idSplitted[3];
                        let themeId = `${idSplitted[4]}-${idSplitted[5]}`;
                        newList.push({ listId, themeId, position: cont });
                        cont++;
                    }
                }
            }
            DragEvent.sendFunction(newList);
        }
    }
    static dropAnimation() {
        DragEvent.elementToDrag.classList.add('drop-fall');
        setTimeout(() => { DragEvent.elementToDrag.classList.remove('drop-fall'); }, 75);
    }
    static createMouseMoveEventListener() {
        if (DragEvent.elementToDrag.parentElement) {
            if (!DragEvent.mouseMoveEvent) {
                window.addEventListener('mousemove', this.elementDrag);
                window.addEventListener('mouseup', this.mouseUpCancelDrag);
            }
            DragEvent.elementWidth = this.elementToDrag.getBoundingClientRect().width;
            DragEvent.elementHeight = this.elementToDrag.getBoundingClientRect().height;
            DragEvent.elementScrollHeight = DragEvent.elementToDrag.parentElement.scrollHeight;
            DragEvent.mouseMoveEvent = true;
            DragEvent.mouseUp = false;
            setTimeout(() => {
                if (!DragEvent.mouseUp) {
                    DragEvent.mouseDown = true;
                }
            }, 500);
        }
    }
    static elementDrag(event) {
        if (!src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues.reproductionState && DragEvent.mouseDown) {
            let parentElement = DragEvent.elementToDrag.parentElement;
            let position = event.clientY - parentElement.getBoundingClientRect().top + parentElement.scrollTop;
            let positionInContainer = DragEvent.getElementPositionPercentage(event, parentElement);
            //var minHeight = elementEvent.offsetHeight / 3.25;
            //var maxHeight = parentContainer.scrollHeight - elementEvent.offsetHeight / 4.25;
            event.stopPropagation();
            event.preventDefault();
            DragEvent.elementToDrag.style.position = 'absolute';
            DragEvent.elementToDrag.style.zIndex = '5';
            DragEvent.elementToDrag.style.width = `${DragEvent.elementWidth}px`;
            DragEvent.elementToDrag.classList.add('in-drag');
            if (positionInContainer > 0 && positionInContainer < 0.1) {
                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
                DragEvent.scrollTimeOut = setTimeout(function () { DragEvent.elementDrag(event); }, 1);
                parentElement.scrollBy(0, -3);
            }
            else if (positionInContainer > 0.9 && positionInContainer < 1) {
                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
                DragEvent.scrollTimeOut = setTimeout(function () { DragEvent.elementDrag(event); }, 1);
                parentElement.scrollBy(0, 2);
            }
            else {
                (DragEvent.scrollTimeOut) ? clearTimeout(DragEvent.scrollTimeOut) : "";
            }
            if (positionInContainer > 0.0 && positionInContainer < 1) {
                if (position < DragEvent.elementScrollHeight - DragEvent.elementHeight * 1.25) {
                    position = position - DragEvent.elementHeight * 0.75;
                    DragEvent.elementToDrag.style.top = `${position}px`;
                }
            }
            var i = 0;
            DragEvent.removePositionGuide();
            DragEvent.positionGuide = document.createElement('div');
            DragEvent.positionGuide.className = 'position-guide';
            let downElement;
            let diference;
            while (i < DragEvent.elementsList.length) {
                let element = DragEvent.elementsList[i];
                if (element.id != DragEvent.elementToDrag.id) {
                    let diferenceBetween = element.getBoundingClientRect().top - DragEvent.elementToDrag.getBoundingClientRect().top;
                    if (diferenceBetween >= 0 && (diference == undefined || diferenceBetween < diference)) {
                        downElement = element;
                        diference = diferenceBetween;
                    }
                }
                i++;
            }
            if (DragEvent.elementToDrag.parentElement) {
                DragEvent.elementToDrag.parentElement.insertBefore(DragEvent.positionGuide, downElement);
            }
        }
    }
    static removePositionGuide() {
        let positionGuideElement = document.getElementsByClassName('position-guide');
        for (let index = 0; index < positionGuideElement.length; index++) {
            positionGuideElement[index].remove();
        }
    }
    static getElementPositionPercentage(event, parent) {
        return (event.clientY - parent.getBoundingClientRect().top) / parent.offsetHeight;
    }
}
DragEvent.mouseUp = true;
DragEvent.mouseDown = false;
DragEvent.mouseMoveEvent = false;
DragEvent.elementWidth = 100;
DragEvent.elementHeight = 50;
DragEvent.elementScrollHeight = 50;


/***/ }),

/***/ 5970:
/*!***********************************!*\
  !*** ./src/app/classes/MyRoot.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyRoot": () => (/* binding */ MyRoot)
/* harmony export */ });
class MyRoot {
    constructor() {
        var _a;
        this.rootTalkTime = 0;
        this.specialEye = "";
        this.rootsMouth = "";
        this.rootsAngryLevel = 0;
        this.mediaPath = '../../assets/media/images/root/';
        this.rootContainerElement = document.getElementById('roots-notification-container');
        this.rootEyeElement = document.getElementById('root-eye');
        this.rootBaseElement = document.getElementById('root-base');
        (_a = this.rootContainerElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => { this.rootsClick(event); });
    }
    static getMyRoot() {
        if (!MyRoot.instance) {
            MyRoot.instance = new MyRoot();
        }
        return MyRoot.instance;
    }
    callRoot(talk = 0) {
        var rotate = Math.floor(Math.random() * 10);
        this.rootsEye = setInterval(() => { this.rootsEyeAnimation(); }, 5000);
        this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
        if (rotate > 5) {
            var openMouth = (rotate >= 7) ? 1 : 0;
            this.rootTalkTime = 0;
            this.rootsRotateAnimation(openMouth);
        }
        else {
            this.rootsTalk = setInterval(() => { this.rootsTalkAnimation(); }, 350);
        }
    }
    rootsBooringAnimation() {
        let rootExist = document.getElementById('roots-notification-container');
        if (rootExist) {
            var action = Math.floor(Math.random() * 13);
            if (action == 0 || action == 1) {
                this.rootsRotateAnimation(action);
            }
            if (action == 2 || action == 3) {
                this.rootTalkTime = 5;
                this.rootsTalk = setInterval(() => { this.rootsTalkAnimation(); }, 350);
            }
            if (action == 4 || action == 5) {
                this.rootsTurnAnimation();
            }
            if (action == 6 || action == 7) {
                this.rootsMidTurnAnimation();
            }
            if (action == 8 || action == 9 || action == 10) {
                this.rootsOpenMouthAnimation();
            }
            if (action == 11 || action == 12) {
                this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
            }
        }
        else {
            clearInterval(this.rootsEye);
            clearInterval(this.rootsTalk);
            clearInterval(this.rootsBooring);
            clearInterval(this.rootsAngry);
        }
    }
    rootsEyeAnimation() {
        if (this.rootEyeElement) {
            this.rootEyeElement.src = `${this.mediaPath}root_closed_eye${this.specialEye}.png`;
            setTimeout(() => {
                this.rootEyeElement.src = `${this.mediaPath}root_open_eye${this.specialEye}.png`;
            }, 450);
        }
    }
    rootsTalkAnimation() {
        if (this.rootBaseElement) {
            this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
        }
        setTimeout(() => {
            this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
        }, 175);
        this.rootTalkTime--;
        if (this.rootTalkTime < 0) {
            clearInterval(this.rootsTalk);
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
        }
    }
    rootsClick(event) {
        let isCalm = this.rootBaseElement.src;
        isCalm = isCalm.split("/").pop();
        isCalm = (isCalm && isCalm.split(".")[0]) ? isCalm.split(".")[0] : '';
        isCalm = isCalm == "root_base";
        if (event && event.target && this.rootTalkTime <= 0 && isCalm) {
            let element = event.target;
            let mouseClick = event;
            clearTimeout(this.rootsBooring);
            var imageElement = (element.tagName == "IMG") ? event.target : (element.firstElementChild && element.firstElementChild.tagName == "IMG") ? element.firstElementChild : (element.firstElementChild && element.firstElementChild.firstChild) ? element.firstElementChild.firstElementChild : undefined;
            var directionValueX = mouseClick.clientX - (element.getBoundingClientRect().left + element.offsetWidth / 2);
            var directionValueY = mouseClick.clientY - (element.getBoundingClientRect().top + element.offsetHeight / 2);
            imageElement = imageElement;
            var direction = (directionValueX < -imageElement.offsetWidth / 5) ? "left" : (directionValueX > imageElement.offsetWidth / 5) ? "right" : "centre";
            var mode = Math.floor(Math.random() * 20) + this.rootsAngryLevel;
            if (Math.abs(directionValueX) < (imageElement.offsetWidth / 2 - 8) && Math.abs(directionValueY) < (imageElement.offsetHeight / 2 - 7)) {
                clearInterval(this.rootsAngry);
                this.rootsAngryLevel = (this.rootsAngryLevel < 20) ? this.rootsAngryLevel + 1 : this.rootsAngryLevel;
                this.rootsAngry = setInterval(() => { (this.rootsAngryLevel < 1) ? clearInterval(this.rootsAngry) : (this.rootsAngryLevel = this.rootsAngryLevel - 1); }, 10000);
                if (this.rootsAngryLevel > 10 && mode > 20) {
                    this.rootsTurnAnimation(this.rootsAngryLevel * 1000);
                }
                else if (mode < 10 || directionValueY < -imageElement.offsetHeight / 6) {
                    setTimeout(() => {
                        this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_III.png`;
                        this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_III.png`;
                        this.specialEye = "_mouth_III";
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                            this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                            this.specialEye = "";
                            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                        }, 125);
                    }, 125);
                }
                else {
                    if (direction == "centre") {
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                            this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I.png`;
                                this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_I.png`;
                                this.specialEye = "_mouth_I";
                                setTimeout(() => {
                                    this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_II.png`;
                                    this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_II.png`;
                                    this.specialEye = "_mouth_II";
                                    setTimeout(() => {
                                        this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I.png`;
                                        this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_I.png`;
                                        this.specialEye = "_mouth_I";
                                        setTimeout(() => {
                                            this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                                            this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                            this.specialEye = "";
                                            setTimeout(() => {
                                                this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                                this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                                this.specialEye = "";
                                                clearTimeout(this.rootsBooring);
                                                this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation; }, 15000);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }
                    else {
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_${direction}_I.png`;
                            this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_${direction}.png`;
                            this.specialEye = "_" + direction;
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_talk_${direction}.png`;
                                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${direction}_talk.png`;
                                this.specialEye = "_" + direction + "_talk";
                                setTimeout(() => {
                                    this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I_${direction}.png`;
                                    this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_I_${direction}.png`;
                                    this.specialEye = "_mouth_I_" + direction;
                                    setTimeout(() => {
                                        this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_II_${direction}.png`;
                                        this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_II_${direction}.png`;
                                        this.specialEye = "_mouth_II_" + direction;
                                        setTimeout(() => {
                                            this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I_${direction}.png`;
                                            this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_mouth_I_${direction}.png`;
                                            this.specialEye = "_mouth_I_" + direction;
                                            setTimeout(() => {
                                                this.rootBaseElement.src = `${this.mediaPath}root_talk_${direction}.png`;
                                                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${direction}_talk.png`;
                                                this.specialEye = "_" + direction + "_talk";
                                                setTimeout(() => {
                                                    this.rootBaseElement.src = `${this.mediaPath}root_${direction}_I.png`;
                                                    this.rootEyeElement.src = `${this.mediaPath}root_closed_eye_${direction}.png`;
                                                    this.specialEye = "_" + direction;
                                                    setTimeout(() => {
                                                        this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                                        this.specialEye = "";
                                                        clearTimeout(this.rootsBooring);
                                                        this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }
                }
            }
        }
    }
    rootsOpenMouthAnimation(bites = 0) {
        if (this.rootTalkTime <= 0) {
            var callBack = (bites < 3) ? Math.floor(Math.random() * 10) : -1;
            var standOpen = (Math.floor(Math.random() * 10) > 5) ? [Math.floor(Math.random() * 375) + 125, 55] : [125, 125];
            setTimeout(() => {
                this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                setTimeout(() => {
                    this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I.png`;
                    this.rootEyeElement.src = `${this.mediaPath}root_open_eye_mouth_I.png`;
                    this.specialEye = "_mouth_I";
                    if (true) {
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_II.png`;
                            this.rootEyeElement.src = `${this.mediaPath}root_open_eye_mouth_II.png`;
                            this.specialEye = "_mouth_I";
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I.png`;
                                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_mouth_I.png`;
                                this.specialEye = "_mouth_I";
                                setTimeout(() => {
                                    this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                                    this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                    this.specialEye = "";
                                    setTimeout(() => {
                                        this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                        clearTimeout(this.rootsBooring);
                                        this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                        if (callBack > 5) {
                                            setTimeout(() => { this.rootsOpenMouthAnimation(bites + 1); }, 125);
                                        }
                                    }, standOpen[1]);
                                }, standOpen[1]);
                            }, standOpen[0]);
                        }, 125);
                    }
                    else {}
                }, 125);
            }, 125);
        }
        else {
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
        }
    }
    rootsMidTurnAnimation(turn = "", levelTurn = "", standTurn = "") {
        if (this.rootTalkTime <= 0) {
            var callBack = (turn == "") ? Math.floor(Math.random() * 10) : -1;
            turn = (turn == "") ? (Math.floor(Math.random() * 10) > 5) ? "left" : "right" : turn;
            levelTurn = (levelTurn == "") ? Math.floor(Math.random() * 10) : levelTurn;
            standTurn = (standTurn == "") ? Math.floor(Math.random() * 3875) + 125 : standTurn;
            setTimeout(() => {
                this.rootBaseElement.src = `${this.mediaPath}root_${turn}_I.png`;
                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turn}.png`;
                this.specialEye = "_" + turn;
                if (levelTurn > 5) {
                    setTimeout(() => {
                        this.rootBaseElement.src = `${this.mediaPath}root_${turn}_II.png`;
                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye_transparent.png`;
                        this.specialEye = "_transparent";
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_${turn}_I.png`;
                            this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turn}.png`;
                            this.specialEye = "_" + turn;
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                this.specialEye = ""; /*rootsRotate = "";*/
                                clearTimeout(this.rootsBooring);
                                this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                if (callBack > 5) {
                                    turn = (turn == "left") ? "right" : "left";
                                    this.rootsMidTurnAnimation(turn, levelTurn, standTurn);
                                }
                            }, 125);
                        }, standTurn);
                    }, 125);
                }
                else {
                    setTimeout(() => {
                        this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                        this.specialEye = ""; /*rootsRotate = "";*/
                        clearTimeout(this.rootsBooring);
                        this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                        if (callBack > 5) {
                            turn = (turn == "left") ? "right" : "left";
                            this.rootsMidTurnAnimation(turn, levelTurn, standTurn);
                        }
                    }, standTurn);
                }
            }, 125);
        }
        else {
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
        }
    }
    rootsRotateAnimation(type = 0) {
        var turn = (Math.floor(Math.random() * 10) > 5) ? ["left", "right"] : ["right", "left"];
        turn = ["right", "left"];
        if (this.rootTalkTime <= 0) {
            this.rootBaseElement.src = `${this.mediaPath}root_${turn[0]}_I.png`;
            this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turn[0]}.png`;
            this.specialEye = "_" + turn[0];
            setTimeout(() => {
                this.rootBaseElement.src = `${this.mediaPath}root_${turn[0]}_II.png`;
                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_transparent.png`;
                this.specialEye = "_transparent";
                setTimeout(() => {
                    this.rootBaseElement.src = `${this.mediaPath}root_${turn[0]}_III.png`;
                    setTimeout(() => {
                        this.rootBaseElement.src = `${this.mediaPath}root_back.png`;
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_${turn[1]}_III.png`;
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_${turn[1]}_II.png`;
                                setTimeout(() => {
                                    this.rootBaseElement.src = `${this.mediaPath}root_${turn[1]}_I.png`;
                                    this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turn[1]}.png`;
                                    this.specialEye = "_" + turn[1];
                                    setTimeout(() => {
                                        this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                        this.specialEye = ""; /*rootsRotate = "";*/
                                        if (type == 1) {
                                            setTimeout(() => {
                                                this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                                                setTimeout(() => {
                                                    this.rootBaseElement.src = `${this.mediaPath}root_open_mouth_I.png`;
                                                    this.rootEyeElement.src = `${this.mediaPath}root_open_eye_mouth_I.png`;
                                                    this.rootsMouth = "_mouth_I";
                                                    setTimeout(() => {
                                                        this.rootBaseElement.src = `${this.mediaPath}root_talk.png`;
                                                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                                        this.rootsMouth = "";
                                                        setTimeout(() => {
                                                            this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                                            clearTimeout(this.rootsBooring);
                                                            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                                        }, 125);
                                                    }, 125);
                                                }, 125);
                                            }, 125);
                                        }
                                        else {
                                            clearTimeout(this.rootsBooring);
                                            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                        }
                                    }, 125);
                                }, 125);
                            }, 125);
                        }, 125);
                    }, 125);
                }, 125);
            }, 125);
        }
        else {
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
        }
    }
    rootsTurnAnimation(standBack = 0) {
        if (this.rootTalkTime <= 0) {
            var turn = (Math.floor(Math.random() * 10) > 5) ? "left" : "right";
            var turnBack = (Math.floor(Math.random() * 10) > 5) ? "right" : "left";
            standBack = (standBack == 0) ? Math.floor(Math.random() * 3875) + 125 : standBack;
            this.rootBaseElement.src = `${this.mediaPath}root_${turn}_I.png`;
            this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turn}.png`;
            this.specialEye = "_" + turn;
            setTimeout(() => {
                this.rootBaseElement.src = `${this.mediaPath}root_${turn}_II.png`;
                this.rootEyeElement.src = `${this.mediaPath}root_open_eye_transparent.png`;
                this.specialEye = "_transparent";
                setTimeout(() => {
                    this.rootBaseElement.src = `${this.mediaPath}root_${turn}_III.png`;
                    setTimeout(() => {
                        this.rootBaseElement.src = `${this.mediaPath}root_back.png`;
                        setTimeout(() => {
                            this.rootBaseElement.src = `${this.mediaPath}root_${turnBack}_III.png`;
                            setTimeout(() => {
                                this.rootBaseElement.src = `${this.mediaPath}root_${turnBack}_II.png`;
                                setTimeout(() => {
                                    this.rootBaseElement.src = `${this.mediaPath}root_${turnBack}_I.png`;
                                    this.rootEyeElement.src = `${this.mediaPath}root_open_eye_${turnBack}.png`;
                                    this.specialEye = "_" + turnBack;
                                    setTimeout(() => {
                                        this.rootBaseElement.src = `${this.mediaPath}root_base.png`;
                                        this.rootEyeElement.src = `${this.mediaPath}root_open_eye.png`;
                                        this.specialEye = ""; /*rootsRotate = "";*/
                                        clearTimeout(this.rootsBooring);
                                        this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation(); }, 15000);
                                    }, 125);
                                }, 125);
                            }, 125);
                        }, standBack);
                    }, 125);
                }, 125);
            }, 125);
        }
        else {
            clearTimeout(this.rootsBooring);
            this.rootsBooring = setTimeout(() => { this.rootsBooringAnimation; }, 15000);
        }
    }
}


/***/ }),

/***/ 9353:
/*!**************************************!*\
  !*** ./src/app/classes/ThemeList.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeList": () => (/* binding */ ThemeList)
/* harmony export */ });
class ThemeList {
    constructor(name, userView, userManage, privateState, list) {
        this.name = name;
        this.userView = (typeof userManage == 'string') ? JSON.parse(userView) : userView;
        this.userManage = (typeof userManage == 'string') ? JSON.parse(userManage) : userManage;
        this.privateState = (typeof privateState == 'string') ? JSON.parse(privateState) : privateState;
        this.list = list;
    }
    static emptyThemeList() {
        return new ThemeList('', false, false, false, []);
    }
}


/***/ }),

/***/ 4084:
/*!***********************************!*\
  !*** ./src/app/classes/Themes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Themes": () => (/* binding */ Themes)
/* harmony export */ });
class Themes {
    constructor(id, name, flag, tags, lyrics, artist, comments, likes, dislikes, views) {
        this.id = id;
        this.name = name;
        this.flag = flag;
        this.tags = tags;
        this.lyrics = lyrics;
        this.comments = comments || [];
        this.likes = likes || 0;
        this.dislikes = dislikes || 0;
        this.views = views || 0;
        this.artist = artist;
    }
    setNewComment(commentId, userName, activeUser, comment, date) {
        this.comments.push({ commentId, userName: userName, activeUser: activeUser, comment: comment, date: date });
    }
    removeComment(commentId) {
        let index = 0;
        this.comments.find(comment => {
            if (comment.commentId == commentId) {
                this.comments.splice(index, 1);
                return true;
            }
            index++;
            return false;
        });
    }
}


/***/ }),

/***/ 1336:
/*!*********************************!*\
  !*** ./src/app/classes/User.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _ThemeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeList */ 9353);

class User {
    constructor(name, admin, date, description, themeLists, email, activeAccount) {
        this.name = name;
        this.admin = admin;
        this.themeLists = [];
        this.description = (description) ? description : "";
        this.email = (email) ? email : undefined;
        this.date = date;
        this.activeAccount = (activeAccount) ? activeAccount : undefined;
        if (themeLists) {
            themeLists.forEach(themeList => {
                this.themeLists.push(new _ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList(themeList.name, themeList.userView, themeList.userManage, themeList.privateState, themeList.list));
            });
        }
        else {
            this.setBasicThemeLists();
        }
    }
    getThemeList(themeListName) {
        return this.themeLists.find(themeList => {
            return (themeList.name == themeListName);
        });
    }
    setThemeListList(themeListName, newThemeList) {
        let posicion = this.themeLists.map(theme => { return theme.name; }).indexOf(themeListName);
        if (posicion != -1) {
            this.themeLists[posicion].list = newThemeList;
        }
    }
    setBasicThemeLists() {
        this.themeLists.push(new _ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList('@likes-list', true, false, true, []));
        this.themeLists.push(new _ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList('@dislikes-list', false, false, true, []));
    }
    setAttribute(attribute, value) {
        switch (attribute) {
            case 'name':
                this.name = value;
                break;
            case 'email':
                this.email = value;
                break;
        }
    }
    setNewThemeList(themeList) {
        this.themeLists.push(new _ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList(themeList.name, themeList.userView, themeList.userManage, themeList.privateState, themeList.list));
    }
    setThemeListPrivacity(themeListName, status) {
        let index = 0;
        this.themeLists.find(themeList => {
            if (themeList.name == themeListName) {
                this.themeLists[index].privateState = status;
                return true;
            }
            return false;
        });
    }
    removeThemeList(themeListName) {
        let index = 0;
        this.themeLists.find(themeList => {
            if (themeList.name == themeListName) {
                this.themeLists.splice(index, 1);
                return true;
            }
            index++;
            return false;
        });
    }
    removeFromThemeList(themeListName, themeId) {
        let indexLevelI = 0;
        let indexLevelII = 0;
        this.themeLists.find(themeList => {
            if (themeList.name == themeListName) {
                themeList.list.find(theme => {
                    if (theme.id == themeId) {
                        this.themeLists[indexLevelI].list.splice(indexLevelII, 1);
                        return true;
                    }
                    if (theme['themeId'] == themeId) {
                        this.themeLists[indexLevelI].list.splice(indexLevelII, 1);
                        return true;
                    }
                    indexLevelII++;
                    return false;
                });
                return true;
            }
            indexLevelI++;
            return false;
        });
    }
    replaceThemeList(themeListName, newList) {
        let position = this.themeLists.map(themeList => { return themeList.name; }).indexOf(themeListName);
        if (position != -1) {
            this.themeLists[position].list = newList;
        }
    }
    isThemeLike(themeId) {
        let likeList = this.themeLists.find(theme => (theme.name == '@likes-list'));
        let dislikeList = this.themeLists.find(theme => (theme.name == '@dislikes-list'));
        let isLike = 0;
        if (likeList) {
            isLike = (likeList.list.find(themeData => (themeData.id == themeId || themeData.themeId == themeId))) ? 1 : 0;
        }
        if (dislikeList && isLike == 0) {
            isLike = (dislikeList.list.find(themeData => (themeData.id == themeId || themeData.themeId == themeId))) ? -1 : 0;
        }
        else if (isLike == 0) {
        }
        return isLike;
    }
    static setUser(name, admin, date, description, themeLists, email, activeAccount) {
        User.activeUser = new User(name, admin, date, description, themeLists, email, activeAccount);
        return User.activeUser;
    }
    static getUser() {
        if (User.activeUser) {
            return User.activeUser;
        }
        else {
            return User.setUser('@Usuario', '0', 0, '', [_ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList.emptyThemeList()]);
        }
    }
}


/***/ }),

/***/ 5094:
/*!******************************************************************************!*\
  !*** ./src/app/components/centre/audio-bar/audio-bar/audio-bar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioBarComponent": () => (/* binding */ AudioBarComponent)
/* harmony export */ });
/* harmony import */ var _utils_audio_bar_AudionufferToWav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/audio-bar/AudionufferToWav */ 4718);
/* harmony import */ var _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/audio-bar/Bar-Utils */ 4553);
/* harmony import */ var _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/audio-bar/variables/Bar-Variables */ 4688);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);











function AudioBarComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_11_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.calculeNextThemePosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_11_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.calculeNextThemePosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.setPlayPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.stopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.playLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("my-vinyl-icons-font font-size-150 button-style button-clear cursor-pointer ", ctx_r0.buttonResponsiveII, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.TooltipValues);
} }
function AudioBarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_12_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.calculeNextThemePosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_12_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.calculeNextThemePosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.setPlayPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.stopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r1.playButtonColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.playLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("my-vinyl-icons-font font-size-150 button-style cursor-pointer ", ctx_r1.buttonResponsiveII, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.TooltipValues);
} }
function AudioBarComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_24_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.showButtonContainer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Aleatorio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_24_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.randomReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "&");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Loop lista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_24_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.loopListReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Loop tema:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_24_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.loopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Inverso: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_24_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.revertAudioImplement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Velocidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AudioBarComponent_ng_container_24_Template_select_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.speed = $event; })("change", function AudioBarComponent_ng_container_24_Template_select_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.updateSpeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "x0.25");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "x0.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "x0.75");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "x1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "x1.25");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "x1.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "x1.75");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "x2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("my-vinyl-icons-font font-size-150 button-style button-clear cursor-pointer ", ctx_r2.buttonContainerState, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r2.buttonContainerState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; left: 100%; color: ", ctx_r2.randomColor, "; transform: translateX(-100%);");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; left: 100%; color: ", ctx_r2.loopListColor, "; transform: translateX(-100%);");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; left: 100%; color: ", ctx_r2.loopColor, "; transform: translateX(-100%);");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; left: 100%; color: ", ctx_r2.reverseColor, "; transform: translateX(-100%);");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.speed);
} }
function AudioBarComponent_ng_container_44_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; margin-left: 5px; height: 30px; vertical-align: bottom; visibility: ", ctx_r24.loadGif, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "", ctx_r24.mediaPath, "/images/load.gif", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function AudioBarComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_44_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.randomReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "&");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_44_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r27.loopListReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_44_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.loopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_44_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r29.revertAudioImplement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AudioBarComponent_ng_container_44_img_10_Template, 1, 4, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r3.randomColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r3.loopListColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r3.loopColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("margin-right: 5px; color: ", ctx_r3.reverseColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.buttonGear);
} }
function AudioBarComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.randomReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_45_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.loopListReproduction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Q");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_45_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.loopAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_ng_container_45_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.revertAudioImplement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r4.randomColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r4.loopListColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r4.loopColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("margin-right: 5px; background-color: ", ctx_r4.reverseColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("position: absolute; margin-left: 5px; height: 30px; vertical-align: bottom; visibility: ", ctx_r4.loadGif, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "", ctx_r4.mediaPath, "/images/load.gif", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function AudioBarComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
class AudioBarComponent {
    constructor(comunicationService, DatabaseConexService) {
        this.comunicationService = comunicationService;
        this.DatabaseConexService = DatabaseConexService;
        this.ajustableWidth = true;
        this.greatBar = 100;
        this.buttonContainerState = '';
        this.buttonResponsiveII = 'button-responsive-II';
        this.buttonResponsiveI = 'button-responsive-I';
        this.buttonGear = true;
        this.TooltipValues = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.TooltipValues;
        /*/////////////
        | THEMES VARS |
        /////////////*/
        this.mediaPath = '../../../../../assets/media';
        this.lineToolBar = true;
        this.isThemeList = false;
        this.themesList = [];
        this.themesListRandom = [];
        this.themesListActive = this.themesList;
        this.isView = false;
        this.lastTime = 0;
        this.secodsPlayed = 0;
        this.position = 0;
        this.randomList = false;
        this.loopList = false;
        this.launchPaused = true;
        this.normalSrc = '';
        this.reverseSrc = '';
        this.playLogo = '!';
        this.gearShow = false;
        this.barAudioSizeProgress = 0;
        this.pointAudioPosition = 0;
        this.speed = 1;
        this.time = '00:00';
        this.overBar = 'none';
        this.timePointer = this.time;
        this.timePointerPosition = 0;
        this.audioStatus = true;
        this.mouseDwnAudio = false;
        this.isReverse = false;
        this.playText = 'Reproducir';
        /*/////////////
        | VOlUME VARS |
        /////////////*/
        this.barVolumeSize = 75;
        this.barVolumeSizeProgress = this.barVolumeSize;
        this.pointVolumePosition = this.barVolumeSize;
        this.mouseDwnVolume = false;
        this.volLogo = 'B';
        //vol = '100%';
        /*////////////
        | COLOR VARS |
        ////////////*/
        this.loadGif = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.load_gif_status.hidden;
        this.playButtonColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_play_color.pause;
        this.barColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.pause;
        this.barVolColorBack = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.background.unmuted;
        this.barVolColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.front.unmuted;
        this.babyMeatballColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.meatball_color.baby.unmuted;
        this.muteColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_mute_color.unmuted;
        this.loopColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_color.normal;
        this.randomColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_random_color.normal;
        this.loopListColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.normal;
        this.reverseColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_reverse_color.normal;
    }
    ngOnInit() {
        if (window.innerWidth <= 1520) {
            this.gearShow = true;
        }
        window.addEventListener("click", (event) => {
            let element = event.target;
            this.checkClickOutGear(element);
        });
        window.onresize = () => {
            let element = document.getElementById('bar-ajustable-width');
            if (element) {
                this.barAudioSize = element.offsetWidth;
            }
            if (window.innerWidth > 1520) {
                this.gearShow = false;
                this.buttonContainerState = '';
            }
            else {
                this.gearShow = true;
            }
            this.setRandomList();
            this.setLoopAudio();
            this.setLoopList();
            this.setReverse();
        };
        setTimeout(() => {
            let element = document.getElementById('bar-ajustable-width');
            if (element) {
                this.barAudioSize = element.offsetWidth;
            }
            else {
                this.barAudioSize = 525;
            }
        }, 100);
        this.setAjustable();
        this.comunicationService.sendReproductorDataObservable.subscribe((data) => {
            if (data && data.type) {
                let type = data.type;
                let value = data.value;
                switch (type) {
                    case 'themes':
                        let themes = value;
                        if (typeof themes.isThemeList == 'boolean' && themes.themes) {
                            this.isThemeList = themes.isThemeList;
                            this.themesList = themes.themes;
                            this.themesListActive = themes.themes;
                            this.prepareTheme(this.themesListActive[this.position]);
                            this.barAudioSizeProgress = 0;
                            this.pointAudioPosition = 0;
                        }
                        break;
                    case 'position':
                        if (typeof value == 'number' && value != -1) {
                            this.calculeNextThemePosition(value, true);
                        }
                        break;
                    case 'play':
                        if (this.audio) {
                            this.setPlayPause('play');
                        }
                        break;
                    case 'stop':
                        if (this.audio) {
                            this.setPlayPause('stop');
                        }
                        break;
                }
            }
        });
        this.comunicationService.sendReproductorViewData({ type: 'ready', value: '' });
    }
    ngOnDestroy() {
        if (this.audio) {
            this.audio.pause();
        }
        this.comunicationService.sendReproductorDataUnsubscribe();
        this.comunicationService.sendReproductorViewDataUnsubscribe();
    }
    checkClickOutGear(element) {
        if (element) {
            if (element.id != 'button-gear-container') {
                let parentElement = element.parentElement;
                if (parentElement) {
                    this.checkClickOutGear(parentElement);
                }
                else if (this.buttonContainerState == 'show') {
                    this.showButtonContainer();
                }
            }
        }
    }
    showButtonContainer() {
        this.buttonContainerState = (this.buttonContainerState == '') ? 'show' : '';
    }
    setAjustable() {
        if (!this.ajustableWidth) {
            this.buttonResponsiveII = '';
            this.buttonResponsiveI = '';
            this.buttonGear = false;
            this.greatBar = 90;
            this.playLogo = (this.buttonGear) ? '!' : 'K';
        }
    }
    /////////////////////////
    //PREPARATION FUNCTIONS//
    /////////////////////////
    prepareTheme(theme) {
        if (theme) {
            this.isReverse = false;
            this.reverseSrc = '';
            this.normalSrc = `${this.mediaPath}/audio/themes/${theme.id}.mp3`;
        }
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio();
        this.audio.src = (this.isReverse) ? this.reverseSrc : this.normalSrc;
        this.audio.classList.add('reproductor-audio');
        this.audio.load();
        this.audio.onloadedmetadata = () => {
            if (this.audio) {
                this.audio.onloadeddata = () => {
                    if (this.audio) {
                        this.audio.onpause = () => { this.setPlay(); };
                        this.audio.onplay = () => { this.setPlay(); };
                        this.audio.onvolumechange = () => { this.progressBarVolume(); };
                        this.audio.ontimeupdate = () => { this.progressBarAudio(); };
                        this.audio.onended = () => { this.calculeNextThemePosition(1); };
                        this.setDefaultThemeValues();
                        this.setDefaultInterfaceValues();
                    }
                };
            }
        };
        this.audio.onerror = (err) => { this.audio = undefined; console.error(`Error: ${err}`); };
    }
    //////////////////////////
    //REPRODUCTION FUNCTIONS//
    //////////////////////////
    setPlayPause(mode) {
        if (!this.audio && this.themesList) {
            this.prepareTheme(this.themesList[this.position]);
        }
        if (this.audio) {
            if (this.audio.paused || mode == 'play') {
                this.audio.play();
                this.comunicationService.sendReproductorViewData({ type: 'play', value: this.themesList[this.position].id });
            }
            else if (!this.audio.paused || mode == 'stop') {
                this.audio.pause();
                this.comunicationService.sendReproductorViewData({ type: 'stop', value: this.themesList[this.position].id });
            }
        }
    }
    setDefaultInterfaceValues() {
        this.progressBarAudio();
        this.setLoopAudio();
        this.selectVelocity();
        this.setLoopList();
        this.setRandomList();
        this.setReverse();
        this.setPlay();
        (this.audio && !this.launchPaused) ? this.audio.play() : '';
    }
    setDefaultThemeValues() {
        let muted = localStorage.getItem('isMuted');
        let loop = localStorage.getItem('isLoop');
        let volume = localStorage.getItem('volVal');
        let velocity = localStorage.getItem('velVal');
        let listLoop = localStorage.getItem('isListLoop');
        let listRandom = localStorage.getItem('isListRandom');
        if (this.audio) {
            this.audio.muted = (muted) ? JSON.parse(muted) : this.audio.muted;
            this.audio.loop = (loop) ? JSON.parse(loop) : this.audio.loop;
            this.audio.volume = (volume) ? JSON.parse(volume) : this.audio.volume;
            this.audio.playbackRate = (velocity) ? JSON.parse(velocity) : this.audio.playbackRate;
            this.loopList = (listLoop) ? JSON.parse(listLoop) : false;
            this.randomList = (listRandom) ? JSON.parse(listRandom) : false;
        }
    }
    loopListReproduction() {
        this.loopList = !this.loopList;
        this.setLoopList();
        localStorage.setItem('isListLoop', JSON.stringify(this.loopList));
    }
    setPlay() {
        if (this.audio) {
            if (this.audio.paused) {
                this.barColor = (this.isReverse) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.reverse_rause : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.pause;
                this.playButtonColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_play_color.pause;
                this.playLogo = (this.buttonGear) ? '!' : 'K';
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_3__.sesionValues.reproductionState = false;
                this.playText = 'Pausar';
            }
            else {
                this.barColor = (this.isReverse) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.reverse_play : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.play;
                this.playButtonColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_play_color.play;
                this.playLogo = (this.buttonGear) ? '"' : 'L';
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_3__.sesionValues.reproductionState = true;
                this.playText = 'Reproducir';
            }
        }
    }
    setReverse() {
        if (this.audio) {
            if (this.isReverse) {
                this.reverseColor = (this.buttonGear) ? (this.gearShow) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_reverse_color.simple : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_reverse_color.gear : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_reverse_color.reverse;
                this.barColor = (this.audio.paused) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.reverse_rause : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.reverse_play;
            }
            else {
                this.reverseColor = (this.buttonGear) ? (this.gearShow) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.gear : '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_reverse_color.normal;
                this.barColor = (this.audio.paused) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.pause : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_progress_color.play;
            }
        }
    }
    setLoopList() {
        if (this.loopList) {
            this.loopListColor = (this.buttonGear) ? (this.gearShow) ? '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.simple : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.loop;
        }
        else {
            this.loopListColor = (this.buttonGear) ? (this.gearShow) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.gear : '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_list_color.normal;
        }
    }
    loopAudio() {
        if (this.audio) {
            this.audio.loop = !this.audio.loop;
            this.setLoopAudio();
            localStorage.setItem('isLoop', JSON.stringify(this.audio.loop));
        }
    }
    setLoopAudio() {
        if (this.audio) {
            if (this.audio.loop) {
                this.loopColor = (this.buttonGear) ? (this.gearShow) ? '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_color.simple : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_color.loop;
            }
            else {
                this.loopColor = (this.buttonGear) ? (this.gearShow) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_color.gear : '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_loop_color.normal;
            }
        }
    }
    randomReproduction() {
        this.randomList = !this.randomList;
        if (this.randomList) {
            this.themesListRandom = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.randomizeList(this.themesList, this.position);
            this.position = 0;
            this.themesListActive = this.themesListRandom;
        }
        else {
            this.position = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.findActualPosition(this.themesListActive, this.position, this.themesList);
            this.themesListActive = this.themesList;
        }
        this.setRandomList();
        localStorage.setItem('isListRandom', JSON.stringify(this.randomList));
    }
    setRandomList() {
        if (this.randomList) {
            this.randomColor = (this.buttonGear) ? (this.gearShow) ? '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_random_color.simple : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_random_color.random;
        }
        else {
            this.randomColor = (this.buttonGear) ? (this.gearShow) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_random_color.gear : '' : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_random_color.normal;
        }
    }
    ///////////////////
    //TOOLS FUNCTIONS//
    ///////////////////
    calculeNextThemePosition(event, isCalculed) {
        let action = -1;
        if (event && !isCalculed) {
            if (typeof event != 'number' && event.target) {
                action = event.target;
                action = parseInt(action.value);
            }
            else if (typeof event == 'number') {
                action = event;
            }
            if (this.loopList) {
                action = (this.position + action < 0) ? this.themesListActive.length - 1 : (this.position + action > this.themesList.length - 1) ? 0 : this.position + action;
                this.launchPaused = false;
            }
            else {
                (this.position + action < 0) ?
                    (action = 0, this.launchPaused = true) :
                    (this.position + action > this.themesListActive.length - 1) ?
                        (action = this.themesListActive.length - 1, this.launchPaused = true) :
                        (action = this.position + action, this.launchPaused = false);
            }
        }
        if (isCalculed) {
            action = event;
        }
        this.position = action;
        this.prepareTheme(this.themesListActive[this.position]);
        this.comunicationService.sendReproductorViewData({ type: 'ended', value: this.themesListActive[this.position].id });
    }
    calculeTimeByPixel(position) {
        if (this.audio) {
            let timeTotal = this.audio.duration;
            return position * timeTotal / this.barAudioSize;
        }
        return 0;
    }
    calculeTimeBySeconds(position) {
        if (this.audio) {
            let timeActual = (position) ? position : this.audio.currentTime;
            let timeTotal = this.audio.duration;
            return timeActual * this.barAudioSize / timeTotal;
        }
        return 0;
    }
    calculateAudioPosition(coorY) {
        if (this.audio) {
            this.audio.currentTime = coorY * this.audio.duration / this.barAudioSize;
        }
    }
    calculateVolumePosition(coorY) {
        if (this.audio) {
            let vol = (coorY / this.barVolumeSize > 1)
                ? 1
                : (coorY / this.barVolumeSize < 0.001)
                    ? 0
                    : coorY / this.barVolumeSize;
            this.audio.volume = vol;
        }
    }
    //////////////////////
    //MULTIBAR FUNCTIONS//
    //////////////////////
    mouseDrag(event) {
        this.showTimePointer(event);
        if (this.mouseDwnAudio == true) {
            this.audioBarDrag(event);
        }
        if (this.mouseDwnVolume == true) {
            this.volumeBarDrag(event);
        }
    }
    toClick(event) {
        let itemId = event.target;
        if (itemId.id == 'audio-bar-padding') {
            (!this.isReverse) ? this.calculateAudioPosition(event.offsetX) : this.calculateAudioPosition(this.barAudioSize - event.offsetX);
            this.mouseDownAudio();
        }
        if (itemId.id == 'vol-bar-padding') {
            this.calculateVolumePosition(event.offsetX);
            this.mouseDownVolume();
        }
    }
    ////////////////////
    //VOLUME FUNCTIONS//
    ////////////////////
    volumeBarDrag(event) {
        let volBarPosition = document.getElementById('vol-bar');
        let position = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.positionInBar(event.clientX, volBarPosition);
        event.preventDefault();
        if (position >= -1 && position <= this.barVolumeSize + 1) {
            this.pointVolumePosition = position;
            this.barVolumeSizeProgress = position;
        }
        this.calculateVolumePosition(this.pointVolumePosition);
    }
    mouseUpVolume() {
        if (this.mouseDwnVolume == true) {
            this.calculateVolumePosition(this.pointVolumePosition);
            this.mouseDwnVolume = false;
        }
    }
    mouseDownVolume() {
        this.mouseDwnVolume = true;
    }
    progressBarVolume() {
        if (this.audio) {
            let volActual = this.audio.volume;
            let movement = volActual * this.barVolumeSize;
            this.pointVolumePosition = movement;
            this.barVolumeSizeProgress = movement;
            //this.vol = `${Math.round(this.audio.volume * 100)}%`;
            this.setMuted();
            this.setVolLogo();
            localStorage.setItem('volVal', JSON.stringify(this.audio.volume));
        }
    }
    setVolLogo() {
        if (this.audio) {
            let volActual = this.audio.volume;
            let percentage = volActual * 100 / 25;
            if (percentage <= 0) {
                this.volLogo = (this.audio.muted) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_0_muted : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_0;
            }
            if (percentage > 0 && percentage <= 1) {
                this.volLogo = (this.audio.muted) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_25_muted : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_25;
            }
            if (percentage > 1 && percentage < 3) {
                this.volLogo = (this.audio.muted) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_50_muted : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_50;
            }
            if (percentage >= 3) {
                this.volLogo = (this.audio.muted) ? _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_75_muted : _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.volume_logo.percentage_75;
            }
        }
    }
    muteVol() {
        if (this.audio) {
            this.audio.muted = !this.audio.muted;
            localStorage.setItem('isMuted', JSON.stringify(this.audio.muted));
        }
    }
    setMuted() {
        if (this.audio && this.audio.muted) {
            //this.vol = `<del>${this.vol}</del>`;
            this.muteColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_mute_color.muted;
            this.barVolColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.front.muted;
            this.barVolColorBack = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.background.muted;
            this.babyMeatballColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.meatball_color.baby.muted;
        }
        else {
            //this.vol = this.vol.replace(/(<([^>]+)>)/gi, "");
            this.muteColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.button_mute_color.unmuted;
            this.barVolColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.front.unmuted;
            this.barVolColorBack = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.bar_volume_color.background.unmuted;
            this.babyMeatballColor = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.meatball_color.baby.unmuted;
        }
    }
    /*incrementVol(){
 
     let increment = Math.round((this.audio.volume + 0.1) * 10) / 10;
     increment = (increment < 1) ? increment : 1;
 
     this.audio.volume = increment;
   }
 
   decrementVol(){
 
     let decrement = Math.round((this.audio.volume - 0.1) * 10) / 10;
     decrement = (decrement > 0) ? decrement : 0;
  
     this.audio.volume = decrement;
   }*/
    ///////////////////
    // BAR FUNCTIONS //
    ///////////////////
    audioBarDrag(event) {
        let audioBarPosition = document.getElementById('audio-bar-padding');
        let position = (audioBarPosition) ? audioBarPosition.offsetLeft : 0;
        event.preventDefault();
        if (event.clientX - position >= 0 && event.clientX - position <= this.barAudioSize) {
            let movement = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.positionInBar(event.clientX, audioBarPosition);
            this.pointAudioPosition = movement;
            this.barAudioSizeProgress = movement;
        }
    }
    mouseDownAudio() {
        if (this.audio) {
            this.audioStatus = (this.audio.paused) ? false : true;
            this.audio.pause();
            this.mouseDwnAudio = true;
        }
    }
    mouseUpAudio() {
        if (this.audio && this.mouseDwnAudio == true) {
            (!this.isReverse) ? this.calculateAudioPosition(this.pointAudioPosition) : this.calculateAudioPosition(this.barAudioSize - this.pointAudioPosition);
            (this.audioStatus) ? this.audio.play() : this.audio.pause();
            this.mouseDwnAudio = false;
        }
    }
    progressBarAudio() {
        if (this.audio) {
            let movement = (!this.isReverse) ? this.calculeTimeBySeconds() : this.calculeTimeBySeconds(this.audio.duration - this.audio.currentTime);
            this.pointAudioPosition = movement;
            this.barAudioSizeProgress = movement;
            this.time = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.getSeconds((!this.isReverse) ? Math.trunc(this.audio.currentTime) : Math.trunc(this.audio.duration - this.audio.currentTime));
            let timePast = this.audio.currentTime - this.lastTime;
            this.lastTime = this.audio.currentTime;
            this.secodsPlayed = this.secodsPlayed + timePast;
            if (!this.isView && this.secodsPlayed >= this.audio.duration / 2) {
                this.updateViews();
                this.isView = true;
            }
        }
    }
    updateViews() {
        let theme = this.themesList[this.position];
        this.DatabaseConexService.getThemeData(theme.id).subscribe(sucess => {
            let viewsNew = sucess.views + 1;
            this.DatabaseConexService.setThemeAttribute(theme.id, 'views', viewsNew, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_3__.sesionValues.activeUser.name).subscribe(sucess => {
                this.comunicationService.sendReproductorViewData({ type: 'views', value: sucess.message.views });
            }, err => {
                console.error(`Error: ${err}`);
            });
        }, err => {
        });
    }
    showTimePointer(event) {
        if (this.audio) {
            let item = event.target;
            let itemId = item.id;
            item = (itemId == 'Meatball' && item.parentElement) ? item.parentElement : item;
            if (itemId == 'audio-bar-padding' || itemId == 'Meatball') {
                this.overBar = 'block';
                let positionInPage = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.positionInBar(event.clientX, item);
                let time = this.calculeTimeByPixel(positionInPage);
                this.timePointer = _utils_audio_bar_Bar_Utils__WEBPACK_IMPORTED_MODULE_1__.BarUtils.getSeconds(time);
                this.timePointerPosition = positionInPage;
            }
            else {
                this.overBar = 'none';
            }
        }
    }
    selectVelocity() {
        if (this.audio) {
            this.speed = this.audio.playbackRate;
        }
    }
    updateSpeed() {
        if (this.audio) {
            this.audio.playbackRate = this.speed;
            localStorage.setItem('velVal', JSON.stringify(this.audio.playbackRate));
        }
    }
    stopAudio() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.comunicationService.sendReproductorViewData({ type: 'stop', value: this.themesList[this.position].id });
        }
    }
    /*incrementTime(){
  
      this.audio.currentTime = this.audio.currentTime + 5;
  
    }
  
    decremenTime(){
  
      this.audio.currentTime = this.audio.currentTime - 5;
  
    }*/
    /////////////////////
    // BETA FUNCTIONS //
    ////////////////////
    revertAudioImplement() {
        if (this.audio) {
            this.loadGif = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.load_gif_status.visible;
            this.audioStatus = (this.audio.paused) ? false : true;
            this.comunicationService.sendReproductorViewData({ type: 'loading-reverse', value: '' });
            if (this.audio.src != this.reverseSrc) {
                this.audio.pause();
                (this.reverseSrc == '')
                    ? this.revertAudio(this.audio.src).then(() => { this.isReverse = true; this.switchSRC(); })
                    : (this.isReverse = true, this.switchSRC());
            }
            else {
                this.isReverse = false;
                this.switchSRC();
            }
        }
    }
    switchSRC() {
        if (this.audio) {
            if (this.isReverse) {
                this.loadGif = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.load_gif_status.hidden;
                let time = this.audio.duration - this.audio.currentTime;
                this.prepareTheme();
                this.audio.currentTime = time;
                this.audio.play();
                this.comunicationService.sendReproductorViewData({ type: 'loaded-reverse', value: '' });
            }
            else {
                this.loadGif = _utils_audio_bar_variables_Bar_Variables__WEBPACK_IMPORTED_MODULE_2__.Color_Vars.load_gif_status.hidden;
                let time = this.audio.duration - this.audio.currentTime;
                this.prepareTheme();
                this.audio.currentTime = time;
                this.comunicationService.sendReproductorViewData({ type: 'loaded-reverse', value: '' });
            }
            this.setReverse();
            (this.audioStatus) ? this.audio.play() : this.audio.pause();
            this.audioStatus = (this.audio.paused) ? false : true;
        }
    }
    revertAudio(src) {
        return new Promise(resolve => {
            var context = new AudioContext();
            var xhr = new XMLHttpRequest(), method = "GET", url = src;
            xhr.open(method, url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onreadystatechange = () => this.xhrReady(xhr, context).then(() => resolve(true));
            xhr.send();
        });
    }
    xhrReady(xhr, context) {
        return new Promise(resolve => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                context.decodeAudioData(xhr.response, (buffer) => {
                    var src = context.createBufferSource();
                    Array.prototype.reverse.call(buffer.getChannelData(0));
                    Array.prototype.reverse.call(buffer.getChannelData(1));
                    src.buffer = buffer;
                    var wav = _utils_audio_bar_AudionufferToWav__WEBPACK_IMPORTED_MODULE_0__.AudiobufferToWav.audioBufferToWav(buffer);
                    let blob = new Blob([wav], { type: 'mp3' });
                    let blobUrl = URL.createObjectURL(blob);
                    this.reverseSrc = blobUrl;
                    resolve(true);
                });
            }
        });
    }
}
AudioBarComponent.ɵfac = function AudioBarComponent_Factory(t) { return new (t || AudioBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_5__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseConexService)); };
AudioBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AudioBarComponent, selectors: [["app-audio-bar"]], inputs: { ajustableWidth: "ajustableWidth" }, decls: 47, vars: 53, consts: [[3, "mousemove", "mouseleave", "mouseup"], ["id", "bar-ajustable-width"], [1, "timeTag"], ["id", "audio-bar-padding", 3, "mousedown"], ["id", "audio-bar-progress"], ["id", "audio-bar"], ["id", "Meatball", 3, "mousedown"], [1, "buttonsDisplay", 2, "background-color", "rgba(0,0,25,0.3)", "padding", "10px"], [1, "display-inline", 2, "margin-left", "5px", "margin-right", "5px"], [4, "ngIf"], ["tooltip", "Volumen", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], [2, "display", "inline-block", "vertical-align", "bottom"], ["id", "vol-bar-padding", 3, "mousedown"], ["id", "vol-bar-progress"], ["id", "vol-bar"], ["id", "Baby-Meatball", 3, "mousedown"], [1, "display-inline", 2, "margin-right", "10px", "margin-left", "10px", "margin-left", "5px", "margin-right", "5px"], [2, "color", "white", "font-weight", "bold"], [2, "vertical-align", "text-bottom", "margin-left", "5px", "margin-right", "5px"], ["tooltip", "Velocidad", "placement", "bottom", 1, "right-button", "cursor-pointer", 3, "options", "ngModel", "ngModelChange", "change"], ["value", "0.25"], ["value", "0.5"], ["value", "0.75"], ["value", "1", "selected", "selected"], ["value", "1.25"], ["value", "1.5"], ["value", "1.75"], ["value", "2"], [2, "margin-left", "5px", "margin-right", "5px"], ["tooltip", "Anterior", "placement", "bottom", "value", "-1", 1, "my-vinyl-icons-font", "font-size-150", "button-style", "cursor-pointer", "button-clear", 3, "options", "click"], ["tooltip", "Siguiente", "placement", "bottom", "value", "1", 1, "my-vinyl-icons-font", "font-size-150", "button-style", "cursor-pointer", "button-clear", 3, "options", "click"], ["tooltip", "Parar/Reproducir", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], ["tooltip", "Parar", "placement", "bottom", 3, "options", "click"], ["tooltip", "Anterior", "placement", "bottom", "value", "-1", 1, "my-vinyl-icons-font", "font-size-150", "button-style", "cursor-pointer", 3, "options", "click"], ["tooltip", "Siguiente", "placement", "bottom", "value", "1", 1, "my-vinyl-icons-font", "font-size-150", "button-style", "cursor-pointer", 3, "options", "click"], ["tooltip", "Parar/Reproducir", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "button-style", "cursor-pointer", 3, "options", "click"], ["id", "button-gear-container", 1, "display-inline", 2, "position", "relative"], ["id", "button-gear", "tooltip", "Desplegar opciones", "placement", "bottom", 2, "margin-left", "5px", "margin-right", "5px", 3, "options", "click"], [2, "position", "relative", "display", "inline-block", "vertical-align", "top"], ["id", "button-container"], [2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%, -50%)"], [1, "display-inline", 2, "width", "120px", "margin-left", "5px", "margin-right", "5px"], [2, "text-align", "left"], [2, "display", "inline-block", "margin-top", "5px", "margin-bottom", "5px"], [1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-clear", 3, "click"], [2, "margin-top", "5px", "margin-bottom", "5px"], [1, "right-button", "cursor-pointer", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange", "change"], ["tooltip", "Aleatorio", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], ["tooltip", "Repetir lista", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], ["tooltip", "Repetir tema", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], [1, "display-inline"], ["tooltip", "Reproduccion inversa", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", "button-clear", 3, "options", "click"], ["id", "loadGif", 3, "style", "src", 4, "ngIf"], ["id", "loadGif", 3, "src"], ["tooltip", "Aleatorio", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", 3, "options", "click"], ["tooltip", "Repetir lista", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", 3, "options", "click"], ["tooltip", "Repetir tema", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", 3, "options", "click"], ["tooltip", "Reproduccion inversa", "placement", "bottom", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", "button-style", 3, "options", "click"]], template: function AudioBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousemove", function AudioBarComponent_Template_div_mousemove_0_listener($event) { return ctx.mouseDrag($event); })("mouseleave", function AudioBarComponent_Template_div_mouseleave_0_listener($event) { ctx.mouseUpAudio(); ctx.mouseUpVolume(); return ctx.mouseDrag($event); })("mouseup", function AudioBarComponent_Template_div_mouseup_0_listener() { ctx.mouseUpAudio(); return ctx.mouseUpVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function AudioBarComponent_Template_div_mousedown_4_listener($event) { return ctx.toClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function AudioBarComponent_Template_div_mousedown_7_listener() { return ctx.mouseDownAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AudioBarComponent_ng_container_11_Template, 9, 8, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AudioBarComponent_ng_container_12_Template, 9, 11, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AudioBarComponent_Template_button_click_14_listener() { return ctx.muteVol(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function AudioBarComponent_Template_div_mousedown_17_listener($event) { return ctx.toClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function AudioBarComponent_Template_div_mousedown_20_listener() { return ctx.mouseDownVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AudioBarComponent_ng_container_24_Template, 50, 20, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AudioBarComponent_Template_select_ngModelChange_26_listener($event) { return ctx.speed = $event; })("change", function AudioBarComponent_Template_select_change_26_listener() { return ctx.updateSpeed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "x0.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "x0.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "x0.75");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "x1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "x1.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "x1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "x1.75");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "x2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AudioBarComponent_ng_container_44_Template, 11, 17, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, AudioBarComponent_ng_container_45_Template, 11, 20, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, AudioBarComponent_ng_container_46_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("display: inline-block; width: ", ctx.greatBar, "%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate2"]("margin-left: ", ctx.timePointerPosition, "px; display:", ctx.overBar, "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.timePointer);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width: ", ctx.barAudioSize, "px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate2"]("width: ", ctx.barAudioSizeProgress, "px; background-color: ", ctx.barColor, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width: ", ctx.barAudioSize, "px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("margin-left: ", ctx.pointAudioPosition, "px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.buttonGear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.buttonGear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.TooltipValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.volLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width: ", ctx.barVolumeSize, "px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate2"]("width: ", ctx.barVolumeSizeProgress, "px; background-color: ", ctx.barVolColor, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate2"]("width: ", ctx.barVolumeSize, "px; background-color: ", ctx.barVolColorBack, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate2"]("margin-left: ", ctx.pointVolumePosition, "px; background-color: ", ctx.babyMeatballColor, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.buttonGear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("display-inline ", ctx.buttonResponsiveI, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.TooltipValues)("ngModel", ctx.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("display-inline ", ctx.buttonResponsiveI, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.buttonGear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.buttonGear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.lineToolBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]], styles: ["@media (max-width: 1200px){\n    .button-responsive-II[_ngcontent-%COMP%]{\n        display: none !important;\n    }\n}\n\n@media (max-width: 1520px){\n    #button-gear-container[_ngcontent-%COMP%]{\n        display: initial !important;\n    }\n    .button-responsive-I[_ngcontent-%COMP%]{\n        display: none !important;\n    }\n}\n\n.button-responsive-I[_ngcontent-%COMP%]{\n    display: initial;\n}\n\n.button-responsive-II[_ngcontent-%COMP%]{\n    display: initial;\n}\n\n#button-gear-container[_ngcontent-%COMP%]{\n    display: none;\n    transition: 0.25s;\n}\n\n#button-gear[_ngcontent-%COMP%]{\n    transition: 0.25s;\n}\n\n#button-gear.show[_ngcontent-%COMP%]{\n    transform: rotate(70deg);\n    transition: 0.25s;\n}\n\n.drag-mode[_ngcontent-%COMP%]{\n    position: absolute;\n}\n\n.timeTag[_ngcontent-%COMP%]{\n    position: absolute; \n    transform: translate(-50%,-200%); \n    font-weight:bold; \n    background-color:rgba(255,255,255, 0.8);\n    padding:5px;\n}\n\n#audio-bar-padding[_ngcontent-%COMP%]{\n    z-index: 2;\n    position: absolute; \n    margin-top: 10px; margin-bottom: 10px; \n    height: 10px; \n    \n    padding-top: 5px; padding-bottom: 5px;\n    cursor: pointer;\n}\n\n#audio-bar[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 10px; \n    background-color: #808080\n}\n\n#audio-bar-progress[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 10px; \n    \n}\n\n#audio-bar-background[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 10px; \n    transform: translateY(-100%);\n}\n\n#Meatball[_ngcontent-%COMP%]{\n    position: relative; \n    top: 50%; \n    transform: translate(-50%,-50%);  \n    width: 20px; height: 20px; \n    background-color: #0d0d0d; \n    border-radius: 50%;\n    cursor: pointer;\n}\n\n#vol-bar[_ngcontent-%COMP%]{\n    vertical-align: bottom; \n    display: inline-block; \n    margin-top: 10px; \n    margin-bottom: 10px; \n    margin-left: 10px; \n    margin-right: 10px;  \n    height: 5px; \n    background-color: #bfbfbf;\n    cursor: pointer;\n}\n\n#vol-bar-progress[_ngcontent-%COMP%]{\n    position: absolute;\n    vertical-align: bottom; \n    display: inline-block; \n    margin-top: 10px; \n    margin-bottom: 10px; \n    margin-left: 10px; \n    margin-right: 10px;  \n    height: 5px; \n    cursor: pointer;\n}\n\n#vol-bar-padding[_ngcontent-%COMP%]{\n    position: absolute;\n    vertical-align: bottom; \n    display: inline-block; \n    margin-top: 10px; \n    margin-bottom: 10px; \n    margin-left: 10px; \n    margin-right: 10px;  \n    height: 5px; \n    cursor: pointer;\n    z-index: 2;\n}\n\n#Baby-Meatball[_ngcontent-%COMP%]{\n    position: relative; \n    top: 50%; \n    transform: translate(-50%,-50%); \n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.buttonsDisplay[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n.cursor-pointer[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n.buttonStyle[_ngcontent-%COMP%]{\n    background-color: transparent;\n}\n\n.left-button[_ngcontent-%COMP%]{\n    margin-right: 2.5px;\n}\n\n.right-button[_ngcontent-%COMP%]{\n    margin-left: 2.5px;\n}\n\n.left-button-button[_ngcontent-%COMP%]{\n    margin-left: 10px; \n    margin-right: 2.5px;\n}\n\n.rigth-button-button[_ngcontent-%COMP%]{\n    margin-left: 2.5px; \n    margin-right: 10px;\n}\n\n.centre-button[_ngcontent-%COMP%]{\n    margin-left: 2.5px;\n    margin-right: 2.5px;\n}\n\n#button-container[_ngcontent-%COMP%]{\n    white-space: nowrap;\n    opacity: 0;\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    background-color: white;\n    padding: 10px;\n    z-index: 5;\n    transform: translateY(-100%);\n    overflow: hidden;\n    transition: 0.5s;\n}\n\n#button-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    opacity: 0;\n    transition: 0.25s;\n}\n\n#button-container.show[_ngcontent-%COMP%]{\n    opacity: 1;\n    height: 180px;\n    width: 140px;\n    z-index: 5;\n    transition: 0.5s;\n}\n\n#button-container.show[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    opacity: 1;\n    transition: 0.25s;\n}\n\n.button-style[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: rgba(145, 145, 145, 1);\n}\n\n.button-clear[_ngcontent-%COMP%]{\n    background: none;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWjtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixXQUFXLEVBQUUsWUFBWTtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXVkaW8tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgICAuYnV0dG9uLXJlc3BvbnNpdmUtSUl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTIwcHgpe1xuICAgICNidXR0b24tZ2Vhci1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ1dHRvbi1yZXNwb25zaXZlLUl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5idXR0b24tcmVzcG9uc2l2ZS1Je1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG59XG4uYnV0dG9uLXJlc3BvbnNpdmUtSUl7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbn1cbiNidXR0b24tZ2Vhci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbiNidXR0b24tZ2VhcntcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbiNidXR0b24tZ2Vhci5zaG93e1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDcwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbi5kcmFnLW1vZGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnRpbWVUYWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0yMDAlKTsgXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xuICAgIHBhZGRpbmc6NXB4O1xufVxuI2F1ZGlvLWJhci1wYWRkaW5ne1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyBcbiAgICBoZWlnaHQ6IDEwcHg7IFxuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsqL1xuICAgIHBhZGRpbmctdG9wOiA1cHg7IHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2F1ZGlvLWJhcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwXG59XG4jYXVkaW8tYmFyLXByb2dyZXNze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4OyBcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7Ki9cbn1cbiNhdWRpby1iYXItYmFja2dyb3VuZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDsgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbiNNZWF0YmFsbHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIHRvcDogNTAlOyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyAgXG4gICAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b2wtYmFye1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgIFxuICAgIGhlaWdodDogNXB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2b2wtYmFyLXByb2dyZXNze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICBcbiAgICBoZWlnaHQ6IDVweDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3ZvbC1iYXItcGFkZGluZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgXG4gICAgaGVpZ2h0OiA1cHg7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAyO1xufVxuI0JhYnktTWVhdGJhbGx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICB0b3A6IDUwJTsgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgXG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uc0Rpc3BsYXl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cnNvci1wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b25TdHlsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5sZWZ0LWJ1dHRvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xufVxuLnJpZ2h0LWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMi41cHg7XG59XG4ubGVmdC1idXR0b24tYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xufVxuLnJpZ3RoLWJ1dHRvbi1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXB4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2VudHJlLWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMi41cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbn1cbiNidXR0b24tY29udGFpbmVye1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4jYnV0dG9uLWNvbnRhaW5lciBkaXZ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cbiNidXR0b24tY29udGFpbmVyLnNob3d7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4jYnV0dG9uLWNvbnRhaW5lci5zaG93IGRpdntcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMjVzO1xufVxuLmJ1dHRvbi1zdHlsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAxKTtcbn1cbi5idXR0b24tY2xlYXJ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 4063:
/*!*************************************************************************************!*\
  !*** ./src/app/components/centre/authorization/signIn/sign-in/sign-in.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/tools/FormValidations */ 8112);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);










function SignInComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formError.email);
} }
function SignInComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formError.password);
} }
function SignInComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
class SignInComponent {
    constructor(comunicationService, authorization, router, manageComponent) {
        this.comunicationService = comunicationService;
        this.authorization = authorization;
        this.router = router;
        this.manageComponent = manageComponent;
        this.candy = { id: 'signin', name: 'Sign-In', family: 'candy-auth', route: 'Sign-In', query: {}, routeQuery: '' };
        this.formError = {
            email: '',
            password: ''
        };
        this.user = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        if (this.authorization.checkForToken())
            this.router.navigate(['/Home']);
        this.comunicationService.sendCandy(this.candy);
    }
    signIn() {
        let email = this.user.email;
        let password = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_0__.FormValidations.hashPassword(this.user.password);
        this.formError = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_0__.FormValidations.checkForErrors(this.user, this.formError);
        if (src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_0__.FormValidations.checkErrors(this.formError)) {
            this.authorization.signIn(email, password).subscribe(res => {
                localStorage.setItem('sessionToken', res.token);
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser = src_app_classes_User__WEBPACK_IMPORTED_MODULE_2__.User.setUser(res.user.name, res.user.admin, res.user.date, res.user.description, res.user.themeLists, res.user.email, res.user.activeAccount);
                this.manageComponent.refreshComponent(this.manageComponent.getLastURL());
            }, err => { console.error(`Error: ${err.error}`); src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_0__.FormValidations.checkServerErrors(err.error, this.formError); });
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_5__.ManageComponent)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 25, vars: 7, consts: [["id", "homeContainer", 2, "padding", "25px"], [2, "min-width", "350px", "background-color", "rgba(255, 255, 255, 0.1)", "display", "inline-block", "padding", "15px"], [1, "title-back"], [3, "submit"], ["for", "email"], ["type", "text", "name", "email", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 3, "ngClass", "ngModel", "ngModelChange"], ["id", "formError"], [4, "ngIf"], ["type", "submit", "name", "Enviar", 1, "greenButton"], ["href", "javascript:void(0);", "routerLink", "/Sign-Up", "id", "signUpLink", "alt", "Registrarse", 1, "tinyFont", "whiteLink"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_5_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SignInComponent_p_17_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SignInComponent_p_18_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SignInComponent_ng_container_19_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u00BFNo estas registrado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.email == "" ? "" : "input-error")("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.password == "" ? "" : "input-error")("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.email != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.password != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.email == "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: ["[_nghost-%COMP%]{\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 8080:
/*!*************************************************************************************!*\
  !*** ./src/app/components/centre/authorization/signUp/sign-up/sign-up.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/tools/FormValidations */ 8112);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);










function SignUpComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formError.email);
} }
function SignUpComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formError.password);
} }
function SignUpComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formError.repassword);
} }
function SignUpComponent_br_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br");
} }
class SignUpComponent {
    constructor(comunicationService, authorization, router, manageComponent) {
        this.comunicationService = comunicationService;
        this.authorization = authorization;
        this.router = router;
        this.manageComponent = manageComponent;
        this.candy = { id: 'signup', name: 'Sign-Up', family: 'candy-auth', route: 'Sign-Up', query: {}, routeQuery: '' };
        this.formError = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
        this.user = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        if (this.authorization.checkForToken())
            this.router.navigate(['/Home']);
        this.comunicationService.sendCandy(this.candy);
    }
    signUp() {
        let name = this.user.name;
        let email = this.user.email;
        let password = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_1__.FormValidations.hashPassword(this.user.password);
        this.formError = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_1__.FormValidations.checkForErrors(this.user, this.formError);
        if (src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_1__.FormValidations.checkErrors(this.formError)) {
            this.authorization.signUp(name, email, password).subscribe(res => {
                localStorage.setItem('sessionToken', res.token);
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__.sesionValues.activeUser = src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User.setUser(res.user.name, res.user.admin, res.user.date, res.user.description, res.user.themeLists, res.user.email, res.user.activeAccount);
                this.manageComponent.refreshComponent(this.manageComponent.getLastURL());
            }, err => { console.error(`Error: ${err}`); });
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_5__.ManageComponent)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 37, vars: 12, consts: [["id", "homeContainer", 2, "padding", "25px"], [2, "min-width", "350px", "background-color", "rgba(255, 255, 255, 0.1)", "display", "inline-block", "padding", "15px"], [1, "title-back"], [3, "submit"], ["for", "name"], ["type", "text", "name", "name", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "name", "email", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "repassword"], ["type", "password", "name", "repassword", 3, "ngClass", "ngModel", "ngModelChange"], ["id", "formError"], [4, "ngIf"], ["type", "submit", "name", "Enviar", 1, "greenButton"], ["href", "javascript:void(0);", "routerLink", "/Sign-In", "id", "signUpLink", "alt", "Registrarse", 1, "tinyFont", "whiteLink"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_4_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Repetir contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.repassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SignUpComponent_p_28_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SignUpComponent_p_29_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SignUpComponent_p_30_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SignUpComponent_br_31_Template, 1, 0, "br", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\u00BFYa tienes cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.name == "" ? "" : "input-error")("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.email == "" ? "" : "input-error")("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.password == "" ? "" : "input-error")("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.formError.repassword == "" ? "" : "input-error")("ngModel", ctx.user.repassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.email != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.password != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.repassword != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formError.email == "" && ctx.formError.password == "" && ctx.formError.repassword == "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: ["[_nghost-%COMP%]{\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 1958:
/*!*******************************************************!*\
  !*** ./src/app/components/centre/centre.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentreComponent": () => (/* binding */ CentreComponent)
/* harmony export */ });
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var src_app_classes_MyRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/MyRoot */ 5970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showcase/showcase.component */ 8668);
/* harmony import */ var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data/user-data.component */ 8871);









function CentreComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ya tengo cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u00BFNo est\u00E1s registrado?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function CentreComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Bienvenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-user-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function CentreComponent_span_57_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CentreComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CentreComponent_span_57_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.routerLink($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CentreComponent_span_57_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const candy_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", i_r4 + "-candy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](candy_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r4 < ctx_r2.candyRow.length - 1);
} }
const _c0 = function () { return ["/Search"]; };
const _c1 = function () { return { query: "ragtime", user: false }; };
const _c2 = function () { return { query: "stride", user: false }; };
const _c3 = function () { return { query: "boogie", user: false }; };
const _c4 = function () { return { query: "blues", user: false }; };
const _c5 = function () { return { query: "pop", user: false }; };
const _c6 = function () { return { query: "soundtracks+owb", user: false }; };
const _c7 = function () { return { query: "country", user: false }; };
const _c8 = function () { return { query: "soundtracks+mr", user: false }; };
const _c9 = function () { return { query: "classic", user: false }; };
class CentreComponent {
    constructor(comunicationService, authorization, router) {
        this.comunicationService = comunicationService;
        this.authorization = authorization;
        this.router = router;
        this.candyRow = [{ id: 'home', name: 'Home', family: 'candy-home', route: 'Home', query: {}, routeQuery: '' }];
        this.user = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        let myRoot = src_app_classes_MyRoot__WEBPACK_IMPORTED_MODULE_1__.MyRoot.getMyRoot();
        myRoot.callRoot();
        if (localStorage.getItem('lastCandyRow') != null) {
            let candyRowAsString = localStorage.getItem('lastCandyRow');
            this.candyRow = JSON.parse(candyRowAsString);
        }
        this.comunicationService.sendCandyObservable.subscribe((candy) => {
            this.updateRow(candy);
        });
        this.comunicationService.sendCandiesObservable.subscribe((candies) => {
            this.setRow(candies);
        });
    }
    expandOption(category) {
        let categoryElements = category;
        if (categoryElements != null && categoryElements.parentElement) {
            let categoryTitle = categoryElements.parentElement;
            if (categoryTitle.className == "expand") {
                categoryTitle.className = "";
            }
            else {
                categoryTitle.className = "expand";
            }
        }
    }
    setRow(candies) {
        this.candyRow = candies;
    }
    updateRow(candy) {
        let positionInRow = this.findRowPosition(candy.id);
        let newFamily = this.checkFamily(candy.family);
        let deadEnd = this.checkForDeadEnd();
        if (newFamily) {
            this.candyRow.splice(1);
            this.candyRow.push(candy);
        }
        else if (positionInRow != -1 && positionInRow < this.candyRow.length) {
            this.candyRow.splice(positionInRow);
        }
        else if (positionInRow == -1) {
            if (deadEnd != -1) {
                this.candyRow.splice(deadEnd - 1, deadEnd - 1);
            }
            this.candyRow.push(candy);
        }
        localStorage.setItem('lastCandyRow', JSON.stringify(this.candyRow));
    }
    findRowPosition(candyId) {
        let position = 0;
        let candyItem = this.candyRow.find(candy => { position++; return (candy.id == candyId) ? true : false; });
        return (candyItem) ? position : -1;
    }
    checkFamily(candyFamily) {
        let index = 0;
        let newFamily = false;
        while (index < this.candyRow.length && newFamily == false) {
            let actualFamily = this.candyRow[index].family;
            newFamily = ((src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.candyIdWhiteList.indexOf(actualFamily) == -1 && src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.candyIdWhiteList.indexOf(candyFamily) == -1) && actualFamily != candyFamily) ? true : false;
            index++;
        }
        return newFamily;
    }
    checkForDeadEnd() {
        let position = 0;
        let item = this.candyRow.find(candy => {
            position++;
            if (src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.candyDeadEnd.indexOf(candy.id) != -1) {
                return true;
            }
            return false;
        });
        return (item) ? position : -1;
    }
    routerLink(candy) {
        let position = candy;
        position = position.id.split('-')[0];
        let selectedCandy = this.candyRow[parseInt(position)];
        if (selectedCandy.query) {
            this.router.navigate([selectedCandy.route], { queryParams: selectedCandy.query });
            return;
        }
        if (selectedCandy.routeQuery != '') {
            this.router.navigate([`/${selectedCandy.route}/${selectedCandy.routeQuery}`]);
            return;
        }
        this.router.navigate([selectedCandy.route]);
    }
}
CentreComponent.ɵfac = function CentreComponent_Factory(t) { return new (t || CentreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_2__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CentreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CentreComponent, selectors: [["app-centre"]], decls: 60, vars: 39, consts: [["id", "center"], ["id", "left"], [4, "ngIf"], ["id", "menuTitle", 1, "title-backg"], ["id", "menuContainer"], ["id", "menuContent"], [1, "old_world_blues_candy", 3, "click"], [1, "category_ragtime"], [1, "link-decor-none", "sublist-option", 3, "routerLink", "queryParams"], [1, "category_stride"], [1, "category_boogie"], [1, "category_jazz"], [1, "category_v-soundtrack"], [1, "mojave_ride_candy", 3, "click"], [1, "category_country"], [1, "category_c-soundtrack"], [1, "classic_wave_candy", 3, "click"], [1, "category_classic"], [1, "title-backg"], ["id", "imageGalery", 1, "tinyFont", "centerText"], ["id", "right"], ["id", "candyRow"], [4, "ngFor", "ngForOf"], ["id", "rightBody"], ["id", "toFormMenu"], [2, "text-align", "center"], ["href", "javascript:void(0);", "routerLink", "/Sign-In", "id", "signUpLink", "alt", "Registrarse", 1, "link-decor-none", 2, "color", "white"], ["href", "javascript:void(0);", "routerLink", "/Sign-Up", "id", "signUpLink", "alt", "Registrarse", 1, "link-decor-none", 2, "color", "white"], ["href", "javascript:void(0);", 1, "oh_a_candy", 3, "id", "click"]], template: function CentreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CentreComponent_ng_container_2_Template, 11, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CentreComponent_ng_container_3_Template, 5, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Categor\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CentreComponent_Template_span_click_10_listener($event) { return ctx.expandOption($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Old World Blues");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Ragtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Stride-Piano");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Boogie-Woogie");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Blues-Jazz");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Pop-Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Soundtracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CentreComponent_Template_span_click_32_listener($event) { return ctx.expandOption($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Mojave Ride");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Soundtracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CentreComponent_Template_span_click_42_listener($event) { return ctx.expandOption($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Classic Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Cl\u00E1sica");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Galer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "No hay contenido disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, CentreComponent_span_57_Template, 4, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "app-showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.authorization.checkForToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authorization.checkForToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](27, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](28, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](29, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](30, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](31, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](32, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](33, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](34, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](35, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.candyRow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_4__.ShowcaseComponent, _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_5__.UserDataComponent], styles: ["#center[_ngcontent-%COMP%]{\r\n\r\n    position: relative;\r\n    min-height: 75%;\r\n\tbox-sizing: content-box;\r\n\r\n}\r\n\r\n#left[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\twidth: 19.5%;\r\n\theight: 100%;\r\n\tmargin-bottom: 35px;\r\n\tvertical-align: top;\r\n\r\n}\r\n\r\n#menuContainer[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tleft: 50%;\r\n    transform: translateX(-50%);\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]{\r\n\r\n    position: relative;\r\n    color: white;\r\n    padding: 0px;\r\n    margin: 0px;\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\r\n\r\n\tmargin-left: 0px;\r\n    list-style-type: none;\r\n    font-size: 1.3em;\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\n\r\n\tcolor: rgb(205, 205, 205);\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\r\n\tfont-size: 0.9em;\r\n\tcolor: rgb(255, 255, 255);\r\n\tmargin-left: -15px;\r\n    list-style-type: none;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\tposition: absolute;\r\n\ttransform: translateY(-100%);\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]   li.expand[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\r\n\topacity: 1;\r\n\tpointer-events: auto;\r\n\tposition: relative;\r\n\ttransform: translateY(0%);\r\n\r\n}\r\n\r\n#menuContent[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li.show[_ngcontent-%COMP%]:hover{\r\n\r\n\ttransform: scale(1.05);\r\n\r\n}\r\n\r\n#right[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\twidth: 79.5%;\r\n\theight: 100%;\r\n\tmargin-bottom: 35px;\r\n\r\n}\r\n\r\n#candyRow[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\theight: 5%;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tmargin-left: 20px;\r\n\r\n}\r\n\r\n#candyRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\tmargin-top: 0px;\r\n\tmargin-bottom: 0px;\r\n\tfont-weight: bold;\r\n\tcolor: white;\r\n\r\n}\r\n\r\n#candyRow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n\tcolor: white;\r\n\r\n}\r\n\r\n#rightBody[_ngcontent-%COMP%]{\r\n\r\n\twidth: 100%;\r\n\theight: 90%;\r\n\tbox-sizing: border-box;\r\n\r\n}\r\n\r\n#menuTitle[_ngcontent-%COMP%]{\r\n\r\n\tmargin-top: 25px;\r\n\tborder-radius: 2px;\r\n\r\n}\r\n\r\n.title.big[_ngcontent-%COMP%]{\r\n\r\n\tfont-size: 2.5em;\r\n\r\n}\r\n\r\n#imageGalery[_ngcontent-%COMP%]{\r\n\r\n\tcolor: rgb(166, 166, 166);\r\n\tfont-family: BlazingSun;\r\n\r\n}\r\n\r\n#formMenu[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\r\n}\r\n\r\n.previewContainer[_ngcontent-%COMP%]{\r\n\r\n    display: inline-block;\r\n    position: relative;\r\n    height: 60%;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n.galleryPreviewContainer[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\theight: 75px;\r\n\twidth: 125px;\r\n\toverflow: hidden;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\tmargin: 3px;\r\n\r\n}\r\n\r\n.galleryPreview[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tmax-height: 75px;\r\n\tmargin-left: 62.5px;\r\n    transform: translateX(-50%);\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.galleryImage[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: block;\r\n    position: relative;\r\n    max-height: 100%;\r\n    max-width: 90%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n}\r\n\r\n#smallImagesContainer[_ngcontent-%COMP%]{\r\n\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: center;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n}\r\n\r\n.barPreviewContainer[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\tmax-height: 75px;\r\n\tmax-width: 75px;\r\n\tmargin: 5px;\r\n\toverflow: hidden;\r\n\tbox-sizing:border-box;\r\n\r\n}\r\n\r\n.barPreviewImage[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tmax-height: 75px;\r\n\tmargin-left: 37.5px;\r\n    transform: translateX(-50%);\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#closeGallery[_ngcontent-%COMP%]{\r\n\r\n\tposition: absolute;\r\n\tfont-size: 3.5em;\r\n\tcolor: rgb(0, 102, 68);\r\n\ttop: 0%;\r\n\tleft: 99%;\r\n\ttransform: translateX(-100%);\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t        user-select: none;\r\n\r\n}\r\n\r\n#closeGallery[_ngcontent-%COMP%]:hover{\r\n\r\n\ttransform: translateX(-100%) scale(0.9);\r\n\tcolor: rgb(0, 128, 85);\r\n\r\n\r\n}\r\n\r\n#moveGalleryLeft[_ngcontent-%COMP%]{\r\n\r\n\tposition: absolute;\r\n    font-size: 3.5em;\r\n    color: rgb(0, 102, 68);\r\n    top: 50%;\r\n    left: -2%;\r\n    transform: translate(-100%,-50%);\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    z-index: 9;\r\n\r\n}\r\n\r\n#moveGalleryLeft[_ngcontent-%COMP%]:hover:not(.moveButtonDisabled){\r\n\r\n\ttransform: translate(-100%,-50%) scale(0.9);\r\n\r\n}\r\n\r\n#moveGalleryRight[_ngcontent-%COMP%]{\r\n\r\n\tposition: absolute;\r\n    font-size: 3.5em;\r\n    color: rgb(0, 102, 68);\r\n    top: 50%;\r\n    left: 102%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    z-index: 9;\r\n\r\n}\r\n\r\n#moveGalleryRight[_ngcontent-%COMP%]:hover:not(.moveButtonDisabled){\r\n\r\n\ttransform: translateY(-50%) scale(0.9);\r\n\r\n}\r\n\r\n.moveButtonDisabled[_ngcontent-%COMP%]{\r\n\r\n\tcursor: default !important;\r\n\tcolor: gray !important;\r\n\r\n}\r\n\r\n#blackScreen[_ngcontent-%COMP%]{\r\n\r\n\tposition: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 9;\r\n\r\n}\r\n\r\n#infoContainer[_ngcontent-%COMP%], #sumContainer[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\t\r\n}\r\n\r\n#infoContainer[_ngcontent-%COMP%]{\r\n\r\n\tmax-width: 85%;\r\n\r\n}\r\n\r\n#sumContainer[_ngcontent-%COMP%]{\r\n\r\n\tfloat: right;\r\n\ttext-align: right;\r\n\t\r\n}\r\n\r\n.productSeparator[_ngcontent-%COMP%]{\r\n\r\n\tmargin-left: 10px !important;\r\n\tmargin-right: 10px !important;\r\n\tcursor: default !important;\r\n\r\n}\r\n\r\n.cartProductContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n\tfloat: right;\r\n\tmargin-left: 7px;\r\n\tmargin-right: 7px;\r\n\ttransform: scale(1.2);\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n.cartProductContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n\tcolor: rgb(0, 153, 102) !important;\r\n\r\n}\r\n\r\n#totalCartProduct[_ngcontent-%COMP%]{\r\n\r\n\ttext-align: right;\r\n\tpadding-top: 10px;\r\n\tborder-top: 3px solid white;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCLHVCQUF1Qjs7QUFFeEI7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG1CQUFtQjs7QUFFcEI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixTQUFTO0lBQ04sMkJBQTJCOztBQUUvQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUVBOztDQUVDLGdCQUFnQjtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7O0FBRXBCOztBQUVBOztDQUVDLGVBQWU7O0FBRWhCOztBQUVBOztDQUVDLHlCQUF5Qjs7QUFFMUI7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixrQkFBa0I7SUFDZixxQkFBcUI7Q0FDeEIsVUFBVTtDQUNWLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsNEJBQTRCO0NBQzVCLGVBQWU7O0FBRWhCOztBQUVBOztDQUVDLFVBQVU7Q0FDVixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLHlCQUF5Qjs7QUFFMUI7O0FBRUE7O0NBRUMsc0JBQXNCOztBQUV2Qjs7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQkFBbUI7O0FBRXBCOztBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQkFBaUI7O0FBRWxCOztBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixZQUFZOztBQUViOztBQUVBOztDQUVDLFlBQVk7O0FBRWI7O0FBRUE7O0NBRUMsV0FBVztDQUNYLFdBQVc7Q0FDWCxzQkFBc0I7O0FBRXZCOztBQUVBOztDQUVDLGdCQUFnQjtDQUNoQixrQkFBa0I7O0FBRW5COztBQUVBOztDQUVDLGdCQUFnQjs7QUFFakI7O0FBRUE7O0NBRUMseUJBQXlCO0NBQ3pCLHVCQUF1Qjs7QUFFeEI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1QsMkJBQTJCOztBQUU1Qjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLCtCQUErQjs7QUFFbkM7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxXQUFXOztBQUVaOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0lBQ2hCLDJCQUEyQjtJQUMzQixlQUFlOztBQUVuQjs7QUFFQTs7Q0FFQyxjQUFjO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztJQUNULDJCQUEyQjs7QUFFL0I7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjs7QUFFL0I7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixxQkFBcUI7O0FBRXRCOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0lBQ2hCLDJCQUEyQjtJQUMzQixlQUFlOztBQUVuQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsU0FBUztDQUNULDRCQUE0QjtDQUM1QixlQUFlO0NBQ2YseUJBQWlCO1NBQWpCLGlCQUFpQjs7QUFFbEI7O0FBRUE7O0NBRUMsdUNBQXVDO0NBQ3ZDLHNCQUFzQjs7O0FBR3ZCOztBQUVBOztDQUVDLGtCQUFrQjtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsVUFBVTs7QUFFZDs7QUFFQTs7Q0FFQywyQ0FBMkM7O0FBRTVDOztBQUVBOztDQUVDLGtCQUFrQjtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsVUFBVTs7QUFFZDs7QUFFQTs7Q0FFQyxzQ0FBc0M7O0FBRXZDOztBQUVBOztDQUVDLDBCQUEwQjtDQUMxQixzQkFBc0I7O0FBRXZCOztBQUVBOztDQUVDLGVBQWU7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFVBQVU7O0FBRWQ7O0FBRUE7O0NBRUMscUJBQXFCOztBQUV0Qjs7QUFFQTs7Q0FFQyxjQUFjOztBQUVmOztBQUVBOztDQUVDLFlBQVk7Q0FDWixpQkFBaUI7O0FBRWxCOztBQUVBOztDQUVDLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCOztBQUUzQjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsZUFBZTs7QUFFaEI7O0FBRUE7O0NBRUMsa0NBQWtDOztBQUVuQzs7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDJCQUEyQjs7QUFFNUIiLCJmaWxlIjoiY2VudHJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudGVye1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDc1JTtcclxuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcbn1cclxuXHJcbiNsZWZ0e1xyXG5cclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDE5LjUlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG59XHJcblxyXG4jbWVudUNvbnRhaW5lcntcclxuXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG59XHJcblxyXG4jbWVudUNvbnRlbnR7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4jbWVudUNvbnRlbnQgPiBsaXtcclxuXHJcblx0bWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcblxyXG59XHJcblxyXG4jbWVudUNvbnRlbnQgPiBsaSBzcGFue1xyXG5cclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4jbWVudUNvbnRlbnQgPiBsaSBzcGFuOmhvdmVye1xyXG5cclxuXHRjb2xvcjogcmdiKDIwNSwgMjA1LCAyMDUpO1xyXG5cclxufVxyXG5cclxuI21lbnVDb250ZW50IGxpIGxpe1xyXG5cclxuXHRmb250LXNpemU6IDAuOWVtO1xyXG5cdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuI21lbnVDb250ZW50IGxpLmV4cGFuZCBsaXtcclxuXHJcblx0b3BhY2l0eTogMTtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuXHJcbn1cclxuXHJcbiNtZW51Q29udGVudCBsaSBsaS5zaG93OmhvdmVye1xyXG5cclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cclxufVxyXG5cclxuI3JpZ2h0e1xyXG5cclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDc5LjUlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cclxufVxyXG5cclxuI2NhbmR5Um93e1xyXG5cclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0aGVpZ2h0OiA1JTtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG59XHJcblxyXG4jY2FuZHlSb3cgcHtcclxuXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuI2NhbmR5Um93IGF7XHJcblxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbiNyaWdodEJvZHl7XHJcblxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG4jbWVudVRpdGxle1xyXG5cclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZS5iaWd7XHJcblxyXG5cdGZvbnQtc2l6ZTogMi41ZW07XHJcblxyXG59XHJcblxyXG4jaW1hZ2VHYWxlcnl7XHJcblxyXG5cdGNvbG9yOiByZ2IoMTY2LCAxNjYsIDE2Nik7XHJcblx0Zm9udC1mYW1pbHk6IEJsYXppbmdTdW47XHJcblxyXG59XHJcblxyXG4jZm9ybU1lbnV7XHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbn1cclxuXHJcbi5wcmV2aWV3Q29udGFpbmVye1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxufVxyXG5cclxuLmdhbGxlcnlQcmV2aWV3Q29udGFpbmVye1xyXG5cclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0aGVpZ2h0OiA3NXB4O1xyXG5cdHdpZHRoOiAxMjVweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHRtYXJnaW46IDNweDtcclxuXHJcbn1cclxuXHJcbi5nYWxsZXJ5UHJldmlld3tcclxuXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1heC1oZWlnaHQ6IDc1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDYyLjVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5nYWxsZXJ5SW1hZ2V7XHJcblxyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cclxufVxyXG5cclxuI3NtYWxsSW1hZ2VzQ29udGFpbmVye1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbn1cclxuXHJcbi5iYXJQcmV2aWV3Q29udGFpbmVye1xyXG5cclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWF4LWhlaWdodDogNzVweDtcclxuXHRtYXgtd2lkdGg6IDc1cHg7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG4uYmFyUHJldmlld0ltYWdle1xyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWF4LWhlaWdodDogNzVweDtcclxuXHRtYXJnaW4tbGVmdDogMzcuNXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuI2Nsb3NlR2FsbGVyeXtcclxuXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZvbnQtc2l6ZTogMy41ZW07XHJcblx0Y29sb3I6IHJnYigwLCAxMDIsIDY4KTtcclxuXHR0b3A6IDAlO1xyXG5cdGxlZnQ6IDk5JTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbn1cclxuXHJcbiNjbG9zZUdhbGxlcnk6aG92ZXJ7XHJcblxyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMC45KTtcclxuXHRjb2xvcjogcmdiKDAsIDEyOCwgODUpO1xyXG5cclxuXHJcbn1cclxuXHJcbiNtb3ZlR2FsbGVyeUxlZnR7XHJcblxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICBjb2xvcjogcmdiKDAsIDEwMiwgNjgpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAtMiU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwtNTAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgei1pbmRleDogOTtcclxuXHJcbn1cclxuXHJcbiNtb3ZlR2FsbGVyeUxlZnQ6aG92ZXI6bm90KC5tb3ZlQnV0dG9uRGlzYWJsZWQpe1xyXG5cclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwtNTAlKSBzY2FsZSgwLjkpO1xyXG5cclxufVxyXG5cclxuI21vdmVHYWxsZXJ5UmlnaHR7XHJcblxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICBjb2xvcjogcmdiKDAsIDEwMiwgNjgpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAxMDIlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG5cclxufVxyXG5cclxuI21vdmVHYWxsZXJ5UmlnaHQ6aG92ZXI6bm90KC5tb3ZlQnV0dG9uRGlzYWJsZWQpe1xyXG5cclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcclxuXHJcbn1cclxuXHJcbi5tb3ZlQnV0dG9uRGlzYWJsZWR7XHJcblxyXG5cdGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4jYmxhY2tTY3JlZW57XHJcblxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB6LWluZGV4OiA5O1xyXG5cclxufVxyXG5cclxuI2luZm9Db250YWluZXIsICNzdW1Db250YWluZXJ7XHJcblxyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcclxufVxyXG5cclxuI2luZm9Db250YWluZXJ7XHJcblxyXG5cdG1heC13aWR0aDogODUlO1xyXG5cclxufVxyXG5cclxuI3N1bUNvbnRhaW5lcntcclxuXHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFxyXG59XHJcblxyXG4ucHJvZHVjdFNlcGFyYXRvcntcclxuXHJcblx0bWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuXHRjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5jYXJ0UHJvZHVjdENvbnRhaW5lciBhe1xyXG5cclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bWFyZ2luLWxlZnQ6IDdweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLmNhcnRQcm9kdWN0Q29udGFpbmVyIGE6aG92ZXJ7XHJcblxyXG5cdGNvbG9yOiByZ2IoMCwgMTUzLCAxMDIpICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4jdG90YWxDYXJ0UHJvZHVjdHtcclxuXHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0Ym9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ 2335:
/*!***********************************************************************************!*\
  !*** ./src/app/components/centre/showcase/artist-panel/artist-panel.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistPanelComponent": () => (/* binding */ ArtistPanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_classes_Artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/Artist */ 986);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/tools/FormValidations */ 8112);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/pipes/DomSanitized */ 7605);

















function ArtistPanelComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_span_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r12.showArtistForm({ attrName: "avatar", attrId: ctx_r12.artist.id_artist, value: ctx_r12.artist.id_artist }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r1.TooltipValues);
} }
function ArtistPanelComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_span_14_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r14.showArtistForm({ attrName: "name", attrId: "", value: ctx_r14.artist.name, secondValue: ctx_r14.artist.surname }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
} }
function ArtistPanelComponent_div_1_p_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_p_15_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r16.showArtistForm({ attrName: "id_artist", attrId: "", value: ctx_r16.artist.id_artist }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_p_15_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r18.deleteArtist(ctx_r18.artist.id_artist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.artist.id_artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
} }
function ArtistPanelComponent_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_span_16_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r19.showArtistForm({ attrName: "description", attrId: "", value: ctx_r19.artist.description }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
} }
function ArtistPanelComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r5.artist.description), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function ArtistPanelComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Descripci\u00F3n no disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_21_p_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_21_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_21_p_3_Template_span_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26); const artistTag_r22 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r25.modifyArtistData({ attrName: "tags", attrId: "", value: artistTag_r22 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ArtistPanelComponent_div_1_div_21_p_3_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artistTag_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", artistTag_r22, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r21.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r23 < ctx_r21.artist.tags.length - 1);
} }
function ArtistPanelComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Etiquetas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ArtistPanelComponent_div_1_div_21_p_3_Template, 11, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_21_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r27.showArtistForm({ attrName: "tags", attrId: "", value: "" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r7.artist.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r7.TooltipValues);
} }
function ArtistPanelComponent_div_1_span_25_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_span_25_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r29.showArtistForm({ attrName: "reassignMulti", attrId: ctx_r29.artist.id_artist, value: ctx_r29.artist.id_artist }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r8.TooltipValues);
} }
function ArtistPanelComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r31.showArtistForm({ attrName: "newTheme", attrId: "", value: "" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00A0\u00A0Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "", ctx_r9.mediaPath, "/images/covers/new_cover.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function ArtistPanelComponent_div_1_div_28_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](theme_r33.id);
} }
function ArtistPanelComponent_div_1_div_28_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_28_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41); const theme_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r39.deleteTheme(theme_r33.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r35.TooltipValues);
} }
function ArtistPanelComponent_div_1_div_28_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_28_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_28_span_13_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); const theme_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r42.showArtistForm({ attrName: "reassign", attrId: theme_r33.id, value: theme_r33.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx_r37.TooltipValues);
} }
function ArtistPanelComponent_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_28_Template_img_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const theme_r33 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r45.showItem(theme_r33.id); })("error", function ArtistPanelComponent_div_1_div_28_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r47.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_28_Template_span_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const theme_r33 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r48.showItem(theme_r33.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ArtistPanelComponent_div_1_div_28_p_10_Template, 5, 1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ArtistPanelComponent_div_1_div_28_span_11_Template, 5, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ArtistPanelComponent_div_1_div_28_span_12_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ArtistPanelComponent_div_1_div_28_span_13_Template, 3, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r33 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", theme_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("src", "", ctx_r10.mediaPath, "/images/covers/", theme_r33.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](theme_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.isAdmin);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r53.attrTranslation[ctx_r53.inputAttr], ":");
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_1_input_7_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r60.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", ctx_r54.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r54.inputValue);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ArtistPanelComponent_div_1_div_29_ng_container_1_input_9_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r62.setImagePreview({ input: "avatar", preview: "formPreview", errObj: ctx_r62.formErr }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r55.formErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", ctx_r55.inputAttr);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function ArtistPanelComponent_div_1_div_29_ng_container_1_div_10_Template_img_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r64.updateUrl($event, "user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("src", "", ctx_r56.mediaPath, "/images/artists/", ctx_r56.artist.id_artist, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { height: "150px" }; };
function ArtistPanelComponent_div_1_div_29_ng_container_1_quill_editor_11_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "quill-editor", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_1_quill_editor_11_Template_quill_editor_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r66.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", ctx_r57.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c0))("placeholder", "Escribe algo...")("ngModel", ctx_r57.inputValue);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r59.formErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ArtistPanelComponent_div_1_div_29_ng_container_1_ng_container_6_Template, 4, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ArtistPanelComponent_div_1_div_29_ng_container_1_input_7_Template, 1, 2, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ArtistPanelComponent_div_1_div_29_ng_container_1_input_9_Template, 1, 4, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ArtistPanelComponent_div_1_div_29_ng_container_1_div_10_Template, 2, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ArtistPanelComponent_div_1_div_29_ng_container_1_quill_editor_11_Template, 29, 5, "quill-editor", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ArtistPanelComponent_div_1_div_29_ng_container_1_div_12_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ArtistPanelComponent_div_1_div_29_ng_container_1_div_13_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Editar ", ctx_r49.attrTranslation[ctx_r49.inputAttr], ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.inputAttr == "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.inputAttr != "description" && ctx_r49.inputAttr != "avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.inputAttr == "avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.inputAttr == "avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.inputAttr == "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.formErr.text == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r49.formErr.text != "");
} }
function ArtistPanelComponent_div_1_div_29_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r68.inputSecondValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r50.attrTranslation["surname"], ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r50.inputSecondValue);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r70.nameErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r72.coverErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r74.flagErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r75.flagFileErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_p_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r77.themeErr.text);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Nuevo tema: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r78.newTheme.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_8_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_9_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Car\u00E1tula: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r80.newTheme.cover = $event; })("change", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r81.setImagePreview({ input: "cover", preview: "coverPreview", errObj: ctx_r81.coverErr }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_16_Template, 4, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_17_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Idioma: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r82.newTheme.flag = $event; })("keyup", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r83.searchFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ArtistPanelComponent_div_1_div_29_ng_container_3_p_24_Template, 2, 1, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r84.newTheme.flagFile = $event; })("change", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r85.setImagePreview({ input: "flag", preview: "flagFile", errObj: ctx_r85.flagFileErr }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_img_error_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r86.updateUrl($event, "flag"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_30_Template, 4, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ArtistPanelComponent_div_1_div_29_ng_container_3_ng_container_31_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Etiquetas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r87.newTheme.tags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Letra original: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "quill-editor", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_quill_editor_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r88.newTheme.lyrics.native = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "Letra traducida: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "quill-editor", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_quill_editor_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r89.newTheme.lyrics.esp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](91, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](98, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](99, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](101, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](105, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "Tema: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_ngModelChange_111_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r90.newTheme.themeFile = $event; })("change", function ArtistPanelComponent_div_1_div_29_ng_container_3_Template_input_change_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r91.checkAudioFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](112, ArtistPanelComponent_div_1_div_29_ng_container_3_p_112_Template, 2, 1, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.nameErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.nameErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.nameErr.text == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.coverErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.cover);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.coverErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "", ctx_r51.mediaPath, "/images/covers/new_cover.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.coverErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.coverErr.text == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.flagErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.flagErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.flagFileErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.flagFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "", ctx_r51.mediaPath, "/images/flags/not_found.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.flagFileErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.flagFileErr.text == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](40, _c0))("placeholder", "Escribe algo...")("ngModel", ctx_r51.newTheme.lyrics.native);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](41, _c0))("placeholder", "Escribe algo...")("ngModel", ctx_r51.newTheme.lyrics.esp);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](ctx_r51.themeErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r51.newTheme.themeFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r51.themeErr.text != "");
} }
function ArtistPanelComponent_div_1_div_29_ng_container_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "tema");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "temas");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ArtistPanelComponent_div_1_div_29_ng_container_4_ng_container_12_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artistId_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", artistId_r95.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", artistId_r95.id, " - ", artistId_r95.name, "");
} }
function ArtistPanelComponent_div_1_div_29_ng_container_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ArtistPanelComponent_div_1_div_29_ng_container_4_ng_container_12_option_1_Template, 2, 3, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const artistId_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", artistId_r95.id != ctx_r94.artist.id_artist);
} }
function ArtistPanelComponent_div_1_div_29_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Resignar temas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Mover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ArtistPanelComponent_div_1_div_29_ng_container_4_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ArtistPanelComponent_div_1_div_29_ng_container_4_span_7_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ArtistPanelComponent_div_1_div_29_ng_container_4_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r98.reassignArtist = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Selecciona una");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ArtistPanelComponent_div_1_div_29_ng_container_4_ng_container_12_Template, 2, 1, "ng-container", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r52.inputAttr == "reassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r52.inputAttr == "reassignMulti");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" de ", ctx_r52.artist.name, " ", ctx_r52.artist.surname, " a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r52.reassignArtist);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r52.arstistIds);
} }
function ArtistPanelComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ArtistPanelComponent_div_1_div_29_ng_container_1_Template, 14, 8, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ArtistPanelComponent_div_1_div_29_ng_container_2_Template, 7, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ArtistPanelComponent_div_1_div_29_ng_container_3_Template, 113, 42, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ArtistPanelComponent_div_1_div_29_ng_container_4_Template, 13, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_29_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r100.confirmFrom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ArtistPanelComponent_div_1_div_29_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r102.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.inputAttr != "newTheme" && ctx_r11.inputAttr != "reassign" && ctx_r11.inputAttr != "reassignMulti");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.inputAttr == "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.inputAttr == "newTheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.inputAttr == "reassign" || ctx_r11.inputAttr == "reassignMulti");
} }
function ArtistPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function ArtistPanelComponent_div_1_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r103.updateUrl($event, "artist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ArtistPanelComponent_div_1_span_4_Template, 3, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ArtistPanelComponent_div_1_span_14_Template, 3, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ArtistPanelComponent_div_1_p_15_Template, 21, 3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ArtistPanelComponent_div_1_span_16_Template, 3, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, ArtistPanelComponent_div_1_div_17_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ArtistPanelComponent_div_1_div_18_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ArtistPanelComponent_div_1_div_21_Template, 7, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Temas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ArtistPanelComponent_div_1_span_25_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ArtistPanelComponent_div_1_div_27_Template, 8, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, ArtistPanelComponent_div_1_div_28_Template, 14, 8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ArtistPanelComponent_div_1_div_29_Template, 12, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.mediaPath, "/images/artists/", ctx_r0.artist.id_artist, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r0.artist.name, " ", ctx_r0.artist.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.artist.description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.artist.description == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.artist.themeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showInput && ctx_r0.blackScreenStatus.blackScreenStatus != "");
} }
class ArtistPanelComponent {
    constructor(comunicationService, router, route, manageComponent, DatabaseConexService) {
        this.comunicationService = comunicationService;
        this.router = router;
        this.route = route;
        this.manageComponent = manageComponent;
        this.DatabaseConexService = DatabaseConexService;
        this.candy = { id: 'artist', name: 'Artist', family: 'candy-theme', route: 'Artist', query: {}, routeQuery: '' };
        this.mediaPath = '../../../../../assets/media';
        this.isAdmin = false;
        this.showInput = false;
        this.inputValue = '';
        this.inputSecondValue = '';
        this.inputAttr = '';
        this.attrTranslation = { id_artist: "id", name: "Nombre", surname: "Apellido", description: "descripción", tags: "etiquetas", themeList: "Lista", cover: 'Carátula', newTheme: "Nuevo tema", reassign: 'Reasignar', avatar: 'avatar' };
        this.newTheme = { name: '', flag: '', flagFile: '', cover: [], themeFile: [], tags: '', lyrics: { native: '', esp: '' } };
        this.reassignArtist = 'default';
        this.arstistIds = [];
        this.availableFlags = [];
        this.formErr = { text: '', class: '' };
        this.nameErr = { text: '', class: '' };
        this.flagErr = { text: '', class: '' };
        this.coverErr = { text: '', class: '' };
        this.flagFileErr = { text: '', class: '' };
        this.themeErr = { text: '', class: '' };
        this.blackScreenStatus = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.GlobalVariables;
        this.TooltipValues = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.TooltipValues;
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        this.route.queryParams.subscribe(params => {
            this.DatabaseConexService.getArtistData(params['id']).subscribe(sucess => {
                var _a, _b;
                if (sucess.artist) {
                    this.candy.query['id'] = params['id'];
                    this.artist = new src_app_classes_Artist__WEBPACK_IMPORTED_MODULE_0__.Artist(sucess.artist.id_artist, (_a = sucess.artist) === null || _a === void 0 ? void 0 : _a.name, (_b = sucess.artist) === null || _b === void 0 ? void 0 : _b.surname, sucess.artist.description, sucess.artist.tags, sucess.artist.themeList);
                    this.comunicationService.sendCandy(this.candy);
                    this.user = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
                    this.isAdmin = (parseInt(src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.admin) == 1) ? true : false;
                }
                else {
                    this.router.navigate(['/Home']);
                }
            }, err => {
                this.router.navigate(['/Home']);
            });
        });
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    showArtistForm(attribute) {
        this.clearForm();
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_5__.NotificationManage.disableScroll();
        this.blackScreenStatus.blackScreenStatus = 'show';
        this.showInput = true;
        this.inputAttr = attribute.attrName;
        this.inputValue = attribute.value;
        this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
        if (attribute.attrName == 'reassign' || attribute.attrName == 'reassignMulti') {
            this.arstistIds = [];
            this.DatabaseConexService.getArtistsIds('id_artist').subscribe(sucess => {
                sucess.message.forEach(artistData => {
                    let artistDataSplited = artistData.split('&');
                    if (artistDataSplited.length == 2) {
                        this.arstistIds.push({ id: artistDataSplited[0], name: artistDataSplited[1] });
                    }
                });
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
        if (attribute.attrName == 'newTheme') {
            this.DatabaseConexService.getFlagsNames().subscribe(sucess => {
                this.availableFlags = sucess.message;
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    confirmFrom() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let sendForm = yield this.modifyArtistData({ attrName: this.inputAttr, attrId: '', value: this.inputValue });
            if (this.inputAttr == 'name') {
                this.modifyArtistData({ attrName: 'surname', attrId: '', value: this.inputSecondValue });
            }
            if (sendForm) {
                this.clearForm();
            }
        });
    }
    clearForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_5__.NotificationManage.enableScroll();
        this.blackScreenStatus.blackScreenStatus = '';
        this.showInput = false;
        this.inputAttr = '';
        this.inputValue = '';
        this.inputSecondValue = '';
        this.newTheme = { name: '', flag: '', flagFile: '', cover: [], themeFile: [], tags: '', lyrics: { native: '', esp: '' } };
        this.formErr = { text: '', class: '' };
        this.nameErr = { text: '', class: '' };
        this.flagErr = { text: '', class: '' };
        this.coverErr = { text: '', class: '' };
        this.flagFileErr = { text: '', class: '' };
        this.themeErr = { text: '', class: '' };
        this.reassignArtist = 'default';
    }
    modifyArtistData(attribute) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let sendSucess = false;
            let hasFiles = false;
            let correctForm = false;
            switch (attribute.attrName) {
                case 'avatar':
                    let cover = document.getElementById('avatar');
                    let formData = new FormData();
                    if (this.artist && cover.files && cover.files.length > 0) {
                        formData.append(`artist_avatar&${this.artist.id_artist}`, cover.files[0]);
                        hasFiles = true;
                    }
                    formData.append(`userName`, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name);
                    correctForm = this.checkForm([{ id: 'avatar', value: '' }]);
                    if (correctForm) {
                        yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.toAsync((resolve) => {
                            if (hasFiles) {
                                this.DatabaseConexService.sendFilesToServer(formData).subscribe(sucess => {
                                    sendSucess = true;
                                    resolve(sendSucess);
                                }, err => {
                                    resolve(sendSucess);
                                });
                            }
                            else {
                                sendSucess = true;
                                resolve(sendSucess);
                            }
                        });
                    }
                    return sendSucess;
                case 'newTheme':
                    let name = this.newTheme.name;
                    let flag = this.newTheme.flag;
                    let tags = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_2__.FormValidations.checkTags(this.newTheme.tags);
                    let lyricsNative = this.newTheme.lyrics.native;
                    let lyricsEsp = this.newTheme.lyrics.esp;
                    let formDataFiles = new FormData();
                    let flagFile = document.getElementById('flagFile');
                    let coverFile = document.getElementById('coverFile');
                    let themeFile = document.getElementById('themeFile');
                    formDataFiles.append(`userName`, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name);
                    if (flagFile.files && flagFile.files.length > 0) {
                        formDataFiles.append(`theme_flag&${flag}`, flagFile.files[0]);
                        hasFiles = true;
                    }
                    if (this.artist && coverFile.files && coverFile.files.length > 0) {
                        formDataFiles.append(`theme_cover&${this.artist.id_artist}`, coverFile.files[0]);
                        hasFiles = true;
                    }
                    if (this.artist && themeFile.files && themeFile.files.length > 0) {
                        formDataFiles.append(`theme_audio&${this.artist.id_artist}`, themeFile.files[0]);
                        hasFiles = true;
                    }
                    correctForm = this.checkForm([{ id: 'name', value: name }, { id: 'flag', value: flag }, { id: 'files', value: '' }]);
                    if (correctForm) {
                        yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.toAsync((resolve) => {
                            var _a;
                            if (this.artist) {
                                this.DatabaseConexService.setNewTheme((_a = this.artist) === null || _a === void 0 ? void 0 : _a.id_artist, name, flag, tags, { native: lyricsNative, esp: lyricsEsp }, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                    if (this.artist)
                                        this.artist.setTheme(sucess.message);
                                    if (hasFiles) {
                                        this.DatabaseConexService.sendFilesToServer(formDataFiles).subscribe(sucess => {
                                            sendSucess = true;
                                            resolve(sendSucess);
                                        }, err => {
                                            resolve(sendSucess);
                                        });
                                    }
                                    else {
                                        sendSucess = true;
                                        resolve(sendSucess);
                                    }
                                }, err => {
                                    console.error(`Error: ${err}`);
                                    resolve(sendSucess);
                                });
                            }
                        });
                    }
                    return sendSucess;
                case 'reassignMulti':
                    if (this.reassignArtist != 'default') {
                        yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.toAsync((resolve) => {
                            if (this.artist) {
                                this.DatabaseConexService.reassignArtistThemes(this.artist.id_artist, this.reassignArtist, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                    if (this.artist) {
                                        this.artist.removeAllThemes();
                                        sendSucess = true;
                                        resolve(sendSucess);
                                    }
                                    else {
                                        resolve(sendSucess);
                                    }
                                }, err => {
                                    console.error(`Error: ${err}`);
                                    resolve(sendSucess);
                                });
                            }
                        });
                    }
                    return sendSucess;
                case 'reassign':
                    if (this.reassignArtist != 'default') {
                        yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.toAsync((resolve) => {
                            if (this.artist) {
                                this.DatabaseConexService.reassignArtistTheme(this.artist.id_artist, this.reassignArtist, attribute.value, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                    if (this.artist) {
                                        this.artist.removeTheme(attribute.value);
                                        sendSucess = true;
                                        resolve(sendSucess);
                                    }
                                    else {
                                        resolve(sendSucess);
                                    }
                                }, err => {
                                    console.error(`Error: ${err}`);
                                    resolve(sendSucess);
                                });
                            }
                        });
                    }
                    return sendSucess;
                default:
                    attribute.value = (attribute.attrName == 'tags') ? this.modifyArtistTag(attribute.value) : attribute.value;
                    yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_3__.DataManage.toAsync((resolve) => {
                        if (this.artist) {
                            this.DatabaseConexService.setArtistAttribute(this.artist.id_artist, attribute.attrName, (attribute.value) ? attribute.value : '', src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                if (sucess.message) {
                                    this.artist = new src_app_classes_Artist__WEBPACK_IMPORTED_MODULE_0__.Artist(sucess.message.id_artist, sucess.message.name, sucess.message.surname, sucess.message.description, sucess.message.tags, sucess.message.themeList);
                                    sendSucess = true;
                                    if (attribute.attrName == 'id_artist') {
                                        this.router.navigate(['/Artist'], { queryParams: { id: this.artist.id_artist } });
                                    }
                                    resolve(sendSucess);
                                }
                                else {
                                    resolve(sendSucess);
                                }
                            }, err => {
                                console.error(`Error: ${err.error}`);
                                if (attribute.attrName == 'id_artist' && err.error.status == 'id-exists') {
                                    this.formErr.text = "Id en uso";
                                }
                                resolve(sendSucess);
                            });
                        }
                    });
                    return sendSucess;
            }
        });
    }
    checkForm(data) {
        let correctFiles = 0;
        data.forEach(singleData => {
            switch (singleData.id) {
                case 'name':
                    if (singleData.value != '') {
                        this.nameErr.class = '';
                        this.nameErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.nameErr.class = 'input-error';
                        this.nameErr.text = 'Campo obligatorio';
                    }
                    break;
                case 'flag':
                    if (singleData.value != '') {
                        this.flagErr.class = '';
                        this.flagErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.flagErr.class = 'input-error';
                        this.flagErr.text = 'Campo obligatorio';
                    }
                    break;
                case 'avatar':
                    if (this.formErr.text == '' || this.formErr.class == '') {
                        this.formErr.class = '';
                        this.formErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.formErr.class = 'input-error';
                        this.formErr.text = 'Formato incorrecto';
                    }
                    break;
                case 'files':
                    let files = [this.coverErr, this.flagFileErr, this.themeErr];
                    let checkFilesError = true;
                    files.forEach(file => {
                        if (file.text != '' || file.class != '') {
                            checkFilesError = false;
                        }
                    });
                    correctFiles = (checkFilesError) ? correctFiles + 1 : correctFiles;
                    break;
            }
        });
        return (correctFiles == data.length);
    }
    modifyArtistTag(artistTag) {
        if (this.artist) {
            let newTags = [...this.artist.tags];
            let tagExists = this.artist.tags.indexOf(artistTag);
            (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(artistTag);
            return newTags;
        }
        return [];
    }
    deleteArtist(id) {
        if (this.artist) {
            this.DatabaseConexService.removeArtist(this.artist.id_artist, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                this.router.navigate(['/Home']);
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    deleteTheme(themeId) {
        if (this.artist) {
            this.DatabaseConexService.removeTheme(this.artist.id_artist, themeId, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                var _a;
                if (this.artist) {
                    this.artist.removeTheme(themeId);
                }
                (_a = this.artist) === null || _a === void 0 ? void 0 : _a.themeList.map;
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    searchFlag() {
        let isFlagFileUpload = document.getElementById('flagFile');
        if (!isFlagFileUpload || isFlagFileUpload.files && isFlagFileUpload.files.length == 0) {
            let flagPreview = document.getElementById('flagPreview');
            let path = (this.availableFlags.indexOf(this.newTheme.flag) != -1) ? this.newTheme.flag : 'not_found';
            flagPreview.src = `${this.mediaPath}/images/flags/${path}.png`;
        }
    }
    setImagePreview(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var reader = new FileReader();
            let files;
            let imagePreview;
            let errMessage;
            let errClass;
            switch (mode.input) {
                case 'avatar':
                    files = document.getElementById('avatar');
                    imagePreview = document.getElementById('formPreview');
                    break;
                case 'flag':
                    files = document.getElementById('flagFile');
                    imagePreview = document.getElementById('flagPreview');
                    break;
                case 'cover':
                    files = document.getElementById('coverFile');
                    imagePreview = document.getElementById('coverPreview');
                    break;
            }
            errMessage = yield new Promise(resolve => {
                reader.onload = function () {
                    let result = reader.result;
                    if (imagePreview && result && result.split(";")[0].split("/")[1] == "png") {
                        imagePreview.src = reader.result;
                        errClass = '';
                        errMessage = '';
                    }
                    else {
                        errClass = 'input-error';
                        errMessage = 'Formato incorrecto';
                    }
                    resolve(errMessage);
                };
                if (files && files.files)
                    reader.readAsDataURL(files.files[0]);
            });
            mode.errObj.text = errMessage;
            mode.errObj.class = errClass;
            if (mode.input == 'cover') {
                this.coverErr.text = errMessage;
                this.coverErr.class = errClass;
            }
            if (mode.input == 'flag') {
                this.flagFileErr.text = errMessage;
                this.flagFileErr.class = errClass;
            }
        });
    }
    checkAudioFile() {
        let files = document.getElementById('themeFile');
        if (files.files) {
            let extension = files.files[0].name.split('.')[1];
            if (extension == 'mp3') {
                this.themeErr.text = '';
                this.themeErr.class = '';
            }
            else {
                this.themeErr.text = 'Formato incorrecto';
                this.themeErr.class = 'input-error';
            }
        }
    }
    showItem(id) {
        this.router.navigate(['/Theme'], { queryParams: { id: id } });
    }
}
ArtistPanelComponent.ɵfac = function ArtistPanelComponent_Factory(t) { return new (t || ArtistPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_6__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__.ManageComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_8__.DatabaseConexService)); };
ArtistPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ArtistPanelComponent, selectors: [["app-artist-panel"]], decls: 2, vars: 1, consts: [["id", "homeContainer"], [4, "ngIf"], [1, "display-inline", 2, "width", "60%", "min-height", "500px", "background-color", "rgba(255,255,255, 0.1)", "padding", "25px", "box-sizing", "border-box"], [2, "float", "left", "margin-right", "10px", "margin-bottom", "0px"], [2, "width", "200px", "border-radius", "50%", "border", "2px solid rgba(25, 25, 25, 0.5)", "margin-right", "16px", 3, "src", "error"], ["id", "pencil-writting-animation", "class", "display-inline", "style", "vertical-align: top;", 4, "ngIf"], [2, "margin-top", "10px", "margin-bottom", "5px", "text-align", "center"], [1, "attr-name"], ["id", "pencil-writting-animation", "class", "display-inline", 4, "ngIf"], ["style", "margin-top: 5px; margin-bottom: 0px;", 4, "ngIf"], ["id", "pencil-writting-animation", "class", "display-inline", "style", "float: right;", 4, "ngIf"], ["class", "text-color-09", 3, "innerHTML", 4, "ngIf"], [1, "display-inline", "vertical-top", 2, "width", "40%", "padding", "15px", "box-sizing", "border-box"], ["class", "txt-horizontal-center", 4, "ngIf"], [1, "title-back"], ["tooltip", "Mover temas", "style", "color: black; text-shadow: none; float: right; transform: translateY(-10%); font-weight: normal;", "class", "my-vinyl-icons-font font-size-150 cursor-pointer", 3, "options", "click", 4, "ngIf"], [2, "max-height", "500px", "overflow", "auto", "padding", "15px"], ["class", "cursor-pointer container-card", "style", "min-width: 200px; background-color: gray; padding: 15px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 3, "click", 4, "ngIf"], ["class", "container-card", "style", "min-width: 200px; background-color: gray; padding: 15px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 3, "id", 4, "ngFor", "ngForOf"], ["class", "form-style", 4, "ngIf"], ["id", "pencil-writting-animation", 1, "display-inline", 2, "vertical-align", "top"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "pencil-writting", "writting", "cursor-pointer", "display-inline", "font-size-150", 3, "options", "click"], ["id", "pencil-writting-animation", 1, "display-inline"], [2, "margin-top", "5px", "margin-bottom", "0px"], ["tooltip", "Borrar", "id", "trash-can-animation", 1, "display-inline", "my-vinyl-icons-font", "font-size-150", 3, "options", "click"], [1, "trash-cap", "cursor-pointer", "display-inline"], [1, "trash-body", "cursor-pointer", "display-inline"], ["id", "pencil-writting-animation", 1, "display-inline", 2, "float", "right"], [1, "text-color-09", 3, "innerHTML"], [1, "txt-horizontal-center"], [1, "txt-horizontal-left", "title-back", 2, "margin-top", "0px", "margin-bottom", "10px"], ["class", "display-inline", 4, "ngFor", "ngForOf"], ["tooltip", "Nuevo", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "margin", "0px", 3, "options", "click"], [1, "display-inline"], [2, "color", "#e6e6e6"], ["tooltip", "Borrar", "id", "trash-can-animation", 1, "my-vinyl-icons-font", "display-inline", "font-size-150", 3, "options", "click"], ["tooltip", "Mover temas", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "color", "black", "text-shadow", "none", "float", "right", "transform", "translateY(-10%)", "font-weight", "normal", 3, "options", "click"], [1, "cursor-pointer", "container-card", 2, "min-width", "200px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap", 3, "click"], [1, "display-inline", 2, "vertical-align", "middle", "height", "70px", "min-width", "70px", "margin-left", "10px", "margin-right", "10px"], [2, "width", "70px", "border", "2px solid", "box-sizing", "border-box", 3, "src"], [1, "display-inline", 2, "vertical-align", "middle"], [2, "overflow", "hidden", "text-overflow", "ellipsis", "margin-top", "5px", "margin-bottom", "5px"], [1, "my-vinyl-icons-font", "font-size-150", 2, "vertical-align", "middle"], [1, "container-card", 2, "min-width", "200px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap", 3, "id"], [1, "cursor-pointer", 2, "width", "70px", "border", "2px solid", "box-sizing", "border-box", 3, "src", "click", "error"], [1, "display-inline", 2, "width", "58%", "vertical-align", "middle"], [1, "cursor-pointer", 3, "click"], ["style", "overflow: hidden; text-overflow: ellipsis; margin-top: 5px; margin-bottom: 5px;", 4, "ngIf"], ["tooltip", "Borrar", "id", "trash-can-animation", "class", "display-inline my-vinyl-icons-font font-size-150", "style", "position: relative;", 3, "options", "click", 4, "ngIf"], ["tooltip", "Borrar", "id", "trash-can-animation", 1, "display-inline", "my-vinyl-icons-font", "font-size-150", 2, "position", "relative", 3, "options", "click"], ["tooltip", "Mover tema", 1, "my-vinyl-icons-font", "cursor-pointer", "display-inline", "font-size-150", 3, "options", "click"], [1, "form-style"], [2, "text-align", "center"], [1, "black-button", 2, "margin-bottom", "0px", 3, "click"], [1, "title-back-black", 2, "margin-top", "0px"], [2, "text-align", "left", "display", "inline-block"], ["type", "text", 3, "id", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "file", "style", "margin: 10px;", 3, "id", "class", "change", 4, "ngIf"], ["class", "artist-avatar-back-s", "style", "margin: 10px; display: inline-block; vertical-align: middle;", 4, "ngIf"], [3, "id", "styles", "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [2, "text-align", "left", "display", "inline-block", "margin", "0px"], ["type", "text", 3, "id", "ngModel", "ngModelChange"], ["type", "file", 2, "margin", "10px", 3, "id", "change"], [1, "artist-avatar-back-s", 2, "margin", "10px", "display", "inline-block", "vertical-align", "middle"], ["id", "formPreview", 3, "src", "error"], [3, "id", "styles", "placeholder", "ngModel", "ngModelChange"], ["quill-editor-toolbar", "", 2, "white-space", "pre-line", "padding-left", "15px", "text-align", "center"], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "-1", 1, "ql-indent"], ["type", "button", "value", "+1", 1, "ql-indent"], [1, "ql-color"], [1, "ql-background"], [1, "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], ["type", "button", 1, "ql-clean"], [1, "text-error", 2, "margin-left", "10px", "text-align", "center"], [2, "display", "inline-block", "margin", "0px"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "title-back-black"], [2, "padding", "10px"], ["for", "name"], [2, "margin", "0px", "margin-bottom", "10px"], ["for", "cover"], ["id", "coverFile", "type", "file", 3, "ngModel", "ngModelChange", "change"], [1, "cover-back-preview-s", 2, "display", "inline-block", "position", "absolute", "margin-left", "60px", "transform", "translateY(-36%)"], ["id", "coverPreview", 3, "src"], ["for", "flag"], ["id", "flag", "type", "text", 3, "ngModel", "ngModelChange", "keyup"], ["style", "margin-left: 10px;", "class", "text-error", 4, "ngIf"], ["id", "flagFile", "type", "file", 3, "ngModel", "ngModelChange", "change"], [1, "flag-back-preview", 2, "display", "inline-block", "position", "absolute", "margin-left", "60px", "transform", "translateY(-36%)"], ["id", "flagPreview", 3, "src", "error"], ["for", "tags"], ["id", "tags", "type", "text", "placeholder", "tag, tag, tag", 3, "ngModel", "ngModelChange"], [2, "margin", "0px"], ["id", "lyrics_native", 3, "styles", "placeholder", "ngModel", "ngModelChange"], ["id", "lyrics_esp", 3, "styles", "placeholder", "ngModel", "ngModelChange"], ["for", "theme"], ["id", "themeFile", "type", "file", 3, "ngModel", "ngModelChange", "change"], [1, "text-error", 2, "margin-left", "10px"], [1, "text-error", 2, "margin-left", "10px", "display", "inline-block"], ["for", "reassignArtist"], ["name", "reassignArtist", "id", "reassignArtist", 3, "ngModel", "ngModelChange"], ["disabled", "", "value", "default"], [4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [3, "value"]], template: function ArtistPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ArtistPanelComponent_div_1_Template, 30, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.artist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor], pipes: [_services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_9__.SafeHtmlPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpc3QtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7588:
/*!*******************************************************************!*\
  !*** ./src/app/components/centre/showcase/home/home.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/variables/sessionVariables */ 8168);
/* harmony import */ var _utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/variables/variables */ 7347);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/tools/FormValidations */ 8112);
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quill */ 6858);














function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Nuevo artista");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.showHomeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_p_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r5.showHomeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.mediaPath, "/images/covers/new_cover.png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/Theme"]; };
const _c1 = function (a0) { return { id: a0 }; };
const _c2 = function () { return ["/Artist"]; };
function HomeComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function HomeComponent_div_2_div_4_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Autor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("id", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("src", "", ctx_r7.mediaPath, "/images/covers/", item_r8.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c1, item_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](15, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, item_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c1, item_r8.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", item_r8.artist.name, " ", item_r8.artist.surname, "");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeComponent_div_2_div_4_Template, 14, 21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](category_r6.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", category_r6.value.items);
} }
function HomeComponent_div_4_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r11.avatarErr.text);
} }
function HomeComponent_div_4_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r12.idErr.text);
} }
function HomeComponent_div_4_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r13.nameErr.text);
} }
const _c3 = function () { return { height: "150px" }; };
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nuevo artista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Avatar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.newArtist.avatarFile = $event; })("change", function HomeComponent_div_4_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.setImagePreview("avatar"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, HomeComponent_div_4_p_14_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.newArtist.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, HomeComponent_div_4_p_24_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r18.newArtist.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, HomeComponent_div_4_p_29_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Apellidos: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r19.newArtist.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "quill-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_quill_editor_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.newArtist.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Etiquetas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_4_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r21.newArtist.tags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.confirmFrom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.avatarErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.newArtist.avatarFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.mediaPath, "/images/users/default-profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.avatarErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.idErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.newArtist.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.idErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.nameErr.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.newArtist.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.nameErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.newArtist.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](21, _c3))("placeholder", "Escribe algo...")("ngModel", ctx_r2.newArtist.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.newArtist.tags);
} }
class HomeComponent {
    constructor(DatabaseConexService, comunicationService, router, manageComponent) {
        this.DatabaseConexService = DatabaseConexService;
        this.comunicationService = comunicationService;
        this.router = router;
        this.manageComponent = manageComponent;
        this.candy = { id: 'home', name: 'Home', family: 'candy-home', route: 'Home', query: {}, routeQuery: '' };
        this.mediaPath = '../../../../../assets/media';
        this.categories = _utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__.Categories;
        this.isAdmin = false;
        this.showForm = false;
        this.newArtist = { id: '', name: '', surname: '', description: '', tags: '', avatarFile: [] };
        this.artistIds = [];
        this.artistIdsLoad = false;
        this.idErr = { text: '', class: '' };
        this.nameErr = { text: '', class: '' };
        this.avatarErr = { text: '', class: '' };
        this.blackScreenStatus = _utils_variables_variables__WEBPACK_IMPORTED_MODULE_1__.GlobalVariables;
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        this.comunicationService.sendCandy(this.candy);
        let query = ['OWB', 'MR', 'CW'];
        this.DatabaseConexService.getArtistDataByQuery(query, 4, 1, ['themeListTags']).subscribe((sucess) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (sucess.message) {
                this.generateShowcaseItems(sucess.message);
            }
        }), err => {
            console.error(`Error: ${err}`);
        });
    }
    generateShowcaseItems(paginateList) {
        for (const category in this.categories) {
            let items = paginateList[category]['themeListTags']['docs'];
            this.categories[category].items = items;
        }
        this.isAdmin = (parseInt(_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues.activeUser.admin) == 1) ? true : false;
    }
    showItem(element) {
        let elementId = element;
        let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;
        this.router.navigate(['/Theme'], { queryParams: { id: itemId } });
    }
    showHomeForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__.NotificationManage.disableScroll();
        this.showForm = true;
        this.DatabaseConexService.getArtistsIds('id_artist').subscribe(sucess => {
            sucess.message.forEach(artistData => {
                let artistDataSplited = artistData.split('&');
                if (artistDataSplited.length == 2) {
                    this.artistIds.push(artistDataSplited[0]);
                    this.artistIdsLoad = true;
                }
            });
            this.blackScreenStatus.blackScreenStatus = 'show';
        }, err => {
            console.error(`Error: ${err}`);
        });
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    confirmFrom() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let sendForm = yield this.modifyThemeData();
            if (sendForm) {
                this.resetForm();
            }
        });
    }
    resetForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__.NotificationManage.enableScroll();
        this.showForm = false;
        this.setImagePreview('default');
        this.newArtist = { id: '', name: '', surname: '', description: '', tags: '', avatarFile: [] };
        this.showForm = false;
        this.blackScreenStatus.blackScreenStatus = "";
    }
    modifyThemeData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let sendSucess = false;
            let hasFiles = false;
            let id = this.newArtist.id.toLowerCase();
            let name = this.newArtist.name;
            let surname = this.newArtist.surname;
            let description = this.newArtist.description;
            let tags = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__.FormValidations.checkTags(this.newArtist.tags);
            let formDataFiles = new FormData();
            let avatarFile = document.getElementById('avatarFile');
            if (avatarFile.files && avatarFile.files.length > 0) {
                formDataFiles.append(`artist_avatar&${id}`, avatarFile.files[0]);
                formDataFiles.append(`userName`, _utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues.activeUser.name);
                hasFiles = true;
            }
            let correctForm = this.checkForm([{ id: 'id', value: id }, { id: 'name', value: name }, { id: 'avatar', value: '' }]);
            if (correctForm) {
                yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.toAsync((resolve) => {
                    this.DatabaseConexService.setNewArtist(id, name, surname, description, tags, _utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues.activeUser.name).subscribe(sucess => {
                        if (hasFiles) {
                            this.DatabaseConexService.sendFilesToServer(formDataFiles).subscribe(sucess => {
                                sendSucess = true;
                                resolve(sendSucess);
                            }, err => {
                                resolve(sendSucess);
                            });
                        }
                        else {
                            sendSucess = true;
                            resolve(sendSucess);
                        }
                    }, err => {
                        console.error(`Error: ${err}`);
                        resolve(sendSucess);
                    });
                });
            }
            return sendSucess;
        });
    }
    checkForm(data) {
        let correctFiles = 0;
        data.forEach(singleData => {
            switch (singleData.id) {
                case 'id':
                    if (singleData.value != '') {
                        if (this.checkId(singleData.value)) {
                            this.idErr.class = '';
                            this.idErr.text = '';
                            correctFiles++;
                        }
                        else {
                            this.idErr.class = 'input-error';
                            this.idErr.text = 'Id en uso';
                        }
                    }
                    else {
                        this.idErr.class = 'input-error';
                        this.idErr.text = 'Campo obligatorio';
                    }
                    break;
                case 'name':
                    if (singleData.value != '') {
                        this.nameErr.class = '';
                        this.nameErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.nameErr.class = 'input-error';
                        this.nameErr.text = 'Campo obligatorio';
                    }
                    break;
                case 'avatar':
                    if (this.avatarErr.text == '' && this.avatarErr.class == '') {
                        this.avatarErr.class = '';
                        this.avatarErr.text = '';
                        correctFiles++;
                    }
                    break;
            }
        });
        return (correctFiles == data.length);
    }
    checkId(id) {
        let idExists = this.artistIds.indexOf(id);
        return (this.artistIdsLoad && idExists == -1) ? true : false;
    }
    setImagePreview(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var reader = new FileReader();
            let files;
            let imagePreview;
            let errMessage;
            let errClass;
            let loadFile = false;
            switch (mode) {
                case 'avatar':
                    files = document.getElementById('avatarFile');
                    imagePreview = document.getElementById('avatarPreview');
                    loadFile = true;
                    break;
                case 'default':
                    let avatarPreview = document.getElementById('avatarPreview');
                    avatarPreview.src = 'ghotAvatar.png';
                    break;
            }
            if (loadFile) {
                errMessage = yield new Promise(resolve => {
                    reader.onload = function () {
                        let result = reader.result;
                        if (imagePreview && result && result.split(";")[0].split("/")[1] == "png") {
                            imagePreview.src = reader.result;
                            errClass = '';
                            errMessage = '';
                        }
                        else {
                            errClass = 'input-error';
                            errMessage = 'Formato incorrecto';
                        }
                        resolve(errMessage);
                    };
                    if (files && files.files)
                        reader.readAsDataURL(files.files[0]);
                });
                if (mode == 'avatar') {
                    this.avatarErr.text = errMessage;
                    this.avatarErr.class = errClass;
                }
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_6__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__.ManageComponent)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 5, consts: [["id", "homeContainer"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "form-style", 4, "ngIf"], [1, "title-back"], [2, "margin-left", "25px"], [1, "display-inline", "container-card", 2, "width", "260px", "margin", "5px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap"], [1, "display-inline", 2, "vertical-align", "middle", "height", "70px", "min-width", "70px", "margin-right", "12px"], [1, "cursor-pointer", 2, "width", "70px", "border", "2px solid", "box-sizing", "border-box", 3, "src", "click"], [1, "display-inline", 2, "text-align", "left", "width", "65%", "vertical-align", "middle"], [1, "cursor-pointer", 2, "overflow", "hidden", "text-overflow", "ellipsis", "margin-top", "5px", "margin-bottom", "5px", 3, "click"], [1, "my-vinyl-icons-font", "font-size-150", 2, "vertical-align", "middle"], ["class", "display-inline container-card", "style", "width: 275px; margin: 5px; background-color: gray; padding: 15px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 3, "id", 4, "ngFor", "ngForOf"], [1, "display-inline", "container-card", 2, "width", "275px", "margin", "5px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap", 3, "id"], [1, "cursor-pointer", 2, "width", "70px", "border", "2px solid", "box-sizing", "border-box", 3, "routerLink", "queryParams", "src", "error"], [2, "overflow", "hidden", "text-overflow", "ellipsis", "margin-top", "5px", "margin-bottom", "5px"], [1, "attr-name"], [1, "cursor-pointer", 3, "routerLink", "queryParams"], [1, "form-style"], [1, "txt-horizontal-center"], [1, "title-back-black"], [1, "txt-horizontal-left", 2, "padding-left", "15px", "padding-right", "15px"], ["for", "avatar"], [1, "display-inline"], ["id", "avatarFile", "type", "file", 3, "ngModel", "ngModelChange", "change"], [1, "display-inline", "avatar-back", 2, "height", "100px", "width", "100px", "margin-left", "15px", "float", "right", "transform", "translateY(15%)"], ["id", "avatarPreview", 2, "height", "100px", 3, "src"], ["style", "margin-left: 10px;", "class", "text-error", 4, "ngIf"], [2, "white-space", "nowrap"], [1, "display-inline", 2, "width", "50%"], ["for", "id"], ["type", "text", 3, "ngModel", "ngModelChange"], ["for", "name"], ["for", "surname"], [1, "display-inline", 2, "width", "50%", "vertical-align", "top"], ["for", "description"], [3, "styles", "placeholder", "ngModel", "ngModelChange"], ["quill-editor-toolbar", "", 2, "white-space", "pre-line", "padding-left", "15px", "text-align", "center"], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "-1", 1, "ql-indent"], ["type", "button", "value", "+1", 1, "ql-indent"], [1, "ql-color"], [1, "ql-background"], [1, "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], ["type", "button", 1, "ql-clean"], ["for", "tags"], ["id", "tags", "type", "text", "placeholder", "tag, tag, tag", 3, "ngModel", "ngModelChange"], [1, "black-button", 2, "margin-right", "10px", 3, "click"], [1, "black-button", 2, "margin-left", "10px", 3, "click"], [1, "text-error", 2, "margin-left", "10px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 14, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 78, 22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showForm && ctx.blackScreenStatus.blackScreenStatus != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_13__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8668:
/*!******************************************************************!*\
  !*** ./src/app/components/centre/showcase/showcase.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* binding */ ShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class ShowcaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(); };
ShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["app-showcase"]], decls: 2, vars: 0, consts: [["id", "showcase"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["#showcase[_ngcontent-%COMP%]{\r\n\r\n\theight: 100%;\r\n\tmargin: 5px;\r\n\tmargin-top: 0;\r\n\tmargin-right: 5px;\r\n\tpadding: 10px;\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 2px;\r\n\r\n}\r\n\r\n#showcase.color[_ngcontent-%COMP%]{\r\n\r\n\t\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3djYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixrQkFBa0I7O0FBRW5COztBQUVBOztDQUVDLDJEQUEyRDs7QUFFNUQiLCJmaWxlIjoic2hvd2Nhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93Y2FzZXtcclxuXHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRwYWRkaW5nLXRvcDogMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG59XHJcblxyXG4jc2hvd2Nhc2UuY29sb3J7XHJcblxyXG5cdC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpIHJnYigxMjgsIDEyOCwgMTI4KTsqL1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 348:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/centre/showcase/theme-information/theme-information.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeInformationComponent": () => (/* binding */ ThemeInformationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_classes_Themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/Themes */ 4084);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../audio-bar/audio-bar/audio-bar.component */ 5094);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _services_pipes_DateFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/pipes/DateFormat */ 8174);
/* harmony import */ var _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/pipes/DomSanitized */ 7605);



















function ThemeInformationComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.mediaPath, "/images/load.gif", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function ThemeInformationComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_12_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r20.showThemeForm({ attrName: "cover", attrId: "cover", value: ctx_r20.theme.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_12_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r22.showThemeForm({ attrName: "audio", attrId: "audio", value: ctx_r22.theme.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_12_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r23.showThemeForm({ attrName: "flag", attrId: "", value: ctx_r23.theme.flag }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
} }
function ThemeInformationComponent_div_1_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_span_18_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r24.showThemeForm({ attrName: "name", attrId: "", value: ctx_r24.theme.name }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r3.TooltipValues);
} }
function ThemeInformationComponent_div_1_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_ng_container_30_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r26.thumbValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "@");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r4.TooltipValues);
} }
function ThemeInformationComponent_div_1_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_ng_container_31_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r28.thumbValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "@");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r5.TooltipValues);
} }
function ThemeInformationComponent_div_1_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_ng_container_38_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r30.thumbValue(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r6.TooltipValues);
} }
function ThemeInformationComponent_div_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_ng_container_39_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r32.thumbValue(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r7.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_46_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r34.showThemeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r8.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_47_p_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ThemeInformationComponent_div_1_div_47_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_47_p_3_Template_span_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const themeTag_r37 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r40.modifyThemeData({ attrName: "tags", attrId: "", value: themeTag_r37 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ThemeInformationComponent_div_1_div_47_p_3_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const themeTag_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", themeTag_r37, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r36.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r38 < ctx_r36.theme.tags.length - 1);
} }
function ThemeInformationComponent_div_1_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Etiquetas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ThemeInformationComponent_div_1_div_47_p_3_Template, 11, 3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_47_Template_p_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r42.showThemeForm({ attrName: "tags", attrId: "", value: "" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r9.theme.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r9.TooltipValues);
} }
function ThemeInformationComponent_div_1_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_ng_container_54_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r44.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r10.comment);
} }
function ThemeInformationComponent_div_1_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_ng_container_55_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r46.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r11.comment);
} }
function ThemeInformationComponent_div_1_div_64_p_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "DateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, comment_r48.date), "");
} }
function ThemeInformationComponent_div_1_div_64_p_1_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_64_p_1_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57); const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r55.deleteComment(comment_r48.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r52.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_64_p_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_64_p_1_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60); const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r58.removeComment(comment_r48.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r53.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_64_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ThemeInformationComponent_div_1_div_64_p_1_span_3_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ThemeInformationComponent_div_1_div_64_p_1_span_5_Template, 5, 1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ThemeInformationComponent_div_1_div_64_p_1_span_6_Template, 5, 1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("routerLink", "/Profile/", comment_r48.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](comment_r48.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", comment_r48.date != "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r49.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r49.isAdmin && comment_r48.userName == ctx_r49.user);
} }
function ThemeInformationComponent_div_1_div_64_p_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "DateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, comment_r48.date), "");
} }
function ThemeInformationComponent_div_1_div_64_p_2_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_64_p_2_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r68); const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r66.deleteComment(comment_r48.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r63.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_64_p_2_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_64_p_2_span_7_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r71); const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r69.removeComment(comment_r48.commentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r64.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_64_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ThemeInformationComponent_div_1_div_64_p_2_span_4_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ThemeInformationComponent_div_1_div_64_p_2_span_6_Template, 5, 1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ThemeInformationComponent_div_1_div_64_p_2_span_7_Template, 5, 1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](comment_r48.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", comment_r48.date != "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r50.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r50.isAdmin && comment_r48.userName == ctx_r50.user);
} }
function ThemeInformationComponent_div_1_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ThemeInformationComponent_div_1_div_64_p_1_Template, 7, 5, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ThemeInformationComponent_div_1_div_64_p_2_Template, 8, 4, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", comment_r48.activeUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !comment_r48.activeUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](comment_r48.comment);
} }
function ThemeInformationComponent_div_1_img_69_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_img_69_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r73.switchLyrics(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("src", "", ctx_r13.mediaPath, "/images/flags/", ctx_r13.flag, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r13.TooltipValues);
} }
function ThemeInformationComponent_div_1_span_71_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_span_71_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r75.showThemeForm({ attrName: "lyrics", attrId: "", value: ctx_r75.theme.lyrics.native, secondValue: ctx_r75.theme.lyrics.esp }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx_r14.TooltipValues);
} }
function ThemeInformationComponent_div_1_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx_r15.lyrics), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
} }
function ThemeInformationComponent_div_1_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Letra no disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/Theme"]; };
const _c1 = function (a0) { return { id: a0 }; };
const _c2 = function () { return ["/Artist"]; };
function ThemeInformationComponent_div_1_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function ThemeInformationComponent_div_1_div_81_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r78.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r77 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", theme_r77.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("src", "", ctx_r17.mediaPath, "/images/covers/", theme_r77.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c1, theme_r77.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](15, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](16, _c1, theme_r77.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](theme_r77.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](18, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c1, theme_r77.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", theme_r77.artist.name, " ", theme_r77.artist.surname, "");
} }
function ThemeInformationComponent_div_1_div_84_ng_container_8_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](list_r82.name);
} }
function ThemeInformationComponent_div_1_div_84_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ThemeInformationComponent_div_1_div_84_ng_container_8_option_1_Template, 2, 1, "option", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r82 = ctx.$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r80.isSessionUser && list_r82.userManage);
} }
function ThemeInformationComponent_div_1_div_84_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_84_ng_container_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r85.addToThmemeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_84_ng_container_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r87.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r81.buttonThemeList);
} }
function ThemeInformationComponent_div_1_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "A\u00F1adir tema:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Lista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_div_84_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r88.selectedThemeList = $event; })("change", function ThemeInformationComponent_div_1_div_84_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r90.checkInList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "-- Selecciona lista --");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ThemeInformationComponent_div_1_div_84_ng_container_8_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ThemeInformationComponent_div_1_div_84_ng_container_12_Template, 5, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r18.selectedThemeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r18.userThemeLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r18.selectedThemeList != ctx_r18.defaultThemeList);
} }
function ThemeInformationComponent_div_1_div_85_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_div_85_ng_container_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r100.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, ctx_r91.attrTranslation[ctx_r91.inputAttr]), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r91.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r91.inputValue);
} }
const _c3 = function () { return { height: "125px" }; };
function ThemeInformationComponent_div_1_div_85_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Letra original:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "quill-editor", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_div_85_ng_container_6_Template_quill_editor_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r102.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Letra traducida:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "quill-editor", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_div_85_ng_container_6_Template_quill_editor_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r104.inputSecondValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](55, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](60, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](65, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r92.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c3))("placeholder", "Escribe algo...")("ngModel", ctx_r92.inputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r92.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](9, _c3))("placeholder", "Escribe algo...")("ngModel", ctx_r92.inputSecondValue);
} }
function ThemeInformationComponent_div_1_div_85_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ThemeInformationComponent_div_1_div_85_input_7_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r105.checkAudioFile("audio"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r93.formErrFile.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r93.inputAttr);
} }
function ThemeInformationComponent_div_1_div_85_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ThemeInformationComponent_div_1_div_85_input_8_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r107.setImagePreview("cover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r94.formErrFile.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r94.inputAttr);
} }
function ThemeInformationComponent_div_1_div_85_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ThemeInformationComponent_div_1_div_85_input_9_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r109.setImagePreview("flag-file"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r95.formErrFile.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "", ctx_r95.inputAttr, "-file");
} }
function ThemeInformationComponent_div_1_div_85_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function ThemeInformationComponent_div_1_div_85_div_10_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function ThemeInformationComponent_div_1_div_85_div_10_img_3_Template_img_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4); return ctx_r114.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("src", "", ctx_r112.mediaPath, "/images/covers/", ctx_r112.theme.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function ThemeInformationComponent_div_1_div_85_div_10_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function ThemeInformationComponent_div_1_div_85_div_10_img_4_Template_img_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4); return ctx_r116.updateUrl($event, "flag"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("src", "", ctx_r113.mediaPath, "/images/flags/", ctx_r113.theme.flag, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function ThemeInformationComponent_div_1_div_85_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ThemeInformationComponent_div_1_div_85_div_10_ng_container_1_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ThemeInformationComponent_div_1_div_85_div_10_img_3_Template, 1, 2, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ThemeInformationComponent_div_1_div_85_div_10_img_4_Template, 1, 2, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r96.inputAttr == "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("", ctx_r96.inputAttr, "-back-preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r96.inputAttr == "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r96.inputAttr == "flag");
} }
function ThemeInformationComponent_div_1_div_85_textarea_11_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "textarea", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ThemeInformationComponent_div_1_div_85_textarea_11_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3); return ctx_r118.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", ctx_r97.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r97.inputValue);
} }
function ThemeInformationComponent_div_1_div_85_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r98.formErr.text);
} }
function ThemeInformationComponent_div_1_div_85_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function ThemeInformationComponent_div_1_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ThemeInformationComponent_div_1_div_85_ng_container_5_Template, 8, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ThemeInformationComponent_div_1_div_85_ng_container_6_Template, 66, 10, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ThemeInformationComponent_div_1_div_85_input_7_Template, 1, 4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ThemeInformationComponent_div_1_div_85_input_8_Template, 1, 4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ThemeInformationComponent_div_1_div_85_input_9_Template, 1, 4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ThemeInformationComponent_div_1_div_85_div_10_Template, 5, 6, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ThemeInformationComponent_div_1_div_85_textarea_11_Template, 1, 2, "textarea", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ThemeInformationComponent_div_1_div_85_p_12_Template, 2, 1, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ThemeInformationComponent_div_1_div_85_ng_container_13_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_85_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r120.confirmFrom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_div_85_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r121); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r122.clearForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Editar ", ctx_r19.attrTranslation[ctx_r19.inputAttr], ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("for", ctx_r19.inputAttr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr != "description" && ctx_r19.inputAttr != "audio" && ctx_r19.inputAttr != "cover" && ctx_r19.inputAttr != "lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "lyrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "audio");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "cover" || ctx_r19.inputAttr == "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.inputAttr == "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.formErr.text != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r19.formErr.text == "");
} }
function ThemeInformationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ThemeInformationComponent_div_1_div_9_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_Template_img_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r123.sentToReproductor("stop"); })("error", function ThemeInformationComponent_div_1_Template_img_error_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r125.updateUrl($event, "vinyl-xl"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_Template_img_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r126.sentToReproductor("play"); })("error", function ThemeInformationComponent_div_1_Template_img_error_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r127.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ThemeInformationComponent_div_1_div_12_Template, 11, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r128.routeArtist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ThemeInformationComponent_div_1_span_18_Template, 4, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "app-audio-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Visitas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, ThemeInformationComponent_div_1_ng_container_30_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ThemeInformationComponent_div_1_ng_container_31_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, ThemeInformationComponent_div_1_ng_container_38_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ThemeInformationComponent_div_1_ng_container_39_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, ThemeInformationComponent_div_1_div_46_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, ThemeInformationComponent_div_1_div_47_Template, 8, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, ThemeInformationComponent_div_1_ng_container_54_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, ThemeInformationComponent_div_1_ng_container_55_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_Template_input_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r129.publicateComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, ThemeInformationComponent_div_1_div_64_Template, 5, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, ThemeInformationComponent_div_1_img_69_Template, 1, 3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, " Letra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, ThemeInformationComponent_div_1_span_71_Template, 3, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, ThemeInformationComponent_div_1_div_74_Template, 2, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](75, ThemeInformationComponent_div_1_div_75_Template, 5, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "Relacionados: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, ThemeInformationComponent_div_1_div_81_Template, 13, 21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ThemeInformationComponent_div_1_Template_p_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r130.searchResut("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](84, ThemeInformationComponent_div_1_div_84_Template, 14, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, ThemeInformationComponent_div_1_div_85_Template, 18, 11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.loadGif);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("vinyl ", ctx_r0.vinylState, " cursor-pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.mediaPath, "/images/m-vinyl.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r0.coverCursorState);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.mediaPath, "/images/covers/", ctx_r0.theme.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r0.theme.artist.name, " ", ctx_r0.theme.artist.surname, " -\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r0.theme.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.theme.views);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLike == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLike != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.theme.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLike == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLike != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.theme.dislikes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleMapInterpolate1"]("height: 3px; width: ", ctx_r0.likesBarPercent, "%; background-color: royalblue; transform: translateY(100%);");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleMapInterpolate1"]("height: 3px; width: 100%; background-color: ", ctx_r0.dislikesBarColor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Comentarios ", ctx_r0.theme.comments.length, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.theme.comments.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.theme.comments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.theme.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.suggestThemes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.showThemeListForm && ctx_r0.blackScreenStatus.blackScreenStatus != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.showInput && ctx_r0.blackScreenStatus.blackScreenStatus != "");
} }
class ThemeInformationComponent {
    constructor(comunicationService, DatabaseConexService, router, route, manageComponent, autorizationService) {
        this.comunicationService = comunicationService;
        this.DatabaseConexService = DatabaseConexService;
        this.router = router;
        this.route = route;
        this.manageComponent = manageComponent;
        this.autorizationService = autorizationService;
        this.candy = { id: 'theme', name: 'Theme', family: 'candy-theme', route: 'Theme', query: {}, routeQuery: '' };
        this.mediaPath = '../../../../../assets/media';
        this.flag = 'eng';
        this.defaultThemeList = '-- Selecciona lista --';
        this.selectedThemeList = this.defaultThemeList;
        this.userThemeLists = [];
        this.user = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name;
        this.coverCursorState = 'cursor-pointer';
        this.likesBarPercent = 0;
        this.dislikesBarColor = 'orange';
        this.isLike = 0;
        this.isSessionUser = false;
        this.isAdmin = false;
        this.suggestThemes = [];
        this.queryPage = 1;
        this.blackScreenStatus = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__.GlobalVariables;
        this.vinylState = '';
        this.loadGif = false;
        this.showThemeListForm = false;
        this.buttonThemeList = 'Añadir';
        this.showInput = false;
        this.inputValue = '';
        this.inputSecondValue = '';
        this.inputAttr = '';
        this.formErr = { text: '', class: '' };
        this.formErrFile = { text: '', class: '' };
        this.attrTranslation = { id: "id", name: "nombre", flag: "bandera", tags: "etiqueta", lyrics: "letra", native: "original", esp: "traducción", cover: 'portada', comments: "comentarios", likes: "likes", dislikes: "dislikes", views: "visitas", audio: "audio" };
        this.TooltipValues = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__.TooltipValues;
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        this.route.queryParams.subscribe(params => {
            this.candy.query['id'] = params['id'];
            this.comunicationService.sendCandy(this.candy);
            this.DatabaseConexService.getThemeData(params['id']).subscribe(sucess => {
                this.setDefaultValues(sucess);
            }, err => {
                this.router.navigate(['/Home']);
            });
        });
        this.comunicationService.sendReproductorViewDataObservable.subscribe(data => { this.reproductorSubscribe(data); });
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    reproductorSubscribe(data) {
        if (data && data.type) {
            let type = data.type;
            let value = data.value;
            switch (type) {
                case 'ready':
                    if (this.theme) {
                        this.sentToReproductor('themes', { isThemeList: false, themes: [this.theme] });
                    }
                    break;
                case 'ended':
                    this.vinylState = '';
                    this.coverCursorState = 'cursor-pointer';
                    break;
                case 'play':
                    this.vinylState = 'show';
                    this.coverCursorState = '';
                    break;
                case 'stop':
                    this.vinylState = 'cursor-pointer';
                    break;
                case 'views':
                    if (this.theme) {
                        this.theme.views = value;
                    }
                    break;
                case 'loading-reverse':
                    this.loadGif = true;
                    break;
                case 'loaded-reverse':
                    this.loadGif = false;
                    break;
            }
        }
    }
    setDefaultValues(themeData) {
        this.theme = new src_app_classes_Themes__WEBPACK_IMPORTED_MODULE_0__.Themes(themeData.id, themeData.name, themeData.flag, themeData.tags, themeData.lyrics, themeData.artist, themeData.comments, themeData.likes, themeData.dislikes, themeData.views);
        this.flag = themeData.flag;
        this.lyrics = this.theme.lyrics.native;
        this.user = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name;
        this.userThemeLists = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.themeLists;
        this.isSessionUser = (src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.email != undefined);
        this.isLike = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.isThemeLike(themeData.id);
        this.isAdmin = (parseInt(src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.admin) == 1) ? true : false;
        this.checkForLastComment();
        this.calculateLikesPercentage();
        if (this.isLike < 0 && themeData.likes == 0 || this.isLike > 0 && themeData.dislikes == 0) {
            let likeValue = (this.isLike < 0) ? 'dislikes' : 'likes';
            //this.modifyThemeData({attrName:likeValue, attrId:'', value:themeData[likeValue] + 1});
        }
        this.searchResut();
    }
    searchResut(queryPage) {
        if (this.theme) {
            let query = [this.theme.artist.name];
            query = query.concat(this.theme.tags);
            if (queryPage && queryPage == 'next') {
                this.queryPage++;
                queryPage = this.queryPage;
            }
            else {
                this.suggestThemes = [];
            }
            queryPage = (queryPage) ? queryPage : 1;
            queryPage = queryPage;
            this.DatabaseConexService.getArtistDataByQuery(query, 2, queryPage, ['theme']).subscribe((sucess) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (sucess.message) {
                    let paginateObject = sucess.message;
                    query.forEach((queryValue) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                        this.suggestThemes = this.suggestThemes.concat(paginateObject[queryValue]['theme']['docs']);
                    }));
                    this.suggestThemes = (yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.clearRepeatData(this.suggestThemes, 'theme', (_a = this.theme) === null || _a === void 0 ? void 0 : _a.id));
                }
            }), err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    sentToReproductor(type, value) {
        value = (value != undefined) ? value : '';
        if (type == 'stop')
            this.coverCursorState = 'cursor-pointer';
        this.comunicationService.sendReproductorData({ type, value });
    }
    calculateLikesPercentage() {
        if (this.theme) {
            let total = this.theme.likes + this.theme.dislikes;
            let likesPercentage = this.theme.likes / total * 100;
            this.likesBarPercent = (isNaN(likesPercentage)) ? 0 : likesPercentage;
            if (total == 0) {
                this.dislikesBarColor = 'gray';
            }
            else {
                this.dislikesBarColor = 'sandybrown';
            }
        }
    }
    switchLyrics() {
        if (this.theme && this.lyrics == this.theme.lyrics.native) {
            this.flag = 'spn';
            this.lyrics = this.theme.lyrics.esp;
        }
        else if (this.theme) {
            this.flag = this.theme.flag;
            this.lyrics = this.theme.lyrics.native;
        }
    }
    publicateComment() {
        var _a;
        if (this.comment) {
            localStorage.setItem('lastComment', JSON.stringify({ themeId: (_a = this.theme) === null || _a === void 0 ? void 0 : _a.id, comment: this.comment }));
            if (this.autorizationService.checkForToken() && this.theme) {
                this.DatabaseConexService.setThemeComment(this.theme.id, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name, this.comment).subscribe(sucess => {
                    localStorage.removeItem('lastComment');
                    if (this.theme && this.comment) {
                        this.theme.setNewComment(sucess.commentData.commentId, sucess.commentData.userName, true, sucess.commentData.comment, sucess.commentData.date);
                        this.comment = '';
                    }
                }, err => {
                    let serverError = err.error;
                    if (serverError.destroyToken) {
                        this.autorizationService.destroySession();
                        this.router.navigate(['/Sign-In']);
                    }
                });
            }
            else {
                this.router.navigate(['/Sign-In']);
            }
        }
    }
    removeComment(commentId) {
        if (this.autorizationService.checkForToken() && this.theme) {
            this.DatabaseConexService.removeThemeComment(this.theme.id, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name, commentId).subscribe(success => {
                if (this.theme) {
                    this.theme.removeComment(commentId);
                }
            }, err => {
                let serverError = err.error;
                if (serverError.destroyToken) {
                    this.autorizationService.destroySession();
                    this.router.navigate(['/Sign-In']);
                }
            });
        }
    }
    thumbValue(value) {
        let thumb = (this.isLike != value) ? value : 0;
        if (this.autorizationService.checkForToken() && this.theme) {
            this.DatabaseConexService.thumbValueTheme(this.theme.id, thumb, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                if (this.theme) {
                    this.theme.likes = sucess.likes;
                    this.theme.dislikes = sucess.dislikes;
                    sucess.userThemeLists.forEach(themeList => {
                        src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.replaceThemeList(themeList.name, themeList.list);
                    });
                    this.isLike = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.isThemeLike(this.theme.id);
                    this.calculateLikesPercentage();
                }
            }, err => {
                console.error(`Error: ${err}`);
                if (err.destroyToken) {
                    this.autorizationService.destroySession();
                    this.router.navigate(['/Sign-In']);
                }
            });
        }
        else {
            this.router.navigate(['/Sign-In']);
        }
    }
    addToThmemeList() {
        if (this.theme) {
            this.DatabaseConexService.addToThemeList(this.theme.artist.id, this.theme.id, this.selectedThemeList, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.setThemeListList(this.selectedThemeList, sucess.message);
                this.clearForm();
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    checkInList() {
        let inList = false;
        let list = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.getThemeList(this.selectedThemeList);
        if (this.theme && list) {
            inList = (list.list.map(theme => { return (theme.id) ? theme.id : theme.themeId; }).indexOf(this.theme.id) != -1);
        }
        this.buttonThemeList = (inList) ? 'Eliminar' : "Añadir";
    }
    setImagePreview(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var reader = new FileReader();
            let files;
            let imagePreview;
            let errMessage;
            let errClass;
            files = document.getElementById(mode);
            imagePreview = document.getElementById('imagePreview');
            let errFile = yield new Promise(resolve => {
                reader.onload = function () {
                    let result = reader.result;
                    if (imagePreview && result && result.split(";")[0].split("/")[1] == "png") {
                        imagePreview.src = reader.result;
                        errClass = '';
                        errMessage = '';
                    }
                    else {
                        errClass = 'input-error';
                        errMessage = 'Formato incorrecto';
                    }
                    resolve({ errMessage, errClass });
                };
                if (files && files.files)
                    reader.readAsDataURL(files.files[0]);
            });
            this.formErr.text = errFile.errMessage;
            this.formErrFile.class = errFile.errClass;
        });
    }
    checkAudioFile(mode) {
        let files = document.getElementById(mode);
        if (files.files) {
            let extension = files.files[0].name.split('.')[1];
            if (extension == 'mp3') {
                this.formErr.text = '';
                this.formErrFile.class = '';
            }
            else {
                this.formErr.text = 'Formato incorrecto';
                this.formErrFile.class = 'input-error';
            }
        }
    }
    refreshImages() {
        var images = document.images;
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src;
        }
    }
    refreshAudios() {
        var audio = document.getElementsByTagName('audio');
        for (var i = 0; i < audio.length; i++) {
            audio[i].src = audio[i].src;
        }
    }
    showThemeForm(attribute) {
        this.clearForm();
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__.NotificationManage.disableScroll();
        this.showInput = true;
        this.inputAttr = attribute.attrName;
        this.inputValue = attribute.value;
        this.inputSecondValue = (attribute.secondValue) ? attribute.secondValue : this.inputSecondValue;
        this.blackScreenStatus.blackScreenStatus = 'show';
    }
    confirmFrom() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let sendForm = yield this.modifyThemeData({ attrName: this.inputAttr, attrId: '', value: this.inputValue });
            if (sendForm) {
                this.clearForm();
            }
        });
    }
    clearForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__.NotificationManage.enableScroll();
        let imagePreview = document.getElementById('imagePreview');
        this.showInput = false;
        this.inputAttr = '';
        this.inputValue = '';
        this.inputSecondValue = '';
        this.formErrFile.class = '';
        this.formErrFile.text = '';
        this.formErr.class = '';
        this.formErr.text = '';
        this.blackScreenStatus.blackScreenStatus = '';
        this.showThemeListForm = false;
        this.selectedThemeList = this.defaultThemeList;
        if (imagePreview)
            imagePreview.src = '';
    }
    showThemeList() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_4__.NotificationManage.disableScroll();
        this.showThemeListForm = true;
        this.blackScreenStatus.blackScreenStatus = 'show';
    }
    deleteComment(commentId) {
        var _a;
        if (this.theme) {
            let commentIndex = (_a = this.theme) === null || _a === void 0 ? void 0 : _a.comments.map(comment => { return comment.commentId; }).indexOf(commentId);
            if (commentIndex != -1) {
                let list = src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.copyObject(this.theme.comments);
                list.splice(commentIndex, 1);
                this.modifyThemeData({ attrName: 'comments', attrId: '', value: list });
            }
        }
    }
    modifyThemeData(attribute) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let sendSucess = false;
            switch (attribute.attrName) {
                case 'audio':
                case 'flag':
                case 'cover':
                    let formDataFiles = new FormData();
                    let file = document.getElementById((attribute.attrName == 'flag') ? `${attribute.attrName}-file` : attribute.attrName);
                    let fileType = (attribute.attrName == 'cover') ? 'theme_cover' : (attribute.attrName == 'audio') ? 'theme_audio' : 'theme_flag';
                    let fileName = (attribute.attrName == 'flag') ? attribute.value : (_a = this.theme) === null || _a === void 0 ? void 0 : _a.id;
                    let correctionValues = [];
                    switch (attribute.attrName) {
                        case 'flag':
                            correctionValues.push({ id: 'flag', value: this.inputValue });
                            break;
                        case 'cover':
                            correctionValues.push({ id: 'cover', value: '' });
                            break;
                        case 'audio':
                            correctionValues.push({ id: 'audio', value: '' });
                            break;
                    }
                    let correctForm = this.checkForm(correctionValues);
                    if (correctForm) {
                        if (this.theme && file.files && file.files.length > 0) {
                            formDataFiles.append(`${fileType}&${fileName}`, file.files[0]);
                            formDataFiles.append(`userName`, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name);
                            yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.toAsync((resolve) => {
                                this.DatabaseConexService.sendFilesToServer(formDataFiles).subscribe(sucess => {
                                    this.refreshImages();
                                    sendSucess = true;
                                    resolve(sendSucess);
                                }, err => {
                                    resolve(sendSucess);
                                });
                            });
                        }
                        if (attribute.attrName == 'flag') {
                            yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.toAsync((resolve) => {
                                if (this.theme) {
                                    this.DatabaseConexService.setThemeAttribute(this.theme.id, attribute.attrName, (attribute.value) ? attribute.value : '', src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                        if (this.theme && sucess.message) {
                                            this.theme = new src_app_classes_Themes__WEBPACK_IMPORTED_MODULE_0__.Themes(sucess.message.id, sucess.message.name, sucess.message.flag, sucess.message.tags, sucess.message.lyrics, this.theme.artist, sucess.message.comments, sucess.message.likes, sucess.message.dislikes, sucess.message.views);
                                            sendSucess = true;
                                            resolve(sendSucess);
                                        }
                                        else {
                                            sendSucess = false;
                                            resolve(sendSucess);
                                        }
                                    }, err => {
                                        console.error(`Error: ${err}`);
                                        sendSucess = false;
                                        resolve(sendSucess);
                                    });
                                }
                            });
                        }
                    }
                    return sendSucess;
                default:
                    attribute.value = (attribute.attrName == 'tags') ? this.modifyThemeTag(attribute.value) : attribute.value;
                    attribute.value = (attribute.attrName == 'lyrics') ? { native: this.inputValue, esp: this.inputSecondValue } : attribute.value;
                    yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.toAsync((resolve) => {
                        if (this.theme) {
                            this.DatabaseConexService.setThemeAttribute(this.theme.id, attribute.attrName, (attribute.value) ? attribute.value : '', src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                                if (this.theme && sucess.message) {
                                    let lyricsType = (this.lyrics == this.theme.lyrics.native) ? 'native' : 'esp';
                                    this.theme = new src_app_classes_Themes__WEBPACK_IMPORTED_MODULE_0__.Themes(sucess.message.id, sucess.message.name, sucess.message.flag, sucess.message.tags, sucess.message.lyrics, this.theme.artist, sucess.message.comments, sucess.message.likes, sucess.message.dislikes, sucess.message.views);
                                    if (attribute.attrName == 'lyrics') {
                                        this.lyrics = this.theme.lyrics[lyricsType];
                                    }
                                    sendSucess = true;
                                    resolve(sendSucess);
                                }
                                else {
                                    resolve(sendSucess);
                                }
                            }, err => {
                                console.error(`Error: ${err}`);
                                resolve(sendSucess);
                            });
                        }
                    });
                    return sendSucess;
            }
        });
    }
    checkForm(data) {
        let correctFiles = 0;
        data.forEach(singleData => {
            switch (singleData.id) {
                case 'flag':
                    if (singleData.value == '' || this.formErrFile.class == '') {
                        this.formErr.class = '';
                        this.formErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.formErr.class = 'input-error';
                        this.formErr.text = 'Campo obligatorio';
                    }
                    break;
                case 'cover':
                case 'audio':
                    if (this.formErr.text == '' && this.formErrFile.class == '') {
                        this.formErrFile.class = '';
                        this.formErr.text = '';
                        correctFiles++;
                    }
                    else {
                        this.formErrFile.class = 'input-error';
                        this.formErr.text = 'Campo obligatorio';
                    }
                    break;
            }
        });
        return (correctFiles == data.length);
    }
    modifyThemeTag(themeTag) {
        if (this.theme) {
            let newTags = [...this.theme.tags];
            let tagExists = this.theme.tags.indexOf(themeTag);
            (tagExists > -1) ? newTags.splice(tagExists, 1) : newTags.push(themeTag);
            return newTags;
        }
        return [];
    }
    routeArtist() {
        var _a;
        this.router.navigate(['/Artist'], { queryParams: { id: (_a = this.theme) === null || _a === void 0 ? void 0 : _a.artist.id } });
    }
    checkForLastComment() {
        var _a;
        if (localStorage.getItem('lastComment')) {
            let lastComment = JSON.parse(localStorage.getItem('lastComment'));
            if (lastComment.themeId == ((_a = this.theme) === null || _a === void 0 ? void 0 : _a.id)) {
                this.comment = lastComment.comment;
            }
            localStorage.removeItem('lastComment');
        }
    }
}
ThemeInformationComponent.ɵfac = function ThemeInformationComponent_Factory(t) { return new (t || ThemeInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_5__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_7__.ManageComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_8__.AuthorizationService)); };
ThemeInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ThemeInformationComponent, selectors: [["app-theme-information"]], decls: 2, vars: 1, consts: [["id", "homeContainer", 2, "padding", "15px"], [4, "ngIf"], [1, "display-inline", 2, "width", "60%", "padding-right", "2%", "box-sizing", "border-box"], [2, "padding", "20px"], [2, "max-width", "675px"], [1, "display-inline", 2, "position", "relative", "width", "85%"], ["class", "load-gif", 4, "ngIf"], [2, "width", "100%", "position", "absolute", "border-radius", "50%", 3, "src", "click", "error"], [2, "position", "relative", "width", "100%", "z-index", "2", "box-shadow", "3px 3px 0px #262626", "box-sizing", "border-box", 3, "src", "click", "error"], ["class", "display-inline", "style", "text-align: center; vertical-align: top; padding: 5px; position: absolute;transform: translateX(-100%);z-index: 3;background-color: white;", 4, "ngIf"], [2, "margin-bottom", "0px"], [1, "cursor-pointer", 2, "font-weight", "bold", "color", "#e6e6e6", 3, "click"], [2, "font-weight", "bold", "color", "#e6e6e6"], ["id", "pencil-writting-animation", "class", "display-inline", "style", "vertical-align: super;", 4, "ngIf"], [1, "display-inline", 2, "width", "33%"], [1, "attr-name", 2, "margin-top", "10px", "margin-bottom", "10px", "font-size", "large"], [1, "less-more-content"], [1, "display-inline", 2, "width", "33%", "vertical-align", "super"], [1, "display-inline", 2, "width", "50%", "margin-top", "10px", "margin-bottom", "10px", "text-align", "left", "padding-left", "10px", "box-sizing", "border-box"], [1, "display-inline", 2, "width", "50%", "margin-top", "10px", "margin-bottom", "10px", "text-align", "right", "padding-right", "10px", "box-sizing", "border-box"], ["id", "likes-bar"], ["id", "dislikes-bar"], ["style", "width: 33%;", "class", "display-inline", 4, "ngIf"], ["style", "padding: 15px; padding-bottom: 5px;", 4, "ngIf"], [1, "txt-horizontal-left", 2, "padding", "2%", "padding-top", "5px"], [1, "title-back", 2, "margin-top", "0px"], [2, "padding", "15px"], [2, "text-align", "right"], ["type", "submit", "value", "Enviar", 3, "click"], [2, "border-bottom", "solid 2px black"], [4, "ngFor", "ngForOf"], [1, "display-inline", "vertical-top", 2, "width", "40%", "padding-left", "20px", "box-sizing", "border-box"], [1, "title-back"], ["tooltip", "Idioma", "class", "flag-small cursor-pointer", "style", "float: left; box-shadow: 2px 2px black;", 3, "options", "src", "click", 4, "ngIf"], ["id", "pencil-writting-animation", "class", "display-inline", "style", "text-shadow: none; font-weight: normal; transform: translateY(-5%); float: right;", 4, "ngIf"], [2, "max-height", "450px", "overflow", "auto", "padding", "15px", "background-color", "rgba(255,255,255,0.1)"], [3, "innerHTML", 4, "ngIf"], [2, "max-height", "650px", "overflow", "auto", "padding", "15px"], ["class", "container-card", "style", "text-align: left; background-color: gray; padding: 10px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 3, "id", 4, "ngFor", "ngForOf"], [1, "less-more-content", "cursor-pointer", 3, "click"], ["class", "form-style", 4, "ngIf"], [1, "load-gif"], [3, "src"], [1, "display-inline", 2, "text-align", "center", "vertical-align", "top", "padding", "5px", "position", "absolute", "transform", "translateX(-100%)", "z-index", "3", "background-color", "white"], ["id", "pencil-writting-animation", 1, "display-inline", 2, "margin", "5px"], ["tooltip", "Editar car\u00E1tula", 1, "my-vinyl-icons-font", "pencil-writting-bottom", "writting", "cursor-pointer", "display-inline", "font-size-150", 3, "options", "click"], ["id", "vinyl-spin-animation-1", 1, "display-inline", 2, "margin", "5px"], ["tooltip", "Editar tema", 1, "my-vinyl-icons-font", "vinyl-spin-1", "cursor-pointer", "display-inline", "font-size-150", 3, "options", "click"], ["tooltip", "Editar bandera", 1, "my-vinyl-icons-font", "font-size-150", "display-inline", "cursor-pointer", 2, "margin", "5px", 3, "options", "click"], ["id", "pencil-writting-animation", 1, "display-inline", 2, "vertical-align", "super"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "pencil-writting", "writting", "cursor-pointer", "display-inline", "font-size-150", 2, "position", "absolute", "color", "black", "font-weight", "normal", "transform", "translateY(-20%)", 3, "options", "click"], ["tooltip", "Me gusta", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "font-weight", "bold", 3, "options", "click"], ["tooltip", "Me gusta", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 3, "options", "click"], ["tooltip", "No me gusta", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "font-weight", "bold", 3, "options", "click"], ["tooltip", "No me gusta", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 3, "options", "click"], [2, "margin-top", "10px", "margin-bottom", "10px"], ["tooltip", "Agregar a lista", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 3, "options", "click"], [2, "padding", "15px", "padding-bottom", "5px"], [2, "margin-top", "0px", "margin-bottom", "10px"], ["class", "display-inline", 4, "ngFor", "ngForOf"], [2, "margin", "0px", 3, "click"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 3, "options"], [1, "display-inline"], [2, "color", "#e6e6e6"], ["tooltip", "Borrar", "id", "trash-can-animation", 1, "display-inline", "my-vinyl-icons-font", "font-size-150", 3, "options", "click"], [1, "trash-cap", "cursor-pointer", "display-inline"], [1, "trash-body", "cursor-pointer", "display-inline"], ["placeholder", "S\u00E9 el primero en comentar algo...", 2, "width", "99%", "height", "100px", "padding", "10px", "box-sizing", "border-box", 3, "ngModel", "ngModelChange"], ["placeholder", "En qu\u00E9 est\u00E1s pensando...", 2, "width", "99%", "height", "100px", "padding", "10px", "box-sizing", "border-box", 3, "ngModel", "ngModelChange"], ["class", "comment-name-back", 4, "ngIf"], [2, "margin-left", "10px", "color", "#dcdcdc"], [1, "comment-name-back"], [1, "cursor-pointer", 3, "routerLink"], ["tooltip", "Eliminar", "style", "float: right; transform: translateY(-10%);", "id", "trash-can-animation", "class", "display-inline my-vinyl-icons-font font-size-125", 3, "options", "click", 4, "ngIf"], ["tooltip", "Eliminar", "id", "trash-can-animation", 1, "display-inline", "my-vinyl-icons-font", "font-size-125", 2, "float", "right", "transform", "translateY(-10%)", 3, "options", "click"], ["tooltip", "Idioma", 1, "flag-small", "cursor-pointer", 2, "float", "left", "box-shadow", "2px 2px black", 3, "options", "src", "click"], ["id", "pencil-writting-animation", 1, "display-inline", 2, "text-shadow", "none", "font-weight", "normal", "transform", "translateY(-5%)", "float", "right"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "pencil-writting-bottom", "writting", "cursor-pointer", "display-inline", "font-size-125", 3, "options", "click"], [3, "innerHTML"], [1, "container-card", 2, "text-align", "left", "background-color", "gray", "padding", "10px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap", 3, "id"], [1, "display-inline", 2, "vertical-align", "middle", "height", "65px", "min-width", "75px", "margin-left", "10px", "margin-right", "10px"], [1, "cursor-pointer", 2, "width", "65px", "border", "2px solid", "box-sizing", "border-box", 3, "routerLink", "queryParams", "src", "error"], [1, "display-inline", 2, "text-align", "left", "width", "55%", "vertical-align", "middle"], [2, "overflow", "hidden", "text-overflow", "ellipsis", "margin-top", "5px", "margin-bottom", "5px"], [1, "attr-name"], [1, "cursor-pointer", 3, "routerLink", "queryParams"], [1, "form-style"], [2, "margin-top", "0px"], [3, "ngModel", "ngModelChange", "change"], ["selected", "selected"], [1, "black-button", 3, "click"], [1, "title-back-black", 2, "text-align", "left", "margin-top", "0px"], [3, "for"], ["type", "file", 3, "id", "class", "change", 4, "ngIf"], ["style", "display: inline-block; vertical-align: middle; margin-left: 50px;", 4, "ngIf"], ["name", "", "id", "", "cols", "30", "rows", "10", 3, "id", "ngModel", "ngModelChange", 4, "ngIf"], ["style", "margin-left: 10px;", "class", "text-error", 4, "ngIf"], [1, "black-button", 2, "margin-bottom", "0px", 3, "click"], [2, "text-align", "center", "display", "inline-block"], ["type", "text", 2, "text-align", "left", 3, "id", "ngModel", "ngModelChange"], [2, "width", "85%", "display", "inline-block"], [3, "id", "styles", "placeholder", "ngModel", "ngModelChange"], ["quill-editor-toolbar", "", 2, "white-space", "pre-line", "padding-left", "15px", "text-align", "center"], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "-1", 1, "ql-indent"], ["type", "button", "value", "+1", 1, "ql-indent"], [1, "ql-color"], [1, "ql-background"], [1, "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], ["type", "button", 1, "ql-clean"], ["type", "file", 3, "id", "change"], [2, "display", "inline-block", "vertical-align", "middle", "margin-left", "50px"], [2, "display", "inline-block"], ["id", "imagePreview", 3, "src", "error", 4, "ngIf"], ["id", "imagePreview", 3, "src", "error"], ["name", "", "id", "", "cols", "30", "rows", "10", 3, "id", "ngModel", "ngModelChange"], [1, "text-error", 2, "margin-left", "10px"]], template: function ThemeInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ThemeInformationComponent_div_1_Template, 86, 41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.theme);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_9__.AudioBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_16__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], ngx_quill__WEBPACK_IMPORTED_MODULE_18__.QuillEditorComponent], pipes: [_services_pipes_DateFormat__WEBPACK_IMPORTED_MODULE_10__.DateFormat, _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_11__.SafeHtmlPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe], styles: ["[_nghost-%COMP%]{\n    width: 100%;\n    text-align: center;\n}\n\n.vinyl[_ngcontent-%COMP%]{\n    transition: 1.5s ease;\n}\n\n.vinyl.show[_ngcontent-%COMP%]{\n    transition: 2s ease;\n\n\ttransform: translate(10%) rotate(180deg);\n}\n\n.load-gif[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 50px;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 5;\n}\n\n.load-gif[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1COztDQUV0Qix3Q0FBd0M7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoidGhlbWUtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZpbnlse1xuICAgIHRyYW5zaXRpb246IDEuNXMgZWFzZTtcbn1cblxuLnZpbnlsLnNob3d7XG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZTtcblxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUpIHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubG9hZC1naWZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogNTtcbn1cbi5sb2FkLWdpZiBpbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 1743:
/*!***********************************************************************************!*\
  !*** ./src/app/components/centre/showcase/theme-search/theme-search.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSearchComponent": () => (/* binding */ ThemeSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);









function ThemeSearchComponent_div_1_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ThemeSearchComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ThemeSearchComponent_div_1_div_5_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.updateUrl($event, "user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Rango: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ThemeSearchComponent_div_1_div_5_span_14_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.mediaPath, "/images/users/", user_r4.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, "/Profile/" + user_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, "/Profile/" + user_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r3.range[user_r4.admin], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r4.admin == "1");
} }
function ThemeSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Usuarios:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ThemeSearchComponent_div_1_div_5_Template, 15, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_1_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.searchResut("next", "user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_1_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.showLess("user"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Ver menos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.queryResult.users);
} }
const _c1 = function () { return ["/Artist"]; };
const _c2 = function (a0) { return { id: a0 }; };
function ThemeSearchComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ThemeSearchComponent_div_2_div_4_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.updateUrl($event, "artist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artist_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", artist_r12.id_artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r11.mediaPath, "/images/artists/", artist_r12.id_artist, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, artist_r12.id_artist));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c2, artist_r12.id_artist));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", artist_r12.name, " ", artist_r12.surname, "");
} }
function ThemeSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Artistas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ThemeSearchComponent_div_2_div_4_Template, 9, 15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_2_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.searchResut("next", "artist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_2_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.showLess("artist"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ver menos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.queryResult.artists);
} }
const _c3 = function () { return ["/Theme"]; };
function ThemeSearchComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function ThemeSearchComponent_div_3_div_4_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r21.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Autor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", theme_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-index", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r18.mediaPath, "/images/covers/", theme_r19.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, theme_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c2, theme_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](theme_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c2, theme_r19.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", theme_r19.artist.name, " ", theme_r19.artist.surname, "");
} }
function ThemeSearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Temas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ThemeSearchComponent_div_3_div_4_Template, 14, 22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_3_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.searchResut("next", "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ThemeSearchComponent_div_3_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.showLess("theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Ver menos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.queryResult.themes);
} }
class ThemeSearchComponent {
    constructor(DatabaseConexService, comunicationService, router, route, manageComponent) {
        this.DatabaseConexService = DatabaseConexService;
        this.comunicationService = comunicationService;
        this.router = router;
        this.route = route;
        this.manageComponent = manageComponent;
        this.candy = { id: 'search', name: 'Search', family: 'candy-theme', route: 'Search', query: {}, routeQuery: '' };
        this.mediaPath = '../../../../../assets/media';
        this.query = [];
        this.queryResult = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.SearchQuery;
        this.range = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.range;
        this.showUser = true;
        this.limitArtistTheme = 4;
        this.limitUser = 3;
        this.queryPageUsers = 1;
        this.queryPageArtist = 1;
        this.queryPageThemes = 1;
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        this.route.queryParams.subscribe(params => {
            this.query = params['query'].toLowerCase().split('+');
            this.showUser = (!params['user']);
            this.candy.query['query'] = params['query'];
            this.searchResut();
        });
        this.comunicationService.sendCandy(src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.CandyBomb);
        this.comunicationService.sendCandy(this.candy);
    }
    searchResut(queryPage, fields) {
        let artistFields = ['name', 'surname', 'tags'];
        let themeFields = ['themeListName', 'themeListTags'];
        if (queryPage && queryPage == 'next') {
            if (fields && fields == 'user') {
                this.queryPageUsers++;
                queryPage = this.queryPageUsers;
                fields = ['user'];
            }
            if (fields && fields == 'theme') {
                this.queryPageThemes++;
                queryPage = this.queryPageThemes;
                fields = ['theme'];
            }
            if (fields && fields == 'artist') {
                this.queryPageArtist++;
                queryPage = this.queryPageArtist;
                fields = ['artist'];
            }
        }
        else {
            this.queryResult.users = [];
            this.queryResult.artists = [];
            this.queryResult.themes = [];
        }
        queryPage = (queryPage) ? queryPage : 1;
        fields = (fields) ? fields : ['all'];
        queryPage = queryPage;
        fields = fields;
        this.DatabaseConexService.getArtistDataByQuery(this.query, this.limitArtistTheme, queryPage, fields).subscribe((sucess) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (sucess.message) {
                let paginateObject = sucess.message;
                this.query.forEach((queryValue) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (fields && typeof fields == 'object') {
                        let artistFieldsQuery = (fields[0] == 'all') ? artistFields : fields;
                        artistFieldsQuery.forEach((field) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            if (field != 'theme' && field != 'user')
                                this.queryResult.artists = this.queryResult.artists.concat(paginateObject[queryValue][field]['docs']);
                        }));
                        let themeFieldsQuery = (fields[0] == 'all') ? themeFields : fields;
                        themeFieldsQuery.forEach((field) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            if (field != 'artist' && field != 'user')
                                this.queryResult.themes = this.queryResult.themes.concat(paginateObject[queryValue][field]['docs']);
                        }));
                    }
                }));
                this.queryResult.artists = (yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__.DataManage.clearRepeatData(this.queryResult.artists, 'artist'));
                this.queryResult.themes = (yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__.DataManage.clearRepeatData(this.queryResult.themes, 'theme'));
            }
        }), err => {
            console.error(`Error: ${err}`);
        });
        if (this.showUser && fields[0] != 'theme' && fields[0] != 'artist') {
            this.DatabaseConexService.getUsersData(this.query, this.limitUser, queryPage).subscribe((sucess) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                let paginateObject = sucess.message;
                this.query.forEach(queryData => {
                    this.queryResult.users = this.queryResult.users.concat(paginateObject[queryData]['docs']);
                });
                this.queryResult.users = (yield src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__.DataManage.clearRepeatData(this.queryResult.users, 'user'));
            }), err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    showLess(type) {
        switch (type) {
            case 'user':
                if (this.queryResult.users.length > this.limitUser) {
                    let remove = (this.queryResult.users.length - this.limitUser) / this.limitUser;
                    remove = (remove > 1) ? 1 : remove;
                    remove = this.limitUser * remove;
                    this.queryResult.users.splice(-1 * remove, remove);
                    this.queryPageUsers = (this.queryPageUsers == 1) ? 1 : this.queryPageUsers = this.queryPageUsers - 1;
                }
                break;
            case 'artist':
                if (this.queryResult.artists.length > this.limitArtistTheme) {
                    let remove = (this.queryResult.artists.length - this.limitArtistTheme) / this.limitArtistTheme;
                    remove = (remove > 1) ? 1 : remove;
                    remove = this.limitArtistTheme * remove;
                    this.queryResult.artists.splice(-1 * remove, remove);
                    this.queryPageArtist = (this.queryPageArtist == 1) ? 1 : this.queryPageArtist = this.queryPageArtist - 1;
                }
                break;
            case 'theme':
                if (this.queryResult.themes.length > this.limitArtistTheme) {
                    let remove = (this.queryResult.themes.length - this.limitArtistTheme) / this.limitArtistTheme;
                    remove = (remove > 1) ? 1 : remove;
                    remove = this.limitArtistTheme * remove;
                    this.queryResult.themes.splice(-1 * remove, remove);
                    this.queryPageThemes = (this.queryPageThemes == 1) ? 1 : this.queryPageThemes = this.queryPageThemes - 1;
                }
                break;
        }
    }
    showItem(element) {
        let elementId = element;
        let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;
        this.router.navigate(['/Theme'], { queryParams: { id: itemId } });
    }
    showArtist(element) {
        let elementId = element;
        let itemId = (elementId.tagName == "DIV") ? elementId.id : (elementId.parentElement) ? elementId.parentElement.id : null;
        this.router.navigate(['/Artist'], { queryParams: { id: itemId } });
    }
}
ThemeSearchComponent.ɵfac = function ThemeSearchComponent_Factory(t) { return new (t || ThemeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_3__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_4__.ManageComponent)); };
ThemeSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ThemeSearchComponent, selectors: [["app-theme-search"]], decls: 4, vars: 3, consts: [["id", "homeContainer"], [4, "ngIf"], [1, "title-back"], [2, "margin-left", "25px"], ["class", "display-inline container-card", "style", "width: 260px; margin: 5px; background-color: gray; padding: 15px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 4, "ngFor", "ngForOf"], [2, "color", "#1a1a1a"], [1, "cursor-pointer", "less-more-content", 3, "click"], [1, "display-inline", "container-card", 2, "width", "260px", "margin", "5px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap"], [1, "display-inline", "avatar-back", 2, "vertical-align", "middle", "height", "70px", "min-width", "70px", "margin-right", "12px"], [1, "cursor-pointer", 2, "width", "70px", "box-sizing", "border-box", 3, "routerLink", "src", "error"], [1, "display-inline", 2, "text-align", "left", "width", "65%", "vertical-align", "middle"], [2, "overflow", "hidden", "text-overflow", "ellipsis", "margin-top", "5px", "margin-bottom", "5px"], [1, "attr-name"], [1, "cursor-pointer", 3, "routerLink"], ["class", "my-vinyl-icons-font admin-color", 4, "ngIf"], [1, "my-vinyl-icons-font", "admin-color"], ["class", "display-inline container-card", "style", "width: 260px; margin: 5px; background-color: gray; padding: 15px; margin-top: 10px; margin-bottom: 10px; white-space: nowrap;", 3, "id", 4, "ngFor", "ngForOf"], [1, "display-inline", "container-card", 2, "width", "260px", "margin", "5px", "background-color", "gray", "padding", "15px", "margin-top", "10px", "margin-bottom", "10px", "white-space", "nowrap", 3, "id"], [1, "display-inline", 2, "vertical-align", "middle", "height", "70px", "min-width", "70px", "margin-right", "12px"], [1, "cursor-pointer", 2, "width", "70px", "border", "2px solid rgba(25, 25, 25, 0.5)", "border-radius", "50%", "box-sizing", "border-box", 3, "routerLink", "queryParams", "src", "error"], [1, "cursor-pointer", 3, "routerLink", "queryParams"], [1, "cursor-pointer", 2, "width", "70px", "border", "2px solid", "box-sizing", "border-box", 3, "routerLink", "queryParams", "src", "error"]], template: function ThemeSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ThemeSearchComponent_div_1_Template, 12, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ThemeSearchComponent_div_2_Template, 11, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ThemeSearchComponent_div_3_Template, 11, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.queryResult.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.queryResult.artists.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.queryResult.themes.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGVtZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 763:
/*!*******************************************************************************!*\
  !*** ./src/app/components/centre/showcase/user-panel/user-panel.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelComponent": () => (/* binding */ UserPanelComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/tools/FormValidations */ 8112);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var src_app_classes_DragEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/DragEvent */ 4643);
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/tools/ManageUser */ 8391);
/* harmony import */ var _services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../audio-bar/audio-bar/audio-bar.component */ 5094);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-quill */ 6858);
/* harmony import */ var _services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/pipes/DomSanitized */ 7605);




















function UserPanelComponent_div_1_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_8_ng_container_4_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); ctx_r17.modifyValuesData.modifyUserName.status = !ctx_r17.modifyValuesData.modifyUserName.status; return ctx_r17.setFocus(ctx_r17.modifyValuesData.modifyUserName.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r9.ProfileData.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r9.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_ng_container_8_ng_container_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r19.modifyValuesData.modifyUserName.value = $event; })("focusout", function UserPanelComponent_div_1_ng_container_8_ng_container_5_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r21.modifyData({ event: $event, attribute: ctx_r21.modifyValuesData.modifyUserName.id }); })("keyup", function UserPanelComponent_div_1_ng_container_8_ng_container_5_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r22.modifyData({ event: $event, attribute: ctx_r22.modifyValuesData.modifyUserName.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r10.modifyValuesData.modifyUserName.value);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_8_ng_container_10_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); ctx_r23.modifyValuesData.modifyEmail.status = !ctx_r23.modifyValuesData.modifyEmail.status; return ctx_r23.setFocus(ctx_r23.modifyValuesData.modifyEmail.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r11.ProfileData.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r11.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_ng_container_8_ng_container_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r25.modifyValuesData.modifyEmail.value = $event; })("focusout", function UserPanelComponent_div_1_ng_container_8_ng_container_11_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r27.modifyData({ event: $event, attribute: ctx_r27.modifyValuesData.modifyEmail.id }); })("keyup", function UserPanelComponent_div_1_ng_container_8_ng_container_11_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r28.modifyData({ event: $event, attribute: ctx_r28.modifyValuesData.modifyEmail.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.modifyValuesData.modifyEmail.value);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "HHHHHHHH");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_8_ng_container_16_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); ctx_r29.modifyValuesData.modifyPassword.status = !ctx_r29.modifyValuesData.modifyPassword.status; ctx_r29.setFocus(ctx_r29.modifyValuesData.modifyPassword.id); return ctx_r29.modifyPasswordData.passwordMessage = "Introduce tu contrase\u00F1a actual:"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r13.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_17_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r31.modifyPasswordData.passwordMessage);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, UserPanelComponent_div_1_ng_container_8_ng_container_17_p_3_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_ng_container_8_ng_container_17_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r32.modifyValuesData.modifyPassword.value = $event; })("focusout", function UserPanelComponent_div_1_ng_container_8_ng_container_17_Template_input_focusout_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r34.modifyPassword($event, -1); })("keyup", function UserPanelComponent_div_1_ng_container_8_ng_container_17_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r35.modifyPassword($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r14.modifyPasswordData.passwordMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r14.modifyValuesData.modifyPassword.value);
} }
function UserPanelComponent_div_1_ng_container_8_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, ctx_r15.ProfileData.description), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
const _c0 = function () { return { height: "120px" }; };
function UserPanelComponent_div_1_ng_container_8_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "quill-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onEditorCreated", function UserPanelComponent_div_1_ng_container_8_ng_container_29_Template_quill_editor_onEditorCreated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r36.setFocus($event); })("ngModelChange", function UserPanelComponent_div_1_ng_container_8_ng_container_29_Template_quill_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r38.modifyValuesData.modifyDescription.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_8_ng_container_29_Template_button_click_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r39.modifyData({ event: $event, attribute: ctx_r39.modifyValuesData.modifyDescription.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c0))("placeholder", "Escribe algo...")("ngModel", ctx_r16.modifyValuesData.modifyDescription.value);
} }
function UserPanelComponent_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_1_ng_container_8_ng_container_4_Template, 6, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, UserPanelComponent_div_1_ng_container_8_ng_container_5_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, UserPanelComponent_div_1_ng_container_8_ng_container_10_Template, 6, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, UserPanelComponent_div_1_ng_container_8_ng_container_11_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Contrase\u00F1a: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, UserPanelComponent_div_1_ng_container_8_ng_container_16_Template, 7, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, UserPanelComponent_div_1_ng_container_8_ng_container_17_Template, 5, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_8_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); ctx_r40.modifyValuesData.modifyDescription.status = !ctx_r40.modifyValuesData.modifyDescription.status; return ctx_r40.setFocus(ctx_r40.modifyValuesData.modifyDescription.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, UserPanelComponent_div_1_ng_container_8_ng_container_28_Template, 5, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, UserPanelComponent_div_1_ng_container_8_ng_container_29_Template, 35, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.modifyValuesData.modifyUserName.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.modifyValuesData.modifyUserName.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.modifyValuesData.modifyEmail.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.modifyValuesData.modifyEmail.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.modifyValuesData.modifyPassword.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.modifyValuesData.modifyPassword.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r2.TooltipValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r2.modifyValuesData.modifyDescription.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.modifyValuesData.modifyDescription.status);
} }
function UserPanelComponent_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Rango: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.ProfileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.range[ctx_r3.ProfileData.admin]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 3, ctx_r3.ProfileData.description), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function UserPanelComponent_div_1_ng_container_18_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", list_r42.name, "");
} }
function UserPanelComponent_div_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_18_option_1_Template, 2, 1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r42 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.isSessionUser && list_r42.userView || !ctx_r4.isSessionUser && !list_r42.privateState && list_r42.userView);
} }
function UserPanelComponent_div_1_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-- Nueva lista --");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function UserPanelComponent_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_span_20_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r45.showProfileForm({ attrName: "copy", attrId: "", value: ctx_r45.selectedThemeList, secondValue: ctx_r45.themeList }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r6.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_23_p_2_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_23_p_2_span_7_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); ctx_r52.modifyValuesData.themeListName.status = !ctx_r52.modifyValuesData.themeListName.status; return ctx_r52.setFocus(ctx_r52.modifyValuesData.themeListName.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r50.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_23_p_2_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_23_p_2_span_10_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r54.removeThemeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r51.TooltipValues);
} }
function UserPanelComponent_div_1_ng_container_23_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Privada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_ng_container_23_p_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r56.privateValue = $event; })("click", function UserPanelComponent_div_1_ng_container_23_p_2_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r58.privatizeThemeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, UserPanelComponent_div_1_ng_container_23_p_2_span_7_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, UserPanelComponent_div_1_ng_container_23_p_2_span_10_Template, 5, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r47.privateValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r47.isSessionUser && ctx_r47.themeList.userManage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r47.isSessionUser && ctx_r47.themeList.userManage);
} }
function UserPanelComponent_div_1_ng_container_23_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r48.modifyValuesData.themeListName.value, ":");
} }
function UserPanelComponent_div_1_ng_container_23_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_ng_container_23_ng_container_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r59.modifyValuesData.themeListName.value = $event; })("blur", function UserPanelComponent_div_1_ng_container_23_ng_container_4_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r61.modifyData({ event: $event, attribute: ctx_r61.modifyValuesData.themeListName.id }); })("keyup", function UserPanelComponent_div_1_ng_container_23_ng_container_4_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r62.modifyData({ event: $event, attribute: ctx_r62.modifyValuesData.themeListName.id }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r49.modifyValuesData.themeListName.value);
} }
function UserPanelComponent_div_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserPanelComponent_div_1_ng_container_23_p_2_Template, 11, 3, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, UserPanelComponent_div_1_ng_container_23_p_3_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_1_ng_container_23_ng_container_4_Template, 4, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r7.modifyValuesData.themeListName.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.modifyValuesData.themeListName.status);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", singleTheme_r68.position + 1, ".-");
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_p_10_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_p_10_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r77); const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5); return ctx_r75.removeThemeFromList(singleTheme_r68.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r73.TooltipValues);
} }
const _c1 = function () { return ["/Theme"]; };
const _c2 = function (a0) { return { id: a0 }; };
const _c3 = function () { return ["/Artist"]; };
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_span_4_Template, 3, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_p_10_Template, 5, 1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("tooltip", singleTheme_r68.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r70.TooltipValues)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](14, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](15, _c2, singleTheme_r68.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", singleTheme_r68.position || singleTheme_r68.position == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](singleTheme_r68.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("tooltip", "", singleTheme_r68.artist.name, " ", singleTheme_r68.artist.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r70.TooltipValues)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](17, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](18, _c2, singleTheme_r68.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", singleTheme_r68.artist.name, " ", singleTheme_r68.artist.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r70.themeList.userManage);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", singleTheme_r68.position + 1, ".- ");
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_5_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](9, _c2, singleTheme_r68.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", singleTheme_r68.position || singleTheme_r68.position == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](singleTheme_r68.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](11, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](12, _c2, singleTheme_r68.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", singleTheme_r68.artist.name, " ", singleTheme_r68.artist.surname, "");
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6); return ctx_r82.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_4_Template, 11, 20, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_ng_container_5_Template, 9, 14, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "vinyl-", singleTheme_r68.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("src", "", ctx_r69.mediaPath, "/images/m-vinyl.png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("src", "", ctx_r69.mediaPath, "/images/covers/", singleTheme_r68.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r69.themeList.userManage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r69.themeList.userManage);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const singleTheme_r68 = restoredCtx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5); return ctx_r85.setAudioBarListPosition($event, singleTheme_r68.id); })("mousedown", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5); return ctx_r87.eventDrag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_ng_container_1_Template, 6, 6, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleTheme_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMapInterpolate1"]("white-space:nowrap; min-width: 275px; transition: filter 0.5s; cursor: ", ctx_r67.cursorTheme, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate3"]("id", "theme-container-", ctx_r67.selectedThemeList, "-", singleTheme_r68.artist.id, "-", singleTheme_r68.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", singleTheme_r68.name);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_div_1_Template, 2, 7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r65.themeList.list);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_ng_container_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleTheme_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", singleTheme_r89.position + 1, ".- ");
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_ng_container_1_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6); return ctx_r93.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_ng_container_1_span_7_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const singleTheme_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "vinyl-", singleTheme_r89.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("src", "", ctx_r90.mediaPath, "/images/m-vinyl.png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate2"]("src", "", ctx_r90.mediaPath, "/images/covers/", singleTheme_r89.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](13, _c2, singleTheme_r89.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", singleTheme_r89.position || singleTheme_r89.position == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](singleTheme_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](15, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](16, _c2, singleTheme_r89.artist.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", singleTheme_r89.artist.name, " ", singleTheme_r89.artist.surname, "");
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const singleTheme_r89 = restoredCtx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5); return ctx_r96.setAudioBarListPosition($event, singleTheme_r89.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_ng_container_1_Template, 12, 18, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleTheme_r89 = ctx.$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate3"]("id", "theme-container-", ctx_r88.selectedThemeList, "-", singleTheme_r89.artist.id, "-", singleTheme_r89.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", singleTheme_r89.name);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_div_1_Template, 2, 4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r66.themeList.list);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserPanelComponent_div_1_ng_container_24_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r63.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r63.isSessionUser);
} }
function UserPanelComponent_div_1_ng_container_24_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "La lista est\u00E1 vac\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function UserPanelComponent_div_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserPanelComponent_div_1_ng_container_24_ng_container_2_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, UserPanelComponent_div_1_ng_container_24_ng_container_3_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.themeList.list && ctx_r8.themeList.list.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.themeList.list && ctx_r8.themeList.list.length <= 0);
} }
function UserPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, UserPanelComponent_div_1_ng_container_8_Template, 31, 9, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, UserPanelComponent_div_1_ng_container_9_Template, 25, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Lista de reproducci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_1_Template_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r98.selectedThemeList = $event; })("change", function UserPanelComponent_div_1_Template_select_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r100.changeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, UserPanelComponent_div_1_ng_container_18_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, UserPanelComponent_div_1_option_19_Template, 2, 0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, UserPanelComponent_div_1_span_20_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, UserPanelComponent_div_1_ng_container_23_Template, 5, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, UserPanelComponent_div_1_ng_container_24_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "app-audio-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r0.selectedThemeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.defaultSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.ProfileData.themeLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.isSessionUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.themeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.themeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ajustableWidth", false);
} }
function UserPanelComponent_div_2_ng_container_1_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"]("Nombre: ", theme_r106.name, " - Autor: ", theme_r106.artist.name, " ", theme_r106.artist.surname, "");
} }
function UserPanelComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Copiar lista de reproducci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_2_ng_container_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r107.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Privada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_2_ng_container_1_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r109.inputCheckValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Datos de la lista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, UserPanelComponent_div_2_ng_container_1_p_36_Template, 2, 3, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r101.selectedThemeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r101.inputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r101.inputCheckValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Nombre: ", ctx_r101.selectedThemeList, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Autor: ", ctx_r101.ProfileData.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Temas en lista: ", ctx_r101.themeList.list.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r101.themeList.list);
} }
function UserPanelComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h2", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Nueva lista de reproducci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_2_ng_container_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r110.inputValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Privada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function UserPanelComponent_div_2_ng_container_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r112.inputCheckValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r102.inputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r102.inputCheckValue);
} }
function UserPanelComponent_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r103.inputErrMessage);
} }
function UserPanelComponent_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function UserPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_2_ng_container_1_Template, 37, 7, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserPanelComponent_div_2_ng_container_2_Template, 18, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, UserPanelComponent_div_2_p_3_Template, 2, 1, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserPanelComponent_div_2_ng_container_4_Template, 4, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r113.confirmFrom(ctx_r113.inputAttr); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserPanelComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r115.cleanForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.inputAttr == "copy" && ctx_r1.ProfileData && ctx_r1.themeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.inputAttr == "new" && ctx_r1.ProfileData);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.inputErrMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.inputErrMessage == "");
} }
class UserPanelComponent {
    constructor(route, manageUser, DatabaseConexService, autorizationService, router, comunicationService, manageComponent) {
        this.route = route;
        this.manageUser = manageUser;
        this.DatabaseConexService = DatabaseConexService;
        this.autorizationService = autorizationService;
        this.router = router;
        this.comunicationService = comunicationService;
        this.manageComponent = manageComponent;
        this.candy = { id: 'Profile', name: 'Profile', family: 'candy-profile', route: 'Profile', query: {}, routeQuery: '' };
        this.mediaPath = '../../../../../../assets/media';
        this.userName = (src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser) ? src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name : '';
        this.selectedThemeList = '';
        this.themePlaying = '';
        this.cursorTheme = 'grab';
        this.isSessionUser = false;
        this.privateValue = false;
        this.range = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.Variables.range;
        this.defaultSelect = '-- Selecciona lista --';
        this.modifyValuesData = {
            themeListName: { id: 'themeName', status: false, value: '' },
            modifyUserName: { id: 'userName', status: false, value: '' },
            modifyEmail: { id: 'userEmail', status: false, value: '' },
            modifyPassword: { id: 'userPassword', status: false, value: '' },
            modifyDescription: { id: 'userDescription', status: false, value: '' }
        };
        this.modifyPasswordData = {
            passwordCounter: 0,
            passwordRoundI: '',
            passwordMessage: ''
        };
        this.blackScreenStatus = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.GlobalVariables;
        this.showInput = false;
        this.inputAttr = '';
        this.inputValue = '';
        this.inputCheckValue = false;
        this.inputErrMessage = '';
        this.TooltipValues = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_4__.TooltipValues;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.sentToReproductor('stop', '');
            this.themePlaying = '';
            this.manageComponent.setLastURL();
            this.themeList = undefined;
            this.selectedThemeList = this.defaultSelect;
            this.userName = params['username'];
            this.manageUser.getProfileDataFromDataBase(this.userName).then((profile) => {
                this.isSessionUser = (profile.email) ? true : false;
                if (profile.email) {
                    this.setGlobalUser(profile);
                    this.modifyValuesData.modifyUserName.value = profile.name;
                    this.modifyValuesData.modifyEmail.value = profile.email;
                    this.modifyValuesData.modifyDescription.value = profile.description;
                }
                else {
                    this.ProfileData = this.setProfileUser(profile);
                }
                this.setLastSessionList();
                this.setCandy();
            });
        });
        this.comunicationService.sendReproductorViewDataObservable.subscribe(data => { this.reproductorSubscribe(data); });
    }
    reproductorSubscribe(data) {
        if (data && data.type) {
            let type = data.type;
            let value = data.value;
            switch (type) {
                case 'ready':
                    this.setAudioBarThemeList();
                    break;
                case 'ended':
                    this.addSelectedContainer(value);
                    let elementEnd = document.getElementById(`vinyl-${value}`);
                    this.hideAllVinyls(value);
                    this.cursorTheme = (this.themeList && this.themeList.userManage) ? 'grab' : 'pointer';
                    this.themePlaying = '';
                    if (elementEnd) {
                        elementEnd.classList.add('show');
                    }
                    break;
                case 'play':
                    let elementPlay = document.getElementById(`vinyl-${value}`);
                    this.hideAllVinyls(value);
                    this.cursorTheme = 'pointer';
                    this.themePlaying = value;
                    if (elementPlay) {
                        elementPlay.classList.add('show');
                    }
                    break;
                case 'stop':
                    let elementStop = document.getElementById(`vinyl-${value}`);
                    this.cursorTheme = (this.themeList && this.themeList.userManage) ? 'grab' : 'pointer';
                    if (elementStop) {
                        elementStop.classList.remove('show');
                    }
                    break;
            }
        }
    }
    showProfileForm(attribute) {
        this.cleanForm();
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_6__.NotificationManage.disableScroll();
        if (this.autorizationService.checkForToken() && this.ProfileData) {
            this.showInput = true;
            this.inputAttr = attribute.attrName;
            this.inputValue = attribute.value;
            this.blackScreenStatus.blackScreenStatus = 'show';
        }
        else {
            this.router.navigate(['/Sign-In']);
        }
    }
    confirmFrom(type) {
        var _a;
        switch (type) {
            case 'copy':
                if (this.themeList) {
                    let name = this.inputValue;
                    let privacy = JSON.stringify(this.inputCheckValue);
                    let list = (_a = this.themeList) === null || _a === void 0 ? void 0 : _a.list;
                    let nameUsed = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.getThemeList(name);
                    if (!nameUsed) {
                        this.DatabaseConexService.newThemeList(name, privacy, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name, list).subscribe(sucess => {
                            this.cleanForm();
                        }, err => {
                            console.error(`Error: ${err}`);
                        });
                    }
                    else {
                        this.inputErrMessage = 'Nombre en uso';
                    }
                }
                break;
            case 'new':
                let name = this.inputValue;
                let privacy = JSON.stringify(this.inputCheckValue);
                let nameUsed = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.getThemeList(name);
                if (!nameUsed) {
                    this.DatabaseConexService.newThemeList(name, privacy, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                        console.log(sucess);
                        src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.setNewThemeList(sucess.list);
                        console.log(src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser);
                        this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
                        this.cleanForm();
                    }, err => {
                        console.error(`Error: ${err}`);
                    });
                }
                else {
                    this.inputErrMessage = 'Nombre en uso';
                }
                break;
        }
    }
    cleanForm() {
        src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_6__.NotificationManage.enableScroll();
        this.showInput = false;
        this.inputAttr = '';
        this.inputValue = '';
        this.inputErrMessage = '';
        this.inputCheckValue = false;
        this.blackScreenStatus.blackScreenStatus = '';
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    eventDrag(event) {
        event.preventDefault();
        let clickElement = event.target;
        let container = this.getTopContainer({ element: clickElement });
        if (this.themeList && this.themeList.userManage && container != null && container.parentElement) {
            let list = container.parentElement.childNodes;
            let cleanList = this.containerListFilter(list);
            src_app_classes_DragEvent__WEBPACK_IMPORTED_MODULE_5__.DragEvent.dragEventListener(container, cleanList, (newList) => { this.changeListOrder(newList); });
        }
    }
    changeListOrder(newList) {
        if (this.themeList) {
            let newThemeList = src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.copyObject(this.themeList);
            newThemeList.privateState = `${newThemeList.privateState}`;
            newThemeList.userView = `${newThemeList.userView}`;
            newThemeList.userManage = `${newThemeList.userManage}`;
            newThemeList.userView = `${newThemeList.userView}`;
            newThemeList.list = newList;
            this.DatabaseConexService.modifyThemeList(newThemeList, this.themeList.name, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                this.changeList();
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
    }
    containerListFilter(list) {
        let cleanList = [];
        for (let index = 0; index < list.length; index++) {
            let element = list[index];
            if (element.classList && element.classList.contains('theme-container')) {
                cleanList.push(element);
            }
        }
        return cleanList;
    }
    getTopContainer(data) {
        let element = data.element;
        let count = (data.count) ? data.count : 0;
        if (count < 5) {
            if (element && element.classList.contains('theme-container')) {
                return element;
            }
            else if (element && element.parentElement) {
                return this.getTopContainer({ element: element.parentElement, count: count + 1 });
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    setLastSessionList() {
        if (this.ProfileData) {
            let lastList = localStorage.getItem(`last-${this.ProfileData.name}-theme-list`);
            if (lastList && lastList != '' && this.ProfileData) {
                let listExist = this.ProfileData.themeLists.map(themeList => { return themeList.name; }).indexOf(lastList);
                if (listExist != -1) {
                    this.selectedThemeList = lastList;
                    this.changeList();
                }
            }
        }
    }
    hideAllVinyls(exception) {
        let elements = document.getElementsByClassName('vinyl-xs');
        for (let index = 0; index < elements.length; index++) {
            if (elements[index].id != `vinyl-${exception}`) {
                elements[index].classList.remove('show');
            }
        }
    }
    sentToReproductor(type, value) {
        value = (value != undefined) ? value : '';
        this.comunicationService.sendReproductorData({ type, value });
    }
    addSelectedContainer(value) {
        var _a;
        let themeListName = this.selectedThemeList;
        let theme = (_a = this.themeList) === null || _a === void 0 ? void 0 : _a.list.find(theme => { return (theme.id == value); });
        if (theme) {
            let artistId = theme.artist.id;
            let element = document.getElementById(`theme-container-${themeListName}-${artistId}-${value}`);
            this.removeSelectedContainer();
            if (element) {
                element.classList.add('selected');
                //element.parentElement?.scrollTo(0, y);
                if (element.parentElement)
                    this.smoothScroll(element.parentElement, element);
                return true;
            }
        }
        return false;
    }
    smoothScroll(elementParent, elementCurrent, increment) {
        let limit = elementParent.scrollTop;
        let position = elementCurrent.offsetTop - elementCurrent.getBoundingClientRect().height * 0.25;
        position = (position < 0) ? 0 : position;
        let sum = (limit < position) ? 1 : -1;
        if (position >= 0) {
            setTimeout(() => {
                increment = (increment == undefined) ? 1.05 : increment;
                elementParent.scrollTo(0, limit + (sum * increment));
                increment = (4.05 < increment + 0.05) ? increment : increment + 0.05;
                let actualPosition = elementParent.scrollTop;
                if ((sum == 1 && actualPosition < position || sum == -1 && actualPosition > position) && limit != actualPosition) {
                    this.smoothScroll(elementParent, elementCurrent, increment);
                }
            }, 1);
        }
    }
    removeSelectedContainer() {
        let elements = document.getElementsByClassName('selected');
        for (let index = 0; index < elements.length; index++) {
            elements[index].classList.remove('selected');
        }
    }
    setAudioBarThemeList() {
        if (this.ProfileData) {
            let themeList = this.ProfileData.themeLists.find(themeList => { return themeList.name == this.selectedThemeList; });
            let themeId = (themeList) ? themeList.list.map(theme => { return theme; })[0].id : '';
            if (themeList) {
                this.sentToReproductor('themes', { isThemeList: true, themes: themeList.list });
                setTimeout(() => { this.addSelectedContainer(themeId); }, 100);
            }
        }
    }
    setAudioBarListPosition(event, themeId) {
        if (this.ProfileData) {
            let list = this.ProfileData.themeLists.find(themeList => { return themeList.name == this.selectedThemeList; });
            let element = event.target;
            if (list && this.themePlaying != themeId && element && !element.classList.contains('trash-can')) {
                let position = list.list.map(theme => { return theme.id; }).indexOf(themeId);
                if (position != -1) {
                    this.sentToReproductor('position', position);
                    this.hideAllVinyls();
                    this.sentToReproductor('play', '');
                }
            }
        }
    }
    setGlobalUser(profile) {
        src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser = src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User.setUser(profile.name, profile.admin, profile.date, profile.description, profile.themeLists, profile.email, profile.activeAccount);
        this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
    }
    setProfileUser(profile) {
        profile.themeLists.forEach(themeList => {
            themeList.privateState = JSON.parse(themeList.privateState);
            themeList.userManage = JSON.parse(themeList.userManage);
            themeList.userView = JSON.parse(themeList.userView);
        });
        return profile;
    }
    setCandy() {
        if (this.ProfileData) {
            this.candy.name = this.ProfileData.name;
            this.candy.family = `candy-${this.ProfileData.name}`;
            this.candy.route = `Profile`;
            this.candy.routeQuery = this.ProfileData.name;
            this.comunicationService.sendCandy(this.candy);
        }
    }
    privatizeThemeList() {
        if (this.autorizationService.checkForToken() && this.themeList) {
            this.DatabaseConexService.updateThemeListPrivacity(this.themeList.name, JSON.stringify(this.privateValue), src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                if (this.themeList && this.ProfileData) {
                    let status = (typeof sucess.status == 'string') ? JSON.parse(sucess.status) : sucess.status;
                    this.themeList.privateState = status;
                    src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.setThemeListPrivacity(this.themeList.name, status);
                    this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
                    this.privateValue = status;
                }
            }, err => {
                console.error(`Error: ${err}`);
                this.autorizationService.updateToken(err);
            });
        }
        else {
            this.router.navigate(['/Sign-In']);
        }
    }
    newThemeList(themeListData) {
        if (this.autorizationService.checkForToken() && this.ProfileData) {
            this.DatabaseConexService.newThemeList(themeListData.themeListName, JSON.stringify(themeListData.privacy), this.ProfileData.name).subscribe(sucess => {
                src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.setNewThemeList(sucess.list);
                this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
        else {
            this.router.navigate(['/Sign-In']);
        }
    }
    removeThemeList() {
        if (this.autorizationService.checkForToken() && this.themeList) {
            this.DatabaseConexService.removeThemeList(this.themeList.name, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                if (this.themeList && this.ProfileData && sucess.status) {
                    src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.removeThemeList(this.themeList.name);
                    this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
                    this.themeList = undefined;
                    this.selectedThemeList = this.defaultSelect;
                }
            }, err => {
                console.error(`Error: ${err}`);
                this.autorizationService.updateToken(err);
            });
        }
        else {
            this.router.navigate(['/Sign-In']);
        }
    }
    modifyPassword(event, exit) {
        let keyCode = event;
        keyCode = keyCode.code;
        if (((keyCode == 'Enter' || keyCode == 'Escape') && this.modifyValuesData.modifyPassword.status) || exit) {
            this.modifyPasswordData.passwordCounter = (keyCode == 'Escape' || exit) ? -1 : this.modifyPasswordData.passwordCounter;
            switch (this.modifyPasswordData.passwordCounter) {
                case -1:
                    this.resetPasswordInput();
                    break;
                case 0:
                    let password = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__.FormValidations.hashPassword(this.modifyValuesData.modifyPassword.value);
                    this.DatabaseConexService.checkPassword(src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name, password).subscribe(sucess => {
                        if (sucess.status) {
                            this.modifyPasswordData.passwordCounter++;
                            this.modifyValuesData.modifyPassword.value = '';
                            this.modifyPasswordData.passwordMessage = "Introduce tu nueva contraseña:";
                        }
                    }, err => {
                        this.modifyPasswordData.passwordMessage = "Contraseña incorrecta.";
                        console.error(`Error: ${err}`);
                    });
                    break;
                case 1:
                    this.modifyPasswordData.passwordRoundI = this.modifyValuesData.modifyPassword.value;
                    this.modifyValuesData.modifyPassword.value = '';
                    this.modifyPasswordData.passwordCounter++;
                    this.modifyPasswordData.passwordMessage = "Introduce nuevamente la nueva contraseña:";
                    break;
                case 2:
                    if (this.modifyPasswordData.passwordRoundI == this.modifyValuesData.modifyPassword.value) {
                        let password = src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__.FormValidations.hashPassword(this.modifyValuesData.modifyPassword.value);
                        let sucess = this.modifyUserData(this.modifyValuesData.modifyPassword, 'password', '', password, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name);
                        if (sucess) {
                            this.resetPasswordInput();
                        }
                    }
                    else {
                        this.modifyPasswordData.passwordMessage = "Las contraseñas no coinciden.";
                    }
                    break;
            }
        }
    }
    modifyData(data) {
        let attribute = data.attribute;
        let keyCode = data.event;
        keyCode = (keyCode.code) ? keyCode.code : undefined;
        if (keyCode == 'Enter' || keyCode == 'Escape' || keyCode == undefined) {
            if (this.ProfileData && this.autorizationService.checkForToken()) {
                let userAttribute = '';
                let oldAttribute = '';
                let newAttribute = '';
                let userName = this.ProfileData.name;
                let input = this.modifyValuesData.themeListName;
                let activeInput = this.modifyValuesData.themeListName.status;
                switch (attribute) {
                    case "themeName":
                        this.modifyThemeList();
                        break;
                    case "userName":
                        activeInput = this.modifyValuesData.modifyUserName.status;
                        if (activeInput && keyCode != 'Escape') {
                            userAttribute = 'name';
                            oldAttribute = this.ProfileData.name;
                            newAttribute = this.modifyValuesData.modifyUserName.value;
                            input = this.modifyValuesData.modifyUserName;
                            let sucess = this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
                            if (sucess) {
                                this.router.navigate([`/Profile/${newAttribute}`]);
                            }
                        }
                        else if (keyCode == 'Escape') {
                            this.modifyValuesData.modifyUserName.status = false;
                        }
                        break;
                    case "userEmail":
                        activeInput = this.modifyValuesData.modifyEmail.status;
                        if (activeInput && keyCode != 'Escape') {
                            userAttribute = 'email';
                            oldAttribute = this.ProfileData.email;
                            newAttribute = this.modifyValuesData.modifyEmail.value;
                            input = this.modifyValuesData.modifyEmail;
                            this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
                        }
                        else if (keyCode == 'Escape') {
                            this.modifyValuesData.modifyEmail.status = false;
                        }
                        break;
                    case "userDescription":
                        activeInput = this.modifyValuesData.modifyDescription.status;
                        if (activeInput && keyCode != 'Escape') {
                            userAttribute = 'description';
                            oldAttribute = this.ProfileData.description;
                            newAttribute = this.modifyValuesData.modifyDescription.value;
                            input = this.modifyValuesData.modifyDescription;
                            this.modifyUserData(input, userAttribute, oldAttribute, newAttribute, userName);
                        }
                        else if (keyCode == 'Escape') {
                            this.modifyValuesData.modifyDescription.status = false;
                        }
                        break;
                }
            }
            else {
                this.router.navigate(['/Sign-In']);
            }
        }
    }
    modifyUserData(input, attributte, oldAttribute, newAttribute, userName) {
        return new Promise(resolve => {
            if (oldAttribute != newAttribute) {
                this.DatabaseConexService.modifyUserData(attributte, oldAttribute, newAttribute, userName).subscribe(sucess => {
                    src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.setAttribute(attributte, newAttribute);
                    this.ProfileData = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser;
                    input.status = false;
                    this.manageComponent.refreshComponent(this.router.url);
                    resolve(true);
                }, err => {
                    console.error(`Error: ${err}`);
                    src_utils_tools_FormValidations__WEBPACK_IMPORTED_MODULE_3__.FormValidations.setErrorClass(input.id);
                    this.autorizationService.updateToken(err);
                    resolve(false);
                });
            }
            else {
                input.status = false;
            }
        });
    }
    modifyThemeList() {
        if (this.themeList && this.themeList.name != this.modifyValuesData.themeListName.value) {
            let newThemeList = src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.copyObject(this.themeList);
            newThemeList.name = this.modifyValuesData.themeListName.value;
            this.DatabaseConexService.modifyThemeList(newThemeList, this.themeList.name, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                if (this.themeList && this.ProfileData && sucess.status) {
                    localStorage.setItem(`last-${this.ProfileData.name}-theme-list`, this.selectedThemeList);
                    this.themeList.name = this.modifyValuesData.themeListName.value;
                    this.modifyValuesData.themeListName.status = false;
                }
            }, err => {
                var _a;
                console.error(`Error: ${err}`);
                this.modifyValuesData.themeListName.value = (_a = this.themeList) === null || _a === void 0 ? void 0 : _a.name;
                this.autorizationService.updateToken(err);
            });
        }
        else {
            this.modifyValuesData.themeListName.status = false;
        }
    }
    removeThemeFromList(id) {
        this.DatabaseConexService.removeFromThemeList(id, this.selectedThemeList, src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
            if (this.themeList) {
                //this.themeList.list = sucess.message;
                this.changeList();
            }
        }, err => {
            console.error(`Error: ${err}`);
        });
    }
    setFocus(id) {
        if (typeof id == 'string') {
            src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_2__.DataManage.setFocus(id);
        }
        else {
            id.focus();
        }
    }
    resetPasswordInput() {
        this.modifyPasswordData.passwordCounter = 0;
        this.modifyValuesData.modifyPassword.value = '';
        this.modifyPasswordData.passwordMessage = '';
        this.modifyValuesData.modifyPassword.status = false;
    }
    changeList() {
        if (this.ProfileData && this.selectedThemeList != this.defaultSelect) {
            if (this.selectedThemeList == '-- Nueva lista --') {
                setTimeout(() => { this.selectedThemeList = this.defaultSelect; }, 100);
                this.showProfileForm({ attrName: "new", attrId: "", value: '', secondValue: '' });
                this.themeList = undefined;
            }
            else {
                this.DatabaseConexService.getThemesFromList(this.ProfileData.name, this.selectedThemeList).subscribe(sucess => {
                    var _a, _b;
                    this.themeList = (_a = this.ProfileData) === null || _a === void 0 ? void 0 : _a.themeLists.find(themeList => {
                        if (this.ProfileData && themeList.name == this.selectedThemeList) {
                            localStorage.setItem(`last-${this.ProfileData.name}-theme-list`, this.selectedThemeList);
                            //sesionValues.activeUser.replaceThemeList(this.selectedThemeList, sucess.list);
                            return true;
                        }
                        return false;
                    });
                    if (this.themeList) {
                        this.themeList.list = sucess.list;
                        this.privateValue = this.themeList.privateState;
                        this.cursorTheme = (this.themeList.userManage) ? 'grab' : 'pointer';
                    }
                    this.modifyValuesData.themeListName.value = (_b = this.themeList) === null || _b === void 0 ? void 0 : _b.name;
                    this.setAudioBarThemeList();
                }, err => {
                    console.error(`Error: ${err}`);
                });
            }
        }
        else {
            this.themeList = undefined;
        }
    }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_utils_tools_ManageUser__WEBPACK_IMPORTED_MODULE_7__.ManageUser), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_8__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_9__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_10__.ComunicationServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_11__.ManageComponent)); };
UserPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], decls: 3, vars: 2, consts: [["id", "homeContainer"], ["class", "height-100", 4, "ngIf"], ["class", "form-style", 4, "ngIf"], [1, "height-100"], [2, "display", "inline-block", "width", "100%", "box-sizing", "border-box", "max-width", "1300px", "height", "100%", "background-color", "rgba(255,255,255, 0.1)"], [1, "display-inline", "width-50", "txt-horizontal-left", 2, "height", "530px", "max-width", "550px", "padding", "10px", "padding-left", "30px", "box-sizing", "border-box"], [1, "title-back"], [2, "padding-left", "10px", "padding-right", "10px"], [2, "padding-left", "10px", "background-color", "rgba(255,255,255, 0.1)", "height", "393px", "padding", "15px"], [4, "ngIf"], [1, "display-inline", "vertical-top", "width-50", 2, "height", "520.5px", "max-width", "550px", "padding", "10px", "padding-right", "30px", "box-sizing", "border-box", "overflow", "hidden"], [2, "padding-left", "15px", "padding-right", "15px"], [2, "position", "relative"], [3, "ngModel", "ngModelChange", "change"], ["selected", "selected"], [4, "ngFor", "ngForOf"], ["selected", "selected", 4, "ngIf"], ["tooltip", "Copiar lista", "style", "position: absolute; left: 100%; transform: translate(-110%, -12.5%);", "class", "my-vinyl-icons-font font-size-150 cursor-pointer", 3, "options", "click", 4, "ngIf"], [1, "box-sizing-border-box", 2, "height", "500px", "background-color", "rgba(50, 50, 55, 0.3)", "padding", "10px"], [2, "width", "100%", "display", "inline-block"], [2, "display", "inline-block", "width", "100%", "margin-top", "40px"], [3, "ajustableWidth"], [1, "attr-name"], [2, "border-bottom", "solid 2px black"], [2, "height", "100%", "display", "inline-block"], ["id", "pencil-writting-animation", 1, "display-inline"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "pencil-writting", "writting", "cursor-pointer", "display-inline", "font-size-125", 3, "options", "click"], ["id", "userName", "type", "text", 2, "margin", "0px", 3, "ngModel", "ngModelChange", "focusout", "keyup"], ["id", "userEmail", "type", "text", 2, "margin", "0px", 3, "ngModel", "ngModelChange", "focusout", "keyup"], [2, "letter-spacing", "2px"], [1, "my-vinyl-icons-font"], [2, "margin", "10px"], ["id", "userPassword", "type", "password", 3, "ngModel", "ngModelChange", "focusout", "keyup"], [2, "max-height", "209px", "overflow", "auto"], [3, "innerHtml"], [2, "background-color", "white"], [3, "styles", "placeholder", "ngModel", "onEditorCreated", "ngModelChange"], ["quill-editor-toolbar", "", 2, "white-space", "pre-line", "padding-left", "15px", "text-align", "center"], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "-1", 1, "ql-indent"], ["type", "button", "value", "+1", 1, "ql-indent"], [1, "ql-color", 2, "z-index", "9"], [1, "ql-background", 2, "z-index", "9"], [1, "ql-align"], ["selected", ""], ["value", "center"], ["value", "right"], ["value", "justify"], [1, "ql-link"], ["type", "button", 1, "ql-clean"], ["type", "button", 1, "my-vinyl-icons-font", "fake-quill-button-snow", 3, "click"], [2, "height", "100%"], [2, "height", "249px", "overflow", "auto"], ["tooltip", "Copiar lista", 1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "position", "absolute", "left", "100%", "transform", "translate(-110%, -12.5%)", 3, "options", "click"], ["style", "margin-top: 0px;", 4, "ngIf"], [2, "margin-top", "0px"], [2, "font-weight", "bold", "color", "#e1e1e1"], ["type", "checkbox", "name", "", "id", "", 3, "ngModel", "ngModelChange", "click"], ["tooltip", "Editar", "class", "my-vinyl-icons-font pencil-writting-bottom writting cursor-pointer display-inline font-size-150", 3, "options", "click", 4, "ngIf"], ["tooltip", "Eliminar", "id", "trash-can-animation", "class", "display-inline my-vinyl-icons-font font-size-150", 3, "options", "click", 4, "ngIf"], ["tooltip", "Editar", 1, "my-vinyl-icons-font", "pencil-writting-bottom", "writting", "cursor-pointer", "display-inline", "font-size-150", 3, "options", "click"], ["tooltip", "Eliminar", "id", "trash-can-animation", 1, "display-inline", "my-vinyl-icons-font", "font-size-150", 3, "options", "click"], [1, "trash-cap", "cursor-pointer", "display-inline"], [1, "trash-body", "cursor-pointer", "display-inline"], ["id", "themeName", "type", "text", 2, "margin-bottom", "8px", 3, "ngModel", "ngModelChange", "blur", "keyup"], [1, "overflow-auto", 2, "position", "relative", "height", "288px", "border", "2px solid rgba(50, 50, 55, 0.5)", "background-color", "rgba(50, 50, 55, 0.5)"], ["class", "theme-container text-left container-card", 3, "id", "style", "click", "mousedown", 4, "ngFor", "ngForOf"], [1, "theme-container", "text-left", "container-card", 3, "id", "click", "mousedown"], [1, "display-inline", 2, "vertical-align", "middle", "margin", "10px", "margin-right", "15px", "min-width", "50px"], [1, "cover-xs", "vinyl-xs", 2, "position", "absolute", 3, "id", "src"], [1, "cover-xs", 2, "border", "2px solid", "box-sizing", "border-box", "position", "relative", "z-index", "2", 3, "src", "error"], [1, "display-inline", "theme-container-title", 2, "width", "60%"], [1, "display-inline", 2, "vertical-align", "bottom"], ["placement", "bottom", 1, "cursor-pointer", 3, "tooltip", "options", "routerLink", "queryParams"], [1, "display-inline", 2, "width", "10%", "float", "right", "margin-right", "3px"], ["tooltip", "Eliminar", "style", "margin-top: 0px; margin-bottom: 0px; transform: translateY(100%);", "id", "trash-can-animation", "class", "trash-can display-inline my-vinyl-icons-font font-size-150 text-right", 3, "options", "click", 4, "ngIf"], ["tooltip", "Eliminar", "id", "trash-can-animation", 1, "trash-can", "display-inline", "my-vinyl-icons-font", "font-size-150", "text-right", 2, "margin-top", "0px", "margin-bottom", "0px", "transform", "translateY(100%)", 3, "options", "click"], [1, "trash-can", "trash-cap", "cursor-pointer", "display-inline"], [1, "trash-can", "trash-body", "cursor-pointer", "display-inline"], [1, "display-inline", "theme-container-title", 2, "width", "75%"], [1, "display-inline"], [1, "cursor-pointer", 3, "routerLink", "queryParams"], ["class", "theme-container text-left", "style", "white-space:nowrap; min-width: 255px; cursor: pointer;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "theme-container", "text-left", 2, "white-space", "nowrap", "min-width", "255px", "cursor", "pointer", 3, "id", "click"], [1, "cover-xs", 2, "position", "relative", "z-index", "2", 3, "src", "error"], [1, "form-style"], ["class", "text-error", "style", "text-align: center;", 4, "ngIf"], [1, "black-button", 2, "margin-right", "10px", 3, "click"], [1, "black-button", 2, "margin-left", "10px", 3, "click"], [2, "display", "inline-block", "text-align", "center"], [2, "text-align", "left"], [2, "text-align", "center"], [2, "display", "inline-block", "text-align", "left"], [1, "my-vinyl-icons-font", "font-size-150", "cursor-pointer", 2, "vertical-align", "middle"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [2, "margin", "5px"], [2, "margin-top", "10px", "margin-bottom", "10px"], [2, "max-height", "75px", "overflow-y", "scroll", "border", "1px solid", "display", "inline-block", "padding", "5px", "text-align", "left", "background-color", "rgba(0,0,0, 0.2)"], ["style", "margin-top: 5px; margin-bottom: 5px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "5px", "margin-bottom", "5px"], [1, "title-back-black"], [1, "text-error", 2, "text-align", "center"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserPanelComponent_div_1_Template, 29, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserPanelComponent_div_2_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.ProfileData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showInput && ctx.blackScreenStatus.blackScreenStatus != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _audio_bar_audio_bar_audio_bar_component__WEBPACK_IMPORTED_MODULE_12__.AudioBarComponent, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__.TooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, ngx_quill__WEBPACK_IMPORTED_MODULE_19__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink], pipes: [_services_pipes_DomSanitized__WEBPACK_IMPORTED_MODULE_13__.SafeHtmlPipe], styles: ["[_nghost-%COMP%]{\n    width: 100%;\n    text-align: center;\n}\n.vinyl-xs[_ngcontent-%COMP%]{\n    transition: 0.5s ease;\n}\n.vinyl-xs.show[_ngcontent-%COMP%]{\n    transition: 1s ease;\n\ttransform: translate(15%) rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0NBQ3RCLHdDQUF3QztBQUN6QyIsImZpbGUiOiJ1c2VyLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlueWwteHN7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLnZpbnlsLXhzLnNob3d7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUlKSByb3RhdGUoMTgwZGVnKTtcbn0iXX0= */"] });


/***/ }),

/***/ 8871:
/*!********************************************************************!*\
  !*** ./src/app/components/centre/user-data/user-data.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataComponent": () => (/* binding */ UserDataComponent)
/* harmony export */ });
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/tools/NotificationManage */ 6199);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var src_utils_tools_ManageUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/tools/ManageUser */ 8391);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);











function UserDataComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " =");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.TooltipValues);
} }
const _c0 = function (a0) { return [a0]; };
class UserDataComponent {
    constructor(authorization, manageUser, router, route, manageComponent) {
        this.authorization = authorization;
        this.manageUser = manageUser;
        this.router = router;
        this.route = route;
        this.manageComponent = manageComponent;
        this.globalVariables = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__.Variables;
        this.sessionValues = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__.sesionValues;
        this.range = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__.Variables.range;
        this.TooltipValues = src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_3__.TooltipValues;
        this.mediaPath = '../../../../assets/media';
    }
    ngOnInit() {
        this.manageComponent.setLastURL();
        this.manageUser.checkToken();
        this.manageUser.getUserDataFromDataBase().then(() => {
            this.sessionValues.activeUser = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__.sesionValues.activeUser;
            console.log(this.sessionValues.activeUser);
            if (this.sessionValues.activeUser.name == '@Usuario') {
                this.authorization.destroySession();
            }
            else if (!src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_2__.sesionValues.activeUser.activeAccount) {
                src_utils_tools_NotificationManage__WEBPACK_IMPORTED_MODULE_1__.NotificationManage.showMessage(`Parece que tu cuenta no está activada, recuerda que si no la activas en treinta días desde la creación de la misma será eliminada.`, true);
            }
        });
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_0__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    closeSession() {
        this.manageComponent.refreshComponent(this.router.url);
        this.authorization.destroySession();
    }
}
UserDataComponent.ɵfac = function UserDataComponent_Factory(t) { return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_utils_tools_ManageUser__WEBPACK_IMPORTED_MODULE_5__.ManageUser), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_6__.ManageComponent)); };
UserDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserDataComponent, selectors: [["app-user-data"]], decls: 20, vars: 10, consts: [["id", "userData"], [1, "user-data-container-small", "text-centre", 2, "white-space", "nowrap"], [1, "avatar-container-responsive"], [1, "display-inline", "avatar-back", "cursor-pointer", 2, "margin-right", "7px", "height", "85px", "width", "85px", 3, "routerLink"], [1, "avatar-small", "height-100", 3, "src", "error"], [1, "avatar-container-responsive", 2, "margin-left", "7px", "vertical-align", "baseline", "transform", "translateY(-50%)"], [1, "text-left", 2, "display", "inline-block"], [1, "cursor-pointer", 2, "margin-top", "5px", "margin-bottom", "5px", 3, "routerLink"], [1, "attr-name"], [2, "font-weight", "bold", "color", "#e1e1e1"], [2, "margin-top", "5px", "margin-bottom", "5px"], ["tooltip", "Admin", "class", "my-vinyl-icons-font admin-color", 3, "options", 4, "ngIf"], [1, "whiteLink", "centreLink", "marg-bott-0", "cursor-pointer", 2, "margin-top", "10px", 3, "click"], ["tooltip", "Admin", 1, "my-vinyl-icons-font", "admin-color", 3, "options"]], template: function UserDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function UserDataComponent_Template_img_error_4_listener($event) { return ctx.updateUrl($event, "user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Nombre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Rango: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, UserDataComponent_span_17_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserDataComponent_Template_p_click_18_listener() { return ctx.closeSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c0, "/Profile/" + ctx.sessionValues.activeUser.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/media/images/users/", ctx.sessionValues.activeUser.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c0, "/Profile/" + ctx.sessionValues.activeUser.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.sessionValues.activeUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.range[ctx.sessionValues.activeUser.admin]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sessionValues.activeUser.admin == "1");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhdGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6382:
/*!**********************************************************************************!*\
  !*** ./src/app/components/centre/user-data/verify-user/verify-user.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyUserComponent": () => (/* binding */ VerifyUserComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);







function VerifyUserComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.mediaPath, "/images/load.gif", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return [a0]; };
function VerifyUserComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Redirigir manualmente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.checkArmL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.checkArmR);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Se le redirigir\u00E1 a su perfil de usuario en ", ctx_r1.count, " segundos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, "/Profile/" + ctx_r1.sessionValues.activeUser.name));
} }
class VerifyUserComponent {
    constructor(DatabaseConexService, authorization, router, route) {
        this.DatabaseConexService = DatabaseConexService;
        this.authorization = authorization;
        this.router = router;
        this.route = route;
        this.statusMessage = 'Accediendo a la base de datos, espere un momento...';
        this.status = false;
        this.count = 5;
        this.mediaPath = '../../../../../assets/media';
        this.sessionValues = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues;
        this.checkArmL = '';
        this.checkArmR = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            let code = params['code'];
            if (code && code != '') {
                this.DatabaseConexService.checkActivationCode(code).subscribe(sucess => {
                    this.authorization.destroySession();
                    let user = sucess.user;
                    this.statusMessage = 'La cuenta se ha verifcado correctamente.';
                    this.status = true;
                    localStorage.setItem('sessionToken', sucess.token);
                    src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User.setUser(user.name, user.admin, user.date, user.description, user.themeLists, user.email, user.activeAccount);
                    this.startCheckAnimation();
                    let interval;
                    interval = setInterval(() => {
                        if (this.count > 0) {
                            this.count = this.count - 1;
                        }
                        else {
                            clearInterval(interval);
                            this.router.navigate([`/Profile/${user.name}`]);
                        }
                    }, 1000);
                }, err => {
                    console.error(err);
                    this.router.navigate(['/Home']);
                });
            }
            else {
                this.router.navigate(['/Home']);
            }
        });
    }
    startCheckAnimation() {
        setTimeout(() => {
            this.checkArmL = 'show';
            setTimeout(() => {
                this.checkArmR = 'show';
            }, 120);
        }, 120);
    }
}
VerifyUserComponent.ɵfac = function VerifyUserComponent_Factory(t) { return new (t || VerifyUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_3__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
VerifyUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerifyUserComponent, selectors: [["app-verify-user"]], decls: 9, vars: 3, consts: [["id", "homeContainer"], [2, "padding-left", "90px", "padding-right", "90px"], [1, "title-back"], [2, "margin-top", "35px"], ["style", "height: 40px;", 3, "src", 4, "ngIf"], [4, "ngIf"], [2, "height", "40px", 3, "src"], [2, "display", "inline-block", "height", "50px", "width", "100px", "transform", "rotate(-45deg) scale(0.75) translate(20%, -70%)"], ["id", "check-arm-l"], ["id", "check-arm-r"], ["href", "javascript:void(0);", 3, "routerLink"]], template: function VerifyUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Verificar cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, VerifyUserComponent_img_7_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, VerifyUserComponent_div_8_Template, 10, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.statusMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["[_nghost-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#check-arm-l[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    height: 0px;\r\n    background-color: rgb(63, 156, 63); \r\n    transform: translateY(20px);\r\n    transition: 0.12s;\r\n}\r\n#check-arm-r[_ngcontent-%COMP%]{\r\n    width: 0px;\r\n    height: 20px;\r\n    background-color: rgb(63, 156, 63); \r\n    transition: 0.12s;\r\n}\r\n#check-arm-l.show[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    transition: 0.12s;\r\n}\r\n#check-arm-r.show[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    transition: 0.12s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoidmVyaWZ5LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2NoZWNrLWFybS1se1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTU2LCA2Myk7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xMnM7XHJcbn1cclxuI2NoZWNrLWFybS1ye1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTU2LCA2Myk7IFxyXG4gICAgdHJhbnNpdGlvbjogMC4xMnM7XHJcbn1cclxuI2NoZWNrLWFybS1sLnNob3d7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjEycztcclxufVxyXG4jY2hlY2stYXJtLXIuc2hvd3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTJzO1xyXG59Il19 */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class FooterComponent {
    constructor() {
        this.footerList = ["Accesibilidad", "F.A.Q", "Acerca de nosotros"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, consts: [["id", "footer"], [4, "ngFor", "ngForOf"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["#footer[_ngcontent-%COMP%]{\r\n\r\n\theight: 5%;\r\n    text-align: center;\r\n    background-color: rgb(26, 26, 26);\r\n    min-height: 75px;\r\n\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tmargin-left: 70px;\r\n\tmargin-right: 70px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\tvertical-align: top;\r\n\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\r\n\tmargin: 0px;\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tdisplay: inline-block;\r\n\tfont-family: BlazingSun;\r\n\tcolor: white;\r\n\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\r\n\tcursor: pointer;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLFVBQVU7SUFDUCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUiwyQkFBMkI7Q0FDM0IsbUJBQW1COztBQUVwQjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLFlBQVk7O0FBRWI7O0FBRUE7O0NBRUMsZUFBZTs7QUFFaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVye1xyXG5cclxuXHRoZWlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xyXG4gICAgbWluLWhlaWdodDogNzVweDtcclxuXHJcbn1cclxuXHJcbiNmb290ZXIgZGl2e1xyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNzBweDtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbn1cclxuXHJcbiNmb290ZXIgcHtcclxuXHJcblx0bWFyZ2luOiAwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1mYW1pbHk6IEJsYXppbmdTdW47XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuI2Zvb3RlciBzcGFue1xyXG5cclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/tools/DataManage */ 5862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autorization-service/authorization.service */ 9452);
/* harmony import */ var _utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/tools/ManageComponent */ 4367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);








const _c0 = function (a0) { return [a0]; };
function HeaderComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function HeaderComponent_ng_container_18_Template_img_error_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.updateUrl($event, "theme"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_container_18_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.closeSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.mediaPath, "/images/users/", ctx_r1.sessionValues.activeUser.name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, "/Profile/" + ctx_r1.sessionValues.activeUser.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.userName.activeUser.name);
} }
const _c1 = function () { return ["/Sign-In"]; };
const _c2 = function () { return ["/Sign-Up"]; };
function HeaderComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Acceder");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2));
} }
const _c3 = function () { return ["/Home"]; };
const _c4 = function () { return ["/Search"]; };
const _c5 = function () { return { query: "owb", user: false }; };
const _c6 = function () { return { query: "mr", user: false }; };
const _c7 = function () { return { query: "cw", user: false }; };
class HeaderComponent {
    constructor(router, authorization, manageComponent) {
        this.router = router;
        this.authorization = authorization;
        this.manageComponent = manageComponent;
        this.searchQuery = '';
        this.userName = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues;
        this.expandStatus = false;
        this.sessionValues = src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_0__.sesionValues;
        this.mediaPath = '../../../assets/media';
    }
    ngOnInit() {
        window.onresize = () => {
            let width = window.innerWidth;
            if (width > 999) {
                this.expandStatus = false;
            }
        };
    }
    expandMenu() {
        this.expandStatus = !this.expandStatus;
    }
    launchQuery() {
        let query = this.searchQuery.split(' ').join('+');
        this.router.navigate(['/Search'], { queryParams: { query: query } });
    }
    updateUrl(event, type) {
        let element = event.target;
        src_utils_tools_DataManage__WEBPACK_IMPORTED_MODULE_1__.DataManage.repairBrokenImages(element, this.mediaPath, type);
    }
    closeSession() {
        this.authorization.destroySession();
        if (this.router.url.indexOf(`/Profile/${this.sessionValues.activeUser.name}`) != -1 || this.router.url.includes('/Artist') || this.router.url.includes('/Theme')) {
            this.manageComponent.refreshComponent(this.router.url);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_2__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_utils_tools_ManageComponent__WEBPACK_IMPORTED_MODULE_3__.ManageComponent)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 54, vars: 20, consts: [["id", "header", 2, "position", "relative"], ["id", "logo", "src", "assets/media/images/logo.png", 3, "routerLink"], [1, "centerContainer"], [3, "ngModel", "ngModelChange"], ["ctrl", "ngModel"], ["type", "submit", "value", "8", 1, "my-vinyl-icons-font", "cursor-pointer", "display-inline", "font-size-150", "vertical-middle", "gray-button", 3, "click"], ["id", "menuButton", 3, "click"], ["id", "barsContainer"], [1, "menuButtonBar"], ["id", "menuExpanded", 3, "ngClass"], [1, "menuContentHeader", "left"], [1, "category_candy"], [1, "category_shirt"], [4, "ngIf"], [1, "menuContentHeader"], [1, "category_owb", 3, "routerLink", "queryParams"], [1, "category_mr", 3, "routerLink", "queryParams"], [1, "category_cw", 3, "routerLink", "queryParams"], [1, "inferior_candy"], [3, "routerLink"], [1, "menuContentHeader", "right"], [1, "socialMenu", "font-social-media-font"], [1, "avatar-back", 2, "height", "25px", "vertical-align", "sub", "margin-right", "5px", 3, "src", "error"], ["href", "javascript:void(0);", "alt", "acceso/registro", 1, "link-decor-none", 2, "font-weight", "bold", "font-size", "1.35em", 3, "routerLink"], [2, "margin-top", "5px"], ["href", "javascript:void(0);", "alt", "Cerrar sesi\u00F3n", 1, "link-decor-none", 2, "color", "rgb(128, 128, 128)", 3, "click"], ["href", "javascript:void(0);", "alt", "acceso/registro", 1, "link-decor-none", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchQuery = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_input_click_5_listener() { return ctx.launchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { return ctx.expandMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, HeaderComponent_ng_container_18_Template, 9, 6, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, HeaderComponent_ng_container_19_Template, 7, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Categor\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Old World Blues");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Mojave Ride");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Classic Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Otros");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Galer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "f");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.expandStatus ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sessionValues.activeUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.sessionValues.activeUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["#header[_ngcontent-%COMP%] {\r\n\r\n\theight: 20%;\r\n\t\r\n    background-color: rgb(26, 26, 26);\r\n\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n    margin-left: 20px;\r\n    top: 50%;\r\n    height: 90%;\r\n\tmax-height: 250px;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#menuButton[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\tdisplay: none;\r\n\tfloat: right;\r\n\theight: 60px;\r\n\twidth: 60px;\r\n\tbackground-color: white;\r\n\tmargin-right: 30px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\tvertical-align: top;\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n#menuButton.over[_ngcontent-%COMP%]{\r\n\r\n\theight: 54px;\r\n\tbackground-color: white;\r\n\r\n}\r\n\r\n#barsContainer[_ngcontent-%COMP%]{\r\n\r\n\tposition: relative;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\r\n}\r\n\r\n.menuButtonBar[_ngcontent-%COMP%]{\r\n\r\n\tmargin: 5px;\r\n\tmargin-top: 0px;\r\n\tmargin-bottom: 7px;\r\n\theight: 8px;\r\n\tbackground-color: black;\r\n\r\n}\r\n\r\n.menuButtonBar.over[_ngcontent-%COMP%]{\r\n\r\n\tmargin: 4px;\r\n\tmargin-top: 0px;\r\n\tmargin-bottom: 5px;\r\n\theight: 7px;\r\n\r\n}\r\n\r\n#menuExpanded[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: none;\r\n\ttext-align: center;\r\n\tbackground-color: white;\r\n\r\n}\r\n\r\n#menuExpanded.active[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: block;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\ttext-align: center;\r\n\tlist-style: none;\r\n\tpadding: 10px;\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px;\r\n\tfont-family: BlazingSun;\r\n\tcolor: rgb(128, 128, 128);\r\n\r\n}\r\n\r\n.menuContentHeader.left[_ngcontent-%COMP%] {\r\n\r\n\tmargin-left: 22px;\r\n\r\n}\r\n\r\n.menuContentHeader.right[_ngcontent-%COMP%] {\r\n\r\n\tmargin-right: 22px;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\r\n\tfont-size: 1.4em;\r\n\tmargin-bottom: 10px;\r\n\tcolor: black;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\r\n\tmargin-top: 5px;\r\n\tpadding: 0px;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\r\n\ttext-align: center;\r\n\tlist-style: none;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n.menuContentHeader[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n\r\n\ttransform: scale(1.05);\r\n\r\n}\r\n\r\n#menuExpandedOptions[_ngcontent-%COMP%]{\r\n\r\n\tposition: absolute;\r\n\tmargin-top: 8px;\r\n\tmargin-left: 8px;\r\n\tleft: 0px;\r\n\r\n}\r\n\r\n#menuExpandedOptions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n\tmargin-bottom: 5px;\r\n\tdisplay: block;\r\n\tfont-size: 2.2em;\r\n\tcolor: rgb(0, 102, 68);\r\n\r\n}\r\n\r\n#menuExpandedOptions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n\ttransform: scale(1.05);\r\n\r\n}\r\n\r\n.socialMenu[_ngcontent-%COMP%]{\r\n\r\n\tdisplay: inline-block;\r\n\tfont-size: 1.3em;\r\n\tmargin: 2px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLFdBQVc7Q0FDWCw0REFBNEQ7SUFDekQsaUNBQWlDOztBQUVyQzs7QUFFQTs7Q0FFQyxrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFdBQVc7Q0FDZCxpQkFBaUI7SUFDZCwyQkFBMkI7SUFDM0IsZUFBZTs7QUFFbkI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLGVBQWU7O0FBRWhCOztBQUVBOztDQUVDLFlBQVk7Q0FDWix1QkFBdUI7O0FBRXhCOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsMkJBQTJCOztBQUU1Qjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsdUJBQXVCOztBQUV4Qjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixXQUFXOztBQUVaOztBQUdBOztDQUVDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsdUJBQXVCOztBQUV4Qjs7QUFFQTs7Q0FFQyxjQUFjOztBQUVmOztBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIseUJBQXlCOztBQUUxQjs7QUFFQTs7Q0FFQyxpQkFBaUI7O0FBRWxCOztBQUVBOztDQUVDLGtCQUFrQjs7QUFFbkI7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixZQUFZOztBQUViOztBQUVBOztDQUVDLGVBQWU7Q0FDZixZQUFZOztBQUViOztBQUdBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7O0FBRWpCOztBQUVBOztDQUVDLGVBQWU7O0FBRWhCOztBQUVBOztDQUVDLHNCQUFzQjs7QUFFdkI7O0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsU0FBUzs7QUFFVjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixzQkFBc0I7O0FBRXZCOztBQUVBOztDQUVDLHNCQUFzQjs7QUFFdkI7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixXQUFXOztBQUVaIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcblxyXG5cdGhlaWdodDogMjAlO1xyXG5cdC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vbWVkaWEvaW1hZ2VzL2hlYWRlcl9sZWFmLnBuZ1wiKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xyXG5cclxufVxyXG5cclxuI2xvZ297XHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuXHRtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbiNtZW51QnV0dG9ue1xyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdG1hcmdpbi1yaWdodDogMzBweDtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4jbWVudUJ1dHRvbi5vdmVye1xyXG5cclxuXHRoZWlnaHQ6IDU0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4jYmFyc0NvbnRhaW5lcntcclxuXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbn1cclxuXHJcbi5tZW51QnV0dG9uQmFye1xyXG5cclxuXHRtYXJnaW46IDVweDtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG5cdGhlaWdodDogOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLm1lbnVCdXR0b25CYXIub3ZlcntcclxuXHJcblx0bWFyZ2luOiA0cHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRoZWlnaHQ6IDdweDtcclxuXHJcbn1cclxuXHJcblxyXG4jbWVudUV4cGFuZGVke1xyXG5cclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbiNtZW51RXhwYW5kZWQuYWN0aXZle1xyXG5cclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5tZW51Q29udGVudEhlYWRlcntcclxuXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxuXHRmb250LWZhbWlseTogQmxhemluZ1N1bjtcclxuXHRjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG5cclxufVxyXG5cclxuLm1lbnVDb250ZW50SGVhZGVyLmxlZnQge1xyXG5cclxuXHRtYXJnaW4tbGVmdDogMjJweDtcclxuXHJcbn1cclxuXHJcbi5tZW51Q29udGVudEhlYWRlci5yaWdodCB7XHJcblxyXG5cdG1hcmdpbi1yaWdodDogMjJweDtcclxuXHJcbn1cclxuXHJcbi5tZW51Q29udGVudEhlYWRlciBzcGFue1xyXG5cclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLm1lbnVDb250ZW50SGVhZGVyIHVse1xyXG5cclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5tZW51Q29udGVudEhlYWRlciBsaXtcclxuXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG59XHJcblxyXG4ubWVudUNvbnRlbnRIZWFkZXIgbGkgbGl7XHJcblxyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tZW51Q29udGVudEhlYWRlciBsaSBsaTpob3ZlcntcclxuXHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHJcbn1cclxuXHJcbiNtZW51RXhwYW5kZWRPcHRpb25ze1xyXG5cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bWFyZ2luLXRvcDogOHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA4cHg7XHJcblx0bGVmdDogMHB4O1xyXG5cclxufVxyXG5cclxuI21lbnVFeHBhbmRlZE9wdGlvbnMgYXtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMi4yZW07XHJcblx0Y29sb3I6IHJnYigwLCAxMDIsIDY4KTtcclxuXHJcbn1cclxuXHJcbiNtZW51RXhwYW5kZWRPcHRpb25zIGE6aG92ZXJ7XHJcblxyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblxyXG59XHJcblxyXG4uc29jaWFsTWVudXtcclxuXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMS4zZW07XHJcblx0bWFyZ2luOiAycHg7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 9452:
/*!************************************************************************!*\
  !*** ./src/app/services/autorization-service/authorization.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService)
/* harmony export */ });
/* harmony import */ var src_app_classes_ThemeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/ThemeList */ 9353);
/* harmony import */ var src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/variables/sessionVariables */ 8168);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/User */ 1336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







class AuthorizationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    signIn(email, password) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_2__.Variables.host}/api/user/access/signin`, { email, password });
    }
    signUp(name, email, password) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_2__.Variables.host}/api/user/access/signup`, { name, email, password });
    }
    setToken(token) {
        localStorage.setItem('sessionToken', token);
    }
    checkForToken() {
        return (localStorage.getItem('sessionToken'));
    }
    destroySession() {
        localStorage.removeItem('sessionToken');
        this.destroyUser();
    }
    destroyUser() {
        _classes_User__WEBPACK_IMPORTED_MODULE_3__.User.setUser('@Usuario', '0', 0, '', [src_app_classes_ThemeList__WEBPACK_IMPORTED_MODULE_0__.ThemeList.emptyThemeList()]);
        src_utils_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser = _classes_User__WEBPACK_IMPORTED_MODULE_3__.User.activeUser;
    }
    updateToken(err) {
        let serverError = err.error;
        if (serverError.destroyToken) {
            this.destroySession();
            this.router.navigate(['/Sign-In']);
        }
        if (serverError.updateToken) {
            this.setToken(serverError.message);
        }
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthorizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8319:
/*!*******************************************************************************!*\
  !*** ./src/app/services/comunication-service/comunication-service.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicationServiceService": () => (/* binding */ ComunicationServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class ComunicationServiceService {
    constructor() {
        this.sendCandySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendCandyObservable = this.sendCandySubject.asObservable();
        this.sendCandiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendCandiesObservable = this.sendCandiesSubject.asObservable();
        this.sendReproductorViewDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendReproductorViewDataObservable = this.sendReproductorViewDataSubject.asObservable();
        this.sendReproductorDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendReproductorDataObservable = this.sendReproductorDataSubject.asObservable();
    }
    sendCandy(candy) {
        this.candy = candy;
        this.sendCandySubject.next(candy);
    }
    sendCandies(candies) {
        this.candies = candies;
        this.sendCandiesSubject.next(candies);
    }
    sendReproductorViewData(reproductorViewData) {
        this.reproductorViewData = reproductorViewData;
        this.sendReproductorViewDataSubject.next(reproductorViewData);
    }
    sendReproductorViewDataUnsubscribe() {
        this.sendReproductorViewDataSubject.next();
        this.sendReproductorViewDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendReproductorViewDataObservable = this.sendReproductorViewDataSubject.asObservable();
    }
    sendReproductorDataUnsubscribe() {
        this.sendReproductorDataSubject.next();
        this.sendReproductorDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sendReproductorDataObservable = this.sendReproductorDataSubject.asObservable();
    }
    sendReproductorData(reproductorData) {
        this.reproductorData = reproductorData;
        this.sendReproductorDataSubject.next(reproductorData);
    }
}
ComunicationServiceService.ɵfac = function ComunicationServiceService_Factory(t) { return new (t || ComunicationServiceService)(); };
ComunicationServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComunicationServiceService, factory: ComunicationServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 522:
/*!***************************************************************************!*\
  !*** ./src/app/services/database-conex-service/database-conex.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseConexService": () => (/* binding */ DatabaseConexService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/variables/variables */ 7347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);





class DatabaseConexService {
    constructor(http) {
        this.http = http;
    }
    getArtists(limit) {
        limit = (limit) ? limit : '-1';
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/getData?count=${limit}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('Searching..')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError()));
    }
    getThemeData(themeId) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}`);
    }
    getArtistData(artistId) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist/${artistId}`);
    }
    getArtistDataByQuery(queryData, limitQuery, pageQuery, fieldsQuery) {
        limitQuery = (limitQuery) ? limitQuery : 0;
        pageQuery = (pageQuery) ? pageQuery : 0;
        fieldsQuery = (fieldsQuery) ? fieldsQuery : ['all'];
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist/${pageQuery}/${limitQuery}?query=${JSON.stringify(queryData)}&fields=${JSON.stringify(fieldsQuery)}`);
    }
    getProfileData(profile) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${profile}`);
    }
    checkToken(userName) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/self/profile/token/date?userName=${userName}`);
    }
    extendSession(userName) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/self/profile/token/refresh?userName=${userName}`);
    }
    getUserData() {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/self/profile/token`);
    }
    getUsersData(nameQuery, limitQuery, pageQuery) {
        limitQuery = (limitQuery) ? limitQuery : 0;
        pageQuery = (pageQuery) ? pageQuery : 1;
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${pageQuery}/${limitQuery}?nameQuery=${JSON.stringify(nameQuery)}`);
    }
    setNewTheme(artistId, name, flag, tags, lyrics, userName) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme`, { artistId, name, flag, tags, lyrics, userName });
    }
    removeArtist(artistId, userName) {
        return this.http.delete(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist/${artistId}?user=${userName}`);
    }
    removeTheme(artistId, themeId, userName) {
        return this.http.delete(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}?user=${userName}`);
    }
    setArtistAttribute(artistId, attribute, value, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist/${artistId}/${attribute}?value=${JSON.stringify(value)}`, { userName });
    }
    setThemeAttribute(themeId, attribute, value, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}/${attribute}?value=${JSON.stringify(value)}`, { userName });
    }
    reassignArtistTheme(mainArtistId, targetArtistId, themeId, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/reassign/${mainArtistId}/${targetArtistId}/${themeId}`, { userName });
    }
    reassignArtistThemes(mainArtistId, targetArtistId, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/reassign/${mainArtistId}/${targetArtistId}/all`, { userName });
    }
    setThemeComment(themeId, userName, comment) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}/comment`, { userName, comment });
    }
    thumbValueTheme(themeId, thumbValue, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}/thumb/${thumbValue}`, { userName });
    }
    removeThemeComment(themeId, userName, commentId) {
        return this.http.delete(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/${themeId}/comment/${commentId}?user=${userName}`);
    }
    updateThemeListPrivacity(themeListName, state, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}/attribute/privacy`, { state });
    }
    newThemeList(themeListName, privacy, userName, list) {
        list = (list) ? list : [];
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}`, { privacy, list });
    }
    removeThemeList(themeListName, userName) {
        return this.http.delete(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}`);
    }
    addToThemeList(artistId, themeId, themeListName, userName) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}/${themeId}`, { artistId });
    }
    removeFromThemeList(themeId, themeListName, userName) {
        return this.http.delete(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}/${themeId}`);
    }
    modifyThemeList(themeList, themeListName, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/themelist/${themeListName}`, { themeList });
    }
    modifyUserData(attribute, oldAttribute, newAttribute, userName) {
        return this.http.patch(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/${attribute}`, { oldAttribute, newAttribute });
    }
    checkPassword(userName, password) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${userName}/password/${password}`);
    }
    getThemesFromList(profile, themeListName) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/${profile}/themelist/${themeListName}/all`);
    }
    getArtistsIds(attribute) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist/attributte/${attribute}/all`);
    }
    getFlagsNames() {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/theme/attributte/flags/all`);
    }
    sendFilesToServer(FormData) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/file`, FormData);
    }
    setNewArtist(artistId, name, surname, description, tags, userName) {
        return this.http.post(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/artist`, { artistId, name, surname, description, tags, userName });
    }
    checkActivationCode(code) {
        return this.http.get(`https://${src_utils_variables_variables__WEBPACK_IMPORTED_MODULE_0__.Variables.host}/api/user/verify/${code}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
DatabaseConexService.ɵfac = function DatabaseConexService_Factory(t) { return new (t || DatabaseConexService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
DatabaseConexService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DatabaseConexService, factory: DatabaseConexService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8174:
/*!**********************************************!*\
  !*** ./src/app/services/pipes/DateFormat.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormat": () => (/* binding */ DateFormat)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DateFormat {
    constructor() { }
    transform(value) {
        let date = new Date(value);
        date = (JSON.stringify(date) == 'null') ? new Date(946708560000) : date;
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        return `${month}/${day}/${year}`;
    }
}
DateFormat.ɵfac = function DateFormat_Factory(t) { return new (t || DateFormat)(); };
DateFormat.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "DateFormat", type: DateFormat, pure: true });


/***/ }),

/***/ 7605:
/*!************************************************!*\
  !*** ./src/app/services/pipes/DomSanitized.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9075);


class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });


/***/ }),

/***/ 1603:
/*!*************************************************************************!*\
  !*** ./src/app/services/token-interceptor/token-interceptor.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorService": () => (/* binding */ TokenInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class TokenInterceptorService {
    constructor() { }
    intercept(req, next) {
        const tokenizeReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
            }
        });
        return next.handle(tokenizeReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(); };
TokenInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4718:
/*!*************************************************!*\
  !*** ./src/utils/audio-bar/AudionufferToWav.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudiobufferToWav": () => (/* binding */ AudiobufferToWav)
/* harmony export */ });
class AudiobufferToWav {
    //////////////////////////////////////////////////////////////////////////////
    // All credits to Matt DesLauriers form GitHub: https://github.com/mattdesl //
    //////////////////////////////////////////////////////////////////////////////
    static audioBufferToWav(buffer, opt) {
        opt = opt || {};
        var numChannels = buffer.numberOfChannels;
        var sampleRate = buffer.sampleRate;
        var format = opt.float32 ? 3 : 1;
        var bitDepth = format === 3 ? 32 : 16;
        var result;
        if (numChannels === 2) {
            result = AudiobufferToWav.interleave(buffer.getChannelData(0), buffer.getChannelData(1));
        }
        else {
            result = buffer.getChannelData(0);
        }
        return AudiobufferToWav.encodeWAV(result, format, sampleRate, numChannels, bitDepth);
    }
    static encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
        var bytesPerSample = bitDepth / 8;
        var blockAlign = numChannels * bytesPerSample;
        var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
        var view = new DataView(buffer);
        /* RIFF identifier */
        AudiobufferToWav.writeString(view, 0, 'RIFF');
        /* RIFF chunk length */
        view.setUint32(4, 36 + samples.length * bytesPerSample, true);
        /* RIFF type */
        AudiobufferToWav.writeString(view, 8, 'WAVE');
        /* format chunk identifier */
        AudiobufferToWav.writeString(view, 12, 'fmt ');
        /* format chunk length */
        view.setUint32(16, 16, true);
        /* sample format (raw) */
        view.setUint16(20, format, true);
        /* channel count */
        view.setUint16(22, numChannels, true);
        /* sample rate */
        view.setUint32(24, sampleRate, true);
        /* byte rate (sample rate * block align) */
        view.setUint32(28, sampleRate * blockAlign, true);
        /* block align (channel count * bytes per sample) */
        view.setUint16(32, blockAlign, true);
        /* bits per sample */
        view.setUint16(34, bitDepth, true);
        /* data chunk identifier */
        AudiobufferToWav.writeString(view, 36, 'data');
        /* data chunk length */
        view.setUint32(40, samples.length * bytesPerSample, true);
        if (format === 1) { // Raw PCM
            AudiobufferToWav.floatTo16BitPCM(view, 44, samples);
        }
        else {
            AudiobufferToWav.writeFloat32(view, 44, samples);
        }
        return buffer;
    }
    static interleave(inputL, inputR) {
        var length = inputL.length + inputR.length;
        var result = new Float32Array(length);
        var index = 0;
        var inputIndex = 0;
        while (index < length) {
            result[index++] = inputL[inputIndex];
            result[index++] = inputR[inputIndex];
            inputIndex++;
        }
        return result;
    }
    static writeFloat32(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 4) {
            output.setFloat32(offset, input[i], true);
        }
    }
    static floatTo16BitPCM(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 2) {
            var s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
    }
    static writeString(view, offset, string) {
        for (var i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
}


/***/ }),

/***/ 4553:
/*!******************************************!*\
  !*** ./src/utils/audio-bar/Bar-Utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarUtils": () => (/* binding */ BarUtils)
/* harmony export */ });
class BarUtils {
    static positionInBar(cuersorPosition, item) {
        let overflow = (item)
            ? (Math.sign(item.getBoundingClientRect().x) < 0)
                ? Math.abs(item.getBoundingClientRect().x)
                : item.getBoundingClientRect().x * -1
            : 0;
        return cuersorPosition + overflow;
    }
    static randomizeList(themesList, position) {
        let randomList = [];
        let themeListTransition = this.copyArray(themesList);
        randomList.push(themeListTransition[position]);
        themeListTransition.splice(position, 1);
        while (themeListTransition.length > 0) {
            let random = Math.floor(Math.random() * themeListTransition.length);
            if (random < themeListTransition.length) {
                randomList.push(themeListTransition[random]);
                themeListTransition.splice(random, 1);
            }
        }
        return randomList;
    }
    static findActualPosition(themesListActive, position, themesList) {
        let actualId = themesListActive[position].id;
        let index = -1;
        themesList.find(theme => { index++; return (theme.id == actualId); });
        return index;
    }
    static copyArray(array) {
        let arrayCopy = [];
        for (const obj of array) {
            arrayCopy.push(obj);
        }
        return arrayCopy;
    }
    static getSeconds(time) {
        let second = Math.floor((time * 1000 % (1000 * 60)) / 1000);
        let minute = Math.floor((time * 1000 % (1000 * 60 * 60)) / (1000 * 60));
        second = (second >= 0) ? second : 0;
        minute = (minute >= 0) ? minute : 0;
        second = (second.toString().length > 1) ? second : `0${second}`;
        minute = (minute.toString().length > 1) ? minute : `0${minute}`;
        return minute + ':' + second;
    }
}


/***/ }),

/***/ 4688:
/*!********************************************************!*\
  !*** ./src/utils/audio-bar/variables/Bar-Variables.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color_Vars": () => (/* binding */ Color_Vars)
/* harmony export */ });
const Color_Vars = {
    load_gif_status: {
        hidden: 'hidden',
        visible: 'initial'
    },
    bar_progress_color: {
        pause: '#750b20',
        play: '#dc143c',
        reverse_play: '#FF6600',
        reverse_rause: '#993D00'
    },
    bar_volume_color: {
        front: {
            unmuted: '#808080',
            muted: '#808080',
        },
        background: {
            unmuted: '#BFBFBF',
            muted: '#BFBFBF'
        }
    },
    meatball_color: {
        senior: {},
        baby: {
            unmuted: '#808080',
            muted: '#808080'
        }
    },
    button_play_color: {
        pause: 'transparent',
        play: '#963737'
    },
    button_mute_color: {
        unmuted: 'transparent',
        muted: '#5a648c'
    },
    button_loop_color: {
        loop: '#5a648c',
        normal: 'transparent',
        simple: '#e6e6eb',
        gear: '#9c9cb0'
    },
    button_random_color: {
        random: '#5a648c',
        normal: 'transparent',
        simple: '#e6e6eb',
        gear: '#9c9cb0'
    },
    button_loop_list_color: {
        loop: '#5a648c',
        normal: 'transparent',
        simple: '#e6e6eb',
        gear: '#9c9cb0'
    },
    button_reverse_color: {
        reverse: '#965537',
        normal: 'transparent',
        simple: '#cc8f00',
        gear: '#cc8f00'
    },
    volume_logo: {
        percentage_75: 'B',
        percentage_50: 'C',
        percentage_25: 'D',
        percentage_0: 'E',
        percentage_75_muted: 'T',
        percentage_50_muted: 'U',
        percentage_25_muted: 'V',
        percentage_0_muted: 'W'
    }
};


/***/ }),

/***/ 5862:
/*!***************************************!*\
  !*** ./src/utils/tools/DataManage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataManage": () => (/* binding */ DataManage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);

class DataManage {
    static copyObject(object) {
        let objectToString = JSON.stringify(object);
        return JSON.parse(objectToString);
    }
    static setFocus(id) {
        setTimeout(() => { var _a; (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.focus(); }, 100);
    }
    static syncForEach(list, func) {
        return new Promise(resolve => {
            let result = list.forEach(func);
            resolve(result);
        });
    }
    static toAsync(func) {
        return new Promise(resolve => {
            func(resolve);
        });
    }
    static clearRepeatData(list, type, actualId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let cleanList = [];
            if (type == 'artist') {
                cleanList = cleanList;
                list = list;
                yield DataManage.syncForEach(list, (artist) => {
                    cleanList = cleanList;
                    let inList = cleanList.map((artist) => { return artist.id_artist; }).indexOf(artist.id_artist);
                    if (inList == -1 && (!actualId || actualId && actualId != artist.id_artist)) {
                        cleanList.push(artist);
                    }
                });
            }
            if (type == 'theme') {
                cleanList = cleanList;
                list = list;
                yield DataManage.syncForEach(list, (theme) => {
                    cleanList = cleanList;
                    let inList = cleanList.map((theme) => { return theme.id; }).indexOf(theme.id);
                    if (inList == -1 && (!actualId || actualId && actualId != theme.id)) {
                        cleanList.push(theme);
                    }
                });
            }
            if (type == 'user') {
                cleanList = cleanList;
                list = list;
                yield DataManage.syncForEach(list, (user) => {
                    cleanList = cleanList;
                    let inList = cleanList.map((user) => { return user.name; }).indexOf(user.name);
                    if (inList == -1) {
                        cleanList.push(user);
                    }
                });
            }
            return cleanList;
        });
    }
    static repairBrokenImages(element, path, type) {
        if (element) {
            switch (type) {
                case 'user':
                    element.src = `${path}/images/users/default-profile.png`;
                    break;
                case 'artist':
                    element.src = `${path}/images/artists/not_found.png`;
                    break;
                case 'theme':
                    element.src = `${path}/images/covers/not_found.png`;
                    break;
            }
        }
    }
}


/***/ }),

/***/ 8112:
/*!********************************************!*\
  !*** ./src/utils/tools/FormValidations.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidations": () => (/* binding */ FormValidations)
/* harmony export */ });
/* harmony import */ var md5_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5-hash */ 908);

class FormValidations {
    static checkForErrors(userData, formError) {
        let inputsName = Object.keys(formError);
        inputsName.forEach(input => {
            switch (input) {
                case 'name':
                    formError[input] = (userData[input] == '') ? 'Nombre no válido' : '';
                    break;
                case 'email':
                    formError[input] = (!FormValidations.valideEmail(userData[input])) ? 'Email no válido' : '';
                    break;
                case 'password':
                    if (userData['repassword']) {
                        formError[input] = (!FormValidations.validePasssword(userData[input])) ? 'Contraseña no válida' : '';
                    }
                    else {
                        formError[input] = (userData[input] == '') ? 'Contraseña no válida' : '';
                    }
                    break;
                case 'repassword':
                    formError[input] = (!FormValidations.comparePasswords(userData['password'], userData['repassword'])) ? 'Las contraseñas no son iguales' : '';
                    break;
                default:
                    break;
            }
        });
        return formError;
    }
    static checkErrors(formError) {
        let errorsFree = true;
        let inputsName = Object.keys(formError);
        let index = 0;
        while (index < inputsName.length && errorsFree == true) {
            if (formError[inputsName[index]] != '')
                errorsFree = false;
            index++;
        }
        return errorsFree;
    }
    static checkServerErrors(serverMessage, formError) {
        formError[serverMessage.attribute] = serverMessage.message;
        return formError;
    }
    static valideEmail(email) {
        let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(email.toLowerCase());
    }
    static validePasssword(password) {
        console.log(password);
        let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.,:;])\S{8,}$/;
        return validPassword.test(password);
    }
    static comparePasswords(password, repassword) {
        return (password == repassword) ? true : false;
    }
    static hashPassword(password) {
        return (0,md5_hash__WEBPACK_IMPORTED_MODULE_0__.default)(password);
    }
    static setErrorClass(id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.classList.add('input-error');
    }
    static checkTags(tags) {
        let tagsSplitted = tags.replace(/ /g, '').split(',');
        let tagsClean = [...new Set(tagsSplitted)];
        return tagsClean;
    }
}


/***/ }),

/***/ 4367:
/*!********************************************!*\
  !*** ./src/utils/tools/ManageComponent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageComponent": () => (/* binding */ ManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/comunication-service/comunication-service.service */ 8319);



class ManageComponent {
    constructor(router, comunicationService) {
        this.router = router;
        this.comunicationService = comunicationService;
    }
    refreshComponent(componentURL) {
        let middlePath = (componentURL.indexOf('Home') == -1) ? 'Home' : 'Search';
        this.router.navigateByUrl(`/${middlePath}`).then(() => {
            if (componentURL.indexOf('?') == -1) {
                this.router.navigate([componentURL]);
            }
            else {
                let queryAndRoute = componentURL.split('?');
                let query = queryAndRoute[1].split('=');
                let queryObject = [];
                queryObject[query[0]] = query[1];
                this.router.navigate([queryAndRoute[0]], { queryParams: queryObject });
            }
        });
    }
    setLastURL() {
        let item = { route: this.router.url, count: 0 };
        if (localStorage.getItem('lastURL') != null) {
            let itemOld = JSON.parse(localStorage.getItem('lastURL'));
            itemOld.count = (this.router.url == '/Sign-In' || this.router.url == '/Sign-Up') ? 1 : 0;
            if (itemOld.count == 1) {
                itemOld.count = itemOld.count - 1;
                item = itemOld;
            }
        }
        localStorage.setItem('storeCandyRow', localStorage.getItem('lastCandyRow'));
        localStorage.setItem('lastURL', JSON.stringify(item));
    }
    getLastURL() {
        let route = 'Home';
        if (localStorage.getItem('lastURL') != null) {
            let saveRoute = JSON.parse(localStorage.getItem('lastURL'));
            route = saveRoute.route;
        }
        this.comunicationService.sendCandies(JSON.parse(localStorage.getItem('storeCandyRow')));
        return route;
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_comunication_service_comunication_service_service__WEBPACK_IMPORTED_MODULE_0__.ComunicationServiceService)); };
ManageComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ManageComponent, factory: ManageComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8391:
/*!***************************************!*\
  !*** ./src/utils/tools/ManageUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUser": () => (/* binding */ ManageUser)
/* harmony export */ });
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var _variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables/sessionVariables */ 8168);
/* harmony import */ var _NotificationManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationManage */ 6199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/database-conex-service/database-conex.service */ 522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autorization-service/authorization.service */ 9452);







class ManageUser {
    constructor(DatabaseConexService, router, autorizationService) {
        this.DatabaseConexService = DatabaseConexService;
        this.router = router;
        this.autorizationService = autorizationService;
        this.checkTokenInterval = undefined;
        this.countAnswer = 0;
        this.alerted = false;
    }
    ;
    checkToken() {
        if (!this.checkTokenInterval) {
            this.checkTokenInterval = setInterval(() => {
                if (this.autorizationService.checkForToken()) {
                    this.DatabaseConexService.checkToken(_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                        let status = sucess.status;
                        let code = sucess.message.code;
                        let time = sucess.message.time;
                        if (!status) {
                            switch (code) {
                                case 'correct':
                                    break;
                                case 'warn':
                                    let expireDate = new Date(Date.now() + time);
                                    var minutes = Math.floor(time / 60000);
                                    if (!this.alerted) {
                                        this.alerted = true;
                                        minutes = (minutes == 0) ? `menos de ${minutes + 1} minuto` : (minutes == 1) ? `${minutes} minuto` : `${minutes} minutos`;
                                        _NotificationManage__WEBPACK_IMPORTED_MODULE_2__.NotificationManage.showMessage(`La sesión va a caducar en ${minutes}. ¿Quieres extender la sesión?`, true, 'answer', this.refreshToken.bind(this));
                                    }
                                    break;
                                case 'expired':
                                    this.alerted = false;
                                    _NotificationManage__WEBPACK_IMPORTED_MODULE_2__.NotificationManage.showMessage(`La sesión ha caducado`, true, 'manual');
                                    this.autorizationService.destroySession();
                                    break;
                            }
                        }
                    }, err => {
                        console.error(`Error: ${err.message}`);
                    });
                }
            }, 30000);
        }
    }
    refreshToken() {
        if (this.autorizationService.checkForToken() != null) {
            this.DatabaseConexService.extendSession(_variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser.name).subscribe(sucess => {
                let token = sucess.message.token;
                this.autorizationService.setToken(token);
                this.alerted = false;
            }, err => {
                console.error(`Error: ${err}`);
            });
        }
        else {
            _NotificationManage__WEBPACK_IMPORTED_MODULE_2__.NotificationManage.showMessage(`La sesión ha espirado`, true);
        }
    }
    getUserDataFromDataBase() {
        return new Promise(resolve => {
            this.DatabaseConexService.getUserData().subscribe(user => {
                src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User.setUser(user.name, user.admin, user.date, user.description, user.themeLists, user.email, user.activeAccount);
                _variables_sessionVariables__WEBPACK_IMPORTED_MODULE_1__.sesionValues.activeUser = src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User.getUser();
                resolve(true);
            }, err => {
                let serverError = err.error;
                if (serverError.destroyToken) {
                    this.autorizationService.destroySession();
                }
            });
        });
    }
    getProfileDataFromDataBase(profile) {
        return new Promise(resolve => {
            this.DatabaseConexService.getProfileData(profile).subscribe(user => {
                resolve(user.data);
                if (!user.validToken) {
                    this.autorizationService.destroySession();
                }
            }, err => {
                console.error(`Error: ${err}`);
                let serverError = err.error;
                this.router.navigate(['/Home']);
                if (serverError.destroyToken) {
                    this.autorizationService.destroySession();
                }
            });
        });
    }
}
ManageUser.ɵfac = function ManageUser_Factory(t) { return new (t || ManageUser)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_app_services_database_conex_service_database_conex_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseConexService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_autorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService)); };
ManageUser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ManageUser, factory: ManageUser.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6199:
/*!***********************************************!*\
  !*** ./src/utils/tools/NotificationManage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationManage": () => (/* binding */ NotificationManage)
/* harmony export */ });
/* harmony import */ var _variables_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables/variables */ 7347);

class NotificationManage {
    static showMessage(message, forceClose, type, funct) {
        let time = 3500;
        if (!_variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationIsShowing || forceClose) {
            _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationIsShowing = true;
            NotificationManage.resetAlert();
            _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationStatus = 'show';
            _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationMessage = message;
            switch (type) {
                case 'manual':
                    _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationCloseManual = true;
                    break;
                case 'answer':
                    if (funct) {
                        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationAnswer = true;
                        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationAnswerFunction = funct;
                    }
                    break;
                default:
                    setTimeout(() => {
                        setTimeout(() => {
                            _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationIsShowing = false;
                            _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationStatus = '';
                            setTimeout(() => {
                                NotificationManage.resetAlert();
                            }, 1500);
                        }, 1500);
                    }, time);
                    break;
            }
        }
    }
    static resetAlert() {
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationCloseManual = false;
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationAnswer = false;
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationAnswerFunction = undefined;
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationIsShowing = false;
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationStatus = '';
        _variables_variables__WEBPACK_IMPORTED_MODULE_0__.GlobalVariables.notificationMessage = '';
    }
    static disableScroll() {
        let scrollTop = window.pageYOffset;
        let scrollLeft = window.pageXOffset;
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    static enableScroll() {
        window.onscroll = function () { };
    }
}


/***/ }),

/***/ 8168:
/*!*************************************************!*\
  !*** ./src/utils/variables/sessionVariables.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sesionValues": () => (/* binding */ sesionValues)
/* harmony export */ });
/* harmony import */ var src_app_classes_ArtistList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/ArtistList */ 2102);
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/User */ 1336);


const sesionValues = {
    artistList: new src_app_classes_ArtistList__WEBPACK_IMPORTED_MODULE_0__.ArtistList,
    activeUser: src_app_classes_User__WEBPACK_IMPORTED_MODULE_1__.User.getUser(),
    reproductionState: false
};


/***/ }),

/***/ 7347:
/*!******************************************!*\
  !*** ./src/utils/variables/variables.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Categories": () => (/* binding */ Categories),
/* harmony export */   "SearchQuery": () => (/* binding */ SearchQuery),
/* harmony export */   "Variables": () => (/* binding */ Variables),
/* harmony export */   "GlobalVariables": () => (/* binding */ GlobalVariables),
/* harmony export */   "TooltipValues": () => (/* binding */ TooltipValues),
/* harmony export */   "MyRootSprite": () => (/* binding */ MyRootSprite),
/* harmony export */   "CandyBomb": () => (/* binding */ CandyBomb)
/* harmony export */ });
const Categories = {
    OWB: { code: 'OWB', name: 'Old World Blues', items: [] },
    MR: { code: 'MR', name: 'Mojave Ride', items: [] },
    CW: { code: 'CW', name: 'Classic Wave', items: [] }
};
const SearchQuery = {
    users: [],
    artists: [],
    themes: []
};
const Variables = {
    candyIdWhiteList: ['candy-home'],
    candyDeadEnd: ['theme'],
    host: 'myvinyl.es',
    port: '',
    range: { 0: 'User', 1: 'Admin' }
};
let GlobalVariables = {
    blackScreenStatus: '',
    notificationStatus: '',
    notificationMessage: '',
    notificationIsShowing: false,
    notificationCloseManual: false,
    notificationAnswer: false,
    notificationAnswerFunction: undefined
};
const TooltipValues = {
    'placement': 'right',
    'show-delay': 10,
    'theme': "light",
    'hide-delay': 10
};
let MyRootSprite = {
    eye: 'root_open_eye',
    body: 'root_base.png'
};
const CandyBomb = { id: 'home', name: 'Home', family: 'candy-home', route: 'Home', query: {}, routeQuery: '' };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map