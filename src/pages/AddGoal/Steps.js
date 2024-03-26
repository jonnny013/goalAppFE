import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import TextInput from './TextInput'

const Steps = ({steps, setSteps}) => {
  const handleAddStep = () => {
    setSteps([...steps, ''])
  }
  const handleRemoveStep = () => {
    const updatedSteps = [...steps]
    updatedSteps.pop()
    setSteps(updatedSteps)
  }
  return (
    <>
      {steps.map((step, index) => (
        <TextInput
          key={index}
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
        <Button text='Add a step' onPress={handleAddStep} />
        <Button text='Remove a step' onPress={handleRemoveStep} />
      </View>
    </>
  )
}

export default Steps

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
})