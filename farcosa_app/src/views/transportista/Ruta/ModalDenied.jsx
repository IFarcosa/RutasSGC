import { View } from 'react-native'
import normalize from 'react-native-normalize'
import { Button, Card, Modal, TextInput } from 'react-native-paper'

export default function ModalDenied({
  deniedModal,
  toggleDeniedModal,
  deniedReason,
  setDeniedReason,
  deniedComment,
  setDeniedComment,
  activeInvoice,
  markAsDenied
}) {
  return (
    <Modal visible={deniedModal} style={{ padding: normalize(20) }}>
      <Card style={{ backgroundColor: '#fff', padding: normalize(20) }}>
        <Card.Content>
          <TextInput
            value={deniedReason}
            onChangeText={val => setDeniedReason(val)}
            mode="outlined"
            style={{ backgroundColor: '#fff' }}
            outlineColor="#DBDBDB"
            activeOutlineColor="#DBDBDB"
            numberOfLines={5}
            label={'Razón'}
          />

          <TextInput
            value={deniedComment}
            onChangeText={val => setDeniedComment(val)}
            mode="outlined"
            multiline
            style={{ backgroundColor: '#fff' }}
            outlineColor="#DBDBDB"
            activeOutlineColor="#DBDBDB"
            numberOfLines={5}
            label={'Comentario'}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: normalize(20)
            }}
          >
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: '#C22B40',
                marginRight: normalize(10)
              }}
              mode="contained"
              onPress={toggleDeniedModal}
            >
              Cancelar
            </Button>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: '#1C3A6C'
              }}
              mode="contained"
              onPress={() =>
                markAsDenied(activeInvoice.factura, deniedReason, deniedComment)
              }
            >
              Aceptar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </Modal>
  )
}
