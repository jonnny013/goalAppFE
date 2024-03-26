import MainGetComponent from '../../components/MainGetComponent.js'
import { View } from 'react-native'
import { GestureDetector, Gesture} from 'react-native-gesture-handler'
import { useNavigate } from 'react-router-native'

const index = () => {
  const navigate = useNavigate()
  const pan = Gesture.Pan().minDistance(100).onEnd((e) => {
    if (e.translationX > 100){
      navigate('/wishList')
    }
  })

  return (
    <GestureDetector gesture={pan} >
      <View style={{ flex: 1 }}>
        <MainGetComponent
          num={1}
          variable={`'toDo' AND accomplished = 1 or type = 'toGet'`}
        />
      </View>
    </GestureDetector>
  )
}

export default index
