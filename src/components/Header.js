import { StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import {Link } from 'react-router-native'
import theme from '../styles/theme'
import { Button } from 'react-native-paper'

const Header = () => {
  return (
    <View style={styles.container}>
      <Link to='/' style={styles.button}>
        <Button
          style={styles.text}
          mode='elevated'
          compact={true}
          textColor={theme.fonts.headerColor}
        >
          To Do
        </Button>
      </Link>
      <Link to='/wishList' style={styles.button}>
        <Button
          style={styles.text}
          mode='elevated'
          compact={true}
          textColor={theme.fonts.headerColor}
        >Wish List</Button>
      </Link>
      <Link to='/accomplishedList' style={styles.button}>
        <Button
          style={styles.text}
          mode='elevated'
          compact={true}
          textColor={theme.fonts.headerColor}
        >Accomplished</Button>
      </Link>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: theme.background.header,
    width: '100%',
    height: 100,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
  button: {
    borderRadius: 10,

  },
  text: {
    fontSize: 18,
    borderRadius: 10,
    color: theme.fonts.headerColor,
    backgroundColor: theme.background.header,
    width: 120,
  },
})