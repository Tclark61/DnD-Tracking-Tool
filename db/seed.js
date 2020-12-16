import * as schema from './schema';

export const addTables = db => {
    db.transaction( tx => {
        tx.executeSql(deleteTable('monsters'))
        tx.executeSql(deleteTable('sessions'))
        tx.executeSql(deleteTable('active_monsters'))
        tx.executeSql(schema.addMonstersTable);
        tx.executeSql(schema.addSessionsTable);
        tx.executeSql(schema.addActiveMonstersTable);
    },transactionError,transactionSuccess)
};


export const seedMonstersTable = db => {
    db.transaction( tx => {
        addTestMonster(tx,'Harold');
    },transactionError,transactionSuccess)
};

const transactionError = (err) => console.log("ERROR",err);
const transactionSuccess = () => console.log("SUCCESS");

const deleteTable = (name) => `
    DROP TABLE ${name};
`

const addTestMonster = (tx,name) => {
    tx.executeSql(`
        INSERT INTO monsters(name)
        VALUES (?)
    `,[name])
}

