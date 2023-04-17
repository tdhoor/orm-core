export function getMaxBatchSize(recordsToInsert) {
    //source https://github.com/knex/knex/issues/2986#issuecomment-1129987488
    //mssql supports a max of 2100 parameters in one statement
    const maxDBParameters = 2100 - 10
    //get a set of all column names, across all the records
    const uniqueKeySet = new Set();
    Object
        .keys(Array.isArray(recordsToInsert) ? recordsToInsert[0] : recordsToInsert)
        .forEach(key => uniqueKeySet.add(key));
    const maxBatchSize = Math.floor(maxDBParameters / uniqueKeySet.size)
    //mssql supports a max of 1000 records in one statement, else ERROR 10738
    return maxBatchSize > 1000 ? 1000 : maxBatchSize;
}