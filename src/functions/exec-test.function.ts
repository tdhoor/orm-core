import { TestResultResponse } from "../models/test-result-response.model";

export async function execTest<T>(fn: () => Promise<T>): Promise<TestResultResponse<T>> {
    const start = performance.now();
    const data = await fn();

    return {
        time: performance.now() - start,
        data
    };
}