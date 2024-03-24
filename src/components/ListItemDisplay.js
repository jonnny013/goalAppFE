import { Pressable, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import CheckBox from 'react-native-check-box'
import Text from './Text'

const ListItemDisplay = ({ item }) => {
  const handleAccomplished = () => {
    console.log(item.id, 'Update this IDs state')
  }
  console.log(item.image)
  return (
    <View style={styles.container}>
      <CheckBox
        style={{}}
        onClick={() => console.log('click')}
        isChecked={item.accomplished === 1 ? true : false}
        checkBoxColor='green'
      />
        <Text>{item.name}</Text>
        <Image source={{ uri: item.image }} style={{ height: 70, width: 70, borderRadius: 5 }} />

    </View>
  )
}

export default ListItemDisplay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
