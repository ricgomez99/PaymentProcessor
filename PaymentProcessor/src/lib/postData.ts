import { PostPayload } from '../types/helpers'
import axios, { AxiosError } from 'axios'

const baseUrl = import.meta.env.VITE_API_URL
export default async function postData(url: string, payload: PostPayload) {
  try {
    const { data } = await axios.post(`${baseUrl}/${url}`, payload)
    if (!data) throw new Error('Unable to fetch data')

    console.log('post result: ', data)
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.table({
        message: error.message,
        cause: error.cause,
        name: error.name,
      })
    }

    if (error instanceof AxiosError) {
      console.table({
        status: error.status,
        cause: error.cause,
        code: error.code,
        message: error.message,
        name: error.name,
        response: error.response,
      })
    }
  }
}
