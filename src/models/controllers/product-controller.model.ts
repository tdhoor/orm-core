import { NextFunction, Request, Response } from 'express';
import { ICrudController } from './crud-controller.mock';

export interface IProductController extends ICrudController {
    /**
     * GET /products/category?name=categoryName
     * @param name 
     */
    getProductsFromCategory(req: Request, res: Response, next: NextFunction)
}
