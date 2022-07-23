import { wfLogger } from './log/wfLogger'

export class wfLoggingToolbox {
  
  obj: wfLogger
  
  constructor(tz: string | null) {
    this.obj = new wfLogger(tz)
  }

  info(message: string, user: string | null) {
    this.obj.info(message, user)
  }

}