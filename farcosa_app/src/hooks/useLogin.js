import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, toggleLoading] = useState()
  const [role, setRole] = useState()
  const [userData, setUserData] = useState({
    user: '',
    role: '',
    password: ''
  })

  useEffect(() => {
    let is_mounted = true

    async function loadLogin() {
      try {
        const data = JSON.parse(await AsyncStorage.setItem('@userData', value))

        if (data.user && data.role && data.password && is_mounted) {
          setIsLogin(true)
          setUserData(data)
          setRole(data.role)
        }
      } catch (error) {
      } finally {
        if (is_mounted) toggleLoading(false)
      }
    }

    loadLogin()

    return () => {
      is_mounted = false
    }
  }, [])

  return {
    isLogin,
    isLoading,
    role,
    userData,
    setIsLogin,
    toggleLoading,
    setUserData,
    setRole,
    setIsLoading: toggleLoading,
    role,
    userData
  }
}
