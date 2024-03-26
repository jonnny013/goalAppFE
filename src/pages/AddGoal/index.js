import React, { useEffect, useState } from 'react'
import { View, Button, StyleSheet, ScrollView } from 'react-native'
import { submitNew } from '../../services/createNewServices'

import Text from '../../components/Text'
import { TextInput } from 'react-native-paper'
import PriorityLevel from './PriorityLevel'
import SetType from './SetType'
import Deadline from './Deadline'
import { useNavigate } from 'react-router-native'
import ImageUpload from './ImageUpload'
import theme from '../../styles/theme'


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

  const handleAddStep = () => {
    setSteps([...steps, ''])
  }
  const handleRemoveStep = () => {
      const updatedSteps = [...steps]
      updatedSteps.pop()
      setSteps(updatedSteps)
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotification(null)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [notification, setNotification])

  const handleSubmit = async () => {
    try {const result = await submitNew({
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
        {notification && <Text>{notification}</Text>}
        <TextInput
          style={styles.input}
          label='Name'
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          label='Info'
          multiline={true}
          value={info}
          onChangeText={setInfo}
        />
        <SetType setType={setType} type={type} />
        <PriorityLevel
          priorityLevel={priorityLevel}
          setPriorityLevel={setPriorityLevel}
        />
        {steps.map((step, index) => (
          <TextInput
            key={index}
            style={styles.input}
            label={`Step ${index + 1}`}
            value={step}
            onChangeText={text => {
              const updatedSteps = [...steps]
              updatedSteps[index] = text
              setSteps(updatedSteps)
            }}
          />
        ))}
        <View style={styles.innerContainer}>
          <Button title='Add a step' onPress={handleAddStep} />
          <Button title='Remove a step' onPress={handleRemoveStep} />
        </View>
        <ImageUpload image={image} setImage={setImage} />
        <Deadline setDeadline={setDeadline} />

        <Button title='Submit' onPress={handleSubmit} />
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
    backgroundColor: theme.background.color,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
})

export default index
