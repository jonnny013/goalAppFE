import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { editToDoItem } from '../../services/updateServices'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../AddGoal/TextInput'
import PriorityLevel from '../AddGoal/PriorityLevel'
import SetType from '../AddGoal/SetType'
import Deadline from '../AddGoal/Deadline'
import { useNavigate, useParams } from 'react-router-native'
import ImageUpload from '../AddGoal/ImageUpload'
import { fetchToDoListWithSteps } from '../../services/GetIndividualItem'
import Steps from '../AddGoal/Steps'

const index = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: null,
    deadline: null,
    type: null,
    info: null,
    priorityLevel: 5,
    image: null,
    steps: [],
  })
  const [notification, setNotification] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchToDoListWithSteps(id)
      updateFormData(result[0])
    }
    fetch()
  }, [])
  const updateFormData = data => {
    setFormData(prevData => ({
      ...prevData,
      name: data.name,
      deadline: data.deadline,
      type: data.type,
      info: data.info,
      priorityLevel: data.priorityLevel,
      image: data.image,
      steps: data.steps[0] === null ? [] : data.steps || [],
    }))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(null)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [notification, setNotification])

  const handleSubmit = async () => {
    try {
      const result = await editToDoItem({
        object: formData, id
      })
      if (result) {
        console.log(result)
        setNotification(result)
      }
      navigate(formData.type === 'toDo' ? '/' : '/wishList')
    } catch (error) {
      console.log(error)
      setNotification(error)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {notification && <Text>{notification.toString()}</Text>}
        <TextInput
          style={styles.input}
          label='Name'
          value={formData.name}
          onChangeText={text => setFormData({ ...formData, name: text })}
        />

        <TextInput
          style={styles.input}
          label='Info'
          multiline={true}
          value={formData.info}
          onChangeText={text => setFormData({ ...formData, info: text })}
        />
        <SetType
          setType={type => setFormData({ ...formData, type })}
          type={formData.type}
        />
        <PriorityLevel
          priorityLevel={formData.priorityLevel}
          setPriorityLevel={level => setFormData({ ...formData, priorityLevel: level })}
        />
        <Steps
          steps={formData.steps}
          setSteps={updatedSteps => setFormData({ ...formData, steps: updatedSteps })}
        />
        <ImageUpload
          image={formData.image}
          setImage={image => setFormData({ ...formData, image })}
        />
        <Deadline setDeadline={deadline => setFormData({ ...formData, deadline })} deadline={formData.deadline} />

        <Button text='Submit' onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxWidth: '100%',
    height: '100%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#B8E2F2',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  scroll: {
    flex: 1,
    maxWidth: '100%',
  },
})

export default index
