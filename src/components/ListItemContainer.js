import React from 'react'
import ListItemDisplay from './ListItemDisplay'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import EditDeleteSwipe from './EditDeleteSwipe'

const ListItemContainer = ({ item }) => {

  const renderRightActions = () => (
    <EditDeleteSwipe />
  )

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <ListItemDisplay item={item} />
      </Swipeable>
    </GestureHandlerRootView>
  )
}



export default ListItemContainer
