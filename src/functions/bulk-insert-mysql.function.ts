export function bulkInsertMysql<T>(pool, table: string, values: T[]): Promise<void> {
    const keys = Object.keys(values[0]);
    const tableName = "`" + table + "`";
    const query = `INSERT INTO ${tableName} (${keys.join(', ')}) VALUES ?`;
    const rows = values.map((value) => Object.values(value));
    return new Promise<void>((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(query, [rows], (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                    connection.release();
                });
            }
        });
    });
}