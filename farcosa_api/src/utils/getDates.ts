export default function getDates() {
  const now = new Date()

  let month: number | string = now.getMonth() + 1,
    year: number | string = now.getFullYear(),
    day: number | string = now.getDate()

  if (month < 10) {
    month = '0' + month.toString()
  }

  if (day < 10) {
    day = '0' + day.toString()
  }

  return {
    month,
    year,
    day
  }
}
