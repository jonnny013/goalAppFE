import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, initializeDatabase } from '../../services/db.js'
import ListItemDisplay from '../../components/ListItemDisplay.js'
import Gap from '../../components/Gap.js'
import theme from '../../styles/theme.js'
import AddButton from '../../components/AddButton.js'

const index = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await initializeDatabase()
      await db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM toDoList WHERE accomplished IS 1',
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
      <AddButton />
      <FlatList
        data={list}
        ItemSeparatorComponent={<Gap gapSize={theme.gapSize.mediumGap} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItemDisplay item={item} />}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.gapSize.smallGap,
  },
})
