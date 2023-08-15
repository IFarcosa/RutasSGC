export default function toSnakeCase(data: Object) {
  const keys = Object.keys(data)
  const newData = {}

  keys.forEach(key => {
    const newKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
    let value = data[key]
    if (typeof value === 'object' && !(value instanceof Array) && !(value instanceof Date)) {
      value = toSnakeCase(value)
    }
    newData[newKey] = value
  })

  return newData
}
