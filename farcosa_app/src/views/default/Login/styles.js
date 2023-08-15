import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3'
  },
  card_container: {
    width: normalize(300),
    minHeight: normalize(300),
    backgroundColor: '#ffffff'
  },
  bottom_image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: normalize(250),
    height: normalize(250)
  },
  top_image: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{ rotate: '180deg' }],
    width: normalize(200),
    height: normalize(200)
  },
  input_style: {
    marginBottom: normalize(20)
  },
  check_box_container: {
    position: 'relative',
    marginBottom: normalize(20)
  },
  check_box_with_label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  login_btn: {
    borderRadius: 5,
    backgroundColor: '#1C3A6C'
  },
  logo_card: {
    position: 'relative',
    marginBottom: normalize(30),
    marginTop: normalize(30),
    width: '100%'
  },
  logo_container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  logo_image: {
    height: normalize(30),
    width: normalize(150),
    resizeMode: 'contain'
  }
})
