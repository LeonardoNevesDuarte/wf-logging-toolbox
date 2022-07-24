import { wfLogger } from './log/wfLogger'

export class wfLoggingToolbox {
  
  private obj: wfLogger
  
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

  debug(message: string, user: string | null) {
    this.obj.warn(message, user)
  }

  warn(message: string, user: string | null) {
    this.obj.warn(message, user)
  }

  error(message: string, user: string | null) {
    this.obj.warn(message, user)
  }

}