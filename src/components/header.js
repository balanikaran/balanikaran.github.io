// import { Link } from "gatsby"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        headerImage: file(relativePath: { eq: "web-kb.png" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  )

  return (
    <div className="heading">
      <div className="headerImage">
        <GatsbyImage
          image={data.headerImage.childImageSharp.gatsbyImageData}
          alt=""
        ></GatsbyImage>
      </div>
      <div className="headerText">
        <h1 className="headerName">
          Hey there{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          I'm Karan Balani{" "}
          <span role="img" aria-label="boy with laptop">
            👨‍💻
          </span>
        </h1>
        <h2 className="headerNameSubtext">
          I like to solve problems with tech{" "}
          <span role="img" aria-label="joystick">
            🕹
          </span>{" "}
          and{" "}
          <span role="img" aria-label="brain">
            🧠
          </span>
          . I'm MKBHD fan. And you know what? I don't know swimming{" "}
          <span role="img" aria-label="swimmer">
            🏊‍♂️
          </span>
          !
        </h2>
      </div>
    </div>
  )
}

export default Header
