import { TestResultResponse } from "../models/test-result-response.model";

export async function execTest<T>(fn: () => Promise<T>, countFn: () => Promise<{ [k: string]: number }>): Promise<TestResultResponse<T>> {
    const start = performance.now();
    const data = await fn();
    const end = performance.now();
    const size = {};

    return {
        time: Math.round((end - start) * 100) / 100,
        size,
        data
    };
}