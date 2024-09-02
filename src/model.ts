import mongoose, { Schema } from 'mongoose';
import { Task } from './task.inteface';

const TaskSchema: Schema = new Schema({
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

const TaskModel = mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;
