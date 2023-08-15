export default function getErrorDescriptor(e) {
  return `${e.time}: Error ${e.name}, ${e.message}\``
}
