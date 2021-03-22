/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

const Card = ({children}) => {
  return (
    <div className="card">
      <h2>{children}</h2>
    </div>
  )
}

export default Card
