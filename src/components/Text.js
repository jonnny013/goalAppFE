import { StyleSheet, Text as NativeText } from 'react-native'
import React from 'react'
import themes from '../styles/theme'

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
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