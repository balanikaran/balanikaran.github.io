import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <About/>
  </Layout>
)

export default IndexPage
