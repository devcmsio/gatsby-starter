import React from "react"
import { Link } from "gatsby"

import Menu from "./menu"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <h2
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h2>
        </header>
        <main style={{ margin: `3rem 0` }}>{children}</main>
        <footer>
          <Menu/>
          © {new Date().getFullYear()}, Built with
          {` `}
          Gatsby & DevCMS
        </footer>
      </div>
    )
  }
}

export default Layout
