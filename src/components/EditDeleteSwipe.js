import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import FA from '@expo/vector-icons/FontAwesome6'
import theme from '../styles/theme'
import { useNavigate } from 'react-router-native'


const EditDeleteSwipe = ({id, name, closeSwipeable}) => {
  const navigate = useNavigate()

  const handleDelete = () => {
   Alert.alert('Confirm delete', `Are you sure you want to delete ${name}?`, [
     {
       text: 'Cancel',
       onPress: () => {
         closeSwipeable()
       },
       style: 'cancel',
     },
     {
       text: 'OK',
       onPress: () => {
         console.log('handle delete here')
         closeSwipeable()
       },
     },
   ])
  }
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={handleDelete}>
        <View style={[styles.container, styles.deleteColor]}>
          <FA name='trash' size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(`/editGoal/${id}`)}>
        <View style={[styles.container, styles.editColor]}>
          <FA name='pen-to-square' size={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default EditDeleteSwipe

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 100,
    borderRadius: 5,
  },
  deleteColor: {
    backgroundColor: theme.background.deleteColor,
  },
  editColor: {
    backgroundColor: theme.background.editColor,
  },
})