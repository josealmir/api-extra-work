
class WorkerExtra extends Entity {
    public Description: string = ``;
    public CreatedIn: Date;

    constructor(description: string) {
        super('test');
        this.Description = description?? throw new StringIsNullOrUndefinedOrEmptyError(this.Description,"Value ");
        this.CreatedIn = new Date(`${new Date().getDate()}`);
    }
}