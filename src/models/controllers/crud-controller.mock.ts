import { TestResultResponse } from "../test-result-response.model";
import Express from "express";

export interface ICrudController<T> {
    /**
     * POST /api/endpoint
     * @param data 
     */
    createOne(req: Express.Request, res: Express.Response, next: Express.NextFunction);
    /**
     * GET /api/endpoint/:id
     * @param id 
     */
    getOneById(req: Express.Request, res: Express.Response, next: Express.NextFunction);
    /**
     * GET /api/endpoint
     */
    getAll(req: Express.Request, res: Express.Response, next: Express.NextFunction);
    /**
     * UPDATE /api/endpoint
     * @param data 
     */
    updateOne(req: Express.Request, res: Express.Response, next: Express.NextFunction);
    /**
     * DELETE /api/endpoint
     * @param data 
     */
    deleteOneById(req: Express.Request, res: Express.Response, next: Express.NextFunction);
}