(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/BarCodeScanner/barCodeScanner.component.html":
/*!**************************************************************!*\
  !*** ./src/app/BarCodeScanner/barCodeScanner.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scanner-shell\" [hidden]=\"!hasDevices\">\r\n\r\n    <header>\r\n        <select (change)=\"onDeviceSelectChange($event.target.value)\">\r\n            <option value=\"\" [selected]=\"!currentDevice\">No Device Selected</option>\r\n            <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"currentDevice && device.deviceId === currentDevice.deviceId\">{{ device.label }}</option>\r\n        </select>\r\n    </header>\r\n\r\n      <zxing-scanner #scanner start=\"true\" [device]=\"currentDevice\" (scanSuccess)=\"handleBarCodeCodeResult($event)\"></zxing-scanner>\r\n\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"hasPermission === undefined\">\r\n\r\n      <h2>Waiting for permissions.</h2>\r\n\r\n      <blockquote>\r\n          If your device does not has cameras, no permissions will be asked.\r\n      </blockquote>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"hasPermission === false\">\r\n\r\n      <h2>You denied the camera permission, we can't scan anything without it. 😪</h2>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"hasDevices === undefined\">\r\n\r\n      <h2>Looking for devices.</h2>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"hasDevices === null\">\r\n\r\n      <h2>Couldn't check for devices.</h2>\r\n\r\n      <blockquote>\r\n          This may be caused by some security error.\r\n      </blockquote>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"hasDevices === false\">\r\n\r\n      <h2>No devices were found.</h2>\r\n\r\n      <blockquote>\r\n          I believe your device has no media devices attached to.\r\n      </blockquote>\r\n\r\n  </ng-container>\r\n\r\n  <hr>\r\n"

/***/ }),

/***/ "./src/app/BarCodeScanner/barCodeScanner.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/BarCodeScanner/barCodeScanner.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  width: 100%;\n  height: 35px; }\n\nzxing-scanner {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\nform {\n  width: 60%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  margin-top: 1%;\n  height: 30px;\n  width: 50%;\n  background-color: white;\n  border-radius: 13px;\n  border-style: none;\n  margin-left: 2%;\n  padding-left: 3%; }\n\n.button {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 12px;\n  margin-left: 2%;\n  margin-top: 1%; }\n"

/***/ }),

/***/ "./src/app/BarCodeScanner/barCodeScanner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/BarCodeScanner/barCodeScanner.component.ts ***!
  \************************************************************/
/*! exports provided: BarcodeScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerComponent", function() { return BarcodeScannerComponent; });
/* harmony import */ var _app_modules_zxing_scanner_browser_barcode_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/_modules/zxing-scanner/browser-barcode-reader */ "./src/app/_modules/zxing-scanner/browser-barcode-reader.ts");
/* harmony import */ var _models_baggageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/baggageData */ "./src/app/_models/baggageData.ts");
/* harmony import */ var _app_modules_zxing_scanner_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/_modules/zxing-scanner/zxing-scanner.component */ "./src/app/_modules/zxing-scanner/zxing-scanner.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarcodeScannerComponent = /** @class */ (function () {
    function BarcodeScannerComponent(router, route) {
        this.router = router;
        this.route = route;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full;
        this.showForm = false;
        this.showResult = true;
    }
    BarcodeScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.setCodeReader(new _app_modules_zxing_scanner_browser_barcode_reader__WEBPACK_IMPORTED_MODULE_0__["BrowserBarCodeReader"]());
        this.scanner.camerasFound.subscribe(function (devices) {
            _this.availableDevices = devices;
            if (_this.deviceId) {
                _this.scanner.changeDevice(_this.scanner.getDeviceById(_this.deviceId));
                _this.currentDevice = _this.scanner.getDeviceById(_this.deviceId);
                setTimeout(function () {
                    if (_this.barCodeResultString === undefined) {
                        // const data = new BaggageData();
                        // data.baggageNumber = '1234567890';
                        _this.handleResultData(_this.barCodeResultString);
                    }
                }, 15000);
            }
            // selects the devices's back camera by default
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (/back|rear|environment/gi.test(device.label)) {
                    _this.scanner.changeDevice(device);
                    _this.currentDevice = device;
                    setTimeout(function () {
                        if (_this.barCodeResultString === undefined) {
                            _this.handleResultData(_this.barCodeResultString);
                        }
                    }, 15000);
                    break;
                }
            }
        });
        this.scanner.camerasFound.subscribe(function (devices) { return (_this.availableDevices = devices); });
        this.scanner.hasDevices.subscribe(function (has) { return (_this.hasDevices = has); });
        this.scanner.scanComplete.subscribe(function (result) { return (_this.barCodeResult = result); });
        this.scanner.permissionResponse.subscribe(function (perm) { return (_this.hasPermission = perm); });
    };
    BarcodeScannerComponent.prototype.displayCameras = function (cameras) {
        this.availableDevices = cameras;
    };
    BarcodeScannerComponent.prototype.handleResultData = function (result) {
        if (result) {
            this.formData = new _models_baggageData__WEBPACK_IMPORTED_MODULE_1__["BaggageData"]();
            this.formData.baggageNumber = result;
        }
        this.result.emit(this.formData);
    };
    BarcodeScannerComponent.prototype.handleBarCodeCodeResult = function (resultString) {
        var _this = this;
        console.log('Result: ', resultString);
        this.barCodeResultString = resultString;
        setTimeout(function () {
            _this.handleResultData(_this.barCodeResultString);
        }, 3000);
    };
    BarcodeScannerComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        var _this = this;
        console.log('Selection changed: ', selectedValue);
        this.currentDevice = this.scanner.getDeviceById(selectedValue);
        setTimeout(function () {
            if (_this.barCodeResultString === undefined) {
                // console.log(this.showForm);
                // this.showForm = true;
                // // this.qrResultString = 'sinka';
                // this.showResult = false;
                _this.handleResultData(_this.barCodeResultString);
            }
        }, 5000);
    };
    BarcodeScannerComponent.prototype.onSubmit = function () {
        console.log(this.formData.baggageNumber);
    };
    BarcodeScannerComponent.prototype.stateToEmoji = function (state) {
        var states = {
            // not checked
            undefined: '❔',
            // failed to check
            null: '⭕',
            // success
            true: '✔',
            // can't touch that
            false: '❌'
        };
        return states['' + state];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], BarcodeScannerComponent.prototype, "deviceId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], BarcodeScannerComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('scanner'),
        __metadata("design:type", _app_modules_zxing_scanner_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_2__["ZXingScannerComponent"])
    ], BarcodeScannerComponent.prototype, "scanner", void 0);
    BarcodeScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-barcode-scanner',
            template: __webpack_require__(/*! ./barCodeScanner.component.html */ "./src/app/BarCodeScanner/barCodeScanner.component.html"),
            styles: [__webpack_require__(/*! ./barCodeScanner.component.scss */ "./src/app/BarCodeScanner/barCodeScanner.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BarcodeScannerComponent);
    return BarcodeScannerComponent;
}());



/***/ }),

/***/ "./src/app/QRScanner/QRScanner.component.html":
/*!****************************************************!*\
  !*** ./src/app/QRScanner/QRScanner.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scanner-shell\" [hidden]=\"!hasDevices\">\r\n\r\n  <header>\r\n    <select (change)=\"onDeviceSelectChange($event.target.value)\">\r\n            <option value=\"\" [selected]=\"!currentDevice\">Select a device</option>\r\n            <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"currentDevice && device.deviceId === currentDevice.deviceId\">{{ device.label }}</option>\r\n        </select>\r\n  </header>\r\n\r\n  <div class='center'>\r\n    <zxing-scanner #scanner start=\"true\" [device]=\"currentDevice\" (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng-container *ngIf=\"hasPermission === undefined\">\r\n\r\n  <h2>Waiting for permissions.</h2>\r\n\r\n  <blockquote>\r\n    If your device does not has cameras, no permissions will be asked.\r\n  </blockquote>\r\n\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"hasPermission === false\">\r\n\r\n  <h2>You denied the camera permission, we can't scan anything without it. 😪</h2>\r\n\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"hasDevices === undefined\">\r\n\r\n  <h2>Looking for devices.</h2>\r\n\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"hasDevices === null\">\r\n\r\n  <h2>Couldn't check for devices.</h2>\r\n\r\n  <blockquote>\r\n    This may be caused by some security error.\r\n  </blockquote>\r\n\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"hasDevices === false\">\r\n\r\n  <h2>No devices were found.</h2>\r\n\r\n  <blockquote>\r\n    I believe your device has no media devices attached to.\r\n  </blockquote>\r\n\r\n</ng-container>\r\n\r\n<hr>"

/***/ }),

/***/ "./src/app/QRScanner/QRScanner.component.scss":
/*!****************************************************!*\
  !*** ./src/app/QRScanner/QRScanner.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  width: 100%;\n  height: 35px; }\n\nzxing-scanner {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\nform {\n  width: 60%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  margin-top: 1%;\n  height: 30px;\n  width: 50%;\n  background-color: white;\n  border-radius: 13px;\n  border-style: none;\n  margin-left: 2%;\n  padding-left: 3%; }\n\n.button {\n  background-color: #4CAF50;\n  /* Green */\n  border: none;\n  color: white;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 12px;\n  margin-left: 2%;\n  margin-top: 1%; }\n"

/***/ }),

/***/ "./src/app/QRScanner/QRScanner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/QRScanner/QRScanner.component.ts ***!
  \**************************************************/
/*! exports provided: QRScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRScannerComponent", function() { return QRScannerComponent; });
/* harmony import */ var _app_modules_zxing_scanner_browser_qr_code_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app/_modules/zxing-scanner/browser-qr-code-reader */ "./src/app/_modules/zxing-scanner/browser-qr-code-reader.ts");
/* harmony import */ var _app_modules_zxing_scanner_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app/_modules/zxing-scanner/zxing-scanner.component */ "./src/app/_modules/zxing-scanner/zxing-scanner.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_boardPassData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/boardPassData */ "./src/app/_models/boardPassData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QRScannerComponent = /** @class */ (function () {
    function QRScannerComponent(router) {
        this.router = router;
        this.boardPassData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.currentDeviceId = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full;
    }
    QRScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.setCodeReader(new _app_modules_zxing_scanner_browser_qr_code_reader__WEBPACK_IMPORTED_MODULE_0__["BrowserQRCodeReader"]());
        this.scanner.camerasFound.subscribe(function (devices) {
            _this.availableDevices = devices;
            // selects the devices's back camera by default
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (/back|rear|environment/gi.test(device.label)) {
                    _this.scanner.changeDevice(device);
                    _this.currentDevice = device;
                    setTimeout(function () {
                        if (_this.qrResultString === undefined) {
                            // this.boardPassData.emit(this.formData);
                            _this.handleResultData(_this.qrResultString);
                        }
                    }, 20000);
                    break;
                }
            }
        });
        this.scanner.camerasFound.subscribe(function (devices) { return (_this.availableDevices = devices); });
        this.scanner.hasDevices.subscribe(function (has) { return (_this.hasDevices = has); });
        this.scanner.scanComplete.subscribe(function (result) { return (_this.qrResult = result); });
        this.scanner.permissionResponse.subscribe(function (perm) { return (_this.hasPermission = perm); });
    };
    QRScannerComponent.prototype.displayCameras = function (cameras) {
        console.log('Devices: ', cameras);
        this.availableDevices = cameras;
    };
    QRScannerComponent.prototype.handleResultData = function (result) {
        var match = /([\s\S]{2})([\s\S]*)\/([\S]*)([\s\S]{9})([\s\S]{6})([\s\S]{7})(\s)([\s\S]{3})([\s\S]*)([\S]{3})([\S]{3})([\s\S]{7})([\S]{3})([\s\S]*)/.exec(result);
        if (match) {
            this.formData = new _models_boardPassData__WEBPACK_IMPORTED_MODULE_4__["BoardPassData"]();
            this.formData.name = match[2];
            this.formData.surname = match[3];
            this.formData.fromAirport = match[5][0] + match[5][1] + match[5][2];
            this.formData.toAirport = match[5][3] + match[5][4] + match[5][5];
            this.formData.flightNumber = match[6];
        }
        // this.handleJulianDate(Number(match[8]));
        this.boardPassData.emit(this.formData);
        this.currentDeviceId.emit(this.currentDevice.deviceId);
    };
    // handleJulianDate(date) {
    //   const numberOfDaysInMounth = new Array<number>(31, 28 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
    //   const N = date;
    //   const y = 2017;
    //   const z = 365 * y + (y / 4) - (y / 100) + (y / 400);
    //   const d = N - z;
    //   console.log('D: ' + d);
    //   let tmp = d;
    //   let cnt = 0;
    //   while (tmp > 0) {
    //     tmp -= numberOfDaysInMounth[cnt];
    //     cnt++;
    //   }
    //   console.log('MM: ' + cnt);
    // }
    QRScannerComponent.prototype.handleQrCodeResult = function (resultString) {
        var _this = this;
        console.log('Result: ', resultString);
        this.qrResultString = resultString;
        setTimeout(function () {
            _this.handleResultData(resultString);
        }, 3000);
    };
    QRScannerComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        var _this = this;
        console.log('Selection changed: ', selectedValue);
        this.currentDevice = this.scanner.getDeviceById(selectedValue);
        setTimeout(function () {
            if (_this.qrResultString === undefined) {
                _this.handleResultData(_this.qrResultString);
            }
        }, 20000);
    };
    QRScannerComponent.prototype.onSubmit = function () {
        console.log(this.formData.name +
            ' ' +
            this.formData.surname +
            this.formData.flightNumber);
        this.router.navigate(['/baggage', this.currentDevice.deviceId]);
    };
    QRScannerComponent.prototype.stateToEmoji = function (state) {
        var states = {
            // not checked
            undefined: '❔',
            // failed to check
            null: '⭕',
            // success
            true: '✔',
            // can't touch that
            false: '❌'
        };
        return states['' + state];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], QRScannerComponent.prototype, "boardPassData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], QRScannerComponent.prototype, "currentDeviceId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('scanner'),
        __metadata("design:type", _app_modules_zxing_scanner_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__["ZXingScannerComponent"])
    ], QRScannerComponent.prototype, "scanner", void 0);
    QRScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-qr-scanner',
            template: __webpack_require__(/*! ./QRScanner.component.html */ "./src/app/QRScanner/QRScanner.component.html"),
            styles: [__webpack_require__(/*! ./QRScanner.component.scss */ "./src/app/QRScanner/QRScanner.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QRScannerComponent);
    return QRScannerComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentAirline')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/airline/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_models/airline.ts":
/*!************************************!*\
  !*** ./src/app/_models/airline.ts ***!
  \************************************/
/*! exports provided: Airline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });
var Airline = /** @class */ (function () {
    function Airline() {
    }
    return Airline;
}());



/***/ }),

/***/ "./src/app/_models/baggageData.ts":
/*!****************************************!*\
  !*** ./src/app/_models/baggageData.ts ***!
  \****************************************/
/*! exports provided: BaggageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaggageData", function() { return BaggageData; });
var BaggageData = /** @class */ (function () {
    function BaggageData() {
    }
    return BaggageData;
}());



/***/ }),

/***/ "./src/app/_models/boardPassData.ts":
/*!******************************************!*\
  !*** ./src/app/_models/boardPassData.ts ***!
  \******************************************/
/*! exports provided: BoardPassData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPassData", function() { return BoardPassData; });
var BoardPassData = /** @class */ (function () {
    function BoardPassData() {
    }
    return BoardPassData;
}());



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/browser-barcode-reader.ts":
/*!******************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/browser-barcode-reader.ts ***!
  \******************************************************************/
/*! exports provided: BrowserBarCodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserBarCodeReader", function() { return BrowserBarCodeReader; });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_code_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-code-reader */ "./src/app/_modules/zxing-scanner/browser-code-reader.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BrowserBarCodeReader = /** @class */ (function (_super) {
    __extends(BrowserBarCodeReader, _super);
    function BrowserBarCodeReader(timeBetweenScansMillis) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["Code128Reader"](), timeBetweenScansMillis) || this;
    }
    return BrowserBarCodeReader;
}(_browser_code_reader__WEBPACK_IMPORTED_MODULE_1__["BrowserCodeReader"]));



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/browser-code-reader.ts":
/*!***************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/browser-code-reader.ts ***!
  \***************************************************************/
/*! exports provided: BrowserCodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserCodeReader", function() { return BrowserCodeReader; });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/// <reference path="./image-capture.d.ts" />
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Based on zxing-typescript BrowserCodeReader
 */
var BrowserCodeReader = /** @class */ (function () {
    /**
     * Constructor for dependency injection.
     *
     * @param reader The barcode reader to be used to decode the stream.
     * @param timeBetweenScans The scan throttling in milliseconds.
     */
    function BrowserCodeReader(reader, timeBetweenScans) {
        if (timeBetweenScans === void 0) { timeBetweenScans = 500; }
        this.reader = reader;
        this.timeBetweenScans = timeBetweenScans;
        /**
         * Shows if torch is available on the camera.
         */
        this.torchCompatible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Starts the decoding from the actual or a new video element.
     *
     * @param callbackFn The callback to be executed after every scan attempt
     * @param deviceId The device's to be used Id
     * @param videoElement A new video element
     *
     * @todo Return Promise<Result>
     */
    BrowserCodeReader.prototype.decodeFromInputVideoDevice = function (callbackFn, deviceId, videoElement) {
        return __awaiter(this, void 0, void 0, function () {
            var video, constraints, stream, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        this.prepareVideoElement(videoElement);
                        // Keeps the deviceId between scanner resets.
                        if (typeof deviceId !== 'undefined') {
                            this.deviceId = deviceId;
                        }
                        video = typeof deviceId === 'undefined'
                            ? { facingMode: { exact: 'environment' } }
                            : { deviceId: { exact: deviceId } };
                        constraints = {
                            audio: false,
                            video: video
                        };
                        if (typeof navigator === 'undefined') {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator
                                .mediaDevices
                                .getUserMedia(constraints)];
                    case 2:
                        stream = _a.sent();
                        this.startDecodeFromStream(stream, callbackFn);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        /* handle the error, or not */
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the new stream and request a new decoding-with-delay.
     *
     * @param stream The stream to be shown in the video element.
     * @param callbackFn A callback for the decode method.
     *
     * @todo Return Promise<Result>
     */
    BrowserCodeReader.prototype.startDecodeFromStream = function (stream, callbackFn) {
        this.stream = stream;
        this.checkTorchCompatibility(this.stream);
        this.bindVideoSrc(this.videoElement, this.stream);
        this.bindEvents(this.videoElement, callbackFn);
    };
    /**
     * Defines what the videoElement src will be.
     *
     * @param videoElement
     * @param stream
     */
    BrowserCodeReader.prototype.bindVideoSrc = function (videoElement, stream) {
        // Older browsers may not have `srcObject`
        try {
            // @NOTE Throws Exception if interrupted by a new loaded request
            videoElement.srcObject = stream;
        }
        catch (err) {
            // @NOTE Avoid using this in new browsers, as it is going away.
            videoElement.src = window.URL.createObjectURL(stream);
        }
    };
    /**
     * Unbinds a HTML video src property.
     *
     * @param videoElement
     */
    BrowserCodeReader.prototype.unbindVideoSrc = function (videoElement) {
        try {
            videoElement.srcObject = null;
        }
        catch (err) {
            videoElement.src = '';
        }
    };
    /**
     * Binds listeners and callbacks to the videoElement.
     *
     * @param videoElement
     * @param callbackFn
     */
    BrowserCodeReader.prototype.bindEvents = function (videoElement, callbackFn) {
        var _this = this;
        if (typeof callbackFn !== 'undefined') {
            this.videoPlayingEventListener = function () { return _this.decodingStream = _this.decodeWithDelay(_this.timeBetweenScans)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e, x) { return _this.handleDecodeStreamError(e, x); }))
                .subscribe(function (x) { return callbackFn(x); }); };
        }
        videoElement.addEventListener('playing', this.videoPlayingEventListener);
        this.videoLoadedMetadataEventListener = function () { return videoElement.play(); };
        videoElement.addEventListener('loadedmetadata', this.videoLoadedMetadataEventListener);
    };
    /**
     * Checks if the stream supports torch control.
     *
     * @param stream The media stream used to check.
     */
    BrowserCodeReader.prototype.checkTorchCompatibility = function (stream) {
        return __awaiter(this, void 0, void 0, function () {
            var imageCapture, capabilities, compatible, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.track = stream.getVideoTracks()[0];
                        imageCapture = new ImageCapture(this.track);
                        return [4 /*yield*/, imageCapture.getPhotoCapabilities()];
                    case 1:
                        capabilities = _a.sent();
                        compatible = !!capabilities.torch || ('fillLightMode' in capabilities && capabilities.fillLightMode.length !== 0);
                        this.torchCompatible.next(compatible);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.torchCompatible.next(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enables and disables the device torch.
     */
    BrowserCodeReader.prototype.setTorch = function (on) {
        if (!this.torchCompatible.value) {
            return;
        }
        if (on) {
            this.track.applyConstraints({
                advanced: [{ torch: true }]
            });
        }
        else {
            this.restart();
        }
    };
    Object.defineProperty(BrowserCodeReader.prototype, "torchAvailable", {
        /**
         * Observable that says if there's a torch available for the current device.
         */
        get: function () {
            return this.torchCompatible.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets a HTMLVideoElement for scanning or creates a new one.
     *
     * @param videoElement The HTMLVideoElement to be set.
     */
    BrowserCodeReader.prototype.prepareVideoElement = function (videoElement) {
        if (!videoElement && typeof document !== 'undefined') {
            videoElement = document.createElement('video');
            videoElement.width = 200;
            videoElement.height = 200;
        }
        this.videoElement = videoElement;
    };
    /**
     * Opens a decoding stream.
     */
    BrowserCodeReader.prototype.decodeWithDelay = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 500; }
        // The decoding stream.
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            // Creates on Subscribe.
            var intervalId = setInterval(function () {
                try {
                    observer.next(_this.decode());
                }
                catch (err) {
                    observer.error(err);
                }
            }, delay);
            // Destroys on Unsubscribe.
            return function () { return clearInterval(intervalId); };
        });
    };
    /**
     * Gets the BinaryBitmap for ya! (and decodes it)
     */
    BrowserCodeReader.prototype.decode = function () {
        // get binary bitmap for decode function
        var binaryBitmap = this.createBinaryBitmap(this.videoElement || this.imageElement);
        return this.reader.decode(binaryBitmap);
    };
    /**
     * Administra um erro gerado durante o decode stream.
     */
    BrowserCodeReader.prototype.handleDecodeStreamError = function (err, caught) {
        if (
        // scan Failure - found nothing, no error
        err instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__["NotFoundException"] ||
            // scan Error - found the QR but got error on decoding
            err instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__["ChecksumException"] ||
            err instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__["FormatException"]) {
            return caught;
        }
        throw err;
    };
    /**
     * Creates a binaryBitmap based in some image source.
     *
     * @param mediaElement HTML element containing drawable image source.
     */
    BrowserCodeReader.prototype.createBinaryBitmap = function (mediaElement) {
        if (undefined === this.canvasElementContext) {
            this.prepareCaptureCanvas();
        }
        this.canvasElementContext.drawImage(mediaElement, 0, 0);
        var luminanceSource = new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["HTMLCanvasElementLuminanceSource"](this.canvasElement);
        var hybridBinarizer = new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["HybridBinarizer"](luminanceSource);
        return new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BinaryBitmap"](hybridBinarizer);
    };
    /**
     * 🖌 Prepares the canvas for capture and scan frames.
     */
    BrowserCodeReader.prototype.prepareCaptureCanvas = function () {
        if (typeof document === 'undefined') {
            this.canvasElement = undefined;
            this.canvasElementContext = undefined;
            return;
        }
        var canvasElement = document.createElement('canvas');
        var width;
        var height;
        if (typeof this.videoElement !== 'undefined') {
            width = this.videoElement.videoWidth;
            height = this.videoElement.videoHeight;
        }
        if (typeof this.imageElement !== 'undefined') {
            width = this.imageElement.naturalWidth || this.imageElement.width;
            height = this.imageElement.naturalHeight || this.imageElement.height;
        }
        canvasElement.style.width = width + 'px';
        canvasElement.style.height = height + 'px';
        canvasElement.width = width;
        canvasElement.height = height;
        this.canvasElement = canvasElement;
        this.canvasElementContext = canvasElement.getContext('2d');
    };
    /**
     * Stops the continuous scan and cleans the stream.
     */
    BrowserCodeReader.prototype.stop = function () {
        if (this.decodingStream) {
            this.decodingStream.unsubscribe();
        }
        if (this.stream) {
            this.stream.getVideoTracks().forEach(function (t) { return t.stop(); });
            this.stream = undefined;
        }
    };
    /**
     * Resets the scanner and it's configurations.
     */
    BrowserCodeReader.prototype.reset = function () {
        // stops the camera, preview and scan 🔴
        this.stop();
        if (this.videoElement) {
            // first gives freedon to the element 🕊
            if (typeof this.videoPlayEndedEventListener !== 'undefined') {
                this.videoElement.removeEventListener('ended', this.videoPlayEndedEventListener);
            }
            if (typeof this.videoPlayingEventListener !== 'undefined') {
                this.videoElement.removeEventListener('playing', this.videoPlayingEventListener);
            }
            if (typeof this.videoLoadedMetadataEventListener !== 'undefined') {
                this.videoElement.removeEventListener('loadedmetadata', this.videoLoadedMetadataEventListener);
            }
            // then forgets about that element 😢
            this.unbindVideoSrc(this.videoElement);
            this.videoElement.removeAttribute('src');
            this.videoElement = undefined;
        }
        if (this.imageElement) {
            // first gives freedon to the element 🕊
            if (undefined !== this.videoPlayEndedEventListener) {
                this.imageElement.removeEventListener('load', this.imageLoadedEventListener);
            }
            // then forgets about that element 😢
            this.imageElement.src = undefined;
            this.imageElement.removeAttribute('src');
            this.imageElement = undefined;
        }
        // cleans canvas references 🖌
        this.canvasElementContext = undefined;
        this.canvasElement = undefined;
    };
    /**
     * Restarts the scanner.
     */
    BrowserCodeReader.prototype.restart = function () {
        // reset
        // start
        this.decodeFromInputVideoDevice(undefined, this.deviceId, this.videoElement);
    };
    return BrowserCodeReader;
}());



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/browser-ean13-reader.ts":
/*!****************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/browser-ean13-reader.ts ***!
  \****************************************************************/
/*! exports provided: BrowserEAN13Reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserEAN13Reader", function() { return BrowserEAN13Reader; });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_code_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-code-reader */ "./src/app/_modules/zxing-scanner/browser-code-reader.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BrowserEAN13Reader = /** @class */ (function (_super) {
    __extends(BrowserEAN13Reader, _super);
    function BrowserEAN13Reader(timeBetweenScansMillis) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["EAN13Reader"](), timeBetweenScansMillis) || this;
    }
    return BrowserEAN13Reader;
}(_browser_code_reader__WEBPACK_IMPORTED_MODULE_1__["BrowserCodeReader"]));



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/browser-qr-code-reader.ts":
/*!******************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/browser-qr-code-reader.ts ***!
  \******************************************************************/
/*! exports provided: BrowserQRCodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserQRCodeReader", function() { return BrowserQRCodeReader; });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_code_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-code-reader */ "./src/app/_modules/zxing-scanner/browser-code-reader.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BrowserQRCodeReader = /** @class */ (function (_super) {
    __extends(BrowserQRCodeReader, _super);
    function BrowserQRCodeReader(timeBetweenScansMillis) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__["QRCodeReader"](), timeBetweenScansMillis) || this;
    }
    return BrowserQRCodeReader;
}(_browser_code_reader__WEBPACK_IMPORTED_MODULE_1__["BrowserCodeReader"]));



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/zxing-scanner.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/zxing-scanner.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video #preview>\r\n    <p>\r\n        Your browser does not support this feature, please try to upgrade it.\r\n    </p>\r\n    <p>\r\n        Seu navegador não suporta este recurso, por favor tente atualizá-lo.\r\n    </p>\r\n</video>\r\n"

/***/ }),

/***/ "./src/app/_modules/zxing-scanner/zxing-scanner.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/zxing-scanner.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\nvideo {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain; }\n"

/***/ }),

/***/ "./src/app/_modules/zxing-scanner/zxing-scanner.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/zxing-scanner.component.ts ***!
  \*******************************************************************/
/*! exports provided: ZXingScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function() { return ZXingScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _browser_qr_code_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-qr-code-reader */ "./src/app/_modules/zxing-scanner/browser-qr-code-reader.ts");
/* harmony import */ var _browser_ean13_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser-ean13-reader */ "./src/app/_modules/zxing-scanner/browser-ean13-reader.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ZXingScannerComponent = /** @class */ (function () {
    /**
     * Constructor to build the object and do some DI.
     */
    function ZXingScannerComponent() {
        /**
         * The scan throttling (time between scans) in milliseconds.
         */
        this.scanThrottling = 1500;
        /**
         * Allow start scan or not.
         */
        this.scannerEnabled = true;
        /**
         * Enable or disable autofocus of the camera (might have an impact on performance)
         */
        this.autofocusEnabled = true;
        /**
         * Emitts events when the torch compatibility is changed.
         */
        this.torchCompatible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when a scan is successful performed, will inject the string value of the QR-code to the callback.
         */
        this.scanSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when a scan fails without errors, usefull to know how much scan tries where made.
         */
        this.scanFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when a scan throws some error, will inject the error to the callback.
         */
        this.scanError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when a scan is performed, will inject the Result value of the QR-code scan (if available) to the callback.
         */
        this.scanComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when no cameras are found, will inject an exception (if available) to the callback.
         */
        this.camerasFound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when no cameras are found, will inject an exception (if available) to the callback.
         */
        this.camerasNotFound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when the users answers for permission.
         */
        this.permissionResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitts events when has devices status is update.
         */
        this.hasDevices = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.codeReader = new _browser_ean13_reader__WEBPACK_IMPORTED_MODULE_2__["BrowserEAN13Reader"]();
        this.hasNavigator = typeof navigator !== 'undefined';
        this.isMediaDevicesSuported = this.hasNavigator && !!navigator.mediaDevices;
        this.isEnumerateDevicesSuported = !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
    }
    Object.defineProperty(ZXingScannerComponent.prototype, "_hasDevices", {
        /**
         * If any media device were found.
         */
        set: function (hasDevice) {
            this.hasDevices.next(hasDevice);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZXingScannerComponent.prototype, "torch", {
        /**
         * Allow start scan or not.
         */
        set: function (on) {
            this.codeReader.setTorch(on);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Manages the bindinded property changes.
     * @param changes
     */
    ZXingScannerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.codeForRead) {
            console.log('sinka');
            // this.resetScan();
            this.restartScan();
            // this.scan(this.videoInputDevice.deviceId);
        }
        if (changes.scannerEnabled) {
            if (!this.scannerEnabled) {
                this.resetScan();
            }
            else if (this.videoInputDevice) {
                this.scan(this.videoInputDevice.deviceId);
            }
        }
        if (changes.device) {
            if (this.device) {
                this.changeDevice(this.device);
            }
            else {
                console.warn('zxing-scanner', 'device', 'Unselected device.');
                this.resetScan();
            }
        }
        if (changes.scanThrottling) {
            this.setCodeReaderThrottling(this.scanThrottling);
        }
    };
    /**
     * Executed after the view initialization.
     */
    ZXingScannerComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var hasPermission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Chrome 63 fix
                        if (!this.previewElemRef) {
                            console.warn('zxing-scanner', 'Preview element not found!');
                            return [2 /*return*/];
                        }
                        // iOS 11 Fix
                        this.previewElemRef.nativeElement.setAttribute('autoplay', false);
                        this.previewElemRef.nativeElement.setAttribute('muted', true);
                        this.previewElemRef.nativeElement.setAttribute('playsinline', true);
                        this.previewElemRef.nativeElement.setAttribute('autofocus', this.autofocusEnabled);
                        return [4 /*yield*/, this.askForPermission()];
                    case 1:
                        hasPermission = _a.sent();
                        // gets and enumerates all video devices
                        this.enumarateVideoDevices().then(function (videoInputDevices) {
                            if (videoInputDevices && videoInputDevices.length > 0) {
                                _this._hasDevices = true;
                                _this.camerasFound.next(videoInputDevices);
                            }
                            else {
                                _this._hasDevices = false;
                                _this.camerasNotFound.next();
                            }
                        });
                        // There's nothin' to do anymore if we don't have permissions.
                        if (hasPermission !== true) {
                            return [2 /*return*/];
                        }
                        this.startScan(this.videoInputDevice);
                        this.codeReader.torchAvailable.subscribe(function (value) {
                            _this.torchCompatible.emit(value);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Executes some actions before destroy the component.
     */
    ZXingScannerComponent.prototype.ngOnDestroy = function () {
        this.resetScan();
    };
    /**
     * Starts a new QR-scanner to set a new scan throttling.
     *
     * @param throttling The scan speed in milliseconds.
     */
    ZXingScannerComponent.prototype.setCodeReaderThrottling = function (throttling) {
        this.codeReader = new _browser_qr_code_reader__WEBPACK_IMPORTED_MODULE_1__["BrowserQRCodeReader"](throttling);
        this.restartScan();
    };
    /**
     * Properly changes the actual target device.
     *
     * @param device
     */
    ZXingScannerComponent.prototype.changeDevice = function (device) {
        this.videoInputDevice = device;
        this.startScan(device);
    };
    /**
     * Properly changes the actual target device using it's deviceId.
     *
     * @param deviceId
     */
    ZXingScannerComponent.prototype.changeDeviceById = function (deviceId) {
        this.changeDevice(this.getDeviceById(deviceId));
    };
    /**
     * Properly returns the target device using it's deviceId.
     *
     * @param deviceId
     */
    ZXingScannerComponent.prototype.getDeviceById = function (deviceId) {
        return this.videoInputDevices.find(function (device) { return device.deviceId === deviceId; });
    };
    /**
     * Sets the permission value and emmits the event.
     */
    ZXingScannerComponent.prototype.setPermission = function (hasPermission) {
        this.hasPermission = hasPermission;
        this.permissionResponse.next(hasPermission);
        return this.permissionResponse;
    };
    /**
     * Gets and registers all cammeras.
     *
     * @todo Return a Promise.
     */
    ZXingScannerComponent.prototype.askForPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stream, err_1, permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasNavigator) {
                            console.error('zxing-scanner', 'askForPermission', 'Can\'t ask permission, navigator is not present.');
                            this.setPermission(null);
                            return [2 /*return*/, this.hasPermission];
                        }
                        if (!this.isMediaDevicesSuported) {
                            console.error('zxing-scanner', 'askForPermission', 'Can\'t get user media, this is not supported.');
                            this.setPermission(null);
                            return [2 /*return*/, this.hasPermission];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: false, video: true })];
                    case 2:
                        // Will try to ask for permission
                        stream = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, this.handlePermissionException(err_1)];
                    case 4:
                        try {
                            // Start stream so Browser can display its permission-dialog
                            this.codeReader.bindVideoSrc(this.previewElemRef.nativeElement, stream);
                            // After permission was granted, we can stop it again
                            stream.getVideoTracks().forEach(function (track) {
                                track.stop();
                            });
                            // should stop the opened stream
                            this.codeReader.unbindVideoSrc(this.previewElemRef.nativeElement);
                            // if the scripts lives until here, that's only one mean:
                            // permission granted
                            permission = true;
                            this.setPermission(permission);
                        }
                        catch (err) {
                            console.error('zxing-scanner', 'askForPermission', err);
                            // permission aborted
                            permission = null;
                            this.setPermission(permission);
                        }
                        // Returns the event emitter, so the dev can subscribe to it
                        return [2 /*return*/, permission];
                }
            });
        });
    };
    /**
     * Returns the filtered permission.
     *
     * @param err
     */
    ZXingScannerComponent.prototype.handlePermissionException = function (err) {
        // failed to grant permission to video input
        console.warn('zxing-scanner', 'askForPermission', err);
        var permission;
        switch (err.name) {
            // usually caused by not secure origins
            case 'NotSupportedError':
                console.warn('@zxing/ngx-scanner', err.message);
                // could not claim
                permission = null;
                // can't check devices
                this._hasDevices = null;
                break;
            // user denied permission
            case 'NotAllowedError':
                console.warn('@zxing/ngx-scanner', err.message);
                // claimed and denied permission
                permission = false;
                // this means that input devices exists
                this._hasDevices = true;
                break;
            // the device has no attached input devices
            case 'NotFoundError':
                console.warn('@zxing/ngx-scanner', err.message);
                // no permissions claimed
                permission = null;
                // because there was no devices
                this._hasDevices = false;
                // tells the listener about the error
                this.camerasNotFound.next(err);
                break;
            case 'NotReadableError':
                console.warn('@zxing/ngx-scanner', 'Couldn\'t read the device(s)\'s stream, it\'s probably in use by another app.');
                // no permissions claimed
                permission = null;
                // there are devices, which I couldn't use
                this._hasDevices = false;
                // tells the listener about the error
                this.camerasNotFound.next(err);
                break;
            default:
                console.warn('@zxing/ngx-scanner', 'I was not able to define if I have permissions for camera or not.', err);
                // unknown
                permission = null;
                // this._hasDevices = undefined;
                break;
        }
        this.setPermission(permission);
        // tells the listener about the error
        this.permissionResponse.error(err);
        return permission;
    };
    /**
     * Starts the continuous scanning for the given device.
     *
     * @param deviceId The deviceId from the device.
     */
    ZXingScannerComponent.prototype.scan = function (deviceId) {
        var _this = this;
        try {
            this.codeReader.decodeFromInputVideoDevice(function (result) {
                if (result) {
                    _this.dispatchScanSuccess(result);
                }
                else {
                    _this.dispatchScanFailure();
                }
                _this.dispatchScanComplete(result);
            }, deviceId, this.previewElemRef.nativeElement);
        }
        catch (err) {
            this.dispatchScanError(err);
            this.dispatchScanComplete(undefined);
        }
    };
    /**
     * Starts the scanning if allowed.
     *
     * @param device The device to be used in the scan.
     */
    ZXingScannerComponent.prototype.startScan = function (device) {
        if (this.scannerEnabled && device) {
            this.scan(device.deviceId);
        }
    };
    /**
     * Stops the scan service.
     */
    ZXingScannerComponent.prototype.resetScan = function () {
        this.codeReader.reset();
    };
    /**
     * Stops and starts back the scan.
     */
    ZXingScannerComponent.prototype.restartScan = function () {
        // this.restartScan();
        this.startScan(this.device);
    };
    /**
     * Dispatches the scan success event.
     *
     * @param result the scan result.
     */
    ZXingScannerComponent.prototype.dispatchScanSuccess = function (result) {
        this.scanSuccess.next(result.getText());
    };
    /**
     * Dispatches the scan failure event.
     */
    ZXingScannerComponent.prototype.dispatchScanFailure = function () {
        this.scanFailure.next();
    };
    /**
     * Dispatches the scan error event.
     *
     * @param err the error thing.
     */
    ZXingScannerComponent.prototype.dispatchScanError = function (error) {
        this.scanError.next(error);
    };
    /**
     * Dispatches the scan event.
     *
     * @param result the scan result.
     */
    ZXingScannerComponent.prototype.dispatchScanComplete = function (result) {
        this.scanComplete.next(result);
    };
    /**
     * Enumerates all the available devices.
     */
    ZXingScannerComponent.prototype.enumarateVideoDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, _i, devices_1, device, videoDevice, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasNavigator) {
                            console.error('zxing-scanner', 'enumarateVideoDevices', 'Can\'t enumerate devices, navigator is not present.');
                            return [2 /*return*/];
                        }
                        if (!this.isEnumerateDevicesSuported) {
                            console.error('zxing-scanner', 'enumarateVideoDevices', 'Can\'t enumerate devices, method not supported.');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _a.sent();
                        this.videoInputDevices = [];
                        for (_i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                            device = devices_1[_i];
                            videoDevice = {};
                            // tslint:disable-next-line:forin
                            for (key in device) {
                                videoDevice[key] = device[key];
                            }
                            if (videoDevice.kind === 'video') {
                                videoDevice.kind = 'videoinput';
                            }
                            if (!videoDevice.deviceId) {
                                videoDevice.deviceId = videoDevice.id;
                            }
                            if (!videoDevice.label) {
                                videoDevice.label = 'Camera (no permission 🚫)';
                            }
                            if (videoDevice.kind === 'videoinput') {
                                this.videoInputDevices.push(videoDevice);
                            }
                        }
                        return [2 /*return*/, this.videoInputDevices];
                }
            });
        });
    };
    ZXingScannerComponent.prototype.getCodeReader = function () {
        return this.codeReader;
    };
    ZXingScannerComponent.prototype.setCodeReader = function (codeReader) {
        this.codeReader = codeReader;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('preview'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ZXingScannerComponent.prototype, "previewElemRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scanThrottling", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scannerEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", MediaDeviceInfo)
    ], ZXingScannerComponent.prototype, "device", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "autofocusEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ZXingScannerComponent.prototype, "torch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ZXingScannerComponent.prototype, "codeForRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "torchCompatible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scanSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scanFailure", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scanError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "scanComplete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "camerasFound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "camerasNotFound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "permissionResponse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZXingScannerComponent.prototype, "hasDevices", void 0);
    ZXingScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'zxing-scanner',
            template: __webpack_require__(/*! ./zxing-scanner.component.html */ "./src/app/_modules/zxing-scanner/zxing-scanner.component.html"),
            styles: [__webpack_require__(/*! ./zxing-scanner.component.scss */ "./src/app/_modules/zxing-scanner/zxing-scanner.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ZXingScannerComponent);
    return ZXingScannerComponent;
}());



/***/ }),

/***/ "./src/app/_modules/zxing-scanner/zxing-scanner.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/_modules/zxing-scanner/zxing-scanner.module.ts ***!
  \****************************************************************/
/*! exports provided: ZXingScannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function() { return ZXingScannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zxing-scanner.component */ "./src/app/_modules/zxing-scanner/zxing-scanner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZXingScannerModule = /** @class */ (function () {
    function ZXingScannerModule() {
    }
    ZXingScannerModule_1 = ZXingScannerModule;
    ZXingScannerModule.forRoot = function () {
        return {
            ngModule: ZXingScannerModule_1
        };
    };
    ZXingScannerModule = ZXingScannerModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]],
            exports: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]],
        })
    ], ZXingScannerModule);
    return ZXingScannerModule;
    var ZXingScannerModule_1;
}());



/***/ }),

/***/ "./src/app/_services/airline.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/airline.service.ts ***!
  \**********************************************/
/*! exports provided: AirlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineService", function() { return AirlineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AirlineService = /** @class */ (function () {
    function AirlineService(http) {
        this.http = http;
        this.rootUrl = 'https://smartinstech-server-api.herokuapp.com';
    }
    AirlineService.prototype.registerAirline = function (airline) {
        return this.http.post(this.rootUrl + '/api/airlines', airline);
    };
    AirlineService.prototype.getAll = function () {
        return this.http.get(this.rootUrl + '/api/airlines');
    };
    AirlineService.prototype.getById = function (id) {
        return this.http.get(this.rootUrl + '/api/airlines/' + id);
    };
    AirlineService.prototype.update = function (id, airline) {
        localStorage.setItem('currentAirline', JSON.stringify(airline));
        return this.http.put(this.rootUrl + '/api/airlines/' + id, airline);
    };
    AirlineService.prototype.delete = function (id) {
        return this.http.delete(this.rootUrl + '/api/airlines/' + id);
    };
    AirlineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AirlineService);
    return AirlineService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.rootUrl = 'https://smartinstech-server-api.herokuapp.com';
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.rootUrl + '/api/airlines/login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (airline) {
            if (airline) {
                // store airline details in local storage to keep airline logged in between page refreshes
                localStorage.setItem('currentAirline', JSON.stringify(airline));
            }
            return airline;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove airline from local storage
        localStorage.removeItem('currentAirline');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_boardPassData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/boardPassData */ "./src/app/_models/boardPassData.ts");
/* harmony import */ var _models_baggageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/baggageData */ "./src/app/_models/baggageData.ts");
/* harmony import */ var _models_airline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/airline */ "./src/app/_models/airline.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService() {
        this.defaultBoardPass = new _models_boardPassData__WEBPACK_IMPORTED_MODULE_2__["BoardPassData"];
        this.defaultBaggage = new _models_baggageData__WEBPACK_IMPORTED_MODULE_3__["BaggageData"];
        this.defaultAirline = new _models_airline__WEBPACK_IMPORTED_MODULE_4__["Airline"];
        this.boardPassSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultBoardPass);
        this.currentBoardPass = this.boardPassSource.asObservable();
        this.baggageSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultBaggage);
        this.currentBaggage = this.baggageSource.asObservable();
        this.airlineSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultAirline);
        this.currentAirline = this.airlineSource.asObservable();
    }
    DataService.prototype.sendBoardPass = function (boardPass) {
        this.boardPassSource.next(boardPass);
    };
    DataService.prototype.sendBaggage = function (baggage) {
        this.baggageSource.next(baggage);
    };
    DataService.prototype.sendAirline = function (airline) {
        this.airlineSource.next(airline);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_services/insurance.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/insurance.service.ts ***!
  \************************************************/
/*! exports provided: InsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceService", function() { return InsuranceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var abi = __webpack_require__(/*! ./smartinstech-abi.json */ "./src/app/_services/smartinstech-abi.json");
var InsuranceService = /** @class */ (function () {
    function InsuranceService(alertService) {
        this.alertService = alertService;
        this._account = null;
        this._insuranceContractAddress = '0x51bd98a68e6cd2cc8b5779c65ce00fbae7a88204';
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.warn('Please use a dapp browser like mist or install MetaMask plugin for chrome');
        }
        this._insuranceContract = this._web3.eth.contract(abi).at(this._insuranceContractAddress);
    }
    InsuranceService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                                        return;
                                    }
                                    resolve(accs[0]);
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    InsuranceService.prototype.createInsurance = function (_baggageId, _dateTimeOfFirstPayout, _pricePerBaggage, _maxPayoutPerBaggage, _apiUrl, _pathToData, _selfPayout) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        console.log("Account: " + account);
                        if (_selfPayout == true) {
                            return [2 /*return*/, this._insuranceContract.createInsurance.sendTransaction(_baggageId, _dateTimeOfFirstPayout, _pricePerBaggage, _maxPayoutPerBaggage, _apiUrl, _pathToData, _selfPayout, { from: account, value: this._web3.toWei((_baggageId.length * _pricePerBaggage), "ether") }, function (err, transactionHash) {
                                    if (!err) {
                                        //this.alertService.success('Transaction ' + transactionHash + " submitted!", false);
                                        console.log('Transaction ' + transactionHash + " successful!");
                                        //this.alertService.success('Transaction ' + transactionHash + " submitted!", false);
                                    }
                                    else {
                                        console.log(err.value);
                                        //this.alertService.error(err, false);
                                    }
                                })];
                        }
                        else {
                            return [2 /*return*/, this._insuranceContract.createInsurance.sendTransaction(_baggageId, _dateTimeOfFirstPayout, _pricePerBaggage, _maxPayoutPerBaggage, _apiUrl, _pathToData, _selfPayout, { from: account, value: this._web3.toWei(((_pricePerBaggage * 0.1 + _pricePerBaggage) * _baggageId.length), "ether") }, function (err, transactionHash) {
                                    if (!err) {
                                        console.log('Transaction ' + transactionHash + " submitted!");
                                        //this.alertService.success('Transaction ' + transactionHash + " submitted!", false);
                                    }
                                    else {
                                        console.log(err.value);
                                        //this.alertService.error(err, false);
                                    }
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceService.prototype.InsuranceConcluded = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("Listening on contract...");
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._insuranceContract.InsuranceConcluded(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    InsuranceService.prototype.checkBaggage = function (_baggageId) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        console.log("Account: " + account);
                        this._insuranceContract.checkBaggage.sendTransaction(_baggageId, { from: account }, function (err, transactionHash) {
                            if (!err) {
                                console.log('Transaction ' + transactionHash + " submitted!");
                                //this.alertService.success('Transaction ' + transactionHash + " submitted!", false);
                            }
                            else {
                                console.log(err);
                                //this.alertService.error(err, false);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceService.prototype.getInsurance = function (_baggageId) {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        console.log("Account: " + account);
                        this._insuranceContract.getInsurance.sendTransaction(_baggageId, { from: account }, function (err, transactionHash) {
                            if (!err) {
                                console.log('Transaction ' + transactionHash + "submitted!");
                                //this.alertService.success('Transaction ' + transactionHash + " submitted!", false);
                            }
                            else {
                                console.log(err);
                                //this.alertService.error(err, false);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InsuranceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], InsuranceService);
    return InsuranceService;
}());



/***/ }),

/***/ "./src/app/_services/smartinstech-abi.json":
/*!*************************************************!*\
  !*** ./src/app/_services/smartinstech-abi.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = [{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_data","type":"string"},{"name":"_baggageId","type":"uint256"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_baggageId","type":"uint256"}],"name":"checkBaggage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_baggageId","type":"uint256[]"},{"name":"_dateTimeOfFirstPayout","type":"uint256"},{"name":"_pricePerBaggage","type":"uint256"},{"name":"_maxPayoutPerBaggage","type":"uint256"},{"name":"_apiUrl","type":"string"},{"name":"_pathToData","type":"string"},{"name":"_selfPayout","type":"bool"}],"name":"createInsurance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"takeMoneyFromContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"baggageId","type":"uint256"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"maxPayout","type":"uint256"},{"indexed":false,"name":"dateTimeOfFirstPayout","type":"uint256"}],"name":"InsuranceConcluded","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"baggageId","type":"uint256"},{"indexed":false,"name":"payout","type":"uint256"},{"indexed":false,"name":"tier","type":"string"},{"indexed":false,"name":"to","type":"address"}],"name":"InsurancePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"baggageId","type":"uint256"},{"indexed":false,"name":"reason","type":"string"}],"name":"PayoutNotPossible","type":"event"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"baggageData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balancePayin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balancePayout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get_os_address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_baggageId","type":"uint256"}],"name":"getInsurance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Insurances","outputs":[{"name":"baggageId","type":"uint256"},{"name":"user","type":"address"},{"name":"dateTimeOfFirstPayout","type":"uint256"},{"name":"price","type":"uint256"},{"name":"maxPayout","type":"uint256"},{"name":"paid1stTier","type":"bool"},{"name":"paid2ndTier","type":"bool"},{"name":"paid3rdTier","type":"bool"},{"name":"totalPaid","type":"uint256"},{"name":"apiUrl","type":"string"},{"name":"pathToData","type":"string"},{"name":"closed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isEligible","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/_shared/alert/alert.component.html":
/*!****************************************************!*\
  !*** ./src/app/_shared/alert/alert.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_shared/alert/alert.component.ts":
/*!**************************************************!*\
  !*** ./src/app/_shared/alert/alert.component.ts ***!
  \**************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_shared/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_shared/navigation/navigation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_shared/navigation/navigation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_shared/navigation/navigation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_shared/navigation/navigation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation bar (Need help?Logo//Menu) -->\r\n<header class=\"navbar\">\r\n  <div class=\"help\"> <!-- Help link -->\r\n      <!--<a href=\"help.html\">Need help?</a>-->\r\n  </div>\r\n\r\n  <!-- Plane logo -->\r\n  <div class=\"logo\">\r\n      <img class=\"plane\" src=\"../assets/plane.png\" >  <!-- Logo picture -->\r\n  </div>\r\n  <!-- Plane logo END -->\r\n\r\n  <!-- Menu -->\r\n  <div class=\"menu\">\r\n      <!-- Menu taken from w3schools (link: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp) -->\r\n      <div id=\"myNav\" class=\"overlay\">\r\n          <!-- Button to close the overlay navigation -->\r\n          <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\r\n          <!-- Overlay content -->\r\n          <div class=\"overlay-content\">\r\n            <a routerLink=\"/boardPass\" onclick=\"closeNav()\">INSURE</a>\r\n            <a routerLink=\"/status\" onclick=\"closeNav()\">STATUS</a>\r\n            <a routerLink=\"/claim\" onclick=\"closeNav()\">CLAIM</a>\r\n          </div>\r\n      </div>\r\n      <!-- Use any element to open/show the overlay navigation menu -->\r\n      <span onclick=\"openNav()\"><img class=\"menulogo\" src=\"../assets/menu.png\"></span>\r\n  </div>\r\n  <!-- Menu END -->\r\n\r\n</header>\r\n<!-- Navigation bar (Need help?/Logo/Menu) END -->"

/***/ }),

/***/ "./src/app/_shared/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_shared/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/_shared/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/_shared/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/airline-home/airline-home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/airline-home/airline-home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/airline-home/airline-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/airline-home/airline-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main working environment -->\r\n<div class=\"main\">\r\n    <div class=\"flight-information\">\r\n\r\n        <button [routerLink]=\"['/airline/login']\"  class=\"btn btn-link\">Logout</button>\r\n        <button (click)=\"delete()\" class=\"btn btn-link\">Delete</button>\r\n\r\n\r\n        <form class=\"registration\" [formGroup]=\"updateForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p class=\"instructions\">Update informations</p>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"text\" formControlName=\"name\" class=\"effect-1\" placeholder=\"Name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"email\" formControlName=\"email\" class=\"effect-1\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                    <div *ngIf=\"f.email.errors.email\">Input is not email</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"text\" formControlName=\"username\" class=\"effect-1\" placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"password\" formControlName=\"password\" class=\"effect-1\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"url\" formControlName=\"linkToWS\" class=\"effect-1\" placeholder=\"LinkToWS\" [ngClass]=\"{ 'is-invalid': submitted && f.linkToWS.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.linkToWS.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.linkToWS.errors.required\">LinkToWS is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"url\" formControlName=\"pathToData\" class=\"effect-1\" placeholder=\"PathToData\" [ngClass]=\"{ 'is-invalid': submitted && f.pathToData.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.pathToData.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.pathToData.errors.required\">pathToData is required</div>\r\n                </div>\r\n            </div>\r\n<!--\r\n            <div class=\"form-group\">\r\n                <label>TRR</label>\r\n                <input type=\"text\" formControlName=\"TRR\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.TRR.errors }\"/>\r\n                <div *ngIf=\"submitted && f.TRR.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.TRR.errors.required\">TRR is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"text\" formControlName=\"ethAddress\" class=\"effect-1\" placeholder=\"ethAddress\" [ngClass]=\"{ 'is-invalid': submitted && f.ethAddress.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.ethAddress.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.ethAddress.errors.required\">TRR is required</div>\r\n                </div>\r\n            </div>\r\n-->\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"number\" formControlName=\"insurancePrice\" class=\"effect-1\" placeholder=\"Insurance Price\" [ngClass]=\"{ 'is-invalid': submitted && f.insurancePrice.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.insurancePrice.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.insurancePrice.errors.required\">insurancePrice is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n\r\n                <input type=\"number\" formControlName=\"maxPayout\" class=\"effect-1\" placeholder=\"Max Payout\" [ngClass]=\"{ 'is-invalid': submitted && f.maxPayout.errors }\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.maxPayout.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.maxPayout.errors.required\">maxPayout is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Footer -->\r\n            <footer class=\"footer\">\r\n                <button class=\"next-page\">Update</button>\r\n            </footer>\r\n            <!-- Footer END -->\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- Main working environment END -->\r\n"

/***/ }),

/***/ "./src/app/airline-home/airline-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/airline-home/airline-home.component.ts ***!
  \********************************************************/
/*! exports provided: AirlineHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineHomeComponent", function() { return AirlineHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_airline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/airline.service */ "./src/app/_services/airline.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AirlineHomeComponent = /** @class */ (function () {
    function AirlineHomeComponent(formBuilder, airlineService, alertService, router) {
        this.formBuilder = formBuilder;
        this.airlineService = airlineService;
        this.alertService = alertService;
        this.router = router;
        this.submitted = false;
        this.currentAirline = JSON.parse(localStorage.getItem('currentAirline'));
    }
    AirlineHomeComponent.prototype.ngOnInit = function () {
        this.updateForm = this.formBuilder.group({
            name: [this.currentAirline.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.currentAirline.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            username: [this.currentAirline.username, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [this.currentAirline.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            linkToWS: [this.currentAirline.linkToWS, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pathToData: [this.currentAirline.pathToData, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //TRR: [this.currentAirline.TRR, Validators.required],
            //ethAddress: [this.currentAirline.ethAddress, Validators.required],
            insurancePrice: [this.currentAirline.insurancePrice, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            maxPayout: [this.currentAirline.maxPayout, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(AirlineHomeComponent.prototype, "f", {
        // getter for easy access to form fields
        get: function () { return this.updateForm.controls; },
        enumerable: true,
        configurable: true
    });
    AirlineHomeComponent.prototype.delete = function () {
        var _this = this;
        this.airlineService.delete(this.currentAirline._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Deleted successfuly', true);
            _this.router.navigate(['/airline/login']);
        }, function (error) {
            if (error.status === 200) {
                _this.alertService.success('Deleted successfuly', true);
                _this.router.navigate(['/airline/login']);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AirlineHomeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateForm.invalid) {
            return;
        }
        this.airlineService.update(this.currentAirline._id, this.updateForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Update successful');
        }, function (error) {
            if (error.status === 200) {
                _this.alertService.success('Update successful');
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AirlineHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airline-home',
            template: __webpack_require__(/*! ./airline-home.component.html */ "./src/app/airline-home/airline-home.component.html"),
            styles: [__webpack_require__(/*! ./airline-home.component.css */ "./src/app/airline-home/airline-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_airline_service__WEBPACK_IMPORTED_MODULE_2__["AirlineService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AirlineHomeComponent);
    return AirlineHomeComponent;
}());



/***/ }),

/***/ "./src/app/airline-login/airline-login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/airline-login/airline-login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/airline-login/airline-login.component.html":
/*!************************************************************!*\
  !*** ./src/app/airline-login/airline-login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main working environment -->\r\n<div class=\"main\">\r\n    <div class=\"registration\">\r\n        <form class=\"airlinesregistration1\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p class=\"instructions\">Please enter your user information to continue</p>\r\n              <div class=\"col-3\">\r\n\r\n                  <input class=\"effect-1\"  type=\"text\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Username\"/>\r\n                  <span class=\"focus-border\"></span>\r\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.username.errors.required\" class=\"textAlert\">Username is required</div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"col-3\">\r\n                  <input class=\"effect-1\" type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\"/>\r\n                  <span class=\"focus-border\"></span>\r\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.password.errors.required\" class=\"textAlert\">Password is required</div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                   <a [routerLink]=\"['/airline/registration']\" class=\"text\">Register here</a>\r\n              </div>\r\n\r\n               <!-- Footer -->\r\n            <footer class=\"footer\">\r\n                <button class=\"next-page\" [disabled]=\"loading\" >LOGIN</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            </footer>\r\n            <!-- Footer END -->\r\n\r\n          </form>\r\n    </div>\r\n  </div>\r\n  <!-- Main working environment END -->\r\n"

/***/ }),

/***/ "./src/app/airline-login/airline-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/airline-login/airline-login.component.ts ***!
  \**********************************************************/
/*! exports provided: AirlineLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineLoginComponent", function() { return AirlineLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AirlineLoginComponent = /** @class */ (function () {
    function AirlineLoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    AirlineLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/airline'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/airline';
    };
    Object.defineProperty(AirlineLoginComponent.prototype, "f", {
        // getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    AirlineLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            if (error.status === 401 || error.status === 404) {
                _this.alertService.error('Username or password is incorrect');
                _this.loading = false;
            }
            else {
                _this.alertService.error(error.statusText);
                _this.loading = false;
            }
        });
    };
    AirlineLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airline-login',
            template: __webpack_require__(/*! ./airline-login.component.html */ "./src/app/airline-login/airline-login.component.html"),
            styles: [__webpack_require__(/*! ./airline-login.component.css */ "./src/app/airline-login/airline-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], AirlineLoginComponent);
    return AirlineLoginComponent;
}());



/***/ }),

/***/ "./src/app/airline-registration/airline-registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/airline-registration/airline-registration.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/airline-registration/airline-registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/airline-registration/airline-registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main working environment -->\r\n<div class=\"main\">\r\n    <div class=\"flight-information\">\r\n        <form class=\"registration\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p class=\"instructions\">Registration of the Airline</p>\r\n<!--\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"name\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Name\"/>\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"email\" formControlName=\"email\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\"/>\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                </div>\r\n            </div>\r\n-->\r\n            <div class=\"col-3\">\r\n                <input type=\"text\" formControlName=\"username\" class=\"effect-1\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Username\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-3\">\r\n                <input type=\"password\" formControlName=\"password\" class=\"effect-1\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\"/><span class=\"focus-border\"></span>\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n            </div>\r\n<!--\r\n            <div class=\"form-group\">\r\n                <input type=\"url\" formControlName=\"linkToWS\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.linkToWS.errors }\" placeholder=\"Link to WebService\"/>\r\n                <div *ngIf=\"submitted && f.linkToWS.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.linkToWS.errors.required\">LinkToWS is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"pathToData\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pathToData.errors }\" placeholder=\"PathToData\"/>\r\n                <div *ngIf=\"submitted && f.pathToData.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.pathToData.errors.required\">pathToData is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"TRR\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.TRR.errors }\" placeholder=\"TRR\"/>\r\n                <div *ngIf=\"submitted && f.TRR.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.TRR.errors.required\">TRR is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"ethAddress\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ethAddress.errors }\" placeholder=\"ethAddress\"/>\r\n                <div *ngIf=\"submitted && f.ethAddress.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.ethAddress.errors.required\">TRR is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"number\" formControlName=\"insurancePrice\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.insurancePrice.errors }\" placeholder=\"insurancePrice\"/>\r\n                <div *ngIf=\"submitted && f.insurancePrice.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.insurancePrice.errors.required\">insurancePrice is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"number\" formControlName=\"maxPayout\" class=\"info form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.maxPayout.errors }\" placeholder=\"maxPayout\"/>\r\n                <div *ngIf=\"submitted && f.maxPayout.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.maxPayout.errors.required\">maxPayout is required</div>\r\n                </div>\r\n            </div>\r\n-->\r\n            <!-- Footer -->\r\n            <footer class=\"footer\">\r\n                <button class=\"next-page\">REGISTER</button>\r\n            </footer>\r\n            <!-- Footer END -->\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- Main working environment END -->\r\n"

/***/ }),

/***/ "./src/app/airline-registration/airline-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/airline-registration/airline-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: AirlineRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineRegistrationComponent", function() { return AirlineRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_airline_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/airline.service */ "./src/app/_services/airline.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AirlineRegistrationComponent = /** @class */ (function () {
    function AirlineRegistrationComponent(formBuilder, router, airlineService, alertService, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.airlineService = airlineService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.submitted = false;
    }
    AirlineRegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            //name: ['', Validators.required],
            //email: ['', Validators.required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
        });
        // reset login status
        this.authenticationService.logout();
    };
    Object.defineProperty(AirlineRegistrationComponent.prototype, "f", {
        // getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AirlineRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.airlineService.registerAirline(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/airline/login']);
        }, function (error) {
            if (error.status === 200) {
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/airline/login']);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AirlineRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-airline-registration',
            template: __webpack_require__(/*! ./airline-registration.component.html */ "./src/app/airline-registration/airline-registration.component.html"),
            styles: [__webpack_require__(/*! ./airline-registration.component.css */ "./src/app/airline-registration/airline-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_airline_service__WEBPACK_IMPORTED_MODULE_1__["AirlineService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AirlineRegistrationComponent);
    return AirlineRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _baggageScann_baggageScann_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baggageScann/baggageScann.component */ "./src/app/baggageScann/baggageScann.component.ts");
/* harmony import */ var _boardPassScann_boardPassScann_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardPassScann/boardPassScann.component */ "./src/app/boardPassScann/boardPassScann.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _airline_registration_airline_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airline-registration/airline-registration.component */ "./src/app/airline-registration/airline-registration.component.ts");
/* harmony import */ var _airline_login_airline_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airline-login/airline-login.component */ "./src/app/airline-login/airline-login.component.ts");
/* harmony import */ var _insurance_conclusion_insurance_conclusion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./insurance-conclusion/insurance-conclusion.component */ "./src/app/insurance-conclusion/insurance-conclusion.component.ts");
/* harmony import */ var _airline_home_airline_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./airline-home/airline-home.component */ "./src/app/airline-home/airline-home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _insurance_status_insurance_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./insurance-status/insurance-status.component */ "./src/app/insurance-status/insurance-status.component.ts");
/* harmony import */ var _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./insurance-claim/insurance-claim.component */ "./src/app/insurance-claim/insurance-claim.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
// import { InsuranceStatusComponent } from './insurance-status/insurance-status.component';












var routes = [
    { path: 'airline', component: _airline_home_airline_home_component__WEBPACK_IMPORTED_MODULE_8__["AirlineHomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'airline/registration', component: _airline_registration_airline_registration_component__WEBPACK_IMPORTED_MODULE_5__["AirlineRegistrationComponent"] },
    { path: 'airline/login', component: _airline_login_airline_login_component__WEBPACK_IMPORTED_MODULE_6__["AirlineLoginComponent"] },
    { path: 'insurance', component: _insurance_conclusion_insurance_conclusion_component__WEBPACK_IMPORTED_MODULE_7__["InsuranceConclusionComponent"] },
    // { path: 'status', component: InsuranceStatusComponent },
    { path: 'claim', component: _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_11__["InsuranceClaimComponent"] },
    { path: 'boardPass', component: _boardPassScann_boardPassScann_component__WEBPACK_IMPORTED_MODULE_1__["BoardPassScannComponent"] },
    {
        path: 'baggage/:cameraId',
        component: _baggageScann_baggageScann_component__WEBPACK_IMPORTED_MODULE_0__["BaggageScannComponent"],
    },
    {
        path: 'status',
        component: _insurance_status_insurance_status_component__WEBPACK_IMPORTED_MODULE_10__["InsuranceStatusComponent"]
    },
    // {
    //   path: 'claim',
    //   component: InsuranceClaimComponent
    // },
    // otherwise redirect to home
    { path: '**', redirectTo: 'boardPass' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \"Second\" body -->\r\n<div class=\"wrapper\">\r\n\r\n    <navigation></navigation>\r\n\r\n    <alert></alert>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n<!-- \"Second\" body END -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _QRScanner_QRScanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QRScanner/QRScanner.component */ "./src/app/QRScanner/QRScanner.component.ts");
/* harmony import */ var _boardPassScann_boardPassScann_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardPassScann/boardPassScann.component */ "./src/app/boardPassScann/boardPassScann.component.ts");
/* harmony import */ var _BarCodeScanner_barCodeScanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarCodeScanner/barCodeScanner.component */ "./src/app/BarCodeScanner/barCodeScanner.component.ts");
/* harmony import */ var _baggageScann_baggageScann_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baggageScann/baggageScann.component */ "./src/app/baggageScann/baggageScann.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _airline_registration_airline_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./airline-registration/airline-registration.component */ "./src/app/airline-registration/airline-registration.component.ts");
/* harmony import */ var _airline_login_airline_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./airline-login/airline-login.component */ "./src/app/airline-login/airline-login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _airline_home_airline_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./airline-home/airline-home.component */ "./src/app/airline-home/airline-home.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_airline_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/airline.service */ "./src/app/_services/airline.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_shared/alert/alert.component */ "./src/app/_shared/alert/alert.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_shared/navigation/navigation.component */ "./src/app/_shared/navigation/navigation.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _modules_zxing_scanner_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_modules/zxing-scanner/zxing-scanner.module */ "./src/app/_modules/zxing-scanner/zxing-scanner.module.ts");
/* harmony import */ var _insurance_status_insurance_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./insurance-status/insurance-status.component */ "./src/app/insurance-status/insurance-status.component.ts");
/* harmony import */ var _insurance_conclusion_insurance_conclusion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./insurance-conclusion/insurance-conclusion.component */ "./src/app/insurance-conclusion/insurance-conclusion.component.ts");
/* harmony import */ var _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./insurance-claim/insurance-claim.component */ "./src/app/insurance-claim/insurance-claim.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _airline_registration_airline_registration_component__WEBPACK_IMPORTED_MODULE_8__["AirlineRegistrationComponent"],
                _airline_login_airline_login_component__WEBPACK_IMPORTED_MODULE_9__["AirlineLoginComponent"],
                _airline_home_airline_home_component__WEBPACK_IMPORTED_MODULE_12__["AirlineHomeComponent"],
                _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
                _baggageScann_baggageScann_component__WEBPACK_IMPORTED_MODULE_3__["BaggageScannComponent"],
                _BarCodeScanner_barCodeScanner_component__WEBPACK_IMPORTED_MODULE_2__["BarcodeScannerComponent"],
                _boardPassScann_boardPassScann_component__WEBPACK_IMPORTED_MODULE_1__["BoardPassScannComponent"],
                _QRScanner_QRScanner_component__WEBPACK_IMPORTED_MODULE_0__["QRScannerComponent"],
                _insurance_status_insurance_status_component__WEBPACK_IMPORTED_MODULE_20__["InsuranceStatusComponent"],
                _insurance_conclusion_insurance_conclusion_component__WEBPACK_IMPORTED_MODULE_21__["InsuranceConclusionComponent"],
                _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_22__["InsuranceClaimComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _modules_zxing_scanner_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_19__["ZXingScannerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
                _services_airline_service__WEBPACK_IMPORTED_MODULE_14__["AirlineService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baggageScann/baggageScann.component.html":
/*!**********************************************************!*\
  !*** ./src/app/baggageScann/baggageScann.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barcode-scanner *ngIf='!show' [deviceId]='currentDevice' (result)=\"handleResult($event)\"></app-barcode-scanner>\r\n<div class=\"container\" *ngIf='show'>\r\n    <form>\r\n      <div><h3>{{text}}</h3></div>\r\n      <div *ngIf=\"errorText\" style=\"color:red;\"><h4>{{errorText}}</h4></div>\r\n      <div class=\"form-group\">\r\n        <label for=\"baggageNumber\">Baggage Number </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.baggageNumber\" id=\"baggageNumber\" name='baggageNumber'>\r\n      </div>\r\n\r\n      <footer class=\"footer\">\r\n          <button (click)='onSubmit()' class=\"next-page\">Next</button>\r\n      </footer>\r\n\r\n    </form>\r\n</div>\r\n\r\n<!-- <button (click)=\"clicked()\"> Click</button> -->\r\n"

/***/ }),

/***/ "./src/app/baggageScann/baggageScann.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/baggageScann/baggageScann.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/baggageScann/baggageScann.component.ts":
/*!********************************************************!*\
  !*** ./src/app/baggageScann/baggageScann.component.ts ***!
  \********************************************************/
/*! exports provided: BaggageScannComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaggageScannComponent", function() { return BaggageScannComponent; });
/* harmony import */ var _models_baggageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/baggageData */ "./src/app/_models/baggageData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaggageScannComponent = /** @class */ (function () {
    function BaggageScannComponent(router, route, data) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.formData = new _models_baggageData__WEBPACK_IMPORTED_MODULE_0__["BaggageData"]();
        this.show = false;
    }
    BaggageScannComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.paramMap.get('cameraId'));
        this.currentDevice = this.route.snapshot.paramMap.get('cameraId');
    };
    BaggageScannComponent.prototype.onSubmit = function () {
        if (this.formData.baggageNumber === undefined) {
            this.errorText = '*Pease write your baggage number';
        }
        else if (this.formData.baggageNumber.length < 10) {
            this.errorText = '*Baggage number has to be 10 digits';
        }
        else {
            this.errorText = undefined;
            console.log('Baggage Number: ' + this.formData.baggageNumber);
            this.data.sendBaggage(this.formData);
            this.router.navigate(['/insurance']);
        }
    };
    BaggageScannComponent.prototype.clicked = function () {
        this.show = !this.show;
    };
    BaggageScannComponent.prototype.handleResult = function (result) {
        console.log(result);
        if (result) {
            this.formData = result;
        }
        else {
            this.text = 'Unable to scan, please enter your Baggage number';
        }
        this.clicked();
    };
    BaggageScannComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-baggage-component',
            template: __webpack_require__(/*! ./baggageScann.component.html */ "./src/app/baggageScann/baggageScann.component.html"),
            styles: [__webpack_require__(/*! ./baggageScann.component.scss */ "./src/app/baggageScann/baggageScann.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BaggageScannComponent);
    return BaggageScannComponent;
}());



/***/ }),

/***/ "./src/app/boardPassScann/boardPassScann.component.html":
/*!**************************************************************!*\
  !*** ./src/app/boardPassScann/boardPassScann.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-qr-scanner *ngIf='showScanner && show' (boardPassData)=\"handleDataFormResult($event)\" (currentDeviceId)=\"handleCurrentDeviceId($event)\">\r\n</app-qr-scanner>\r\n\r\n<div *ngIf=\"!showScanner\">\r\n  <h1>Begin Scan</h1>\r\n  <i (click)=\"activateScanner()\" class=\"fas fa-camera big-icon fa-5x circle-icon\"></i>\r\n</div>\r\n\r\n<div *ngIf='!show'>\r\n  <div class=\"container forma\">\r\n    <div>\r\n      <h3>{{formText}}</h3>\r\n    </div>\r\n    <div *ngIf=\"errorText\" style=\"color:red;\">\r\n      <h4>{{errorText}}</h4>\r\n    </div>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label>First Name </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.name\" id=\"name\" name='name'>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Last Name </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.surname\" name='surname' id=\"surname\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>From</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.fromAirport\" name='fromAirport' id=\"fromAirport\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>To</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.toAirport\" name='toAirport' id=\"toAirport\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Flight Number</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.flightNumber\" name='flightNumber' id=\"flightNumber\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Date and time of Flight</label>\r\n        <input type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"formData.dateOfFlight\" name='dateOfFlight' id=\"dateOfFlight\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Airlines</label>\r\n        <select [(ngModel)]=\"id\" class=\"form-control\" id=\"airline\" name=\"airline\">\r\n          <option *ngFor=\"let airline of fullInfoAirlines\"  [value]=\"airline._id\">{{airline.name}}</option>\r\n        </select>\r\n       </div>\r\n\r\n    </form>\r\n    <footer class=\"footer\">\r\n        <button (click)='onSubmit()' class=\"next-page\">Scan Baggage</button>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/boardPassScann/boardPassScann.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/boardPassScann/boardPassScann.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/boardPassScann/boardPassScann.component.ts":
/*!************************************************************!*\
  !*** ./src/app/boardPassScann/boardPassScann.component.ts ***!
  \************************************************************/
/*! exports provided: BoardPassScannComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPassScannComponent", function() { return BoardPassScannComponent; });
/* harmony import */ var _services_airline_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/airline.service */ "./src/app/_services/airline.service.ts");
/* harmony import */ var _models_boardPassData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/boardPassData */ "./src/app/_models/boardPassData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardPassScannComponent = /** @class */ (function () {
    function BoardPassScannComponent(router, airlineService, data) {
        this.router = router;
        this.airlineService = airlineService;
        this.data = data;
        this.show = true;
        this.formData = new _models_boardPassData__WEBPACK_IMPORTED_MODULE_1__["BoardPassData"]();
        this.showScanner = false;
        this.formText = 'Please check, (if needed) edit your information and add Date of flight';
        this.fullInfoAirlines = [];
    }
    BoardPassScannComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.airlineService.getAll().subscribe(function (air) {
            _this.airlines = air;
            for (var _i = 0, _a = _this.airlines; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.name !== undefined) {
                    _this.fullInfoAirlines.push(entry);
                }
            }
        });
    };
    BoardPassScannComponent.prototype.changeView = function () {
        this.show = !this.show;
    };
    BoardPassScannComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formData.name === undefined) {
            this.errorText = '*Please enter first name';
        }
        else if (this.formData.surname === undefined) {
            this.errorText = '*Please enter last name';
        }
        else if (this.formData.fromAirport === undefined) {
            this.errorText = '*Please enter the airport from which you are flying';
        }
        else if (this.formData.toAirport === undefined) {
            this.errorText = '*Please enter at which airport are you arriving';
        }
        else if (this.formData.flightNumber === undefined) {
            this.errorText = '*Please enter your flight number';
        }
        else if (this.formData.dateOfFlight === undefined) {
            this.errorText = '*Please enter the date of your flight';
        }
        else if (this.formData.airline === null) {
            this.errorText = '*Please enter your airline';
        }
        else {
            this.data.sendBoardPass(this.formData);
            this.router.navigate(['/baggage', this.deviceId]);
        }
        this.router.navigate(['/baggage', this.deviceId]);
        this.airlineService.getById(this.id).subscribe(function (air) {
            _this.formData.airline = air;
            console.log('First Name: ' +
                _this.formData.name +
                '\nLastName: ' +
                _this.formData.surname +
                '\nFrom:: ' +
                _this.formData.fromAirport +
                '\nTo: ' +
                _this.formData.toAirport +
                '\nFlight Number: ' +
                _this.formData.flightNumber +
                '\nDate: ' +
                _this.formData.dateOfFlight +
                '\nAirline: ' +
                _this.formData.airline);
        });
        // if ( this.formData.)
        // proveri gi site dali se vneseni
        // send dataForm to other components
    };
    BoardPassScannComponent.prototype.handleDataFormResult = function (formData) {
        if (!formData) {
            this.formText = 'Unable to scan your data please fill this form';
        }
        else {
            this.formData = formData;
        }
        this.changeView();
    };
    BoardPassScannComponent.prototype.handleCurrentDeviceId = function (deviceId) {
        console.log(deviceId);
        this.deviceId = deviceId;
    };
    BoardPassScannComponent.prototype.activateScanner = function () {
        this.showScanner = !this.showScanner;
    };
    BoardPassScannComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-board-pass-component',
            template: __webpack_require__(/*! ./boardPassScann.component.html */ "./src/app/boardPassScann/boardPassScann.component.html"),
            styles: [__webpack_require__(/*! ./boardPassScann.component.scss */ "./src/app/boardPassScann/boardPassScann.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_airline_service__WEBPACK_IMPORTED_MODULE_0__["AirlineService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], BoardPassScannComponent);
    return BoardPassScannComponent;
}());



/***/ }),

/***/ "./src/app/insurance-claim/insurance-claim.component.css":
/*!***************************************************************!*\
  !*** ./src/app/insurance-claim/insurance-claim.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/insurance-claim/insurance-claim.component.html":
/*!****************************************************************!*\
  !*** ./src/app/insurance-claim/insurance-claim.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barcode-scanner *ngIf='showScanner && !show' (result)=\"handleResult($event)\">\r\n</app-barcode-scanner>\r\n\r\n<div *ngIf=\"!showScanner\">\r\n    <h1>Claim</h1>\r\n    <i (click)=\"activateScanner()\" class=\"fas fa-camera big-icon fa-5x circle-icon\"></i>\r\n    <p>Scan baggage...</p>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf='show && !showClaim'>\r\n    <form>\r\n        <div>\r\n            <h3>{{text}}</h3>\r\n        </div>\r\n        <div *ngIf=\"errorText\" style=\"color:red;\">\r\n            <h4>{{errorText}}</h4>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"baggageNumber\">Baggage Number </label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.baggageNumber\" id=\"baggageNumber\" name='baggageNumber'>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n            <button (click)='onSubmit()' class=\"next-page\">Next</button>\r\n        </footer>\r\n\r\n    </form>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf='showClaim'>\r\n    \r\n    <div class=\"container\" style='margin-top: auto;' *ngIf='!selfPayout'>\r\n        <h3>Paid sum: [paidSum] </h3>\r\n        <h3>Time to full payout: [time]</h3>\r\n    </div>\r\n    \r\n    <div class=\"container\"  *ngIf='selfPayout'>\r\n        <h3>Payout sum: [payoutSum] </h3>\r\n        <h3>Time to full payout: [time] </h3>\r\n            <footer class=\"footer\">\r\n                <button (click)='onClaim()' class=\"next-page\">Claim</button>\r\n            </footer>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/insurance-claim/insurance-claim.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/insurance-claim/insurance-claim.component.ts ***!
  \**************************************************************/
/*! exports provided: InsuranceClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceClaimComponent", function() { return InsuranceClaimComponent; });
/* harmony import */ var _models_baggageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_models/baggageData */ "./src/app/_models/baggageData.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceClaimComponent = /** @class */ (function () {
    function InsuranceClaimComponent(formBuilder, data) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.showScanner = false;
        this.formData = new _models_baggageData__WEBPACK_IMPORTED_MODULE_0__["BaggageData"]();
        this.show = false;
    }
    InsuranceClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showClaim = false;
        //data from scanner
        this.data.currentBaggage.subscribe(function (baggage) { return _this.baggage = baggage; });
        console.log('Baggage Number: ' + this.baggage.baggageNumber);
    };
    InsuranceClaimComponent.prototype.activateScanner = function () {
        //  console.log('active');
        this.showScanner = !this.showScanner;
    };
    InsuranceClaimComponent.prototype.onSubmit = function () {
        if (this.formData.baggageNumber === undefined) {
            this.errorText = '*Pease write your baggage number';
        }
        else if (this.formData.baggageNumber.length < 10) {
            this.errorText = '*Baggage number has to be 10 digits';
        }
        else {
            this.errorText = undefined;
            console.log('Baggage Number: ' + this.formData.baggageNumber);
            if (localStorage.getItem('selfPayout') === 'true') {
                this.selfPayout = true;
                this.showClaim = true;
                localStorage.removeItem('selfPayout');
            }
            else {
                this.selfPayout = false;
                this.showClaim = true;
                localStorage.removeItem('selfPayout');
            }
        }
    };
    InsuranceClaimComponent.prototype.onClaim = function () {
        console.log('sine');
    };
    InsuranceClaimComponent.prototype.handleResult = function (result) {
        if (result) {
            this.formData = result;
        }
        else {
            this.text = 'Unable to scan, please enter your Baggage number';
        }
        this.show = !this.show;
    };
    InsuranceClaimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurance-claim',
            template: __webpack_require__(/*! ./insurance-claim.component.html */ "./src/app/insurance-claim/insurance-claim.component.html"),
            styles: [__webpack_require__(/*! ./insurance-claim.component.css */ "./src/app/insurance-claim/insurance-claim.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], InsuranceClaimComponent);
    return InsuranceClaimComponent;
}());



/***/ }),

/***/ "./src/app/insurance-conclusion/insurance-conclusion.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/insurance-conclusion/insurance-conclusion.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/insurance-conclusion/insurance-conclusion.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/insurance-conclusion/insurance-conclusion.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main working environment -->\r\n<div class=\"main\">\r\n  <div class=\"smart-contract-info\">\r\n\r\n    <div class=\"container\" *ngIf='!showEvent && !showEventListened'>\r\n\r\n      <form class=\"smartcontractinfo\" >\r\n        <p class=\"instructions\">Smart Contract Info</p>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Airline</p>\r\n          <p>{{airline.name}}</p>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Flight Number</p>\r\n          <p>{{boardPass.flightNumber}}</p>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Baggage Number</p>\r\n          <p>{{baggage.baggageNumber}}</p>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"selfPayout\" name='selfPayout' id=\"selfPayout\">Selfpayout<br>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- Other informations -->\r\n        <div class=\"progress\">\r\n          <table align=\"center\">\r\n            <tr>\r\n              <th>INSURANCE<br>COST</th>\r\n              <th>MAX<br>PAYOUT</th>\r\n            </tr>\r\n            <tr>\r\n              <td>{{airline.insurancePrice}}</td>\r\n              <td>{{airline.maxPayout}}</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <!-- Other informations END-->\r\n\r\n        <!-- Footer -->\r\n        <footer class=\"footer\">\r\n          <button (click)='onSubmit()' class=\"next-page\">Insure</button>\r\n        </footer>\r\n        <!-- Footer END -->\r\n\r\n      </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"container\" *ngIf='showEvent'>\r\n\r\n      <div class=\"container\" *ngIf='loading'>\r\n        <p class=\"instructions\">Smart Contract is submitted. Wait for confirmation!</p>\r\n        <img src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      </div>\r\n\r\n      <div class=\"container\" *ngIf='!loading'>\r\n        <p class=\"instructions\">Smart Contract is confirmed</p>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Baggage Id</p>\r\n          <p>{{baggageId}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Uses address</p>\r\n          <p>{{user}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Price</p>\r\n          <p>{{price}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">Max Payout</p>\r\n          <p>{{maxPayout}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <p class=\"instructions2\">dateTimeOfFirstPayout</p>\r\n          <p>{{dateTimeOfFirstPayout}}</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Main working environment END -->"

/***/ }),

/***/ "./src/app/insurance-conclusion/insurance-conclusion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/insurance-conclusion/insurance-conclusion.component.ts ***!
  \************************************************************************/
/*! exports provided: InsuranceConclusionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceConclusionComponent", function() { return InsuranceConclusionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _services_insurance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/insurance.service */ "./src/app/_services/insurance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InsuranceConclusionComponent = /** @class */ (function () {
    function InsuranceConclusionComponent(data, insurance, router, alertService, datePipe) {
        this.data = data;
        this.insurance = insurance;
        this.router = router;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.showEvent = false;
        this.loading = true;
        this.selfPayout = false;
    }
    InsuranceConclusionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentBoardPass.subscribe(function (boardPass) { return _this.boardPass = boardPass; });
        this.data.currentBaggage.subscribe(function (baggage) { return _this.baggage = baggage; });
        this.airline = this.boardPass.airline;
        if (this.airline !== undefined) {
            console.log('First Name: ' + this.boardPass.name
                + '\nLastName: ' + this.boardPass.surname
                + '\nFrom:: ' + this.boardPass.fromAirport
                + '\nTo: ' + this.boardPass.toAirport
                + '\nFlight Number: ' + this.boardPass.flightNumber
                + '\nDate: ' + this.boardPass.dateOfFlight
                + '\nDevice: ' + this.boardPass);
            console.log('Baggage Number: ' + this.baggage.baggageNumber);
            console.log('Unix time: ' + Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000));
            console.log('Normal time: ' + this.datePipe.transform(new Date(Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000) * 1000), "dd.MM.yyyy HH:mm"));
        }
        else {
            this.alertService.error('Incomplete data, try again', true);
            this.router.navigate(['/boardPass']);
        }
    };
    InsuranceConclusionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("selfpayout: " + this.selfPayout);
        this.insurance.createInsurance([Number(this.baggage.baggageNumber)], 
        //converted to unix format
        Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000), this.airline.insurancePrice, this.airline.maxPayout, this.airline.linkToWS, this.airline.pathToData, this.selfPayout);
        this.showEvent = true;
        this.insurance.InsuranceConcluded().then(function (data) {
            if (data == null) {
                console.log('there was an error!');
            }
            else {
                _this.loading = false;
                _this.eventData = data;
                console.log("baggageId: " + _this.eventData.args.baggageId.toNumber());
                _this.baggageId = _this.eventData.args.baggageId.toNumber();
                console.log("user: " + _this.eventData.args.user);
                _this.user = _this.eventData.args.user;
                console.log("price: " + _this.eventData.args.price.toNumber());
                _this.price = _this.eventData.args.price.toNumber();
                _this.price = _this.price * 0.000000000000000001;
                console.log("maxPayout: " + _this.eventData.args.maxPayout.toNumber());
                _this.maxPayout = _this.eventData.args.maxPayout.toNumber();
                console.log("dateTimeOfFirstPayout: " + _this.eventData.args.dateTimeOfFirstPayout.toNumber());
                _this.dateTimeOfFirstPayout = _this.datePipe.transform(new Date((_this.eventData.args.dateTimeOfFirstPayout.toNumber()) * 1000), "dd.MM.yyyy HH:mm");
                ;
            }
        });
    };
    InsuranceConclusionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-conclusion',
            template: __webpack_require__(/*! ./insurance-conclusion.component.html */ "./src/app/insurance-conclusion/insurance-conclusion.component.html"),
            styles: [__webpack_require__(/*! ./insurance-conclusion.component.css */ "./src/app/insurance-conclusion/insurance-conclusion.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _services_insurance_service__WEBPACK_IMPORTED_MODULE_2__["InsuranceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], InsuranceConclusionComponent);
    return InsuranceConclusionComponent;
}());



/***/ }),

/***/ "./src/app/insurance-status/insurance-status.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/insurance-status/insurance-status.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/insurance-status/insurance-status.component.html":
/*!******************************************************************!*\
  !*** ./src/app/insurance-status/insurance-status.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-barcode-scanner *ngIf='showScanner && !show' (result)=\"handleResult($event)\"></app-barcode-scanner>\r\n\r\n<div *ngIf=\"!showScanner\">\r\n    <h1>Check Status</h1>\r\n    <i (click)=\"activateScanner()\" class=\"fas fa-camera big-icon fa-5x circle-icon\"></i>\r\n    <p>Scan baggage...</p>\r\n    \r\n</div>\r\n\r\n<div class=\"container\" *ngIf='show && !showStatus'>\r\n        <form>\r\n          <div><h3>{{text}}</h3></div>\r\n          <div *ngIf=\"errorText\" style=\"color:red;\"><h4>{{errorText}}</h4></div>\r\n          <div class=\"form-group\">\r\n            <label for=\"baggageNumber\">Baggage Number </label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formData.baggageNumber\" id=\"baggageNumber\" name='baggageNumber'>\r\n          </div>\r\n    \r\n          <footer class=\"footer\">\r\n              <button (click)='onSubmit()' class=\"next-page\">Next</button>\r\n          </footer>\r\n    \r\n        </form>\r\n    </div>\r\n\r\n    <div *ngIf='showStatus'>\r\n        <h1>Status: [status]</h1>\r\n        <!-- <footer class=\"footer\">\r\n            <button (click)='onSubmit()' class=\"next-page\">Next</button>\r\n        </footer> -->\r\n    </div>"

/***/ }),

/***/ "./src/app/insurance-status/insurance-status.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/insurance-status/insurance-status.component.ts ***!
  \****************************************************************/
/*! exports provided: InsuranceStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceStatusComponent", function() { return InsuranceStatusComponent; });
/* harmony import */ var _models_baggageData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_models/baggageData */ "./src/app/_models/baggageData.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceStatusComponent = /** @class */ (function () {
    function InsuranceStatusComponent(formBuilder, data) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.showScanner = false;
        this.formData = new _models_baggageData__WEBPACK_IMPORTED_MODULE_0__["BaggageData"]();
        this.show = false;
        this.showStatus = false;
    }
    InsuranceStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        //data from scanner
        this.data.currentBaggage.subscribe(function (baggage) { return _this.baggage = baggage; });
        console.log('Baggage Number: ' + this.baggage.baggageNumber);
    };
    InsuranceStatusComponent.prototype.activateScanner = function () {
        this.showScanner = !this.showScanner;
    };
    InsuranceStatusComponent.prototype.onSubmit = function () {
        if (this.formData.baggageNumber === undefined) {
            this.errorText = '*Pease write your baggage number';
        }
        else if (this.formData.baggageNumber.length < 10) {
            this.errorText = '*Baggage number has to be 10 digits';
        }
        else {
            this.errorText = undefined;
            console.log('Baggage Number: ' + this.formData.baggageNumber);
            // this.router.navigate(['/insure']);
            this.showStatus = true;
        }
    };
    InsuranceStatusComponent.prototype.handleResult = function (result) {
        if (result) {
            this.formData = result;
        }
        else {
            this.text = 'Unable to scan, please enter your Baggage number';
        }
        this.show = !this.show;
    };
    InsuranceStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurance-status',
            template: __webpack_require__(/*! ./insurance-status.component.html */ "./src/app/insurance-status/insurance-status.component.html"),
            styles: [__webpack_require__(/*! ./insurance-status.component.css */ "./src/app/insurance-status/insurance-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], InsuranceStatusComponent);
    return InsuranceStatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MartinChuchurski\smartinstech-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map