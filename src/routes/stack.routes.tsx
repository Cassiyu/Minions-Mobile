import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../types/navigation'
import Profile from '../screens/Profile'

const StackNavigator = createNativeStackNavigator<RootStackParamsList>()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}