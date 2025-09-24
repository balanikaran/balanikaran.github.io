import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage

// Replace SEO component with Gatsby Head API
export const Head = () => (
  <>
    <title>Karan Balani | balanikaran</title>
    <meta name="description" content="Karan's Personal Portfolio Website." />
    <meta name="keywords" content="karan balani, karanbalani, developer, finbox, accenture, portfolio, gatsby, react" />
    <meta name="author" content="@balanikaran" />
    <meta property="og:title" content="Karan Balani" />
    <meta property="og:description" content="Karan's Personal Portfolio Website." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="karanbalani_" />
    <meta name="twitter:title" content="Karan Balani" />
    <meta name="twitter:description" content="Karan's Personal Portfolio Website." />
    <meta name="google-site-verification" content="QwimcVG7Pjp3RAmephvUeHDTnOTNmXC97-RNNi6ir9w" />
  </>
)
