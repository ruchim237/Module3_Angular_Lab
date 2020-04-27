"use strict";
exports.__esModule = true;
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.mobileId = mobileId;
        this.mobileName = mobileName;
        this.mobileCost = mobileCost;
    }
    Mobile.prototype.printMobileDetails = function () {
        console.log("MobileId: " + this.mobileId);
        console.log("MobileName: " + this.mobileName);
        console.log("MobileCost:" + this.mobileCost);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
