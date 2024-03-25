import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '../styles/theme'
import { useNavigate } from 'react-router-native'

const AddButton = () => {
  const navigate = useNavigate()
  return (
      <Pressable style={styles.container} onPress={() => navigate('/addNew')}>
        <Text style={styles.text}>+</Text>
      </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
    borderRadius: 50,
    borderWidth: 1,
    width: 60,
    height: 60,
    backgroundColor: theme.fonts.buttonColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})