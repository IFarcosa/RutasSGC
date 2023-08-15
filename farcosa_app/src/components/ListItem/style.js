import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  lista_detalle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  lista_name: {
    fontSize: normalize(17),
    fontWeight: 'bold'
  },
  lista_Value: {
    fontSize: normalize(14)
  }
})
