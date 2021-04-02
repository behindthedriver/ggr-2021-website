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
        <p>Welcome to the home page. This page will contain cards according to PDF design. Style, links, categories all tentative.</p>
        <p>Rough Mock up of cards below:</p>
        
        <Card
          title="Join The Fun" 
          subtitle="Membership and Communications"
        >
            <ul>
              <li>How to Join GGR</li>
              <li>Receiving the Nugget</li>
              <li>Email Announcements</li>
              <li>Subscribing to the GGR Calendar</li>
              </ul>
        </Card>
        <Card 
          title="Fun Runs" 
          subtitle="Great Roads & People"
        >
            <ul>
              <li>About / Getting Started</li>
              <li>Upcoming Events</li>
              <li>Registration</li>
              <li>Gallery</li>
              <li>Blog</li>
              </ul>
        </Card>
        <Card 
          title="Autocross" 
          subtitle="Your Car & Our Cones"
        >
            <ul>
              <li>About / Getting Started</li>
              <li>Upcoming Events</li>
              <li>Registration</li>
              <li>Venues</li>
              <li>Classify your car</li>
              <li>Results</li>
              <li>Rules & Forms</li>
              <li>Car Numbers</li>
              <li>Annual School</li>
              <li>Gallery</li>
              <li>Blog</li>
            </ul>
        </Card>
        <Card 
          title="Track" 
          subtitle="Vroom. And then some."
        >
            
        </Card>
        <Card 
          title="Social" 
          subtitle="It's not just the cars; it's the people!"
        >
            
        </Card>
        <Card
          title="Concours"
          subtitle="The Clean Machine"></Card>
        <Card
          title="Sponsors"
          subtitle="Thanks for pitching in!"></Card>
        <Card
          title="Club Archives"
          subtitle="Been There. Done That."></Card>
        
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
