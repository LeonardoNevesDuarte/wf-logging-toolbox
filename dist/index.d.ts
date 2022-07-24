export declare class wfLoggingToolbox {
    private obj;
    constructor(tz: string | null);
    /**
    * wfLoggingToolbox: Display log at INFO level
    *
    * @param message Message to be displayed
    * @param user    Current user in the procedure execution
    */
    info(message: string, user: string | null): void;
    debug(message: string, user: string | null): void;
    warn(message: string, user: string | null): void;
    error(message: string, user: string | null): void;
}
