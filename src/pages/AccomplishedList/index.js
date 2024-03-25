import MainGetComponent from '../../components/MainGetComponent.js'

const index = () => {
  return <MainGetComponent num={1} variable={`'toDo' AND accomplished = 1 or type = 'toGet'`} />
}

export default index
