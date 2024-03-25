import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import Octicons from '@expo/vector-icons/Octicons'

const list = [
  { label: 'To do', value: 'toDo' },
  { label: 'Wish list', value: 'toGet' },
]

const SetType = ({ setType }) => {
  
  return (
    <View style={styles.container}>
      <RNPickerSelect
        multiEnable={false}
        Icon={() => <Octicons name='single-select' size={20} />}
        onValueChange={value => setType(value)}
        items={list}
        style={{ color: 'black' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 10,
    backgroundColor: '#B8E2F2',
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
})

export default SetType
