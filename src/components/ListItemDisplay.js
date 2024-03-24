import { StyleSheet, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox'
import Text from './Text'

const ListItemDisplay = ({item}) => {
  const handleAccomplished = () => {
    console.log(item.id, 'Update this IDs state')
  }

  return (
    <View style={styles.container} key={item.id}>
      <CheckBox value={item.accomplished} onValueChange={handleAccomplished} />
      <Text>{item.name}</Text>
    </View>
  )
}

export default ListItemDisplay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})