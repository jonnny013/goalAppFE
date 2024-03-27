import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import {Link } from 'react-router-native'
import theme from '../styles/theme'

const Header = () => {
  return (
    <View style={styles.container}>
      <Link to='/' style={styles.button}>
        <Text style={styles.text}>To Do</Text>
      </Link>
      <Link to='/wishList' style={styles.button}>
        <Text style={styles.text}>Wish List</Text>
      </Link>
      <Link to='/accomplishedList' style={styles.button}>
        <Text style={styles.text}>Accomplished</Text>
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
    paddingTop: Constants.statusBarHeight
  },
  button: {
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.background.button,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: theme.fonts.headerColor
  }
})