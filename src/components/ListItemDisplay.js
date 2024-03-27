import { StyleSheet, View, Image, Animated, Easing } from 'react-native'
import React, {useState, useEffect} from 'react'
import CheckBox from 'react-native-check-box'
import Text from './Text'
import { Link } from 'react-router-native'
import Entypo from '@expo/vector-icons/Entypo'
import { updateAccomplished } from '../services/updateServices'
import theme from '../styles/theme'

const ListItemDisplay = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.accomplished === 1)
  const [animationValue] = React.useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true, // Enable native driver for performance
    }).start()
  }, [])

    const fadeIn = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1], 
    })

  const handleAccomplished = async () => {
    try {
      setIsChecked(prevState => !prevState)
      await updateAccomplished({ num: isChecked ? 0 : 1, item })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Animated.View style={[{ opacity: fadeIn }]}>
      <Link to={`/items/${item.id}`} style={{ borderRadius: 5 }}>
        <View style={styles.container}>
          <CheckBox
            style={{}}
            onClick={handleAccomplished}
            isChecked={isChecked}
            checkBoxColor='green'
          />
          <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>
            {item.name}
          </Text>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.img} />
          ) : (
            <Entypo name='dots-three-vertical' size={40} />
          )}
        </View>
      </Link>
    </Animated.View>
  )
}

export default ListItemDisplay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: theme.background.cardColor,
    borderRadius: 5,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  name: {
    maxWidth: 200,
    maxHeight: 70,
  },
  img: { height: 70, width: 70, borderRadius: 5 },
})
