export default function sleep(time) {
  return new Promise(res => {
    setTimeout(() => {
      res(true)
    }, time * 1000)
  })
}
