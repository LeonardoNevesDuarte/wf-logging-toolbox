"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wfLogger_1 = require("./log/wfLogger");
// Generating logs at UTC timezone
var logger_1 = new wfLogger_1.wfLogger(null);
logger_1.info('This is an example of log at INFO level with default user', null);
logger_1.debug('This is an example of log at DEBUG level with default user', null);
logger_1.warn('This is an example of log at WARN level with default user', null);
logger_1.error('This is an example of log at ERROR level with default user', null);
logger_1.info('This is an example of log at INFO level with default user', 'USER_1');
logger_1.debug('This is an example of log at DEBUG level with default user', 'USER_1');
logger_1.warn('This is an example of log at WARN level with default user', 'USER_1');
logger_1.error('This is an example of log at ERROR level with default user', 'USER_1');
// Generating logs at America/New_York (EST) timezone
var logger_2 = new wfLogger_1.wfLogger('America/New_York');
logger_2.info('This is an example of log at INFO level with default user', null);
logger_2.debug('This is an example of log at DEBUG level with default user', null);
logger_2.warn('This is an example of log at WARN level with default user', null);
logger_2.error('This is an example of log at ERROR level with default user', null);
logger_2.info('This is an example of log at INFO level with default user', 'USER_2');
logger_2.debug('This is an example of log at DEBUG level with default user', 'USER_2');
logger_2.warn('This is an example of log at WARN level with default user', 'USER_2');
logger_2.error('This is an example of log at ERROR level with default user', 'USER_2');
