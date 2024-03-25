import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../services/db.js'
import ListItemDisplay from './ListItemDisplay.js'
import Gap from './Gap.js'
import theme from '../styles/theme.js'
import AddButton from './AddButton.js'

const MainGetComponent = ({num, variable}) => {
  const [list, setList] = useState([])
console.log(num)
  useEffect(() => {
    const fetchData = async () => {
      await db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM toDoList WHERE type = ${variable} AND accomplished = ${num}`,
          [null],
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

export default MainGetComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.gapSize.smallGap,
    width: '100%',
  },
})
