import * as Location from 'expo-location'
import { LOCATION_TASK_NAME, LOCATION_CALLBACK } from '../tasks/LocationTask'

export async function requestLocationPermission() {
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync()

  if (foregroundStatus !== 'granted') {
    return
  }

  const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync()

  if (backgroundStatus !== 'granted') {
    return
  }

  await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
    accuracy: Location.Accuracy.BestForNavigation
  })

  /* Location.watchPositionAsync({
    accuracy: Location.Accuracy.BestForNavigation
  }, (params) => LOCATION_CALLBACK(params, "FORGROUND")) */
}
