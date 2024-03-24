import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, initializeDatabase } from '../../services/db.js'
import Text from '../../components/Text.js'
import ListItemDisplay from '../../components/ListItemDisplay.js'
import Gap from '../../components/Gap.js'
import theme from '../../styles/theme.js'

const generateFakeData = () => {
  const fakeData = []
  for (let i = 1; i <= 10; i++) {
    fakeData.push({
      id: i,
      name: `Task ${i}`,
      deadline: `2024-04-${i}`,
      type: i % 2 === 0 ? 'toGet' : 'toDo',
      info: `Task ${i} information`,
      steps_id: i,
      priorityLevel: i % 3 === 0 ? 5 : 10,
      image:
        'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRODAepevJESvKmoYWQ8YAJJQO0j_a_ZgVaTFAobP3lXgETKX-kTOowNQH9_zxyUGC-aLS53LuzzNt0qys8gO4',
      accomplished: i % 2 === 0 ? 1 : 0,
      createdAt: new Date().toISOString(),
    })
  }
  return fakeData
}

const index = () => {
  const [list, setList] = useState(generateFakeData())

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await initializeDatabase()
  //     await db.transaction(tx => {
  //       tx.executeSql(
  //         'SELECT * FROM toDoList',
  //         null,
  //         (txObj, resultSet) => setList(resultSet.rows._array),
  //         (txObj, error) => console.error(error)
  //       )
  //     })
  //   }

  //   fetchData()
  // }, [])

  return (
    <View style={styles.container}>
      <Text>To Do List</Text>
      <FlatList
      data={list} 
      ItemSeparatorComponent={<Gap gapSize={theme.gapSize.mediumGap} />}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItemDisplay item={item} />} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: theme.gapSize.smallGap },
})
