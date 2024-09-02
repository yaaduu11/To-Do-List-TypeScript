import { Document } from 'mongoose';
export interface Task extends Document {
    task: string;
    createdAt: Date;
    updatedAt: Date;
}
