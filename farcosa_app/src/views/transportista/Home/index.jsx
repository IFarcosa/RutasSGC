import { useCallback, useState } from 'react'
import normalize from 'react-native-normalize'
import { FlatList, Image, Alert, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import { useData } from './useData'
import CardItem from './CardItem'

export default function HomeView() {
  const { isFetching, isLoading, data, refetch } = useData()
  const navigation = useNavigation()

  const onGo = useCallback(item => {
    const buttons = [
      {
        text: 'NO',
        style: 'cancel'
      },
      {
        text: 'SI',
        onPress: () => navigation.navigate('ruta', item)
      }
    ]

    Alert.alert('', `¿Partir con ruta No. ${item.id}?`, buttons)
  }, [])

  return (
    <>
      {!isFetching && !isLoading ? (
        <FlatList
          style={styles.container}
          data={data}
          refreshControl={
            <RefreshControl refreshing={isFetching || isLoading} onRefresh={refetch} />
          }
          renderItem={data => (
            <CardItem item={data.item} onPress={onGo} key={data.index} />
          )}
        />
      ) : null}

      <Image
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: normalize(250),
          height: normalize(250)
        }}
        source={require('../../../assets/triangle.png')}
      />
    </>
  )
}
