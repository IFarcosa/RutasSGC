import { useCallback, useState } from 'react'

export default function useToggle(defaultValue = false) {
  const [toggle, setToggle] = useState(defaultValue)

  const callback = useCallback(() => {
    setToggle(prev => !prev)
  }, [setToggle])

  return [toggle, callback]
}
