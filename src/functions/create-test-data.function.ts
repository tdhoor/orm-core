import { createMock } from "./create-entity-mock.function";
import { rndNumberArray } from "./rnd-number-array.function";
import { rndNumberSet } from "./rnd-number-set.function";

function createCustomers(amount: number) {
    return createMock.customers(amount);
}

function createCustomersWithAddress(amount: number) {
    const addresses = createMock.addresses(amount);
    return createMock.customers(amount, addresses);
}

function createProducts(amount: number) {
    return createMock.products(amount);
}

function createOrders(amount: number, amountOfCustomer: number, amountOfProducts: number) {
    const products = createMock.products(amountOfProducts);
    const customerIds = createIds(amountOfCustomer, amountOfProducts);
    return createMock.orders(amount, customerIds, products, { seperateOrderItems: false, addOrderIdToOrderItem: false });
}

function createCategoryNames(amount: number, amountOfCategories: number) {
    const categories = createMock.productCategories(amountOfCategories);
    const set = rndNumberSet(amount, amountOfCategories);
    return Array.from(set.values()).map((rnd) => categories[rnd].name);
}

function createCustomersWithNewTelefonNumbers(amount: number, maxId: number) {
    const ids = rndNumberSet(amount, maxId, 1);

    return Array.from(ids.values()).map((id) => {
        const customer = createMock.customer(id);
        customer.id = id;
        customer.phone = customer.phone + customer.id;
        return customer;
    })
}

function createProductCategoriesWithNewNames(amount: number, maxId: number) {
    const ids = rndNumberArray(amount, maxId, 1);

    return ids.map((id) => {
        const category = createMock.productCategory(id);
        category.id = id;
        category.name = category.name + category.id;
        return category;
    })
}

function createIds(amount: number, maxId: number) {
    const set = rndNumberSet(amount, maxId, 1);
    return Array.from(set.values());
}

export const createTestData = {
    create: {
        products: createProducts,
        customers: createCustomers,
        customersWithAddress: createCustomersWithAddress,
        orders: createOrders
    },
    read: {
        categoryNames: createCategoryNames,
        customerIds: createIds,
        productIds: createIds,
        orderIds: createIds
    },
    update: {
        customers: createCustomersWithNewTelefonNumbers,
        productCategories: createProductCategoriesWithNewNames
    },
    delete: {
        addressIds: createIds,
        customerIds: createIds,
        orderIds: createIds
    },
    bulk: {
        customers: createCustomers,
    }
}