import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="fourOFourDiv">
    <h1>
      NOT FOUND{" "}
      <span role="img" aria-label="yawn">
        🥱
      </span>
    </h1>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness.{" "}
      <span role="img" aria-label="sadness">
        🤪
      </span>
    </p>
    <p>
      Go back to <Link to="/">home</Link>{" "}
      <span role="img" aria-label="home">
        🛁
      </span>{" "}
      and take a bath?
    </p>
  </div>
)

export default NotFoundPage

// Add Head API for meta tags
export const Head = () => (
  <>
    <title>404: Not found | Karan Balani</title>
    <meta name="description" content="Page not found - Karan Balani's Portfolio" />
  </>
)