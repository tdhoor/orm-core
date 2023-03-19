import Express from "express";

export interface ICrudController {
    /**
     * POST /api/endpoint
     * @body data
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
     * @body data 
     */
    updateOne(req: Express.Request, res: Express.Response, next: Express.NextFunction);
    /**
     * DELETE /api/endpoint/:id
     * @param id 
     */
    deleteOneById(req: Express.Request, res: Express.Response, next: Express.NextFunction);
}