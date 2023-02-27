import { IProductCategory } from "../entities/product-category.model";
import { ICrudController } from "./crud-controller.mock";

export interface IProductCategoryController extends ICrudController<IProductCategory> {
}