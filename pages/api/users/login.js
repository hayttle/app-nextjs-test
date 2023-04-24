import {login} from "@/services/users"

export default async function handler(req, res) {
  try {
    const token = await login(req.query)
    res.status(200).json(token)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
