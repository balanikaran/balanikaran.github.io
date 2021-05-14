import React from "react"

import Experience from "./aboutFragments/experience"
import Extracurricular from "./aboutFragments/extracurricular"

const About = () => {
  return (
    <div className="aboutDiv" id="aboutSectionId">
      <Experience />
      <Extracurricular />
    </div>
  )
}

export default About
