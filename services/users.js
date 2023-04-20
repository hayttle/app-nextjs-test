import axios from "axios"

export const getUser = async (email) => {
  const res = await axios.get(`/api/users/${email}`)
  const user = await res.data

  return user
}

export const createUser = async (data) => {
  
  const res = await axios.post(`/api/users/`, data)
  const user = await res.data

  return user
}