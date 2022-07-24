"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wfLoggingToolbox = void 0;
var wfLogger_1 = require("./log/wfLogger");
var wfLoggingToolbox = /** @class */ (function () {
    function wfLoggingToolbox(tz) {
        this.obj = new wfLogger_1.wfLogger(tz);
    }
    /**
    * wfLoggingToolbox: Display log at INFO level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    wfLoggingToolbox.prototype.info = function (message, user) {
        this.obj.info(message, user);
    };
    wfLoggingToolbox.prototype.debug = function (message, user) {
        this.obj.warn(message, user);
    };
    wfLoggingToolbox.prototype.warn = function (message, user) {
        this.obj.warn(message, user);
    };
    wfLoggingToolbox.prototype.error = function (message, user) {
        this.obj.warn(message, user);
    };
    return wfLoggingToolbox;
}());
exports.wfLoggingToolbox = wfLoggingToolbox;
