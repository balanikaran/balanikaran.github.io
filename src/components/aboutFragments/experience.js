import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Card } from "react-bootstrap"

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

                placeholderImage: file(relativePath: {eq: "placeholder.png"}) {
                    childImageSharp {
                        fixed (width: 80, height: 80) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }

                images: allImageSharp {
                    edges {
                        node {
                            fixed (width: 80, height: 80) {
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
        <div className="experienceFragment">
            <div className="experienceFragHeading">Experience <span role="img" aria-label="experience">💻</span></div>
            <div className="experienceGrid">
                {data.aboutJson.experiences.map(experience => {

                    var imageFixed = data.images.edges.find(edge => (
                        edge.node.fixed.originalName === experience.logo
                    ))

                    if (imageFixed === undefined) {
                        imageFixed = data.placeholderImage.childImageSharp.fixed
                    } else {
                        imageFixed = imageFixed.node.fixed
                    }

                    return (
                        <Card key={experience.duration}>
                            <div className="experienceCard">
                                <div className="experienceCardImgDiv">
                                    <Img fixed={imageFixed}></Img>
                                </div>
                                <Card.Body>
                                    <Card.Title className="experienceTitleText">{experience.name}</Card.Title>
                                    <Card.Text className="experienceRoleText">{experience.role}</Card.Text>
                                    <Card.Text className="experienceDurationText">{experience.duration}</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div >
    )
}

export default Experience