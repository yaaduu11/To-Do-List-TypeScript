"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListController = void 0;
const tslib_1 = require("tslib");
const controller_1 = require("./controller");
const model_1 = tslib_1.__importDefault(require("./model"));
class TodoListController extends controller_1.BaseController {
    constructor() {
        super();
        this.model = model_1.default;
        this.loadHome = this.loadHome.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
}
exports.TodoListController = TodoListController;
//# sourceMappingURL=todoController.js.map