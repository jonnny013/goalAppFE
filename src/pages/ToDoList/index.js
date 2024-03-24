import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, initializeDatabase } from '../../services/db.js'
import Text from '../../components/Text.js'
import ListItemDisplay from '../../components/ListItemDisplay.js'
import Gap from '../../components/Gap.js'

const index = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await initializeDatabase()
      await db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM toDoList',
          null,
          (txObj, resultSet) => setList(resultSet.rows._array),
          (txObj, error) => console.error(error)
        )
      })
    }

    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text>To Do List</Text>
      {list.map(listItem => {
        <View key={listItem.id}>
          <ListItemDisplay list={listItem} />
          <Gap />
        </View>
      })}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
