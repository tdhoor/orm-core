import { ICustomer } from "../models/entities/customer.model";
import { IAddress } from "../models/entities/address.model";
import { IOrder } from "../models/entities/order.model";
import { IProduct } from "../models/entities/product.model";
import { IProductCategory } from "../models/entities/product-category.model";
import { rndNumber } from "./rnd-number.function";
import { IOrderItem } from "../models/entities/order-item.model";
import { rndTuble } from "./rnd-tuble.function";

function createAddress(i: number): IAddress {
    return {
        city: `city ${i}`,
        country: `country ${i}`,
        street: `street ${i}`,
        zipCode: `zipCode ${i}`,
    }
}

function createAddresses(amount: number): IAddress[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createAddress(i + 1);
    })
}

function createCustomer(i: number, address?: IAddress): ICustomer {
    const customer: ICustomer = {
        email: `email-${i}@mail.com`,
        firstName: `first name ${i}`,
        lastName: `last name ${i}`,
        password: `password ${i}`,
        phone: `phone ${i}`,
    }
    if (address) {
        customer.address = address;
    }
    return customer;
}

function createCustomers(amount: number, addresses?: IAddress[]): ICustomer[] {
    return Array.from({ length: amount }).map((_, i) => {
        if (Array.isArray(addresses)) {
            return createCustomer(i + 1, addresses[i]);
        }
        return createCustomer(i + 1, null);
    });
}

function createOrders(amount: number, amountOfCustomer = 0, products: IProduct[] = []): IOrder[] {
    const customerIds = Array.from({ length: amount }).map((_, i) => i + 1);

    return Array.from({ length: amount }).map((_) => {
        const [rnd1, rnd2] = rndTuble(products.length);

        const product1 = products[rnd1];
        const product2 = products[rnd2];

        const orderItem1: IOrderItem = { quantity: rndNumber(5), productId: rnd1 + 1 }
        const orderItem2: IOrderItem = { quantity: rndNumber(5), productId: rnd2 + 1 }

        const order: IOrder = {
            totalPrice: (orderItem1.quantity * product1.price) + (orderItem2.quantity * product2.price),
            customerId: amountOfCustomer ? rndNumber(amountOfCustomer) + 1 : customerIds.splice(rndNumber(customerIds.length), 1)[0],
            orderItems: [orderItem1, orderItem2]
        }
        return order;
    });
}

function createProduct(i: number, category?: IProductCategory): IProduct {
    const product: IProduct = {
        name: `name ${i}`,
        price: rndNumber(10000) / 100,
        description: `description ${i}`
    };
    if (category) {
        product.productCategory = category;
    }
    return product;
}

function createProducts(amount: number, categories?: IProductCategory[]): IProduct[] {
    return Array.from({ length: amount }).map((_, i) => {
        if (Array.isArray(categories)) {
            return createProduct(i + 1, categories[rndNumber(categories.length) - 1]);
        }
        return createProduct(i + 1, null);
    });
}

function createProductCategory(i: number): IProductCategory {
    return {
        name: `name ${i}`
    }
}

function createProductCategories(amount: number): IProductCategory[] {
    return Array.from({ length: amount }).map((_, i) => {
        return createProductCategory(i);
    });
}

export const createMock = {
    address: createAddress,
    addresses: createAddresses,
    customer: createCustomer,
    customers: createCustomers,
    orders: createOrders,
    product: createProduct,
    products: createProducts,
    productCategory: createProductCategory,
    productCategories: createProductCategories
}