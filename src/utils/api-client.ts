import axios from 'axios'

const API_BASE_URL = import.meta.env.DEV ? 'http://localhost:5000' : ''

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
})

export const submitContactForm = async (data: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await apiClient.post('/contact', data)
    return response.data
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}

export const getProjects = async () => {
  try {
    const response = await apiClient.get('/projects')
    return response.data
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw error
  }
}

export default apiClient
