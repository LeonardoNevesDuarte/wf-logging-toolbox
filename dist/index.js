"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wfLoggingToolbox = void 0;
var wfLogger_1 = require("./log/wfLogger");
var wfLoggingToolbox = /** @class */ (function () {
    /**
    * wfLoggingToolbox: Timezone reference for date/time display.
    * Standard timezone names must be provided.
    * In case no timezone name is provided, the default 'Etc/UTC' will be used.
    * Please see the list of valid values in https://momentjs.com/timezone/ or
    * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    *
    * @param tz Message to be displayed
    */
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
    /**
    * wfLoggingToolbox: Display log at DEBUG level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    wfLoggingToolbox.prototype.debug = function (message, user) {
        this.obj.warn(message, user);
    };
    /**
    * wfLoggingToolbox: Display log at WARN level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    wfLoggingToolbox.prototype.warn = function (message, user) {
        this.obj.warn(message, user);
    };
    /**
    * wfLoggingToolbox: Display log at ERROR level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    wfLoggingToolbox.prototype.error = function (message, user) {
        this.obj.warn(message, user);
    };
    return wfLoggingToolbox;
}());
exports.wfLoggingToolbox = wfLoggingToolbox;
