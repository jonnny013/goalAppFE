import { StyleSheet, Text } from 'react-native'
import theme from '../styles/theme'
import { Button } from 'react-native-paper'

const StandardButton = ({onPress, text}) => {
  return (
    <Button onPress={onPress} style={styles.button} mode='elevated'>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  )
}

export default StandardButton

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderColor: theme.fonts.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: theme.fonts.textSize,
    color: theme.fonts.buttonColor,
  },
})