import axios from 'axios'

/**
 *
 * @param {*} user
 * @param {*} password
 * @returns {Promise<string>}
 */
export default async function getToken(user, password) {
  try {
    const res = await axios.post('auth', { user, password })
    if (res.status == 200) {
      const token = res.data.token
      axios.defaults.headers['Authorization'] = 'Bearer ' + token
      return true
    }
  } catch (error) {
    return false
  }
}
