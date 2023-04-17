// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const URL = "http://localhost:5000/users"

export const createUser = (user) => {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then((resp) => resp.json())
    .then((user) => console.log(`Usuário ${user.name} cadastrado!`))
    .catch((err) => console.error(err))
}

export const getUser = async (form) => {
  const res = await fetch(`http://localhost:5000/users?email=${form.email}`)
  const user = await res.json()
  if (user.length === 0) {
    console.error("Usuário não cadastrado")
    return
  }
  if (user[0]?.password !== form.password) {
    console.error("Senha incorreta!")
    return
  }
  return user
}
