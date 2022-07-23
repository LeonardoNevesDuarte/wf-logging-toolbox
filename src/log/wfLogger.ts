/**
 * wfLogger class
 *
 */
import moment from 'moment-timezone'

export class wfLogger {

  timezone: string
  username_length: number = 36
  default_user: string = 'SYSTEM'

  constructor(tz: string | null) {
    this.timezone = (tz != null && this.validateTimezone(tz) ? tz : 'Etc/UTC')
  }

  /**
   * wfLogger: Display log at INFO level
   *
   * @param message Message to be displayed
   * @param user    Current user in the procedure execution
   */
  info(message: string, user: string | null) {
    console.log(`[INFO] [${this.getTimestamp()}] ${this.formatUser(user)} ${message}`)
  }

  /**
   * wfLogger: Display log at DEBUG level
   *
   * @param message Message to be displayed
   * @param user    Current user in the procedure execution
   */
  debug(message: string, user: string | null) {
    console.debug(`[DEBG] [${this.getTimestamp()}] ${message}`)
  }

  /**
   * wfLogger: Display log at WARN level
   *
   * @param message Message to be displayed
   * @param user    Current user in the procedure execution
   */
  warn(message: string, user: string | null) {
    console.warn(`[WARN] [${this.getTimestamp()}] ${message}`)
  }

  /**
   * wfLogger: Display log at ERROR level
   *
   * @param message Message to be displayed
   * @param user    Current user in the procedure execution
   */
  error(message: string, user: string | null) {
    console.error(`[ERRR] [${this.getTimestamp()}] ${message}`)
  }

  /**
   * wfLogger: Get timestamp at a given timezone
   *
   */
  private getTimestamp(): string {
    return moment().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss')
  }

  /**
   * wfLogger: Validates the timezone
   *
   * @param timezone Timezone to be validated
   */
  private validateTimezone(timezone: string | null) :boolean {
    if (!timezone) {
      return false
    } else {
      if (moment.tz.zone(timezone)) {
        return true
      } else {
        return false
      }
    }
  }

  /**
   * wfLogger: Formats the user for logging
   *
   * @param user User to be formatted
   */
  private formatUser(user: string | null): string {
    const space = ' ';
    const userName = (user ? user : this.default_user)
    return '[' + userName + '] ' + space.repeat(this.username_length - userName.length);
  }
}
