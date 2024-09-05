import * as React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" className="link">
      {siteTitle}
    </Link>
  </header>
)

export default Header
