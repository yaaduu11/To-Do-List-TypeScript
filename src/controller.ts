import { Request, Response } from 'express';
import asyncHandler from './asyncHandler';

export abstract class BaseController<T> {
    protected abstract model: any;

    protected asyncHandler(fn: (req: Request, res: Response) => Promise<void>) {
        return asyncHandler(fn);
    }

    public loadHome = this.asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const tasks = await this.model.find({}).sort({ createdAt: -1 });
        res.status(200).render('home', { tasks });
    });

    public addTask = this.asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { taskInput } = req.body;

        const newTask = new this.model({
            task: taskInput
        });

        await newTask.save();

        res.status(201).json({ message: 'Task added successfully', task: newTask });
    });

    public editTask = this.asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { task } = req.body;

        await this.model.findByIdAndUpdate(id, { task });
        res.json({ message: 'Task updated successfully' });
    });

    public deleteTask = this.asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        await this.model.findByIdAndDelete(id);
        res.json({ message: 'Task deleted successfully' });
    });
}
