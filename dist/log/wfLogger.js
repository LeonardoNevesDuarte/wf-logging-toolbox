"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wfLogger = void 0;
/**
 * wfLogger class
 *
 */
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var wfLogger = /** @class */ (function () {
    function wfLogger(tz) {
        this.default_user = 'SYSTEM';
        this.timezone = (tz != null && this.validateTimezone(tz) ? tz : 'Etc/UTC');
    }
    /**
     * wfLogger: Display log at INFO level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    wfLogger.prototype.info = function (message, user) {
        console.log("[INFO] [".concat(this.getTimestamp(), "] ").concat(this.formatUser(user), " ").concat(message));
    };
    /**
     * wfLogger: Display log at DEBUG level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    wfLogger.prototype.debug = function (message, user) {
        console.debug("[DEBG] [".concat(this.getTimestamp(), "] ").concat(this.formatUser(user), " ").concat(message));
    };
    /**
     * wfLogger: Display log at WARN level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    wfLogger.prototype.warn = function (message, user) {
        console.warn("[WARN] [".concat(this.getTimestamp(), "] ").concat(this.formatUser(user), " ").concat(message));
    };
    /**
     * wfLogger: Display log at ERROR level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    wfLogger.prototype.error = function (message, user) {
        console.error("[ERRR] [".concat(this.getTimestamp(), "] ").concat(this.formatUser(user), " ").concat(message));
    };
    /**
     * wfLogger: Get timestamp at a given timezone
     *
     */
    wfLogger.prototype.getTimestamp = function () {
        return (0, moment_timezone_1.default)().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss');
    };
    /**
     * wfLogger: Validates the timezone
     *
     * @param timezone Timezone to be validated
     */
    wfLogger.prototype.validateTimezone = function (timezone) {
        if (!timezone) {
            return false;
        }
        else {
            if (moment_timezone_1.default.tz.zone(timezone)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    /**
     * wfLogger: Formats the user for logging
     *
     * @param user User to be formatted
     */
    wfLogger.prototype.formatUser = function (user) {
        var space = ' ';
        var userName = (user ? user : this.default_user);
        return '[' + userName + ']';
    };
    return wfLogger;
}());
exports.wfLogger = wfLogger;
