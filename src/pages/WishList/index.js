import MainGetComponent from '../../components/MainGetComponent.js'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import { useNavigate } from 'react-router-native'
import { View } from 'react-native'
const index = () => {
  const navigate = useNavigate()
  const pan = Gesture.Pan()
    .minDistance(100)
    .onEnd(e => {
      if (e.translationX > 100) {
        navigate('/')
      }
      if (e.translationX < -100) {
        navigate('/accomplishedList')
      }
    })


  return (
    <GestureDetector gesture={pan} style={{ flex: 1, width: '100%' }}>
      <View style={{ flex: 1, width: '100%' }}>
        <MainGetComponent num={0} variable="'toGet'" />
      </View>
    </GestureDetector>
  )
}

export default index
