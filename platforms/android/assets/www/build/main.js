webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProvider = (function () {
    function UserProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.authenticateUser = function (user) {
        this.host = user.host;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.host + ':3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserProvider.prototype.storeUserData = function (token, user) {
        this.storage.set('id_token', token);
        this.storage.set('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserProvider.prototype.loadToken = function () {
        var _this = this;
        this.storage.get('id_token').then(function (val) {
            _this.authToken = val;
        });
    };
    UserProvider.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.storage.clear();
    };
    UserProvider.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    UserProvider.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_accesscontrol_accesscontrol__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogginPage = (function () {
    function LogginPage(navCtrl, navParams, toastCtrl, user, home, access, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.home = home;
        this.access = access;
        this.events = events;
    }
    LogginPage.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            host: this.host
        };
        this.user.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.user.storeUserData(data.token, data.user);
                var toast = _this.toastCtrl.create({
                    message: 'You are logged in!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log('notok');
                var toast = _this.toastCtrl.create({
                    message: data.msg,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            ;
        });
        this.home.getHost(this.host);
        this.access.getHost(this.host);
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client__('http://' + this.host + ':4000');
        this.socket.on('device-event', function (data) {
            _this.events.publish(data._id, data.value);
        });
        this.events.subscribe('device-event', function (message) {
            _this.socket.emit("device-event", message);
        });
        this.socket.on('access-control/fingerprint/enrol/message', function (data) {
            console.log(data);
            _this.events.publish('access-control/fingerprint/enrol/message', data);
        });
        this.events.subscribe('access-control/fingerprint', function (message) {
            _this.socket.emit("access-control/fingerprint", message);
        });
        this.socket.on('access-control/face-recognition/enrol/message', function (data) {
            console.log(data);
            _this.events.publish('access-control/face-recognition/enrol/message', data);
        });
        this.events.subscribe('access-control/face-recognition', function (message) {
            _this.socket.emit("access-control/face-recognition", message);
        });
        this.socket.on('security-event', function (data) {
            _this.events.publish('security-event', data);
        });
    };
    return LogginPage;
}());
LogginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loggin',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/loggin/loggin.html"*/'\n  <ion-content id="body">\n    <!-- <div id="bg"><img width="100%" height="100%" src="./assets/images/home.jpg"/></div> -->\n    <div id="margin">\n    <p id="tieude" text-center text-wrap>SMARTHOME</p>\n    <form (submit)="onLoginSubmit()">\n\n\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n\n        <ion-label fixed>Host</ion-label>\n        <ion-input type="text" [(ngModel)]="host" name="host"></ion-input>\n        <hr/>\n\n        <button ion-button round color="main" block>LOG IN</button>\n\n    </form>\n  </div>\n\n  </ion-content>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/loggin/loggin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_home_home__["a" /* HomeProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_accesscontrol_accesscontrol__["a" /* AccesscontrolProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LogginPage);

//# sourceMappingURL=loggin.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_access__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(NavCtrl, events, alertCtrl) {
        this.NavCtrl = NavCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__access_access__["a" /* AccessPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */];
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('loggout', function (val) {
            _this.NavCtrl.pop();
        });
        //security
        this.events.subscribe('security-event', function (message) {
            var alert = _this.alertCtrl.create({
                title: 'WARNING!',
                subTitle: 'Attention-Attention!',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            var mess = {
                                _id: message._id,
                                value: 0
                            };
                            _this.events.publish('device-event', mess);
                        }
                    }]
            });
            alert.present();
        });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Access" tabIcon="key"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="construct"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_devices__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, homeService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.homeService = homeService;
        this.toastCtrl = toastCtrl;
        this.floors = [];
        this.rooms = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getListOfFloors().subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                _this.floors = res.floors;
                var floor = _this.floors[0];
                _this.currentfloor(floor._id);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomePage.prototype.getListOfFloors = function () {
        var _this = this;
        this.homeService.getListOfFloors().subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                _this.floors = res.floors;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HomePage.prototype.currentfloor = function (id) {
        var _this = this;
        this.CurrentId = id;
        this.homeService.getListOfRooms(id).subscribe(function (res) {
            if (res.success === false) {
                var toast = _this.toastCtrl.create({
                    message: res.msg,
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                if (res.length) {
                    _this.rooms = res;
                }
                else {
                    _this.rooms = [];
                    var toast = _this.toastCtrl.create({
                        message: 'No room found. Please add new room!!!',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
        });
    };
    HomePage.prototype.devicesInRoom = function (id, name, imgPath) {
        var deviceroom = {
            roomid: id,
            roomname: name,
            imgPath: imgPath
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__devices_devices__["a" /* DevicesPage */], deviceroom);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      HOME\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--  \n    <ion-segment>\n      <ion-segment-button *ngFor="let floor of floors" (ionSelect)="currentfloor(floor._id)" value=floor.name>\n        {{floor.name}}\n      </ion-segment-button>\n    </ion-segment> -->\n<p>\n<span *ngFor="let floor of floors">\n  <button id="actived" ion-button clear (click)="currentfloor(floor._id)" *ngIf="floor._id==CurrentId" color="moreblue">\n      {{floor.name}}\n  </button>\n  <button ion-button clear (click)="currentfloor(floor._id)" *ngIf="floor._id!=CurrentId" color="primary">\n      {{floor.name}}\n  </button>\n</span>\n</p>\n\n  <ion-list>\n      <ion-item *ngFor="let room of rooms" (click)="devicesInRoom(room._id,room.name,room.imgPath)">\n        <ion-thumbnail item-start>\n          <img src="./assets/images/icons/bluehome.ico">\n        </ion-thumbnail>\n        <h2>{{room.name}}</h2>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicesPage = (function () {
    function DevicesPage(navCtrl, navParams, homeService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.events = events;
        this.lightingControls = [];
        this.sensorModules = [];
    }
    DevicesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceInRoom = this.navParams.data;
        this.homeService.getListOfDevicesInRoom(this.deviceInRoom.roomid).subscribe(function (res) {
            _this.devices = res.devices;
            if (_this.devices) {
                for (var _i = 0, _a = _this.devices; _i < _a.length; _i++) {
                    var device = _a[_i];
                    switch (device.deviceType) {
                        case "LightingControl":
                            (_b = _this.lightingControls).push.apply(_b, device.lights);
                            break;
                        case "SensorModule":
                            (_c = _this.sensorModules).push.apply(_c, device.sensors);
                            break;
                    }
                }
                for (var i = 0; i < _this.sensorModules.length; i++) {
                    if (_this.sensorModules[i]._type == "Door") {
                        var tmp = _this.sensorModules[0];
                        _this.sensorModules[0] = _this.sensorModules[i];
                        _this.sensorModules[i] = tmp;
                    }
                    else if (_this.sensorModules[i]._type == "Window") {
                        var tmp = _this.sensorModules[1];
                        _this.sensorModules[1] = _this.sensorModules[i];
                        _this.sensorModules[i] = tmp;
                    }
                }
            }
            var _b, _c;
        });
    };
    DevicesPage.prototype.ngOnDestroy = function () {
    };
    return DevicesPage;
}());
DevicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-devices',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/devices/devices.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align:right">{{deviceInRoom.roomname}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n        \n    <ion-card class="adv-map">\n        <div style="position: relative">\n            <img src="{{deviceInRoom.imgPath}}">\n            \n          </div>\n    <page-sensor *ngFor="let sensor of sensorModules" [sensor]="sensor"> </page-sensor>\n     </ion-card>   \n\n        <div *ngFor="let light of lightingControls" >\n            <page-light [light]="light"> </page-light>\n         </div>\n        \n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/devices/devices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], DevicesPage);

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_accesscontrol_accesscontrol__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usercontrol_usercontrol__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccessPage = (function () {
    function AccessPage(navCtrl, navParams, accessControlService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accessControlService = accessControlService;
        this.listOfUsers = [];
        this.addShow = false;
        this.users = [];
        this.filteredUsers = [];
    }
    AccessPage.prototype.ngOnInit = function () {
        this.getListOfUsers();
    };
    AccessPage.prototype.getListOfUsers = function () {
        var _this = this;
        this.accessControlService.getListOfUsers().subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                _this.listOfUsers = [];
            }
            else {
                _this.listOfUsers = res.users;
            }
        });
    };
    AccessPage.prototype.adduserSubmit = function (newUserName) {
        var _this = this;
        var newUser = {
            name: newUserName
        };
        this.accessControlService.addNewUser(newUser).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                _this.getListOfUsers();
            }
        });
    };
    AccessPage.prototype.show = function () {
        this.addShow = !this.addShow;
    };
    AccessPage.prototype.GoDetail = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usercontrol_usercontrol__["a" /* UsercontrolPage */], user);
    };
    AccessPage.prototype.deleteUser = function (user) {
        var _this = this;
        this.accessControlService.deleteUser(user._id).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                _this.getListOfUsers();
            }
        });
        // delete all qrcode in this user
        this.accessControlService.getListOfQRcodes().subscribe(function (data) {
            if (data.success) {
                _this.users = data.users;
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var usr = _a[_i];
                    if (usr.userId == user._id) {
                        _this.filteredUsers.push(usr);
                    }
                }
            }
            else {
                _this.filteredUsers = [];
            }
            // delete array
            for (var _b = 0, _c = _this.filteredUsers; _b < _c.length; _b++) {
                var ur = _c[_b];
                _this.accessControlService.deleteQRUser(ur._id).subscribe(function (res) {
                    if (!res.success) {
                        console.log(res.msg);
                    }
                    else {
                        _this.filteredUsers = [];
                    }
                });
            }
        });
    };
    return AccessPage;
}());
AccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-access',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/access/access.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>access</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n  <ion-list>\n    <ion-item-sliding *ngFor="let user of listOfUsers">\n      <ion-item (click)="GoDetail(user)">\n        <ion-thumbnail item-start>\n          <img src="./assets/images/icons/user.png">\n        </ion-thumbnail>\n        <h2>{{user.name}}</h2>\n      </ion-item>\n      \n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="deleteUser(user)">\n          <ion-icon name="close"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</div>\n\n <p style="text-align:center"> <img *ngIf="addShow == false" (click)="show()" width="80" height="80" src="./assets/images/icons/add-circle.png"> </p>\n <p style="text-align:center"> <img *ngIf="addShow == true" (click)="show()" width="80" height="80" src="./assets/images/icons/remove-circle.png"> </p>  \n \n <div padding *ngIf="addShow">\n <ion-list >\n    <ion-item>\n      <ion-input [(ngModel)]="newUserName" type="text" placeholder="nick_name"></ion-input>\n      <button ion-button outline item-end icon-only (click)="adduserSubmit(newUserName);show()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-item>  \n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/access/access.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_accesscontrol_accesscontrol__["a" /* AccesscontrolProvider */]])
], AccessPage);

//# sourceMappingURL=access.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercontrolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_accesscontrol_accesscontrol__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsercontrolPage = (function () {
    function UsercontrolPage(navCtrl, navParams, toastCtrl, accesscontrolService, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.accesscontrolService = accesscontrolService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.filteredUsers = [];
        this.isFingerprintAvailable = false;
        this.isQRcodeAvailable = false;
        this.grayFilter = { filter: 'grayscale(100%)', color: 'gray' };
    }
    UsercontrolPage.prototype.ngOnInit = function () {
        this.user = this.navParams.data;
        this.getQRcodeInUser();
        this.isFingerprintAvailable = !!this.user.fingerprintId.length;
    };
    // QRCODE
    UsercontrolPage.prototype.getQRcodeInUser = function () {
        var _this = this;
        this.accesscontrolService.getListOfQRcodes().subscribe(function (data) {
            if (data.success) {
                _this.users = data.users;
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var usr = _a[_i];
                    if (usr.userId == _this.user._id) {
                        _this.filteredUsers.push(usr);
                    }
                }
                _this.isQRcodeAvailable = !!_this.filteredUsers.length;
            }
            else {
                _this.filteredUsers = [];
                console.log(data.msg);
            }
        });
    };
    UsercontrolPage.prototype.presentConfirmDeleteOneQR = function (usr) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete this?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log(usr._id);
                        _this.accesscontrolService.deleteQRUser(usr._id).subscribe(function (res) {
                            if (!res.success) {
                                console.log(res.msg);
                            }
                            else {
                                _this.filteredUsers = [];
                                _this.getQRcodeInUser();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UsercontrolPage.prototype.presentConfirmDeleteAllQR = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete-All',
            message: 'Do you want to delete all of this?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        for (var _i = 0, _a = _this.filteredUsers; _i < _a.length; _i++) {
                            var usr = _a[_i];
                            _this.accesscontrolService.deleteQRUser(usr._id).subscribe(function (res) {
                                if (!res.success) {
                                    console.log(res.msg);
                                }
                                else {
                                    _this.filteredUsers = [];
                                    _this.getQRcodeInUser();
                                }
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    UsercontrolPage.prototype.presentPromptCreateQR = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add New QR',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'email',
                    placeholder: 'Email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        var QRuser = {
                            name: data.username,
                            email: data.email,
                            _userId: _this.user
                        };
                        //Required Fields
                        if (!_this.accesscontrolService.validateQRcode(QRuser)) {
                            var toast = _this.toastCtrl.create({
                                message: 'please fill all fields',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            return false;
                        }
                        // Required Email
                        if (!_this.accesscontrolService.validateEmail(QRuser.email)) {
                            var toast = _this.toastCtrl.create({
                                message: 'Invalid Email',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            return false;
                        }
                        // Register QRcode
                        _this.accesscontrolService.registerQRcode(QRuser).subscribe(function (data) {
                            if (data.success) {
                                var toast = _this.toastCtrl.create({
                                    message: 'Success',
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: 'try again, Error!',
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.filteredUsers = [];
                            _this.getQRcodeInUser();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //end of QRCODE
    //finger
    UsercontrolPage.prototype.presentConfirmDeleteAllFG = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete-All',
            message: 'Do you want to delete all of this?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var message = {
                            command: 'deleteFingerprints',
                            user: _this.user._id
                        };
                        _this.events.publish('access-control/fingerprint', message);
                        _this.isFingerprintAvailable = false;
                    }
                }
            ]
        });
        alert.present();
    };
    UsercontrolPage.prototype.connectSensor = function () {
        var _this = this;
        this.sensorMessage = "Place your finger";
        this.sensorMessage2 = "on the sensor";
        this.events.subscribe('access-control/fingerprint/enrol/message', function (message) {
            console.log(message);
            _this.alert.dismiss(); // moithem
            _this.sensorMessage2 = '';
            _this.sensorMessage = message;
            //this.presentAlert(); thay cai nay bang cai duoi
            _this.alert = _this.alertCtrl.create({
                title: _this.sensorMessage,
                subTitle: _this.sensorMessage2,
                buttons: ['OK']
            });
            _this.alert.present();
            if (message == "Complete!") {
                _this.isFingerprintAvailable = true;
                _this.events.unsubscribe('access-control/fingerprint/enrol/message');
            }
        });
        var message = {
            command: 'enrol',
            user: this.user._id
        };
        this.events.publish('access-control/fingerprint', message);
        //this.presentAlert();thay cai nay bang cai duoi
        this.alert = this.alertCtrl.create({
            title: this.sensorMessage,
            subTitle: this.sensorMessage2,
            buttons: ['OK']
        });
        this.alert.present();
    };
    UsercontrolPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: this.sensorMessage,
            subTitle: this.sensorMessage2,
            buttons: ['OK']
        });
        alert.present();
    };
    return UsercontrolPage;
}());
UsercontrolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-usercontrol',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/usercontrol/usercontrol.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-right>UserControls</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!-- QRCODE -->\n<ion-card>\n \n    <img [ngStyle]="isQRcodeAvailable ? \'\' : grayFilter" src="./assets/images/access-control/qrcode.png"/>\n  \n\n  <ion-item>\n      <button ion-button icon-left item-start (click)="presentConfirmDeleteAllQR()">\n          <ion-icon name="close"></ion-icon>\n          Remove all\n        </button>\n      <button ion-button icon-right item-end (click)="presentPromptCreateQR()">\n          Create\n          <ion-icon name="person-add"></ion-icon>\n           \n        </button>\n    \n  </ion-item>\n</ion-card>\n\n  \n    <ion-note padding item-start>\n      QrCode users\n    </ion-note>\n  \n\n<ion-list>\n    <ion-item *ngFor="let usr of filteredUsers">\n      {{usr.name}}\n      <button ion-button outline item-end icon-right (click)="presentConfirmDeleteOneQR(usr)">\n        remove\n        <ion-icon name="trash"></ion-icon>\n        \n      </button>\n    </ion-item>\n  </ion-list>\n<hr/>\n<hr/>\n<!-- QRCODE -->\n<!-- finger -->\n<ion-card>\n    \n      <img [ngStyle]="isFingerprintAvailable ? \'\' : grayFilter" src="./assets/images/access-control/fingerprint2.png" />\n    \n  \n    <ion-item>\n        <button ion-button icon-left item-start (click)="presentConfirmDeleteAllFG()">\n            <ion-icon name="close"></ion-icon>\n            Remove all\n          </button>\n        <button ion-button icon-right item-end (click)="connectSensor()">\n            Add\n            <ion-icon name="finger-print"></ion-icon>\n             \n          </button>\n      \n    </ion-item>\n  </ion-card>\n\n\n<!-- finger -->\n</ion-content>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/usercontrol/usercontrol.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_accesscontrol_accesscontrol__["a" /* AccesscontrolProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], UsercontrolPage);

//# sourceMappingURL=usercontrol.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, userService, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    SettingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SettingPage.prototype.loggout = function () {
        this.events.publish('loggout', 'ok');
        this.userService.logout();
        var toast = this.toastCtrl.create({
            message: 'You are logged out!',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/setting/setting.html"*/'\n<ion-content id="body"> \n  <!-- <div id="bg"><img width="100%" height="100%" src="./assets/images/logout.jpg"/></div> -->\n\n  <p>\n    <button color="light" ion-button clear icon-start (click)="loggout()">\n        <ion-icon color="light" name=\'log-out\' is-active="false"></ion-icon>\n        LOG OUT\n      </button>\n    </p>\n  <div *ngIf="user">\n    <h1 class="page-header">{{user.name}}</h1>\n    <ul class="list-group">\n      <li class="list-group-item">Username: {{user.username}}</li>\n      <li class="list-group-item">Email: {{user.email}}</li>\n    </ul>\n  </div>\n  \n\n \n\n</ion-content>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_loggin_loggin__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_access_access__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_devices_devices__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sensor_sensor__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_light_light__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_color_picker_colorpicker__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_usercontrol_usercontrol__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_accesscontrol_accesscontrol__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { LongPressModule } from 'ionic-long-press'; // nhan mot cho lau














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_loggin_loggin__["a" /* LogginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_access_access__["a" /* AccessPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_devices_devices__["a" /* DevicesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sensor_sensor__["a" /* SensorPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_light_light__["a" /* LightPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_color_picker_colorpicker__["a" /* ColorPicker */],
            __WEBPACK_IMPORTED_MODULE_17__pages_usercontrol_usercontrol__["a" /* UsercontrolPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_loggin_loggin__["a" /* LogginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_access_access__["a" /* AccessPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_devices_devices__["a" /* DevicesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sensor_sensor__["a" /* SensorPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_light_light__["a" /* LightPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_color_picker_colorpicker__["a" /* ColorPicker */],
            __WEBPACK_IMPORTED_MODULE_17__pages_usercontrol_usercontrol__["a" /* UsercontrolPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_home_home__["a" /* HomeProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_accesscontrol_accesscontrol__["a" /* AccesscontrolProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_loggin_loggin__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_loggin_loggin__["a" /* LogginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorPage = (function () {
    function SensorPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    SensorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this.sensor.value;
        this.events.publish("socketOn", this.sensor._id);
        this.events.subscribe(this.sensor._id, function (message) {
            _this.value = message;
        });
    };
    return SensorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SensorPage.prototype, "sensor", void 0);
SensorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sensor',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/sensor/sensor.html"*/'\n    <div [ngSwitch]="sensor._type">\n      <ion-item *ngSwitchCase="\'Temperature\'">\n        <ion-icon color="danger" name="thermometer" item-start></ion-icon>\n        Temperature\n        <ion-badge item-end>{{value}} <sup>o</sup>C</ion-badge>\n      </ion-item>\n      <ion-item *ngSwitchCase="\'Humidity\'">\n        <ion-icon color="water" name="water" item-start></ion-icon>\n        Humidity\n        <ion-badge item-end>{{value}} %</ion-badge>\n      </ion-item>\n      <ion-item *ngSwitchCase="\'Light\'">\n        <ion-icon color="sunny" name="sunny" item-start></ion-icon>\n        Brightness\n        <ion-badge item-end>{{value}} lux</ion-badge>\n      </ion-item>\n      <ion-item *ngSwitchCase="\'Gas\'">\n        <ion-icon color="gas" name="pint" item-start></ion-icon>\n        GAS\n        <ion-badge item-end>{{value}} ppm</ion-badge>\n      </ion-item>\n      \n      <ion-item actions *ngSwitchCase="\'Door\'">\n        <span ion-text item-start>Door</span>       \n        <span *ngIf="value==1" ion-text item-end>Opened</span> \n        <ion-icon *ngIf="value==1" item-end icon-start name=\'square-outline\'></ion-icon> \n        <span *ngIf="value==0" ion-text item-end>Closed</span> \n        <ion-icon *ngIf="value==0" item-end icon-start name=\'square\'></ion-icon>         \n      </ion-item>\n      <ion-item actions *ngSwitchCase="\'Window\'">\n        <span ion-text item-start>Window</span>       \n        <span *ngIf="value==1" ion-text item-end>Opened</span> \n        <ion-icon *ngIf="value==1" item-end icon-start name=\'square-outline\'></ion-icon>  \n        <span *ngIf="value==0" ion-text item-end>Closed</span> \n        <ion-icon *ngIf="value==0" item-end icon-start name=\'square\'></ion-icon>         \n      </ion-item>\n    </div> \n\n\n    '/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/sensor/sensor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], SensorPage);

//# sourceMappingURL=sensor.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightPage = (function () {
    function LightPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    LightPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.light.value != 0) {
            this.dis_dimmer = false;
            this.dis_air = false;
        }
        else {
            this.dis_dimmer = true;
            this.dis_air = true;
        }
        ;
        if (this.light.typeOfLight == "RGB") {
            this.preLightValue = 16777215;
        }
        else {
            this.preLightValue = 20;
        }
        ;
        this.lightValue_adjust = this.switchValue_adjust = this.light.value;
        this.events.subscribe(this.light._id, function (message) {
            _this.lightValue_adjust = message;
            _this.preLightValue = _this.switchValue_adjust = _this.lightValue_adjust;
            console.log(message);
        });
    };
    LightPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe(this.light._id);
    };
    LightPage.prototype.sendMessage = function (value) {
        var message = {
            _id: this.light._id,
            value: value
        };
        this.events.publish("device-event", message);
    };
    LightPage.prototype.getSwitchValue = function (value) {
        if (this.light.typeOfLight == "RGB") {
            if (value) {
                this.lightValue_adjust = this.preLightValue;
                this.sendMessage(this.lightValue_adjust);
            }
            else {
                this.lightValue_adjust = 0;
                this.sendMessage(this.lightValue_adjust);
            }
        }
        else {
            this.sendMessage(value & 1);
        }
    };
    LightPage.prototype.getSliderValue = function (value) {
        this.preLightValue = this.switchValue_adjust = value;
        this.sendMessage(value);
        console.log('slide' + value);
    };
    LightPage.prototype.getSwitchValue_Dimmer = function (value) {
        console.log('toggle' + value);
        if (!value) {
            this.dis_dimmer = true;
            this.dis_air = true;
            this.lightValue = 0;
            this.lightValue_adjust = 1;
        }
        else {
            this.dis_dimmer = false;
            this.dis_air = false;
            // this.lightValue = this.lightValue_adjust = this.preLightValue; cu
            this.lightValue = this.preLightValue;
            this.lightValue_adjust = 0;
        }
        this.sendMessage(this.lightValue);
        console.log('togglelightvalue' + this.lightValue);
    };
    LightPage.prototype.HEXToVBColor = function (rrggbb) {
        if (rrggbb.length == 4) {
            var r = rrggbb[1];
            var g = rrggbb[2];
            var b = rrggbb[3];
            rrggbb = '#' + r + r + g + g + b + b;
        }
        return parseInt(rrggbb.replace('#', ''), 16);
    };
    LightPage.prototype.getColor = function (value) {
        console.log(value);
        this.lightValue_adjust = this.preLightValue = this.HEXToVBColor(value);
        this.sendMessage(this.lightValue_adjust);
    };
    return LightPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LightPage.prototype, "light", void 0);
LightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-light',template:/*ion-inline-start:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/light/light.html"*/'\n<div *ngIf="light.dimmable==true && light.typeOfLight!=\'Air\'" >\n  <ion-item-group>\n    <ion-item no-lines color="twitter"> \n      <ion-label>{{light.name}}</ion-label>\n      <ion-toggle [(ngModel)]="switchValue_adjust" (ionBlur)="getSwitchValue_Dimmer(switchValue_adjust)"></ion-toggle>\n    </ion-item>\n      <ion-item no-lines> \n        <ion-range disabled={{dis_dimmer}} min="0" max="100" pin="true" debounce="300" [(ngModel)]="lightValue_adjust" (ionBlur)="getSliderValue(lightValue_adjust)" color="primary">\n          <ion-icon range-left small name="sunny"></ion-icon>\n          <ion-icon range-right name="sunny"></ion-icon>\n        </ion-range> \n      </ion-item>     \n  </ion-item-group>\n  <hr/>\n</div>\n\n<div *ngIf="light.dimmable==false && light.typeOfLight!=\'RGB\'">\n    <ion-item no-lines color="twitter"> \n      <ion-label>{{light.name}}</ion-label>\n      <ion-toggle [(ngModel)]="lightValue_adjust" (ionBlur)="getSwitchValue(lightValue_adjust)"></ion-toggle>\n    </ion-item> \n</div> \n\n<div *ngIf="light.dimmable==false && light.typeOfLight==\'RGB\'">\n  <hr/>\n    <ion-item-group>\n        <ion-item no-lines color="twitter"> \n          <ion-label>{{light.name}}</ion-label>\n          <ion-toggle [(ngModel)]="lightValue_adjust" (ionBlur)="getSwitchValue(lightValue_adjust)"></ion-toggle>\n        </ion-item>\n      <color-picker [hexColor]="\'#FF0000\'" (colorChanged)="getColor($event)" ></color-picker>\n    </ion-item-group>  \n    <hr/>\n</div> \n\n<div *ngIf="light.typeOfLight==\'Air\' && light.dimmable==true" >\n  \n<ion-item-group>\n    <ion-item no-lines color="twitter"> \n      <ion-label>{{light.name}}</ion-label>\n      <ion-toggle  [(ngModel)]="switchValue_adjust" (ionBlur)="getSwitchValue_Dimmer(switchValue_adjust)"></ion-toggle>\n    </ion-item>\n      <ion-item no-lines> \n        <ion-range disabled={{dis_air}} min="18" max="30" pin="true" debounce="300" [(ngModel)]="lightValue_adjust" (ionBlur)="getSliderValue(lightValue_adjust)" color="primary">\n          <ion-icon range-left small name="arrow-dropleft"></ion-icon>\n          <ion-icon range-right name="arrow-dropright"></ion-icon>\n        </ion-range> \n      </ion-item>     \n  </ion-item-group>\n  <hr/>\n</div>\n\n<!-- <div class="not-dimmable" *ngIf="light.dimmable==false" >\n  <a class="list-group-item">{{light.name}}</a>\n  <input [(colorPicker)]="color" (colorPickerChange)="getColor($event)" [style.background]="color" *ngIf="light.typeOfLight==\'RGB\'">\n  <color-picker [hexColor]="\'#FF0000\'" (colorChanged)="setColor($event)" ></color-picker>\n  <ui-switch [(ngModel)]="lightValue" size="medium-v2" (ionChange)="getSwitchValue(lightValue)"></ui-switch>\n</div> -->\n\n  \n  \n  '/*ion-inline-end:"/home/thanhcong/Dropbox/Projects/Disc/Software/SmartphoneApp/myApp/src/pages/light/light.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LightPage);

//# sourceMappingURL=light.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var POUCH = [
    {
        START: "mousedown",
        MOVE: "mousemove",
        STOP: "mouseup"
    },
    {
        START: "touchstart",
        MOVE: "touchmove",
        STOP: "touchend"
    }
];
var ColorPicker = (function () {
    function ColorPicker() {
        this.colorChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorTouchStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorTouchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ColorPicker.prototype.ngOnInit = function () {
        if (this.hexColor) {
            this.colorFromChooser = this.hexColor;
        }
        else {
            this.colorFromChooser = "#0000FF";
        }
        this.init();
    };
    ColorPicker.prototype.init = function () {
        this.initChooser();
        this.initPalette();
    };
    ColorPicker.prototype.drawSelector = function (ctx, x, y) {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, y, 10 * this.getPixelRatio(ctx), 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };
    ColorPicker.prototype.drawChooserSelector = function (ctx, x) {
        this.drawPalette(this.colorFromChooser);
        ctx.beginPath();
        ctx.arc(x, ctx.canvas.height / 2, ctx.canvas.height / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colorFromChooser;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    };
    ColorPicker.prototype.initPalette = function () {
        var _this = this;
        var canvasPalette = this.palette.nativeElement;
        this.ctxPalette = canvasPalette.getContext("2d");
        var currentWidth = window.innerWidth;
        var pixelRatio = this.getPixelRatio(this.ctxPalette);
        console.log(pixelRatio);
        var width = currentWidth * 90 / 100;
        var height = width * 0.5;
        this.ctxPalette.canvas.width = width * pixelRatio;
        this.ctxPalette.canvas.height = height * pixelRatio;
        this.ctxPalette.canvas.style.width = width + "px";
        this.ctxPalette.canvas.style.height = height + "px";
        this.drawPalette(this.colorFromChooser);
        var eventChangeColor = function (event) {
            _this.updateColor(event, canvasPalette, _this.ctxPalette);
        };
        POUCH.forEach(function (pouch) {
            canvasPalette.addEventListener(pouch.START, function (event) {
                _this.colorTouchStart.emit();
                _this.drawPalette(_this.colorFromChooser);
                canvasPalette.addEventListener(pouch.MOVE, eventChangeColor);
                _this.updateColor(event, canvasPalette, _this.ctxPalette);
            });
            canvasPalette.addEventListener(pouch.STOP, function (event) {
                _this.colorTouchEnd.emit();
                canvasPalette.removeEventListener(pouch.MOVE, eventChangeColor);
                _this.updateColor(event, canvasPalette, _this.ctxPalette);
                _this.drawSelector(_this.ctxPalette, _this.paletteX, _this.paletteY);
            });
        });
    };
    ColorPicker.prototype.drawPalette = function (endColor) {
        this.ctxPalette.clearRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
        var gradient = this.ctxPalette.createLinearGradient(0, 0, this.ctxPalette.canvas.width, 0);
        // Create color gradient
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(1, endColor);
        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
        // Create semi transparent gradient (white -> trans. -> black)
        gradient = this.ctxPalette.createLinearGradient(0, 0, 0, this.ctxPalette.canvas.height);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
        gradient.addColorStop(1, "rgba(0,     0,   0, 1)");
        // Apply gradient to canvas
        this.ctxPalette.fillStyle = gradient;
        this.ctxPalette.fillRect(0, 0, this.ctxPalette.canvas.width, this.ctxPalette.canvas.height);
    };
    ColorPicker.prototype.initChooser = function () {
        var _this = this;
        var canvasChooser = this.chooser.nativeElement;
        var ctx = canvasChooser.getContext("2d");
        var currentWidth = window.innerWidth;
        var pixelRatio = this.getPixelRatio(ctx);
        var width = currentWidth * 90 / 100;
        var height = width * 0.05;
        ctx.canvas.width = width * pixelRatio;
        ctx.canvas.height = height * pixelRatio;
        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        this.drawChooser(ctx);
        var eventChangeColorChooser = function (event) {
            _this.updateColorChooser(event, canvasChooser, ctx);
            _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
        };
        POUCH.forEach(function (pouch) {
            canvasChooser.addEventListener(pouch.START, function (event) {
                _this.drawChooser(ctx);
                canvasChooser.addEventListener(pouch.MOVE, eventChangeColorChooser);
                _this.updateColorChooser(event, canvasChooser, ctx);
                _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
            });
            canvasChooser.addEventListener(pouch.STOP, function (event) {
                canvasChooser.removeEventListener(pouch.MOVE, eventChangeColorChooser);
                _this.updateColorChooser(event, canvasChooser, ctx);
                _this.drawChooser(ctx);
                _this.drawChooserSelector(ctx, _this.chooserX);
                _this.drawSelector(_this.ctxPalette, _this.ctxPalette.canvas.width, _this.ctxPalette.canvas.height / 2);
            });
        });
    };
    ColorPicker.prototype.drawChooser = function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        var gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
        // Create color gradient
        gradient.addColorStop(0, "rgb(255,   0,   0)");
        gradient.addColorStop(0.15, "rgb(255,   0, 255)");
        gradient.addColorStop(0.33, "rgb(0,     0, 255)");
        gradient.addColorStop(0.49, "rgb(0,   255, 255)");
        gradient.addColorStop(0.67, "rgb(0,   255,   0)");
        gradient.addColorStop(0.84, "rgb(255, 255,   0)");
        gradient.addColorStop(1, "rgb(255,   0,   0)");
        // Apply gradient to canvas
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    ColorPicker.prototype.getPixelRatio = function (ctx) {
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        return dpr / bsr;
    };
    ColorPicker.prototype.updateColorChooser = function (event, canvas, context) {
        this.color = this.colorFromChooser = this.getColor(event, canvas, context, true);
        this.colorChanged.emit(this.color);
        this.drawPalette(this.color);
    };
    ColorPicker.prototype.updateColor = function (event, canvas, context) {
        this.color = this.getColor(event, canvas, context, false);
        this.colorChanged.emit(this.color);
    };
    ColorPicker.prototype.getColor = function (event, canvas, context, fromChooser) {
        var bounding = canvas.getBoundingClientRect(), touchX = event.pageX || event.changedTouches[0].pageX || event.changedTouches[0].screenX, touchY = event.pageY || event.changedTouches[0].pageY || event.changedTouches[0].screenX;
        var x = (touchX - bounding.left) * this.getPixelRatio(context);
        var y = (touchY - bounding.top) * this.getPixelRatio(context);
        if (fromChooser) {
            this.chooserX = x;
        }
        else {
            this.paletteX = x;
            this.paletteY = y;
        }
        var imageData = context.getImageData(x, y, 1, 1);
        var red = imageData.data[0];
        var green = imageData.data[1];
        var blue = imageData.data[2];
        return "#" + this.toHex(red) + this.toHex(green) + this.toHex(blue);
    };
    ColorPicker.prototype.toHex = function (n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    };
    return ColorPicker;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ColorPicker.prototype, "hexColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "colorChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "colorTouchStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "colorTouchEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("palette"),
    __metadata("design:type", Object)
], ColorPicker.prototype, "palette", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("chooser"),
    __metadata("design:type", Object)
], ColorPicker.prototype, "chooser", void 0);
ColorPicker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'color-picker',
        template: " <canvas #palette style=\"background:white;\" class='center'></canvas>\n  <canvas #chooser style=\"background:white; margin-top: 20px; margin-bottom: 20px; \" class='center'></canvas>"
    })
], ColorPicker);

//# sourceMappingURL=colorpicker.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeProvider = (function () {
    function HomeProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello HomeProvider Provider');
    }
    HomeProvider.prototype.getHost = function (addHost) {
        this.host = addHost;
    };
    HomeProvider.prototype.getListOfFloors = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/house/floors', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HomeProvider.prototype.getListOfRooms = function (floorId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/house/floors/' + floorId + '/rooms', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HomeProvider.prototype.getListOfDevicesInRoom = function (roomId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/house/floors/rooms/' + roomId + '/devices', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HomeProvider.prototype.loadToken = function () {
        var token = this.storage.get('id_token');
        this.authToken = token;
    };
    return HomeProvider;
}());
HomeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], HomeProvider);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccesscontrolProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccesscontrolProvider = (function () {
    function AccesscontrolProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AccesscontrolProvider.prototype.getHost = function (addHost) {
        this.host = addHost;
    };
    AccesscontrolProvider.prototype.loadToken = function () {
        var token = this.storage.get('id_token');
        this.authToken = token;
    };
    AccesscontrolProvider.prototype.getListOfUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/access-control/users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.addNewUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.host + ':3000/access-control/users', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.deleteUser = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://' + this.host + ':3000/access-control/users/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.getUserName = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/access-control/users/' + userId + '/name', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.updateImgPath = function (userId, imgPath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://' + this.host + ':3000/access-control/users/' + userId + '/img-path', imgPath, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //QRcode
    AccesscontrolProvider.prototype.validateQRcode = function (user) {
        if (user.name == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    AccesscontrolProvider.prototype.registerQRcode = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://' + this.host + ':3000/users/qrcode', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.getListOfQRcodes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://' + this.host + ':3000/users/qrcode', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccesscontrolProvider.prototype.deleteQRUser = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://' + this.host + ':3000/users/qrcode/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // endQRCODE
    AccesscontrolProvider.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return AccesscontrolProvider;
}());
AccesscontrolProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], AccesscontrolProvider);

//# sourceMappingURL=accesscontrol.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map