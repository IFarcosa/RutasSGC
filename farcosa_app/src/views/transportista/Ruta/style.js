import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  container: {
    paddingRight: normalize(15),
    paddingLeft: normalize(15),
    paddingTop: normalize(40)
  },
  txt_detalles: {
    fontSize: normalize(20)
  },
  txt_fecha: {
    fontSize: normalize(17)
  },
  detalles_header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    borderRadius: 0,
    marginTop: normalize(10),
    marginBottom: normalize(30),
    backgroundColor: '#fff',
    borderColor: '#afafaf',
    borderWidth: 1
  },
  table: {
    backgroundColor: '#fff',
    marginTop: normalize(10),
    marginBottom: normalize(10),
    borderColor: '#afafaf',
    borderWidth: 1
  }
})
