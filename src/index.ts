import { wfLogger } from './log/wfLogger'

export class wfLoggingToolbox {
  
  private obj: wfLogger

  /**
  * wfLoggingToolbox: Timezone reference for date/time display.
  * Standard timezone names must be provided.
  * In case no timezone name is provided, the default 'Etc/UTC' will be used.
  * Please see the list of valid values in https://momentjs.com/timezone/ or
  * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  *
  * @param tz Message to be displayed
  */
  constructor(tz: string | null) {
    this.obj = new wfLogger(tz)
  }

  /**
  * wfLoggingToolbox: Display log at INFO level
  *
  * @param message Message to be displayed
  * @param user    Current user in the procedure execution
  */
  info(message: string, user: string | null) {
    this.obj.info(message, user)
  }

  /**
  * wfLoggingToolbox: Display log at DEBUG level
  *
  * @param message Message to be displayed
  * @param user    Current user in the procedure execution
  */
  debug(message: string, user: string | null) {
    this.obj.warn(message, user)
  }

  /**
  * wfLoggingToolbox: Display log at WARN level
  *
  * @param message Message to be displayed
  * @param user    Current user in the procedure execution
  */
  warn(message: string, user: string | null) {
    this.obj.warn(message, user)
  }

  /**
  * wfLoggingToolbox: Display log at ERROR level
  *
  * @param message Message to be displayed
  * @param user    Current user in the procedure execution
  */
  error(message: string, user: string | null) {
    this.obj.warn(message, user)
  }
 
}