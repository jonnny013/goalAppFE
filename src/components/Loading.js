import {  Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  console.log('loading called')
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <Text>Loading...</Text>
    </View>
  )
}

export default Loading
