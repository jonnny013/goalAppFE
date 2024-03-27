import React from 'react'
import ListItemDisplay from './ListItemDisplay'
import {  Swipeable } from 'react-native-gesture-handler'
import EditDeleteSwipe from './EditDeleteSwipe'

const ListItemContainer = ({ item }) => {

  const renderRightActions = () => (
    <EditDeleteSwipe id={item.id} name={item.name} />
  )

  return (

      <Swipeable renderRightActions={renderRightActions} overshootFriction={8} friction={2} >
        <ListItemDisplay item={item} />
      </Swipeable>
  )
}



export default ListItemContainer
