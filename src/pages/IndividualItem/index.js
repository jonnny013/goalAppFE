import { StyleSheet, View, Image } from 'react-native'
import { useEffect, useState } from 'react'
import Text from '../../components/Text'
import { useParams } from 'react-router-native'
import theme from '../../styles/theme'
import Loading from '../../components/Loading'
import { fetchToDoListWithSteps } from '../../services/GetIndividualItem'
import Gap from '../../components/Gap'
import AddButton from '../../components/AddButton'
import GoalImage from '../../../assets/goal.png'
import { Card } from 'react-native-paper'

const index = () => {
  const { id } = useParams()
  const [item, setItem] = useState()
  useEffect(() => {
    const fetch = async () => {
      const result = await fetchToDoListWithSteps(id)
      setItem(result[0])
    }
    fetch()
  }, [])

  if (!item) return <Loading />
  console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={GoalImage} style={styles.image} resizeMode='contain' />
      </View>
      <AddButton />
      <Card style={styles.innerContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Card.Content style={styles.content}>
          {item.image && (
            <Card.Cover
              source={{ uri: item.image }}
              style={{ width: 150, height: 150, marginRight: 20 }}
            />
          )}

          <Text> {item.info}</Text>
        </Card.Content>
      </Card>

      <View style={styles.innerContainer}>
        <Text>Type: {item.type === 'todo' ? 'To do' : 'Wish List'}</Text>
        <Text>Priority: {item.priorityLevel}</Text>
      </View>
      {item.steps && item.steps[0] !== null && (
        <View style={styles.steps}>
          {item.steps.map((step, index) => (
            <View key={index}>
              <Text>
                Step {index + 1}: {step}
              </Text>
              <Gap />
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    width: '95%',
  },
  innerContainer: {
    margin: 10,
    width: '100%',
    backgroundColor: theme.background.color,
  },
  steps: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%',
  },
  image: {
    flex: 1,
    width: 300,
    height: 100,
  },
  imageContainer: {
    width: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  content: {
    flexDirection: 'row',
  },
  title: { fontSize: theme.fonts.titleSize, textAlign: 'center', padding: 10 },
})
