import normalize from 'react-native-normalize'

import { Card, Text } from 'react-native-paper'
import { View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { TIMES } from '../../../enums/time'
import { styles } from './styles'
import moment from 'moment'

export default function CardItem({ item, onPress }) {
  return (
    <Card style={styles.card_item_container}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Card.Content style={styles.card_item_body}>
          <Icon name="truck" color="#7688A6" size={normalize(30)} />
          <View style={{ marginLeft: normalize(20) }}>
            <Text style={styles.txt_ruta}>No. {item.id}</Text>
            {/* <Text style={styles.txt_item_name}>
              Bodega <Text style={styles.txt_item_val}>{item.bodega}</Text>
            </Text> */}
            <Text style={styles.txt_item_name}>
              Estado{' '}
              <Text style={styles.txt_item_val}>
                {item.appletStatus == 0 ? 'Activa' : ''}
              </Text>
            </Text>

            <Text style={styles.txt_item_name}>
              Fecha{' '}
              <Text style={styles.txt_item_val}>
                {moment.utc(item.fechaCreacion).format(TIMES.DATETIME_FORMAT)}
              </Text>
            </Text>
          </View>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  )
}
