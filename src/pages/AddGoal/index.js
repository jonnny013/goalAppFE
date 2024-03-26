import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { submitNew } from '../../services/createNewServices'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from './TextInput'
import PriorityLevel from './PriorityLevel'
import SetType from './SetType'
import Deadline from './Deadline'
import { useNavigate } from 'react-router-native'
import ImageUpload from './ImageUpload'
import Steps from './Steps'

const index = () => {
  const [name, setName] = useState(null)
  const [deadline, setDeadline] = useState(null)
  const [type, setType] = useState()
  const [info, setInfo] = useState()
  const [priorityLevel, setPriorityLevel] = useState(5)
  const [image, setImage] = useState(null)
  const [steps, setSteps] = useState([])
  const [notification, setNotification] = useState(null)
  const navigate = useNavigate()

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(null)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [notification, setNotification])

  const handleSubmit = async () => {
    try {
      const result = await submitNew({
        object: { name, type, deadline, info, priorityLevel, image, steps },
      })
      if (result) {
        setNotification(result)
      }
      navigate(type === 'toDo' ? '/' : '/wishList')
    } catch (error) {
      setNotification(error)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {notification && <Text>{notification.toString()}</Text>}
        <TextInput label='Name' value={name} onChangeText={setName} />
        <TextInput label='Info' multiline={true} value={info} onChangeText={setInfo} />
        <SetType setType={setType} type={type} />
        <PriorityLevel
          priorityLevel={priorityLevel}
          setPriorityLevel={setPriorityLevel}
        />
        <Steps steps={steps} setSteps={setSteps} />
        <ImageUpload image={image} setImage={setImage} />
        <Deadline setDeadline={setDeadline} />
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
})

export default index
