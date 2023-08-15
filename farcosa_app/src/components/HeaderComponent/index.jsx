import normalize from 'react-native-normalize'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export function HeaderLeft() {
  const navigation = useNavigation()

  if (!navigation.canGoBack()) return <></>

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="arrow-back"
        style={{ marginRight: normalize(20) }}
        color={'#fff'}
        size={normalize(22)}
      />
    </TouchableOpacity>
  )
}

export function HeaderRight() {
  return <Icon name="settings" color={'#fff'} size={normalize(22)} />
}
