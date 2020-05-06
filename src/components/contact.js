import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import * as FontAwesome from "react-icons/fa"
import { IconContext } from "react-icons"

const Contact = () => {
    const data = useStaticQuery(
        graphql`
            query {
                contactJson {
                    contacts {
                        name
                        url
                        icon
                    }
                }
            }
        `
    )

    return (
        <div className="contactDiv" id="contactSectionId">
            <div className="contactHeading">Let's get connected <span role="img" aria-label="experience">🔗</span></div>
            <div className="contactSection">
                {data.contactJson.contacts.map(contact => {
                    const ContactIcon = FontAwesome[contact.icon]
                    return (
                        <div key={contact.url}>
                            <a target="_blank" rel="noopener noreferrer" href={contact.url} className="btn btn-light">
                                <IconContext.Provider value={{ size: "2rem" }}>
                                    <ContactIcon />
                                </IconContext.Provider>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact