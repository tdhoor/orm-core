import { createMock } from "./create-entity-mock.function";
import { createRndSet } from "./create-rnd-set.function";

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
    return createMock.orders(amount, amountOfCustomer, products);
}

function createCategoryNames(amount: number) {
    return createMock.productCategories(amount).map((category) => category.name);
}

function createCustomerIds(amount: number, amountOfCustomers: number) {
    return createRndSet(amount, amountOfCustomers);
}

function createCustomersWithNewTelefonNumbers(amount: number, maxId: number) {
    const ids = createRndSet(amount, maxId);

    return Array.from(ids.values()).map((id, i) => {
        const customer = createMock.customer(id);
        customer.phone = customer.phone + i;
        return customer;
    })
}

function createProductCategoriesWithNewNames(amount: number, maxId: number) {
    const ids = createRndSet(amount, maxId);

    return Array.from(ids.values()).map((id, i) => {
        const category = createMock.productCategory(id);
        category.name = category.name + i;
        return category;
    })
}

function createCustomerIdsToDelete(amount: number, maxId: number) {
    return createRndSet(amount, maxId);
}

function createOrderIdsToDelete(amount: number, maxId: number) {
    return createRndSet(amount, maxId);
}

export const createTestData = {
    create: {
        customers: createCustomers,
        customersWithAddress: createCustomersWithAddress,
        orders: createOrders
    },
    read: {
        categoryNames: createCategoryNames,
        customerIds: createCustomerIds
    },
    update: {
        customers: createCustomersWithNewTelefonNumbers,
        productCategories: createProductCategoriesWithNewNames
    },
    delete: {
        customerIds: createCustomerIdsToDelete,
        orderIds: createOrderIdsToDelete
    },
    bulk: {
        customers: createCustomers,
    }
}