import { useEffect } from 'react'
import * as TaskManager from 'expo-task-manager'

import ReactApp from './src/App'
import { LOCATION_CALLBACK, LOCATION_TASK_NAME } from './src/tasks/LocationTask'
import { requestLocationPermission } from './src/permissions/Location'

TaskManager.defineTask(LOCATION_TASK_NAME, LOCATION_CALLBACK)

export default function App() {
  // ask for permissions when app starts
  useEffect(() => {
    requestLocationPermission()
  }, [])

  return <ReactApp />
}
