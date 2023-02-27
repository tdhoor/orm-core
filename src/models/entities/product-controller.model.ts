import { ICrudController } from './crud-controller.mock';
import { IProduct } from './product.model';
import { Response } from './response.model';

export interface IProductController extends ICrudController<IProduct> {
    /**
     * GET /products/:id/category
     * @param name 
     */
    getProductsFromCategory(name: string): Promise<Response<IProduct[]>>
}
