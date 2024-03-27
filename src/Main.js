import { StyleSheet } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import React, { useEffect } from 'react'
import ToDoList from './pages/ToDoList'
import WishList from './pages/WishList'
import AccomplishedList from './pages/AccomplishedList'
import Header from './components/Header'
import AddGoal from './pages/AddGoal'
import IndividualItem from './pages/IndividualItem'
import { initializeDatabase } from './services/db.js'
import EditGoal from './pages/EditGoal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import theme from './styles/theme.js'

const Main = () => {
  useEffect(() => {
    const initialize = async () => {
      await initializeDatabase()
    }
    initialize()
  }, [])
  return (
    <GestureHandlerRootView style={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path='/wishList' element={<WishList />} />
        <Route path='/accomplishedList' element={<AccomplishedList />} />
        <Route path='/items/:id' element={<IndividualItem />} />
        <Route path='/addNew' element={<AddGoal />} />
        <Route path='/editGoal/:id' element={<EditGoal />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </GestureHandlerRootView>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
