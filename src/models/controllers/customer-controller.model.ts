import { ICrudController } from "./crud-controller.mock";
import { NextFunction, Request, Response } from "express";

export interface ICustomerController extends ICrudController {
    /**
     * POST /customers
     * @body data 
     */
    createMany(req: Request, res: Response, next: NextFunction)
    /**
     * GET /customers/:id/orders
     * @param id 
     */
    getCustomerOrders(req: Request, res: Response, next: NextFunction)
    /**
     * GET /customers/:id/products
     * @param id 
     */
    getCustomerProducts(req: Request, res: Response, next: NextFunction)
}
