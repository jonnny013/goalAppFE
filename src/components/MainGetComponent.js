import { FlatList, StyleSheet, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../services/db.js'
import Gap from './Gap.js'
import theme from '../styles/theme.js'
import AddButton from './AddButton.js'
import FilterResultsBar from './FilterResultsBar.js'
import ListItemContainer from './ListItemContainer.js'
import Loading from './Loading.js'
import GetStartedPrompt from './GetStartedPrompt.js'
import { deleteItemById } from '../services/updateServices'

const MainGetComponent = ({ num, variable }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDBEmpty, setIsDBEmpty] = useState(false)

   const handleDelete = ({ name, id, closeSwipeable }) => {
     Alert.alert('Confirm delete', `Are you sure you want to delete ${name}?`, [
       {
         text: 'Cancel',
         onPress: () => {
           closeSwipeable()
         },
         style: 'cancel',
       },
       {
         text: 'OK',
         onPress: () => {
           deleteItemById(id)
           closeSwipeable()
           setLoading(true)
         },
       },
     ])
   }

  useEffect(() => {
    console.log('fetching')
    const fetchData = async () => {
      try {
        await db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM toDoList WHERE type = ${variable} AND accomplished = ${num} ORDER BY priorityLevel DESC`,
            [],
            (txObj, resultSet) => {
              if (resultSet.rows._array.length < 1) {
                setIsDBEmpty(true)
              }
              setList(resultSet.rows._array)},
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
  }, [loading, setLoading])
console.log('loading:', loading, 'length: ', list.length)
  if (loading) {return <Loading />}
  if (isDBEmpty) {
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
        renderItem={({ item }) => <ListItemContainer item={item} handleDelete={handleDelete} />}
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
