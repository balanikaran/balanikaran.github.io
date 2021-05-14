import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Card } from "react-bootstrap"

const Extracurricular = () => {
  const data = useStaticQuery(
    graphql`
      query {
        aboutJson {
          extracurriculars {
            name
            role
            duration
            logo
          }
        }

        placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        images: allImageSharp {
          edges {
            node {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="extracurricularFragment">
      <div className="extracurricularFragHeading">
        Extracurricular{" "}
        <span role="img" aria-label="extracurricular">
          🏌
        </span>
      </div>
      <div className="extracurricularGrid">
        {data.aboutJson.extracurriculars.map(extracurricular => {
          var imageFixed = data.images.edges.find(
            edge => edge.node.fixed.originalName === extracurricular.logo
          )

          if (imageFixed === undefined) {
            imageFixed = data.placeholderImage.childImageSharp.fixed
          } else {
            imageFixed = imageFixed.node.fixed
          }

          return (
            <Card key={extracurricular.duration}>
              <div className="extracurricularCard">
                <div className="extracurricularCardImgDiv">
                  <Img fixed={imageFixed}></Img>
                </div>
                <Card.Body>
                  <Card.Title className="extracurricularTitleText">
                    {extracurricular.name}
                  </Card.Title>
                  <Card.Text className="extracurricularRoleText">
                    {extracurricular.role}
                  </Card.Text>
                  <Card.Text className="extracurricularDurationText">
                    {extracurricular.duration}
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Extracurricular
