import { StyleSheet, Text as NativeText } from 'react-native'
import React from 'react'
import themes from '../styles/theme'

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color,
    color ,
    fontSize,
    fontWeight,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text

const styles = StyleSheet.create({
  text: {
    fontSize: themes.fonts.textSize,
  }
})