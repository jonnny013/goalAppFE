import { StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../styles/theme'
import { TextInput } from 'react-native-paper'

const StandardTextInput = ({label, value, onChangeText, ...props}) => {
  return (
    <TextInput style={styles.input} label={label} value={value} onChangeText={onChangeText} {...props} />
  )
}

export default StandardTextInput

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.background.color,
  },
})