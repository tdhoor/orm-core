import sql from 'mssql';

export async function bukdInsertMssql(tableName, values: any[]) {
    const pool = new sql.ConnectionPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        options: {
            trustServerCertificate: true
        },
        pool: {
            min: 1,
            max: 5
        }
    });
    // Connect to the database
    await pool.connect();
    // Create a transaction to ensure all inserts are atomic
    const transaction = new sql.Transaction(pool);

    try {
        // Begin the transaction
        await transaction.begin();

        // Create a table object to represent the table we are inserting into
        const table = new sql.Table(tableName);
        // Get the columns from the first object in the array of values
        const columns = Object.keys(values[0]);

        // Add the columns to the table object
        columns.forEach((column) => {
            if (column.toLocaleLowerCase().includes("customerid")) {
                if (tableName.toLocaleLowerCase().includes("order")) {
                    table.columns.add(column, sql.Int, {
                        nullable: true,
                    });
                } else {
                    table.columns.add(column, sql.Int, {
                        nullable: false,
                    });
                }
            } else if (column.toLocaleLowerCase().includes("id")) {
                table.columns.add(column, sql.Int, {
                    nullable: true
                });
            }
            else if (column.toLocaleLowerCase().includes("street")) {
                table.columns.add(column, sql.VarChar(100), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("city")) {
                table.columns.add(column, sql.VarChar(100), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("zip")) {
                table.columns.add(column, sql.VarChar(20), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("country")) {
                table.columns.add(column, sql.VarChar(100), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("email")) {
                table.columns.add(column, sql.VarChar(500), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("phone")) {
                table.columns.add(column, sql.VarChar(50), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("password")) {
                table.columns.add(column, sql.VarChar(500), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("first")) {
                table.columns.add(column, sql.VarChar(50), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("last")) {
                table.columns.add(column, sql.VarChar(50), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("total")) {
                table.columns.add(column, sql.Float, {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("quantity")) {
                table.columns.add(column, sql.Int, {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("name")) {
                table.columns.add(column, sql.VarChar(100), {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("price")) {
                table.columns.add(column, sql.Float, {
                    nullable: false,
                });
            } else if (column.toLocaleLowerCase().includes("description")) {
                table.columns.add(column, sql.Text, {
                    nullable: false,
                });
            }
        });
        // Add each row of values to the table object
        values.forEach((value) => {
            table.rows.add(...columns.map((column) => value[column]));
        });
        // Create a request to execute the bulk insert
        const request = new sql.Request(transaction);
        // Execute the bulk insert
        await request.bulk(table);
        await transaction.commit();

        // Release the connection back to the pool
        pool.close();
    } catch (err) {
        // If there was an error, rollback the transaction
        await transaction.rollback();

        // Release the connection back to the pool
        pool.close();

        // Throw the error so the caller can handle it
        throw err;
    }
}