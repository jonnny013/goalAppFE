import {  View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import theme from '../styles/theme'

const Loading = () => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <ActivityIndicator animating={true} color={theme.background.header} size='large' />
    </View>
  )
}

export default Loading
