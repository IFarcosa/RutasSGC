import { Alert } from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigation, useRoute } from '@react-navigation/native'

import { getRutaDetalle } from '../../../providers/getRutaDetalle'

import useToggle from '../../../hooks/useToggle'
import putFacturaEstado from '../../../providers/putFacturaEstado'
import postCerrarRuta from '../../../providers/postCerrarRuta'

export default function useRutaState() {
  const navigation = useNavigation()
  const route = useRoute()
  const queryClient = useQueryClient()

  // active modal invoice
  const [activeInvoice, setActiveInvoice] = useState(null)

  // aproveComment
  const [aproveComment, setAproveComment] = useState('')
  const [aproveModal, toggleAproveModal] = useToggle()

  // denied
  const [deniedComment, setDeniedComment] = useState('')
  const [deniedReason, setDeniedReason] = useState('')
  const [deniedModal, toggleDeniedModal] = useToggle()

  const [invoiceDelivered, setInvoiceDelivered] = useState([])
  const [invoiceDenied, setInvoiceDenied] = useState([])

  const { isLoading, isFetching, data } = useQuery(
    [`rutaDetalle-${route.params.id}`],
    () => getRutaDetalle(route.params.id),
    { cacheTime: 0 }
  )

  const markAsDelivered = useCallback(
    (invoiceId, comment) => {
      toggleAproveModal()

      putFacturaEstado(route.params.id, invoiceId, 'S', comment).then(() =>
        setInvoiceDelivered(prev => [...prev, invoiceId])
      )

      setAproveComment('')
    },
    [toggleAproveModal, setInvoiceDelivered]
  )

  const markAsDenied = useCallback(
    (invoiceId, reason, comment) => {
      if (reason == '') {
        return
      }

      if (comment !== '') {
        reason += ' - ' + comment
      }

      toggleDeniedModal()
      putFacturaEstado(route.params.id, invoiceId, 'R', reason).then(() =>
        setInvoiceDenied(prev => [...prev, invoiceId])
      )

      setDeniedReason('')
      setDeniedComment('')
    },
    [toggleDeniedModal, setInvoiceDenied]
  )

  useEffect(() => {
    let is_mounted = true
    let params = route.params

    if (is_mounted) {
      navigation.setOptions({
        title: `Ruta No. ${params.id}`
      })
    }

    return () => {
      is_mounted = false
    }
  }, [])

  useEffect(() => {
    async function callYes() {
      const rutaId = route.params.id
      try {
        await postCerrarRuta(rutaId)

        setInvoiceDelivered([])
        setInvoiceDenied([])

        queryClient.invalidateQueries({
          queryKey: ['rutas']
        })

        navigation.goBack()
      } catch (error) { }
    }

    async function cerrarRuta() {
      const buttons = [
        { text: 'NO', style: 'cancel' },
        { text: 'SI', onPress: callYes }
      ]
      Alert.alert('¿Cerrar Ruta?', 'Todas las facturas han sido entregadas', buttons)
    }

    if (data?.facturas && data.facturas?.length > 0) {
      const total = invoiceDelivered.length + invoiceDenied.length

      if (total === data.facturas.length) {
        cerrarRuta()
      }
    }
  }, [data, route, invoiceDelivered, invoiceDenied, queryClient])

  useEffect(() => {
    if (data?.facturas && data.facturas instanceof Array) {
      let entregadas = data.facturas
        .filter(elm => elm.entregada === 'S')
        .map(elm => elm.factura)
      let noEntregadas = data.facturas
        .filter(elm => elm.entregada === 'R')
        .map(elm => elm.factura)

      setInvoiceDelivered(prev => {
        let newData = new Set([...prev, ...entregadas])
        return Array.from(newData)
      })

      setInvoiceDenied(prev => {
        let newData = new Set([...prev, ...noEntregadas])
        return Array.from(newData)
      })
    }
  }, [data, setInvoiceDelivered, setInvoiceDenied])

  return {
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
  }
}
