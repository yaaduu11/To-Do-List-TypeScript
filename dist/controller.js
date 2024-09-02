"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const tslib_1 = require("tslib");
const asyncHandler_1 = tslib_1.__importDefault(require("./asyncHandler"));
class BaseController {
    constructor() {
        this.loadHome = this.asyncHandler(async (req, res) => {
            const tasks = await this.model.find({}).sort({ createdAt: -1 });
            res.status(200).render('home', { tasks });
        });
        this.addTask = this.asyncHandler(async (req, res) => {
            const { taskInput } = req.body;
            const newTask = new this.model({
                task: taskInput
            });
            await newTask.save();
            res.status(201).json({ message: 'Task added successfully', task: newTask });
        });
        this.editTask = this.asyncHandler(async (req, res) => {
            const { id } = req.params;
            const { task } = req.body;
            await this.model.findByIdAndUpdate(id, { task });
            res.json({ message: 'Task updated successfully' });
        });
        this.deleteTask = this.asyncHandler(async (req, res) => {
            const { id } = req.params;
            await this.model.findByIdAndDelete(id);
            res.json({ message: 'Task deleted successfully' });
        });
    }
    asyncHandler(fn) {
        return (0, asyncHandler_1.default)(fn);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=controller.js.map