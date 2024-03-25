import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import Octicons from '@expo/vector-icons/Octicons'

const list = [1, 2, 3, 4, 5]

const PriorityLevel = ({ setPriorityLevel}) => {
  const items = list.map((item) => ({
    label: `Priority level: ${item.toString()}`,
    value: item,
  }));
  return (
    <View style={styles.container}>
      <RNPickerSelect
        multiEnable={false}
        Icon={() => <Octicons name='single-select' size={20} />}
        onValueChange={value => setPriorityLevel(value)}
        items={items}
        style={{color: 'black'}}
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
    borderBottomColor: 'gray'
  },

})

export default PriorityLevel

