import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h1>Ooooops! It's a dead end</h1>
        <Link className="btn" to="/">back home</Link>
      </main>
    </Layout>
  )
}

export default Error
