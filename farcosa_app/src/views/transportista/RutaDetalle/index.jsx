import moment from 'moment'
import normalize from 'react-native-normalize'
import { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import { ScrollView, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { styles } from '../Ruta/style'
import { TIMES } from '../../../enums/time'
import ListItem from '../../../components/ListItem'

export default function RutaDetalleView() {
  const { params: query } = useRoute()
  const [params, setParams] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
    if (query != null && query != '' && query != undefined) {
      let data = JSON.parse(query)
      setParams(data)

      navigation.setOptions({
        title: `Ruta No. ${data?.ruta?.id}`
      })
    }
  }, [query])

  if (!params) return <></>

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.detalles_header}>
          <Text style={styles.txt_detalles}>Detalles</Text>
          <Text style={styles.txt_fecha}>
            {moment.utc(params?.factura?.fechaHora).format(TIMES.DATETIME_FORMAT)}
          </Text>
        </View>

        <Card
          style={{
            borderRadius: 0,
            marginTop: normalize(10),
            marginBottom: normalize(30),
            borderColor: '#afafaf',
            borderWidth: 1
          }}
        >
          <Card.Content style={{ paddingRight: normalize(25) }}>
            <ListItem
              itemName={'Factura numero: '}
              itemValue={params?.factura?.factura}
            />
            <ListItem
              itemName={'Fecha Factura: '}
              itemValue={moment(params?.factura?.fechaHora).format(TIMES.DATE_FORMAT)}
            />
            <ListItem itemName={'Enviado a: '} itemValue={params?.factura?.embarcarA} />
            <ListItem
              itemName={'Zona: '}
              itemValue={params?.factura?.zonaObject.nombre}
            />
            <ListItem
              itemName={'Dirección: '}
              itemValue={params?.factura?.direccionFactura}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  )
}
