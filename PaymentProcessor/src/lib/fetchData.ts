const baseUrl = import.meta.env.VITE_API_URL
import axios, { AxiosError } from 'axios'

export default async function fetchData(url: string) {
  try {
    const { data } = await axios.get(`${baseUrl}/${url}`)
    if (!data) throw new Error('Unable to fetch data')

    return data.data
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
