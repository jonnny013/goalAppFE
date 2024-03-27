import { db, initializeDatabase } from "./db"

export const updateAccomplished = async ({ item, num }) => {

  try {
    await db.transaction(tx => {
      tx.executeSql(
        'UPDATE toDoList SET accomplished = ? WHERE id = ?',
        [num, item.id], // Set accomplished to 1 for true and 0 for false
        () => console.log(`Item ${item.id} marked as ${num}`),
        (_, error) => console.error('Error updating item:', error)
      )
    })
  } catch (error) {
    console.error('Transaction error:', error)
  }
}


export const editToDoItem = ({ id, object }) => {
  const { name, deadline, type, info, priorityLevel, image, steps } = object
  initializeDatabase()

  db.transaction(
    tx => {
      tx.executeSql(
        `UPDATE toDoList 
        SET name = ?, deadline = ?, type = ?, info = ?, priorityLevel = ?, image = ? 
        WHERE id = ?`,
        [name, deadline, type, info, priorityLevel, image, id],
        // eslint-disable-next-line no-unused-vars
        (_, result) => {
          console.log('ToDo item updated successfully')
          // Delete existing steps for this to-do item
          tx.executeSql(
            `DELETE FROM steps WHERE toDo_id = ?`,
            [id],
            () => {
              console.log('Existing steps deleted successfully')
              // Insert updated steps
              steps.forEach(step => {
                tx.executeSql(
                  `INSERT INTO steps (toDo_id, step) VALUES (?, ?)`,
                  [id, step],
                  (_, stepResult) => {
                    console.log('Step inserted successfully:', stepResult.insertId)
                  },
                  (_, error) => {
                    console.error('Error inserting step:', error)
                  }
                )
              })
            },
            (_, error) => {
              console.error('Error deleting existing steps:', error)
            }
          )
        },
        (_, error) => {
          console.error('Error updating ToDo item:', error)
        }
      )
    },
    (_, error) => {
      console.error('Transaction error:', error)
    }
  )
}

export const deleteItemById = id => {
  db.transaction(
    tx => {
      tx.executeSql(
        'DELETE FROM toDoList WHERE id = ?',
        [id],
        (_, toDoListResultSet) => {
          if (toDoListResultSet.rowsAffected > 0) {
            console.log(`Item with id ${id} deleted successfully from toDoList`)
            // Delete related steps
            tx.executeSql(
              'DELETE FROM steps WHERE toDo_id = ?',
              [id],
              // eslint-disable-next-line no-unused-vars
              (_, _stepsResultSet) => {
                console.log(`Related steps deleted for item with id ${id}`)
              },
              (_, error) => {
                console.error(
                  `Error deleting related steps for item with id ${id}:`,
                  error
                )
              }
            )
          } else {
            console.log(`Item with id ${id} not found in toDoList`)
          }
        },
        (_, error) => {
          console.error(`Error deleting item with id ${id} from toDoList:`, error)
        }
      )
    },
    (_, error) => {
      console.error('Transaction error:', error)
    }
  )
}