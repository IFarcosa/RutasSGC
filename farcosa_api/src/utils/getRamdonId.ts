export default function getRandomId() {
  return Date.now() + '-' + Math.round(Math.random() * 1e9)
}
