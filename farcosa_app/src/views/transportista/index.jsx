import normalize from 'react-native-normalize'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderRight, HeaderLeft } from '../../components/HeaderComponent'

import HomeView from './Home'
import RutaView from './Ruta'
import RutaDetalleView from './RutaDetalle'

const Stack = createNativeStackNavigator()

export default function TransportistaView() {
  const defaultOptions = {
    headerLeft: () => <HeaderLeft />,
    headerStyle: {
      backgroundColor: '#1C3A6C'
    },
    headerTitleStyle: {
      color: '#ffffff',
      fontSize: normalize(22),
      fontWeight: 'bold'
    },
    headerRight: () => <HeaderRight />
  }

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        ...defaultOptions,
        statusBarTranslucent: true
      }}
    >
      <Stack.Screen name="home" component={HomeView} options={{ title: 'Mis Rutas' }} />
      <Stack.Screen name="ruta" component={RutaView} />
      <Stack.Screen name="ruta_detalle" component={RutaDetalleView} />
    </Stack.Navigator>
  )
}
