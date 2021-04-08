import * as React from "react"
import {  graphql } from "gatsby"

//import Layout from "../components/layout"
import RenderHelmet from "../components/helmet"

//import Button from '@material-ui/core/Button';
import { AppBar, Card, CssBaseline, Grid } from "@material-ui/core";

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Home Page`
/*
  return (
    <Layout location={location} title={siteTitle}>
      <RenderHelmet title="Home Page" />
      <Button variant="contained" color="primary">Hello World</Button>
    </Layout>
  )
  */
 
  return (
      <>
      <CssBaseline />
      <RenderHelmet title={siteTitle} />
    <AppBar position="relative">
        <Typography component="h2" color="textPrimary">
        Porsche Club of America - Golden Gate Region
        </Typography>
    
    </AppBar>
    <main>
      <Container maxWidth="sm">
        <Typography component="h1" align="center" >
          Heading
        </Typography>
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Card>
                    This is a test card.
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    This is the second test card.
                </Card>
            </Grid>
        </Grid>
      </Container>
    </main>
    </>
  )
} 

/*
<CssBaseline>
      <AppBar>

      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Typography component="h1" align="center" gutterBottom>
            Heading
          </Typography>
        </Container>
      </main>
    </CssBaseline>


*/
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
