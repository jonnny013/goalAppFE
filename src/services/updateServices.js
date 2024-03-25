import { db } from "./db"

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
