import { Pressable, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
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
      <Button mode='elevated' compact={true} style={styles.text} textColor='white'>{text}</Button>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,  
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
    fontSize: 20,
    width: 65,
    padding: 0,
    backgroundColor: theme.fonts.buttonColor
  }
})