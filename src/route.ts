import express from 'express';
import { TodoListController } from './todoController';

const router = express.Router();
const todoListController = new TodoListController();

router.get('/', todoListController.loadHome);
router.post('/addTask', todoListController.addTask);
router.patch('/updateTask/:id', todoListController.editTask);
router.delete('/deleteTask/:id', todoListController.deleteTask);

export default router;
