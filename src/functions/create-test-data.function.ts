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

function createCategoryNames(amount: number, amountOfCategories: number) {
    const categories = createMock.productCategories(amountOfCategories);
    const set = createRndSet(amount, amountOfCategories);
    return Array.from(set.values()).map((rnd) => categories[rnd].name);
}

function createCustomerIds(amount: number, amountOfCustomers: number) {
    const set = createRndSet(amount, amountOfCustomers);
    return Array.from(set.values());
}

function createCustomersWithNewTelefonNumbers(amount: number, maxId: number) {
    const ids = createRndSet(amount, maxId);

    return Array.from(ids.values()).map((id) => {
        const customer = createMock.customer(id + 1);
        customer.id = id + 1;
        customer.phone = customer.phone + customer.id;
        return customer;
    })
}

function createProductCategoriesWithNewNames(amount: number, maxId: number) {
    const ids = createRndSet(amount, maxId);

    return Array.from(ids.values()).map((id) => {
        const category = createMock.productCategory(id + 1);
        category.id = id + 1;
        category.name = category.name + category.id;
        return category;
    })
}

function createCustomerIdsToDelete(amount: number, maxId: number) {
    const set = createRndSet(amount, maxId);
    return Array.from(set.values());
}

function createOrderIdsToDelete(amount: number, maxId: number) {
    const set = createRndSet(amount, maxId);
    return Array.from(set.values());
}

export const createTestData = {
    create: {
        customers: createCustomers,
        products: createProducts,
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