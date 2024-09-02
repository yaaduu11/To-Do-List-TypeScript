"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// model.ts
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const TaskSchema = new mongoose_1.Schema({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const TaskModel = mongoose_1.default.model('Task', TaskSchema); // Use a singular model name
exports.default = TaskModel;
//# sourceMappingURL=model.js.map