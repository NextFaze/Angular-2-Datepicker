"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.date = new Date();
        this.dateControl = new forms_1.FormControl(this.date);
        this.testRangeDate = new Date();
    }
    AppComponent.prototype.formatDate = function (date) {
        return date.toLocaleString();
    };
    AppComponent.prototype.onSelect = function (date) {
        console.log('onSelect: ', date);
    };
    AppComponent.prototype.clearDate = function () {
        this.dateControl.reset();
    };
    AppComponent.prototype.setToday = function () {
        this.dateControl.setValue(new Date());
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Date)
], AppComponent.prototype, "testRangeDate", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n    material-datepicker {\n      width: 100%;\n    }\n    "],
        template: "\n      <material-datepicker\n        (onSelect)=\"onSelect($event)\"\n        [formControl]=\"dateControl\"\n        dateFormat=\"YYYY-MM-DD\"\n        [rangeEnd]=\"testRangeDate\"\n      ><md-hint>Md Hint</md-hint></material-datepicker>\n\n      <button (click)=\"setToday()\">today</button>\n      <button (click)=\"clearDate()\">reset</button>\n      <hr>\n      {{ dateControl.value }}\n      <p>\n      Mirror(disabled, DD-MM-YYYY):\n      <material-datepicker\n      [formControl]=\"dateControl\"\n        placeholder=\"nothing is selected\"\n        disabled=\"true\"\n        [dateFormat]=\"formatDate\"\n      ></material-datepicker>\n\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map