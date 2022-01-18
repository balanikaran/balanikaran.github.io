import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Card } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

const Experience = () => {
  const data = useStaticQuery(
    graphql`
      query {
        aboutJson {
          experiences {
            name
            role
            duration
            logo
          }
        }

        placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 80, height: 80)
          }
        }

        images: allImageSharp {
          edges {
            node {
              gatsbyImageData(layout: FIXED, width: 80, height: 80)
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
    <div className="experienceFragment">
      <div className="experienceFragHeading">
        Experience{" "}
        <span role="img" aria-label="experience">
          💻
        </span>
      </div>
      <div className="experienceGrid">
        {data.aboutJson.experiences.map(experience => {
          var imageFixed = data.images.edges.find(
            edge => edge.node.parent.base === experience.logo
          )
          if (imageFixed === undefined) {
            imageFixed = data.placeholderImage.childImageSharp.gatsbyImageData
          } else {
            imageFixed = imageFixed.node.gatsbyImageData
          }

          return (
            <Card key={experience.duration}>
              <div className="experienceCard">
                <div className="experienceCardImgDiv">
                  <GatsbyImage image={imageFixed} alt=""></GatsbyImage>
                </div>
                <Card.Body>
                  <Card.Title className="experienceTitleText">
                    {experience.name}
                  </Card.Title>
                  <Card.Text className="experienceRoleText">
                    {experience.role}
                  </Card.Text>
                  <Card.Text className="experienceDurationText">
                    {experience.duration}
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

export default Experience
