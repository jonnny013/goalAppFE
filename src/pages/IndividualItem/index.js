import { StyleSheet, View, Image } from 'react-native'
import { useEffect, useState } from 'react'
import Text from '../../components/Text'
import { useParams } from 'react-router-native'
import theme from '../../styles/theme'
import Loading from '../../components/Loading'
import { fetchToDoListWithSteps } from '../../services/GetIndividualItem'
import Gap from '../../components/Gap'
import AddButton from '../../components/AddButton'

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
  console.log('item: ', item)
  return (
    <View style={styles.container}>
      <AddButton />
      <View style={styles.innerContainer}>
        {item.image && (
          <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
        )}
        <Text>{item.name}</Text>
      </View>
      <View style={styles.innerContainer}>
        {item.info && <Text>Info: {item.info}</Text>}
      </View>
      <View style={styles.innerContainer}>
        <Text>Type: {item.type === 'todo' ? 'To do' : 'Wish List'}</Text>
        <Text>Priority: {item.priorityLevel}</Text>
      </View>
      {item.steps && (
        <View style={styles.steps}>
          {item.steps.map((step, index) => (
            <>
              <Text key={index}>
                Step {index}: {step}
              </Text>
              <Gap />
            </>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.gapSize.smallGap,
    width: '95%',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '100%',
    borderRadius: 5,
  },
  steps: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '100%',
  },
})
