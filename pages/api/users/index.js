import axios from "axios"

const URL = "http://localhost:5000/users"

const handler = async (req, res) => {
  try {
    const {method} = req
    switch (method) {
      case "GET":
        const response = await axios.get(URL)
        const data = await response.data
        res.status(200).json(data)
        break
      case "POST":
        const resp = await axios.post(URL, req.body)
        const user = await resp.data
        res.status(200).json(user)
        break
      case "PUT":
        res.status(200).json([{}])
        break
      case "DELETE":
        res.status(200).json([{}])
        break

      default:
        res.status(500).end(`Internal error`)
    }
  } catch (error) {
    console.log(error)
  }
}

export default handler
