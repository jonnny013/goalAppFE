import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../services/db.js'
//import ListItemDisplay from './ListItemDisplay.js'
import Gap from './Gap.js'
import theme from '../styles/theme.js'
import AddButton from './AddButton.js'
import FilterResultsBar from './FilterResultsBar.js'
import ListItemContainer from './ListItemContainer.js'
import Loading from './Loading.js'
import GetStartedPrompt from './GetStartedPrompt.js'

const MainGetComponent = ({ num, variable }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM toDoList WHERE type = ${variable} AND accomplished = ${num} ORDER BY priorityLevel DESC`,
            [],
            (txObj, resultSet) => setList(resultSet.rows._array),
            (txObj, error) => console.error('Error fetching data:', error)
          )
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  console.log(list.length)
  if (loading) {return <Loading />}
  if (list.length < 1) {
    return <GetStartedPrompt />
  }

  return (
    <View style={styles.container}>
      <FilterResultsBar list={list} setList={setList} />
      <AddButton />
      <FlatList
        data={list}
        ItemSeparatorComponent={<Gap gapSize={theme.gapSize.mediumGap} />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItemContainer item={item} />}
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
