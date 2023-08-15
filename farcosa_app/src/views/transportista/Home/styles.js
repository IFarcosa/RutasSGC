import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  container: {
    paddingRight: normalize(15),
    paddingLeft: normalize(15),
    paddingTop: normalize(15),
    zIndex: 2
  },
  card_item_container: {
    backgroundColor: '#fff',
    marginBottom: normalize(20),
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    borderRadius: normalize(5),
    borderColor: '#afafaf',
    borderWidth: 1
  },
  card_item_body: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txt_ruta: {
    color: '#C22B40',
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginBottom: normalize(15)
  },
  txt_item_name: {
    fontWeight: '700',
    fontSize: normalize(17),
    marginBottom: normalize(10)
  },
  txt_item_val: {
    fontSize: normalize(15)
  }
})
