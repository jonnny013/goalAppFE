import React, { useRef } from 'react'
import ListItemDisplay from './ListItemDisplay'
import {  Swipeable } from 'react-native-gesture-handler'
import EditDeleteSwipe from './EditDeleteSwipe'

const ListItemContainer = ({ item }) => {
  const swipeableRef = useRef(null)

  const closeSwipeable = () => {
    if (swipeableRef.current) {
      swipeableRef.current.close()
    }
  }

  const renderRightActions = () => (
    <EditDeleteSwipe id={item.id} name={item.name} closeSwipeable={closeSwipeable}/>
  )

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={8}
      friction={2}
      ref={swipeableRef}
    >
      <ListItemDisplay item={item} />
    </Swipeable>
  )
}



export default ListItemContainer
