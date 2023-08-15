import { useQuery } from '@tanstack/react-query'
import { getRutasActivas } from '../../../providers/getRutas'

export function useData() {
  const queryData = useQuery(['rutas'], getRutasActivas)

  return {
    ...queryData
  }
}
