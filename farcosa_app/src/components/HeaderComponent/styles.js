import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  header_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1C3A6C'
  },
  title_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: normalize(22),
    fontWeight: 'bold'
  }
})
