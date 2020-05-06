import React from "react"
import SEO from "../components/seo"
import {Link} from "gatsby"

const NotFoundPage = () => (
  <div className="fourOFourDiv">
    <SEO title="404: Not found" />
    <h1>NOT FOUND <span role="img" aria-label="yawn">🥱</span></h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. <span role="img" aria-label="sadness">🤪</span></p>
    <p>Go back to <Link to="/">home</Link> <span role="img" aria-label="home">🛁</span> and take a bath?</p>
  </div>
)

export default NotFoundPage
