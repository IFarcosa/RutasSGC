import axios from 'axios'
import { useState } from 'react'
import { View, Image, Platform, ToastAndroid } from 'react-native'
import { Card, Text, TextInput, Checkbox, Button } from 'react-native-paper'

import { styles } from './styles'
import { API } from '../../../enums/api'
import { ROLES } from '../../../enums/roles'
import { useUserContext } from '../../../context/userContext'

import useToggle from '../../../hooks/useToggle'
import getToken from '../../../providers/getToken'

const TriangleImage = require('../../../assets/triangle.png')
const LogoImage = require('../../../assets/farcosa.png')

export default function LoginView() {
  const userContext = useUserContext()

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [viewPassword, toggleViewPassword] = useToggle()
  const [remember, toggleRemember] = useToggle()
  const [usingDemo, toggleUseDemo] = useToggle()

  async function LoginRest() {
    if (username == '' || password == '') {
      return
    }

    if (usingDemo) {
      axios.defaults.baseURL = API.desa
    } else {
      axios.defaults.baseURL = API.prod
    }

    const isAuth = await getToken(username, password)

    if (!isAuth) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Usuarios o contraseñas incorrectos', ToastAndroid.LONG)
      }
      return
    }

    userContext.setUserData({
      user: username,
      password: password,
      role: ROLES.TRANSPORTISTA
    })

    userContext.setIsLogin(true)
    userContext.setIsLoading(false)
  }

  return (
    <View style={styles.login_container}>
      <Image style={styles.top_image} source={TriangleImage} />
      <Image style={styles.bottom_image} source={TriangleImage} />

      <Card style={styles.card_container}>
        <Card.Content>
          <View style={styles.logo_card}>
            <View style={styles.logo_container}>
              <Image style={styles.logo_image} source={LogoImage} />
            </View>
          </View>

          <TextInput
            style={styles.input_style}
            mode="outlined"
            label={'Usuario'}
            value={username}
            onChangeText={val => setUserName(val)}
            outlineColor="#1C3A6C"
            activeOutlineColor="#1C3A6C"
          />
          <TextInput
            style={styles.input_style}
            outlineColor="#1C3A6C"
            activeOutlineColor="#1C3A6C"
            secureTextEntry={!viewPassword}
            mode="outlined"
            label={'Password'}
            value={password}
            onChangeText={val => setPassword(val)}
            right={
              viewPassword ? (
                <TextInput.Icon onPress={toggleViewPassword} icon="eye" />
              ) : (
                <TextInput.Icon onPress={toggleViewPassword} icon="eye-off" />
              )
            }
          />

          <View style={styles.check_box_container}>
            <View style={styles.check_box_with_label}>
              <Checkbox
                status={remember ? 'checked' : 'unchecked'}
                onPress={toggleRemember}
              />
              <Text onPress={toggleRemember}>Recuardame</Text>

              <Checkbox
                status={usingDemo ? 'checked' : 'unchecked'}
                onPress={toggleUseDemo}
              />
              <Text onPress={toggleUseDemo}>Entrar Demo</Text>
            </View>
          </View>

          <Button onPress={LoginRest} mode="contained" style={styles.login_btn}>
            Iniciar Sesión
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
}
