import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import Octicons from '@expo/vector-icons/Octicons'
import theme from '../../styles/theme'

const list = [
  { label: 'To do', value: 'toDo' },
  { label: 'Wish list', value: 'toGet' },
]

const SetType = ({ setType, type }) => {
  const current = () => {
    if (type === 'toDo') {
      return 'Current choice: To do'
    } else if (type === 'toGet') {
      return 'Current choice: Wish List'
    } else {
      return 'Choose here'
    }
  }
  
  return (
    <View style={styles.container}>
      <RNPickerSelect
        Icon={() => <Octicons name='single-select' size={20} />}
        onValueChange={value => setType(value)}
        items={list}
        style={{
          inputIOS: { color: 'blue' },
          placeholder: { color: 'black' },
        }}
        placeholder={{ label: current(), value: type }}
        value={type}
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
    backgroundColor: theme.background.color,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
})

export default SetType
