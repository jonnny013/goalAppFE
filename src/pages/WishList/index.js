import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddButton from '../../components/AddButton'

const index = () => {
  return (
    <View style={styles.container}>
      <AddButton />
      <Text>Wish List</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
