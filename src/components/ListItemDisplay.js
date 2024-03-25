import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import CheckBox from 'react-native-check-box'
import Text from './Text'
import { Link } from 'react-router-native'
import Entypo from '@expo/vector-icons/Entypo'

const ListItemDisplay = ({ item }) => {
  const handleAccomplished = () => {
    console.log(item.id, 'Update this IDs state')
  }

  return (
    <View style={styles.container}>
      <CheckBox
        style={{}}
        onClick={handleAccomplished}
        isChecked={item.accomplished === 1 ? true : false}
        checkBoxColor='green'
      />
      <Link to={`/items/${item.id}`}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>
          {item.name}
        </Text>
      </Link>
      <Link to={`/items/${item.id}`}>
        {item.image ? <Image source={{ uri: item.image }} style={styles.img} /> : <Entypo name='dots-three-vertical' size={40} />}
      </Link>
    </View>
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
    height: 80
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
