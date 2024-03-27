import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from './AddButton'
import { AntDesign } from '@expo/vector-icons'

const GetStartedPrompt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
      <AddButton />
      <View style={styles.fixedContainer}>
        <Text style={{ fontSize: 30 }}>Create some tasks here!</Text>
      </View>
      <AntDesign name='arrowdown' size={24} color='gray' style={styles.arrow}/>
    </View>
  )
}

export default GetStartedPrompt

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
  },
  arrow: {
    position: 'absolute',
    bottom: 70,
    right: 40,
  },
})