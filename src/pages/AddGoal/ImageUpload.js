import { Image, View } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import Button from '../../components/Button'

const ImageUpload = ({image, setImage}) => {

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button text={image ? 'Change image' : 'Choose an image'}onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <Button text='Remove image' onPress={() => setImage(null)} />
        </>
      )}
    </View>
  )
}

export default ImageUpload
