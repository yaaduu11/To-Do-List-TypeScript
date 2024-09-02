import { Request, Response } from 'express';
export declare abstract class BaseController<T> {
    protected abstract model: any;
    protected asyncHandler(fn: (req: Request, res: Response) => Promise<void>): (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
    loadHome: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
    addTask: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
    editTask: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
    deleteTask: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
}
