"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wfLoggingToolbox = void 0;
var wfLogger_1 = require("./log/wfLogger");
var wfLoggingToolbox = /** @class */ (function () {
    function wfLoggingToolbox(tz) {
        this.obj = new wfLogger_1.wfLogger(tz);
    }
    wfLoggingToolbox.prototype.info = function (message, user) {
        this.obj.info(message, user);
    };
    return wfLoggingToolbox;
}());
exports.wfLoggingToolbox = wfLoggingToolbox;
