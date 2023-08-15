export default function toCamelCase<T = any>(data: Object): T {
  const keys = Object.keys(data)
  const newData = {} as T

  keys.forEach(key => {
    const newKey = key
      .toLowerCase()
      .replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))

    let value = data[key]
    if (typeof value === 'object' && !(value instanceof Array) && !(value instanceof Date)) {
      value = toCamelCase(value)
    }
    newData[newKey] = value
  })

  return newData
}
