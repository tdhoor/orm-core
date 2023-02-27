import { NextFunction, Request, Response } from 'express';
import { ICrudController } from './crud-controller.mock';
import { IProduct } from '../entities/product.model';

export interface IProductController extends ICrudController<IProduct> {
    /**
     * GET /products/category?name=categoryName
     * @param name 
     */
    getProductsFromCategory(req: Request, res: Response, next: NextFunction)
}
