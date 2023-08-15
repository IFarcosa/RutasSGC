export const LOCATION_TASK_NAME = 'background-location-task'

export function LOCATION_CALLBACK(params, notifier = 'back') {
  return

  if (notifier == 'back') {
    const { data, error } = params
    const location = data.locations[0]

    console.log(
      `${notifier}: ` + location?.coords?.latitude + ' - ' + location?.coords?.longitude
    )
  } else {
    console.log(
      `${notifier}: ` + params?.coords?.latitude + ' - ' + params?.coords?.longitude
    )
  }

  const { data, error } = params

  if (error) {
    // Error occurred - check `error.message` for more details.
    return
  }
  if (data) {
    const { locations } = data
    // do something with the locations captured in the background
  }
}
