import { db, initializeDatabase } from './db'

export const submitNew = ({ object }) => {
  const { name, deadline, type, info, priorityLevel, image, steps } = object
  initializeDatabase()

  db.transaction(
    tx => {
      tx.executeSql(
        `INSERT INTO toDoList (name, deadline, type, info, priorityLevel, image) 
          VALUES (?, ?, ?, ?, ?, ?)`,
        [name, deadline, type, info, priorityLevel, image],
        (_, result) => {
          const toDoId = result.insertId
          steps.forEach(step => {
            tx.executeSql(
              `INSERT INTO steps (toDo_id, step) VALUES (?, ?)`,
              [toDoId, step],
              (_, stepResult) => {
                console.log('Step inserted successfully:', stepResult.insertId)
              },
              (_, error) => {
                console.error('Error inserting step:', error)
              }
            )
          })
          console.log('ToDo item inserted successfully:', toDoId)
        },
        (_, error) => {
          console.error('Error inserting ToDo item:', error)
        }
      )
    },
    (_, error) => {
      console.error('Transaction error:', error)
    }
  )
}
