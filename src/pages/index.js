import * as React from "react"
import {  graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <div className="clearfix">
      <p>Welcome to the home page. This page will contain cards according to PDF design.</p>
      <Card>Join The Fun!</Card>
      <Card>Fun Runs</Card>
      <Card>Autocross</Card>
      <Card>Track</Card>
      <Card>Social</Card>
      <Card>Concours</Card>
      <Card>Sponsors</Card>
      <Card>Club Archives</Card>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
