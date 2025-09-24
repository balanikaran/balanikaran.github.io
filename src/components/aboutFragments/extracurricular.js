import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Card } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

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
            gatsbyImageData(width: 80, height: 80)
          }
        }

        images: allImageSharp {
          edges {
            node {
              gatsbyImageData(width: 80, height: 80)
              parent {
                ... on File {
                  base
                }
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
            edge => edge.node.parent.base === extracurricular.logo
          )

          if (imageFixed === undefined) {
            imageFixed = data.placeholderImage.childImageSharp.gatsbyImageData
          } else {
            imageFixed = imageFixed.node.gatsbyImageData
          }

          return (
            <Card key={extracurricular.duration}>
              <div className="extracurricularCard">
                <div className="extracurricularCardImgDiv">
                  <GatsbyImage image={imageFixed} alt=""></GatsbyImage>
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
