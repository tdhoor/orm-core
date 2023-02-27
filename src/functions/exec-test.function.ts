export async function execTest(fn: () => Promise<any>) {
    const start = performance.now();
    await fn();
    const end = performance.now();
    return { start, end, diff: end - start };
}