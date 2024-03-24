import { StatusBar } from 'expo-status-bar';
import Login from './src/pages/Login'
import { NativeRouter } from 'react-router-native';
import Main from './src/Main';

export default function App() {
  const user = true

  if (!user) {
    return (
      <Login />
    )
  }
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style='auto' />
    </>
  )
}


