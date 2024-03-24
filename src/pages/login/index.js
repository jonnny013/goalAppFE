import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Gap from '../../components/Gap'
import theme from '../../styles/theme'
import Button from '../../components/Button'
import axios from 'axios'
import { url } from '../../utils/constants'

const index = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async () => {
   Alert.alert(email, password)
   // const result = await axios.post(`${url}/login`, {email, password})

  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Here</Text>
      <Gap gapSize={theme.gapSize.mediumGap} />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <Gap gapSize={theme.gapSize.mediumGap} />
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Gap gapSize={theme.gapSize.mediumGap} />
      <Button handleSubmit={handleSubmit} text='Login' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.fonts.titleSize,
    color: theme.fonts.standardColor
  },
  input: {
    padding: theme.input.padding,
    fontSize: theme.fonts.inputSize,
  },

})