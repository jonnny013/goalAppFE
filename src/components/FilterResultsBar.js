import { StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../styles/theme'
import RNPickerSelect from 'react-native-picker-select'
import Octicons from '@expo/vector-icons/Octicons'

const sortingOptions = [
  { label: 'Date Created', value: 'dateCreated' },
  { label: 'Priority', value: 'priority' },
  { label: 'Deadline', value: 'deadline' },
]

const FilterResultsBar = ({list, setList}) => {

   const handleSortBy = criteria => {
     let sortedList = [...list]

     if (criteria === 'dateCreated') {
       sortedList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
     } else if (criteria === 'priority') {
       sortedList.sort((a, b) => a.priorityLevel - b.priorityLevel)
     } else if (criteria === 'deadline') {
       sortedList.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
     }

     setList(sortedList)
   }
  return (
    <View style={styles.sortBar}>
      <Text>Sort By: </Text>
      <View style={styles.dropMenu}>
        <RNPickerSelect
          multiEnable={false}
          Icon={() => <Octicons name='triangle-down' size={20} />}
          onValueChange={value => handleSortBy(value)}
          items={sortingOptions}
          style={pickerSelectStyles}
        />
      </View>
    </View>
  )
}

export default FilterResultsBar

const styles = StyleSheet.create({
  sortBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: theme.gapSize.bigGap,
    marginTop: theme.gapSize.mediumGap
  },
  dropMenu: {
    minWidth: 170
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: theme.fonts.textSize,
    borderWidth: 1,
    borderColor: theme.fonts.buttonColor,
    borderRadius: 4,
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputAndroid: {
    fontSize: theme.fonts.textSize,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    paddingRight: 10,

  }
})