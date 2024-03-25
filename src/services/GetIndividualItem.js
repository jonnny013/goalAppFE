import { db } from "./db"
export const fetchToDoListWithSteps = async toDoListId => {

  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          `SELECT t.*, s.step
           FROM toDoList t 
           LEFT JOIN steps s ON t.id = s.toDo_id
           WHERE t.id = ?`,
          [toDoListId],
          (_, result) => {
            const items = result.rows._array
             const itemsWithSteps = items.map(item => {
               const steps = items
                 .filter(stepItem => stepItem.id === item.id)
                 .map(stepItem => stepItem.step)
               return { ...item, steps }
             })
            resolve(itemsWithSteps)
          },
          (_, error) => {
            reject(error)
          }
        )
      },
      (_, transactionError) => {
        reject(transactionError)
      }
    )
  })
}