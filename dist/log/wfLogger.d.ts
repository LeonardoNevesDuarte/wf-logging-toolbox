export declare class wfLogger {
    timezone: string;
    default_user: string;
    constructor(tz: string | null);
    /**
     * wfLogger: Display log at INFO level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    info(message: string, user: string | null): void;
    /**
     * wfLogger: Display log at DEBUG level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    debug(message: string, user: string | null): void;
    /**
     * wfLogger: Display log at WARN level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    warn(message: string, user: string | null): void;
    /**
     * wfLogger: Display log at ERROR level
     *
     * @param message Message to be displayed
     * @param user    Current user in the procedure execution
     */
    error(message: string, user: string | null): void;
    /**
     * wfLogger: Get timestamp at a given timezone
     *
     */
    private getTimestamp;
    /**
     * wfLogger: Validates the timezone
     *
     * @param timezone Timezone to be validated
     */
    private validateTimezone;
    /**
     * wfLogger: Formats the user for logging
     *
     * @param user User to be formatted
     */
    private formatUser;
}
