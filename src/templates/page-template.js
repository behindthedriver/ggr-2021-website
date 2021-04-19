import * as React from "react"

import Bio from "../components/bio"
import MaterialLayout from "../components/materiallayout"
import RenderHelmet from "../components/helmet"
import { Container } from "@material-ui/core"

import { graphql } from 'gatsby'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <MaterialLayout location={location} title={siteTitle}>
      <RenderHelmet
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container maxWidth="lg">
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        
      </nav>
      </Container>
      
    </MaterialLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PageBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    
    
  }
`
