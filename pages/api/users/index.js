import axios from "axios"

const URL = "http://localhost:5000/users"

const handler = async (req, res) => {
  try {
    const {method, query} = req
    switch (method) {
      case "GET":
        const response = await axios.get(URL)
        const data = await response.data
        res.status(200).json(data)
        break
      case "POST":
        await axios.post(URL,req.body)
        res.status(200).json({message: `Usuário ${req.body.name} cadastrado!`})
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
