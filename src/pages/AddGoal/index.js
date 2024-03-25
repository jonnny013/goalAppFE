import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { submitNew } from '../../services/inputServices'
import CalendarPicker from 'react-native-calendar-picker'
import Text from '../../components/Text'
import { RadioButton, TextInput } from 'react-native-paper'
import PriorityLevel from './PriorityLevel'


const index = () => {
  const [name, setName] = useState('')
  const [deadline, setDeadline] = useState(null)
  const [type, setType] = useState('toDo')
  const [info, setInfo] = useState('')
  const [priorityLevel, setPriorityLevel] = useState(5)
  const [image, setImage] = useState(null)
  const [steps, setSteps] = useState(['']) 
  const [wantsDeadline, setWantsDeadline] = useState(false)
console.log(priorityLevel)
  const handleAddStep = () => {
    setSteps([...steps, ''])
  }
  const handleRemoveStep = () => {
    if (steps.length > 1) {
      const updatedSteps = [...steps]
      updatedSteps.pop() 
      setSteps(updatedSteps)
    }
  }

  const handleSubmit = () => {
    submitNew({object: {name, type, deadline, info, priorityLevel, image, steps}})
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} label='Name' value={name} onChangeText={setName} />

      <TextInput
        style={styles.input}
        label='Info'
        multiline={true}
        value={info}
        onChangeText={setInfo}
      />
      <PriorityLevel priorityLevel={priorityLevel} setPriorityLevel={setPriorityLevel} />
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
        <Button title='Add Step' onPress={handleAddStep} />
        <Button title='Remove Step' onPress={handleRemoveStep} />
      </View>
      <View style={styles.innerContainer}>
        <Text>Is there a deadline?</Text>
        <View style={styles.innerContainer}>
          <RadioButton.Android
            style={{ borderWidth: 1 }}
            uncheckedColor='#007bff'
            color='#007bff'
            value={true}
            status={wantsDeadline ? 'checked' : 'unchecked'}
            onPress={() => setWantsDeadline(true)}
          />
          <Text>Yes</Text>

          <RadioButton.Android
            style={{ borderWidth: 1 }}
            uncheckedColor='#007bff'
            color='#007bff'
            value={false}
            status={wantsDeadline ? 'unchecked' : 'checked'}
            onPress={() => setWantsDeadline(false)}
          />
          <Text>No</Text>
        </View>
      </View>
      {wantsDeadline && <CalendarPicker onDateChange={setDeadline} />}

      <Button title='Submit' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#B8E2F2'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
})

export default index