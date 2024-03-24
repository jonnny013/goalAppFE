import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import {Link } from 'react-router-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Link to='/' >
        <Text>To Do</Text>
      </Link>
      <Link to='/wishList' >
        <Text>Wish List</Text>
      </Link>
      <Link to='/accomplishedList' >
        <Text>Accomplished</Text>
      </Link>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    width: '100%',
    height: 100,
    padding: 10,
    paddingTop: Constants.statusBarHeight
  }
})