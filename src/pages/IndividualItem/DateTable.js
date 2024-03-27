import { Card, DataTable } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const DateTable = ({item}) => {

  return (
    <Card style={styles.innerContainer}>
      <Card.Content>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell textStyle={styles.text}>Date Created:</DataTable.Cell>
            <DataTable.Cell textStyle={styles.text}>
              {item.createdAt.slice(0, 10)}
            </DataTable.Cell>
          </DataTable.Row>
          {item.deadline && (
            <DataTable.Row>
              <DataTable.Cell textStyle={styles.text}>Deadline:</DataTable.Cell>
              <DataTable.Cell textStyle={styles.text}>
                {item.deadline.slice(0, 10)}
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.deadline && (
            <DataTable.Row>
              <DataTable.Cell textStyle={styles.text}>Time left:</DataTable.Cell>
              <DataTable.Cell textStyle={styles.text}>
                {Math.ceil(
                  (new Date(item.deadline) - Date.now()) / (1000 * 60 * 60 * 24)
                )}{' '}
                days
              </DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card.Content>
    </Card>
  )
}
 export default DateTable

 const styles = StyleSheet.create({
   innerContainer: {
     margin: 10,
     width: '100%',
     backgroundColor: theme.background.color,
   },
   text: {
    fontSize: theme.fonts.textSize
   }
 })
