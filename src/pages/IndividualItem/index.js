import { StyleSheet, View, Image, ScrollView } from 'react-native'
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

  const priorityDisplay = (level) => {
    let fire = ''
    for (let i = 1; i <= level; i++ ) {
      fire = fire.concat('🔥')
    }
    return fire
  }

  if (!item) return <Loading />
  console.log(item)
  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={GoalImage} style={styles.image} resizeMode='contain' />
        </View>
        <AddButton text='Edit' location={`/editGoal/${item.id}`} />
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

        <Card style={styles.innerContainer}>
          <Card.Content>
            <Text>Type: {item.type === 'toDo' ? 'To do 🧹' : ' Wish List 🛒'}</Text>
            <Gap />
            <Text>Priority: {priorityDisplay(item.priorityLevel)}</Text>
          </Card.Content>
        </Card>
        {item.steps &&
          item.steps[0] !== null &&
          item.steps.map((step, index) => (
            <Card key={index} style={styles.steps}>
              <Card.Content>
                <Text>
                  Step {index + 1}: {step}
                </Text>
              </Card.Content>
            </Card>
          ))}
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    maxWidth: '100%',
    padding: 20,
    height: '100%',
  },
  innerContainer: {
    margin: 10,
    width: '100%',
    backgroundColor: theme.background.color,
  },
  steps: {
    margin: 5,
    width: '100%',
    backgroundColor: theme.background.color,
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
