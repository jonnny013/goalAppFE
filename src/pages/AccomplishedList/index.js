import MainGetComponent from '../../components/MainGetComponent.js'
import { View } from 'react-native'

const index = () => {
  return (
    <View style={{flex: 1}}>
      <MainGetComponent
        num={1}
        variable={`'toDo' AND accomplished = 1 or type = 'toGet'`}
      />
    </View>
  )
}

export default index
