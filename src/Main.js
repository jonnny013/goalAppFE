import { StyleSheet,  View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import React from 'react'
import ToDoList from './pages/ToDoList'
import WishList from './pages/WishList'
import AccomplishedList from './pages/AccomplishedList'
import Header from './components/Header'


const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path='/wishList' element={<WishList />} />
        <Route path='/accomplishedList' element={<AccomplishedList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})