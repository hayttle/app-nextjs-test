import axios from "axios"

export default async function handler(req, res) {
  try {
    const {query} = req

    const response = await axios.get(`http://localhost:5000/users?email=${query.email}`)
    const user = await response.data

    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Error"})
  }
}
