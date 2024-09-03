import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './drawer.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}