import moment from 'moment/moment'

import { ScrollView, View } from 'react-native'
import { Card, DataTable, Text } from 'react-native-paper'
import { Fragment } from 'react'

import { styles } from './style'
import { TIMES } from '../../../enums/time'

import RenderMark from './RenderMark'
import RenderMenu from './RenderMenu'
import ModalDenied from './ModalDenied'
import ModalDelivered from './ModalDelivered'
import useRutaState from './useRutaState'
import ListItem from '../../../components/ListItem'

export default function RutaView() {
  const {
    isLoading,
    isFetching,
    data,
    route,
    invoiceDelivered,
    invoiceDenied,
    toggleAproveModal,
    toggleDeniedModal,
    aproveModal,
    aproveComment,
    activeInvoice,
    deniedModal,
    deniedReason,
    deniedComment,
    setAproveComment,
    markAsDelivered,
    setActiveInvoice,
    setDeniedComment,
    setDeniedReason,
    markAsDenied
  } = useRutaState()

  if (isLoading || isFetching) {
    return <></>
  }

  return (
    <Fragment>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.detalles_header}>
            <Text style={styles.txt_detalles}>Detalles</Text>
            <Text style={styles.txt_fecha}>
              {moment.utc(data.ruta.fechaCreacion).format(TIMES.DATETIME_FORMAT)}
            </Text>
          </View>
          <Card style={styles.card}>
            <Card.Content>
              {/* <ListItem itemName={'Bodega: '} itemValue={data.bodega} /> */}
              <ListItem
                itemName={'Vehículo: '}
                itemValue={`${data.vehiculo.descripcion} ${data.vehiculo.placa}`}
              />
              <ListItem itemName={'Conductor: '} itemValue={data.conductor.nombre} />
              <ListItem
                itemName={'Estado: '}
                itemValue={data.ruta.appletStatus == 0 ? 'ACTIVA' : ''}
              />
            </Card.Content>
          </Card>

          <Text style={styles.txt_detalles}>Facturas</Text>
          <DataTable style={styles.table}>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 2 }}>No. #</DataTable.Title>
              <DataTable.Title style={{ flex: 3 }}>Fecha</DataTable.Title>
              <DataTable.Title style={{ flex: 4 }}>Enviado a</DataTable.Title>
              <DataTable.Title style={{ flex: 1 }}>Más</DataTable.Title>
            </DataTable.Header>
            {data?.facturas?.map((elm, i) => (
              <DataTable.Row key={i}>
                <DataTable.Cell style={{ flex: 2 }}>{elm.factura}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 3 }}>
                  {moment.utc(elm.fechaHora).format(TIMES.DATETIME_FORMAT)}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 4 }}>{elm.embarcarA}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 1 }}>
                  {invoiceDelivered.includes(elm.factura) ||
                  invoiceDenied.includes(elm.factura) ? (
                    <RenderMark elm={elm} invoiceDenied={invoiceDenied} />
                  ) : (
                    <RenderMenu
                      item={elm}
                      ruta={route.params}
                      toggleAproveModal={toggleAproveModal}
                      toggleDeniedModal={toggleDeniedModal}
                      setActiveInvoice={setActiveInvoice}
                    />
                  )}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      </ScrollView>

      {/* Modal Entregado */}
      <ModalDelivered
        aproveModal={aproveModal}
        aproveComment={aproveComment}
        setAproveComment={setAproveComment}
        activeInvoice={activeInvoice}
        markAsDelivered={markAsDelivered}
        toggleAproveModal={toggleAproveModal}
      />

      {/* Modal Rechazado */}
      <ModalDenied
        deniedModal={deniedModal}
        toggleDeniedModal={toggleDeniedModal}
        deniedReason={deniedReason}
        deniedComment={deniedComment}
        setDeniedReason={setDeniedReason}
        setDeniedComment={setDeniedComment}
        activeInvoice={activeInvoice}
        markAsDenied={markAsDenied}
      />
    </Fragment>
  )
}
