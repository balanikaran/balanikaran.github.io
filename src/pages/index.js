import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="krnblni" />
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </Layout>
)

export default IndexPage
