import { View } from 'react-native'
import React from 'react'

const Gap = ({gapSize}) => {
  return <View style={{ height: gapSize ? gapSize : 10}}></View>
}

export default Gap
