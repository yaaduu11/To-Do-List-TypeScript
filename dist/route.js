"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const todoController_1 = require("./todoController");
const router = express_1.default.Router();
const todoListController = new todoController_1.TodoListController(); // Create an instance of the controller
// Define routes and use controller methods
router.get('/', todoListController.loadHome);
router.post('/addTask', todoListController.addTask);
router.patch('/updateTask/:id', todoListController.editTask);
router.delete('/deleteTask/:id', todoListController.deleteTask);
exports.default = router;
//# sourceMappingURL=route.js.map