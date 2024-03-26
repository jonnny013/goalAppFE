import React from 'react'
import ListItemDisplay from './ListItemDisplay'
import {  Swipeable } from 'react-native-gesture-handler'
import EditDeleteSwipe from './EditDeleteSwipe'

const ListItemContainer = ({ item }) => {

  const renderRightActions = () => (
    <EditDeleteSwipe />
  )

  return (

      <Swipeable renderRightActions={renderRightActions}>
        <ListItemDisplay item={item} />
      </Swipeable>
  )
}



export default ListItemContainer
