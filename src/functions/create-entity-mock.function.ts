import { ICustomer } from "../models/entities/customer.model";
import { IAddress } from "../models/entities/address.model";
import { IOrder } from "../models/entities/order.model";
import { IProduct } from "../models/entities/product.model";
import { IProductCategory } from "../models/entities/product-category.model";
import { rndNumber } from "./rnd-number.function";
import { IOrderItem } from "../models/entities/order-item.model";

function createAddress(i: number, customerId: number | null = null): IAddress {
    const address: Partial<IAddress> = {
        city: `city ${i}`,
        country: `country ${i}`,
        street: `street ${i}`,
        zipCode: `zipCode ${i}`
    }
    if (customerId) {
        address.customerId = customerId;
    }
    return address as IAddress;
}

function createAddresses(amount: number, customers: ICustomer[] = []): IAddress[] {
    const arr: IAddress[] = [];

    if (customers.length > 0) {
        for (let i = 0; i < amount; i++) {
            arr.push(createAddress(i + 1, i + 1));
        }
    } else {
        for (let i = 0; i < amount; i++) {
            arr.push(createAddress(i + 1));
        }
    }
    return arr;
}

function createCustomer(i: number): ICustomer {
    const customer: ICustomer = {
        email: `email-${i}@mail.com`,
        firstName: `first name ${i}`,
        lastName: `last name ${i}`,
        password: `password ${i}`,
        phone: `phone ${i}`
    }
    return customer;
}

function createCustomers(amount: number, addresses: IAddress[] = []): ICustomer[] {
    const arr: ICustomer[] = [];

    if (addresses.length === amount) {
        for (let i = 0; i < amount; i++) {
            const customer = createCustomer(i + 1);
            customer.address = addresses[i];
            arr.push(customer);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            arr.push(createCustomer(i + 1));
        }
    }
    return arr;
}

function createOrders(amount: number, customerIds: number[] = [], products: IProduct[] = [], { seperateOrderItems, addOrderIdToOrderItem } = { seperateOrderItems: true, addOrderIdToOrderItem: false }): { orders: IOrder[], orderItems: IOrderItem[] } {
    const orders: IOrder[] = [];
    const orderItems: IOrderItem[] = [];

    let productIndex1 = 0;
    let productIndex2 = products.length - 1;

    for (let i = 0; i < amount; i++) {
        const product1 = products[productIndex1];
        const product2 = products[productIndex2];

        const orderItem1: IOrderItem = { quantity: rndNumber(5, 1), productId: productIndex1 + 1 }
        const orderItem2: IOrderItem = { quantity: rndNumber(5, 1), productId: productIndex2 + 1 }

        if (addOrderIdToOrderItem) {
            orderItem1.orderId = i + 1;
            orderItem2.orderId = i + 1;
        }

        const order: IOrder = {
            totalPrice: Math.floor(((orderItem1.quantity * product1.price) + (orderItem2.quantity * product2.price)) * 100) / 100,
            customerId: customerIds[i],
        }

        if (!seperateOrderItems) {
            order.orderItems = [orderItem1, orderItem2];
        } else {
            orderItems.push(orderItem1, orderItem2);
        }
        orders.push(order);

        productIndex1++;
        productIndex2--;
    }
    return { orders, orderItems };
}

function createProduct(i: number, categoryId: number | null = null): IProduct {
    const product: IProduct = {
        name: `name ${i}`,
        price: i / 100,
        description: `description ${i}`
    };
    if (categoryId !== null) {
        product.productCategoryId = categoryId;
    }
    return product;
}

function createProducts(amount: number, categories: IProductCategory[] = []): IProduct[] {
    const arr: IProduct[] = [];

    if (categories.length > 0) {
        for (let i = 0; i < amount; i++) {
            arr.push(createProduct(i + 1, (i % categories.length) + 1));
        }
    } else {
        for (let i = 0; i < amount; i++) {
            arr.push(createProduct(i + 1, null));
        }
    }
    return arr;
}

function createProductCategory(i: number): IProductCategory {
    return {
        name: `name ${i}`
    }
}

function createProductCategories(amount: number): IProductCategory[] {
    const arr: IProductCategory[] = [];
    for (let i = 0; i < amount; i++) {
        arr.push(createProductCategory(i + 1));
    }
    return arr;
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