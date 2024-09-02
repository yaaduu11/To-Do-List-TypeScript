import { BaseController } from './controller';
import todoTask from './model';
export declare class TodoListController extends BaseController<typeof todoTask> {
    protected model: import("mongoose").Model<import("./task.inteface").Task, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./task.inteface").Task> & import("./task.inteface").Task & Required<{
        _id: unknown;
    }>, any>;
    constructor();
}
