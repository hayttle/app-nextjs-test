import Head from "next/head"
import Layout from "@/components/Layout"
import {deleteCookie, getCookie} from "cookies-next"
import {verifyToken} from "@/services/users"

export default function Dashboard({user}) {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Layout>
        <main>
          <h2>Dashboard</h2>
          <p>Bem-vindo(a) {user && <span>{user.name}</span>}</p>
        </main>
      </Layout>
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try {
    const token = getCookie("jwt_authorization", {req, res})
    if (!token) {
      throw new Error("Token inválido!")
    }
    const user = verifyToken(token)
    return {
      props: {user}
    }
  } catch (error) {
    deleteCookie("jwt_authorization", {req, res})
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      },
      props: {}
    }
  }
}
