import { createContext, useContext, useState } from 'react'
import useLogin from '../hooks/useLogin'

const UserContext = createContext()

export function useUserContextConsumer() {
  const data = useLogin()

  return {
    ...data
  }
}

export function UserContextProvider({ children, value }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/**
 *
 * @returns {ReturnType<typeof useUserContextConsumer>}
 */
export function useUserContext() {
  return useContext(UserContext)
}
