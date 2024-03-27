import { Card, DataTable } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const InfoTable = ({ item }) => {
   const priorityDisplay = level => {
     let fire = ''
     for (let i = 1; i <= level; i++) {
       fire = fire.concat('🔥')
     }
     return fire
   }
  return (
    <Card style={styles.innerContainer}>
      <Card.Content>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell textStyle={styles.text}>Type:</DataTable.Cell>
            <DataTable.Cell textStyle={styles.text}>
              {item.type === 'toDo' ? 'To do 🧹' : ' Wish List 🛒'}
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell textStyle={styles.text}>Priority:</DataTable.Cell>
            <DataTable.Cell textStyle={styles.text}>
              {priorityDisplay(item.priorityLevel)}
            </DataTable.Cell>
          </DataTable.Row>


            <DataTable.Row>
              <DataTable.Cell textStyle={styles.text}>Accomplished:</DataTable.Cell>
              <DataTable.Cell textStyle={styles.text}>
                {item.accomplished === 1 ? 'Yes' : 'Not yet'}
              </DataTable.Cell>
            </DataTable.Row>

        </DataTable>
      </Card.Content>
    </Card>
  )
}
export default InfoTable

const styles = StyleSheet.create({
  innerContainer: {
    margin: 5,
    width: '100%',
    backgroundColor: theme.background.color,
  },
  text: {
    fontSize: theme.fonts.textSize,
  },
})
