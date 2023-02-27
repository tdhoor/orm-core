import { IAddress } from "../entities/address.model";
import { ICrudController } from "./crud-controller.mock";

export interface IAddressController extends ICrudController<IAddress> {
}