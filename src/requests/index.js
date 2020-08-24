import axios from 'axios'
import qs from 'querystring'
const host = 'http://194.44.177.148:49008'

export const sendFile = async (data) => {
  try {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })
    const response = await axios.post(`${host}/api/transaction`, formData)

    return response.data
  } catch (error) {
    throw error
  }
}

export const getFields = async (data) => {
  try {
    const response = await axios.get(`${host}/api/transaction?${qs.stringify(data)}`)

    return response.data
  } catch (error) {
    throw error
  }
}
