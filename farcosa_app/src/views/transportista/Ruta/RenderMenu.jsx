import normalize from 'react-native-normalize'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Menu, Text } from 'react-native-paper'
import { Entypo as Icon } from '@expo/vector-icons'

import useToggle from '../../../hooks/useToggle'

export default function RenderMenu({
  item,
  ruta,
  toggleAproveModal,
  toggleDeniedModal,
  setActiveInvoice
}) {
  const [menu, toggleMenu] = useToggle()
  const navigation = useNavigation()

  function seeMoreCallback() {
    toggleMenu()
    navigation.navigate(
      'ruta_detalle',
      JSON.stringify({
        ruta: ruta,
        factura: item
      })
    )
  }

  function markAsDelivered() {
    setActiveInvoice(item)

    toggleMenu()
    toggleAproveModal()
  }

  function markAsDenied() {
    setActiveInvoice(item)
    toggleMenu()
    toggleDeniedModal()
  }

  return (
    <Menu
      visible={menu}
      onDismiss={toggleMenu}
      contentStyle={{ backgroundColor: '#fff' }}
      anchor={
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="dots-three-vertical" size={normalize(20)} />
        </TouchableOpacity>
      }
    >
      <Menu.Item
        title={<Text style={{ color: '#1E9588' }}>Ver más</Text>}
        onPress={seeMoreCallback}
      />
      <Menu.Item
        title={<Text style={{ color: '#1C3A6C' }}>Marcar como entregado</Text>}
        onPress={markAsDelivered}
      />
      <Menu.Item
        title={<Text style={{ color: '#C22B40' }}>Marcar como rechazado</Text>}
        onPress={markAsDenied}
      />
    </Menu>
  )
}
