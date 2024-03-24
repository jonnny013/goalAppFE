import { StyleSheet, Text, Pressable } from 'react-native'
import theme from '../styles/theme'

const Button = ({handleSubmit, text}) => {
  return (
    <Pressable onPress={handleSubmit} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: theme.fonts.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: theme.fonts.titleSize,
    color: theme.fonts.buttonColor,
  },
})