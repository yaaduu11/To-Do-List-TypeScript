import { BaseController } from './controller';
import todoTask from './model';

export class TodoListController extends BaseController<typeof todoTask> {
    protected model = todoTask;

    constructor() {
        super();
        this.loadHome = this.loadHome.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
}