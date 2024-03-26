import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '../styles/theme'
import { useNavigate } from 'react-router-native'

const AddButton = ({ text = '+', location = '/addNew' }) => {
  const navigate = useNavigate()
  return (
    <Pressable
      style={[styles.container, text === '+' ? styles.add : styles.edit]}
      onPress={() => navigate(location)}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    borderRadius: 50,
    borderWidth: 1,
    width: 60,
    height: 60,
    backgroundColor: theme.fonts.buttonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  add: {
    bottom: 20,
    right: 20,
  },
  edit: {
    top: 10,
    right: 10,
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})