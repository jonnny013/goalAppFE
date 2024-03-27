import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React from 'react'
import AddButton from './AddButton'
import { AntDesign } from '@expo/vector-icons'

const GetStartedPrompt = () => {
  const [animationValue] = React.useState(new Animated.Value(0)) // State for animation value

  React.useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true, // Enable native driver for performance
    }).start()
  }, [])

   const arrowTranslateY = animationValue.interpolate({
     inputRange: [0, 1],
     outputRange: [-50, 0], // Start from top (70) and move to end (40)
   })
  const textOpacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Start with opacity 0 and fade in to 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
      <AddButton />
      <View style={styles.fixedContainer}>
        <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
          <Text style={{ fontSize: 30 }}>Create some tasks here!</Text>
        </Animated.View>
      </View>
      <Animated.View
        style={[styles.arrowContainer, { transform: [{ translateY: arrowTranslateY }] }]}
      >
        <AntDesign name='arrowdown' size={24} color='gray' style={styles.arrow} />
      </Animated.View>
    </View>
  )
}

export default GetStartedPrompt

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedContainer: {
    position: 'absolute',
    bottom: 150,
    right: 60,
  },
  arrow: {
    position: 'absolute',
    bottom: 70,
    right: 40,
  },
})