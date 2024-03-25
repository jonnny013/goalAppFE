import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'
import CalendarPicker from 'react-native-calendar-picker'
import { useState } from 'react'
import Text from '../../components/Text'

const Deadline = ({setDeadline}) => {
    const [wantsDeadline, setWantsDeadline] = useState(false)

    const handleDate = (date) => {
      setDeadline(date.toISOString())
    }
  return (
    <>
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
            onPress={() => {
              setWantsDeadline(false)
              setDeadline(null)
            }}
          />
          <Text>No</Text>
        </View>
      </View>
      {wantsDeadline && <CalendarPicker onDateChange={handleDate} />}
    </>
  )
}

export default Deadline

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
})