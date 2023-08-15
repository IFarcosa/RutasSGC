import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ROLES } from './enums/roles'
import { useUserContextConsumer, UserContextProvider } from './context/userContext'

import LoginView from './views/default/Login'
import TransportistaView from './views/transportista'
import { PaperProvider } from 'react-native-paper'

const ROUTER = {
  [ROLES.TRANSPORTISTA]: TransportistaView
}

const queryClient = new QueryClient()

export default function App() {
  const user = useUserContextConsumer()
  const { isLogin, isLoading, userData } = user

  function renderRole() {
    if (!userData?.role) return <LoginView />

    const RoleView = ROUTER[userData.role]

    if (RoleView) return <RoleView />

    return <LoginView />
  }

  if (isLoading) {
    return <></>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider value={user}>
        <PaperProvider>
          <NavigationContainer>
            <StatusBar style={isLogin ? 'light' : 'dark'} />
            {!isLogin ? <LoginView /> : null}
            {isLogin ? renderRole() : null}
          </NavigationContainer>
        </PaperProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}
