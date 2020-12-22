export const MONSTER_SCHEMA = {
    name:'',
    health: 10,
    armor_class:10,
    strength:10,
    dexterity:10,
    constitution:10,
    intelligence:10,
    wisdom: 10,
    charisma:10,
    auto_roll:true,
    notes:''
}

export const addMonstersTable = `
    CREATE TABLE IF NOT EXISTS monsters (
        id INTEGER PRIMARY KEY,
        name TEXT,
        health INTEGER Default 10,
        armor_class INTEGER DEFAULT 10,
        strength INTEGER DEFAULT 10,
        dexterity INTEGER DEFAULT 10,
        constitution INTEGER DEFAULT 10,
        intelligence INTEGER DEFAULT 10,
        wisdom INTEGER DEFAULT 10,
        charisma INTEGER DEFAULT 10,
        auto_roll BOOLEAN DEFAULT true,
        notes TEXT
    )
`;

export const addActiveMonstersTable = `
        CREATE TABLE IF NOT EXISTS active_monsters (
            id INTEGER PRIMARY KEY,
            monster_id INTEGER NOT NULL,
            session_id INTEGER NOT NULL,
            FOREIGN KEY(monster_id) REFERENCES monsters(id),
            FOREIGN KEY(session_id) REFERENCES sessions(id)
        )
`;

export const addSessionsTable = `
   CREATE TABLE IF NOT EXISTS sessions (
       id INTEGER PRIMARY KEY,
       timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
       active BOOLEAN DEFAULT true
   )         
`