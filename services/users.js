import axios from "axios"
import jwt from "jsonwebtoken"

const createToken = (email) => {
  const token = jwt.sign({email}, process.env.JWT_SECRET)

  return token
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    console.log(err)
  }
}

export const cadastro = async (body) => {
  const resp = await axios.get("http://localhost:5000/users", {params: {email: body.email}})
  const user = await resp.data

  if (user.length !== 0) {
    throw new Error("Usuário já cadastrado!")
  }

  const response = await axios.post("http://localhost:5000/users", body)
  const newUser = await response.data
  return newUser
}

export const login = async (body) => {
  const resp = await axios.get("http://localhost:5000/users", {params: {email: body.email}})
  const user = resp.data

  if (user.length === 0) {
    throw new Error("Usuário não encontrado!")
  }

  if (user[0].password !== body.password) {
    throw new Error("Senha inválida!")
  }

  const token = createToken(body.email)

  return token
}
