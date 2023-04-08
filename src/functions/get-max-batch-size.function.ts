export function getMaxBatchSize(recordsToInsert) {
    //source https://github.com/knex/knex/issues/2986#issuecomment-1129987488
    //mssql supports a max of 2100 parameters in one statement
    const maxDBParameters = 2100 - 10
    //get a set of all column names, across all the records
    const uniqueKeySet = recordsToInsert
        .reduce((uniqueKeySet, currentRecord) => {
            Object
                .keys(currentRecord)
                .forEach(key => uniqueKeySet.add(key));
            return uniqueKeySet;
        }, new Set())
    return Math.floor(maxDBParameters / uniqueKeySet.size)
}