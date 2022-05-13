class StringIsNullOrUndefinedOrEmptyError extends Error {

    public ParamName: string = ``;
    public Message: string = ``;

    constructor(paramName: string, message:string) {
        super(`Param: ${paramName} Massage:${message}`);
        this.ParamName = paramName;
        this.Message = message;     
    }
}