export const addTables = db => {
    db.transaction( tx => {
        tx.executeSql(addMonstersTable);
        tx.executeSql(addSessionsTable);
        tx.executeSql(addActiveMonstersTable);
    },transactionError,transactionSuccess)
};


export const seedMonstersTable = db => {
    db.transaction( tx => {
        addTestMonster(tx,'Harold');
    },transactionError,transactionSuccess)
};

const transactionError = (err) => console.log("ERROR",err);
const transactionSuccess = () => console.log("SUCCESS");


const addMonstersTable = `
    CREATE TABLE IF NOT EXISTS monsters (
        id INTEGER PRIMARY KEY,
        name VARCHAR(20),
        health INTEGER Default 0,
        armor_class INTEGER DEFAULT 0,
        strength INTEGER DEFAULT 0,
        dexterity INTEGER DEFAULT 0,
        constitution INTEGER DEFAULT 0,
        intelligence INTEGER DEFAULT 0,
        wisdom INTEGER DEFAULT 0,
        charisma INTEGER DEFAULT 0,
        auto_roll BOOLEAN DEFAULT true,
        notes VARCHAR(255)
    )
`;

const addActiveMonstersTable = `
        CREATE TABLE IF NOT EXISTS active_monsters (
            id INTEGER PRIMARY KEY,
            monster_id INTEGER NOT NULL,
            session_id INTEGER NOT NULL,
            FOREIGN KEY(monster_id) REFERENCES monsters(id),
            FOREIGN KEY(session_id) REFERENCES sessions(id)
        )
`;

const addSessionsTable = `
   CREATE TABLE IF NOT EXISTS sessions (
       id INTEGER PRIMARY KEY,
       timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
       active BOOLEAN DEFAULT true
   )         
`

const addTestMonster = (tx,name) => {
    tx.executeSql(`
        INSERT INTO monsters(name)
        VALUES (?)
    `,[name])
}

