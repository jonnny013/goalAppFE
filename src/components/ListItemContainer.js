import React from 'react'
import ListItemDisplay from './ListItemDisplay'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import FA from '@expo/vector-icons/FontAwesome6'
import theme from '../styles/theme'

const ListItemContainer = ({ item }) => {

  const renderRightActions = () => (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => console.log('delete function')}>
        <View style={[styles.container, styles.deleteColor]}>
          <FA name='trash' size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('edit function')}>
        <View style={[styles.container, styles.editColor]}>
          <FA name='pen-to-square' size={20} />
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <ListItemDisplay item={item} />
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 100,
  },
  deleteColor: {
    backgroundColor: theme.background.deleteColor,
  },
  editColor: {
    backgroundColor: theme.background.editColor,
  },
})

export default ListItemContainer
