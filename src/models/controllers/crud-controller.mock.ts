import { TestResultResponse } from "../test-result-response.model";
import Express from "express";

export interface ICrudController<T> {
    /**
     * POST /api/endpoint
     * @param data 
     */
    createOne(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<TestResultResponse<T>>;
    /**
     * GET /api/endpoint/:id
     * @param id 
     */
    getOne(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<TestResultResponse<T>>;
    /**
     * GET /api/endpoint
     */
    getAll(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<TestResultResponse<T[]>>;
    /**
     * UPDATE /api/endpoint
     * @param data 
     */
    updateOne(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<TestResultResponse<T>>;
    /**
     * DELETE /api/endpoint
     * @param data 
     */
    deleteOne(req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<TestResultResponse<T>>;
}