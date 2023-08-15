import { Tooltip } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { AntDesign as AntIcon } from '@expo/vector-icons'

import normalize from 'react-native-normalize'

export default function RenderMark({ elm, invoiceDenied }) {
  const isDenied = invoiceDenied.includes(elm.factura)

  return (
    <Tooltip
      title={isDenied ? 'Rechazado' : 'Entregado'}
      enterTouchDelay={0}
      leaveTouchDelay={500}
    >
      <TouchableOpacity onPress={() => {}}>
        <AntIcon
          name={isDenied ? 'closesquareo' : 'checksquareo'}
          color={isDenied ? '#C22B40' : '#1C3A6C'}
          size={normalize(30)}
        />
      </TouchableOpacity>
    </Tooltip>
  )
}
