export declare class wfLoggingToolbox {
    private obj;
    /**
    * wfLoggingToolbox: Timezone reference for date/time display.
    * Standard timezone names must be provided.
    * In case no timezone name is provided, the default 'Etc/UTC' will be used.
    * Please see the list of valid values in https://momentjs.com/timezone/ or
    * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    *
    * @param tz Message to be displayed
    */
    constructor(tz: string | null);
    /**
    * wfLoggingToolbox: Display log at INFO level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    info(message: string, user: string | null): void;
    /**
    * wfLoggingToolbox: Display log at DEBUG level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    debug(message: string, user: string | null): void;
    /**
    * wfLoggingToolbox: Display log at WARN level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    warn(message: string, user: string | null): void;
    /**
    * wfLoggingToolbox: Display log at ERROR level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    error(message: string, user: string | null): void;
}
