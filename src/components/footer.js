import React from "react"

const Footer = () => (
  <div className="footerDiv">
    <p className="footerHeading">-x- Yep! This is Footer! -x-</p>
    <p>
      It was nice to have you here, see you around!{" "}
      <span role="img" aria-label="bye">
        👋
      </span>
    </p>
    <small>Copyright &copy; {new Date().getFullYear()} Karan Balani.</small>
    <small>All Rights Reserved.</small>
    <small>
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </small>
  </div>
)

export default Footer
