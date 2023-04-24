import axios from "axios"
import jwt from "jsonwebtoken"

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET)
  return token
}

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (err) {
    throw new Error("Token inválido!")
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

  const {password, ...userLogged} = user[0]

  if (user.length === 0) {
    throw new Error("Usuário não encontrado!")
  }

  if (user[0].password !== body.password) {
    throw new Error("Senha inválida!")
  }

  const token = createToken(userLogged)

  return token
}
