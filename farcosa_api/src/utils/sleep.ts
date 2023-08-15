export default function sleep(seconds: number) {
  const MILI_IN_SECOND = 1000

  return new Promise(res => {
    setTimeout(() => {
      res(true)
    }, seconds * MILI_IN_SECOND)
  })
}
