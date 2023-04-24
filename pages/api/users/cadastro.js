import {cadastro} from "@/services/users"

export default async function handler(req, res) {
  try {
    const newUser = await cadastro(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
