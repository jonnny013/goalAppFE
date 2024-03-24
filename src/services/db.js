// Database.js

import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('main.db')

const initializeDatabase = () => {
  db.transaction(
    tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS toDoList ( id INTEGER PRIMARY KEY AUTOINCREMENT,  
          name TEXT,  
          deadline DATE,  
          type TEXT CHECK(type IN ("toDo", "toGet")) DEFAULT "toDo",  
          info TEXT,  
          steps_id INTEGER,  
          priorityLevel INTEGER DEFAULT 10,  
          image BLOB,  
          accomplished INTEGER DEFAULT 0, 
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
          FOREIGN KEY (steps_id) REFERENCES steps(id) )`,
          null,
        () => {
          console.log('toDoList table created successfully')
        },
        (_, error) => {
          console.error('Error creating toDoList table:', error)
        }
      )

      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS steps (' +
          'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
          'toDo_id INTEGER, ' +
          'step TEXT NOT NULL, ' +
          'FOREIGN KEY (toDo_id) REFERENCES toDoList(id)' +
          ')',
        [],
        () => {
          console.log('steps table created successfully')
        },
        (_, error) => {
          console.error('Error creating steps table:', error)
        }
      )
    },
    (_, error) => {
      console.error('Transaction error:', error)
    }
  )
}

export { db, initializeDatabase }
