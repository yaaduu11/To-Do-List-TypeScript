import mongoose from 'mongoose';
import { Task } from './task.inteface';
declare const TaskModel: mongoose.Model<Task, {}, {}, {}, mongoose.Document<unknown, {}, Task> & Task & Required<{
    _id: unknown;
}>, any>;
export default TaskModel;
