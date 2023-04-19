const handler = async (req, res) => {
  try {
    const {query} = req

    res.status(200).json({req})
    return

    if (!email) {
      res.status(404).json({message: "Email não informado!"})
      return
    }

    const response = await fetch(`http://localhost:5000/users?email=${email}`)
    const data = await response.json()

    if (email !== data.email || password !== data.password) {
      res.status(404).json({message: "dados invalidos!"})
    }

    return data
  } catch (error) {
    return res.status(500).json({error: "Unexpected error."})
  }
}

export default handler
