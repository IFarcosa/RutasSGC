import normalize from 'react-native-normalize'

import { Entypo as Icon } from '@expo/vector-icons'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { styles } from './style'

export default function ListItem({ itemName, itemValue }) {
  return (
    <View style={styles.lista_detalle}>
      <Icon name="dot-single" size={normalize(30)} />
      <Text style={styles.lista_name}>
        {itemName} <Text style={styles.lista_Value}>{itemValue}</Text>
      </Text>
    </View>
  )
}
