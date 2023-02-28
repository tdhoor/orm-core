export interface TestResultResponse<T> {
    time: number;
    size: {
        [entify: string]: number
    }
    data: T;
}