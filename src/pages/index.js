import * as React from "react"
import { graphql, Link } from "gatsby"

import MaterialLayout from "../components/materiallayout"
import RenderHelmet from "../components/helmet"

import Button from "@material-ui/core/Button"
import { ButtonGroup } from "@material-ui/core"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider
} from "@material-ui/core"

import theme from "../material-ui-theme/theme"

import Container from "@material-ui/core/Container"

import Typography from "@material-ui/core/Typography"

class PcaCard extends React.Component {
  render() {
    //const classes = theme;
    return (
      <Box>
        <Card>
          <CardMedia
            
            image={this.props.image}
            alt={this.props.imageAlt}
          />
          <CardContent >
            <Typography
              component="h5"
              variant="h5"
            >
              {this.props.heading}
            </Typography>
            <Typography>{this.props.subHeader}</Typography>
          </CardContent>
          <CardActions>
            {this.props.children}
          </CardActions>
        </Card>
      </Box>
    )
  }
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Home Page`

  //const classes = theme;

  return (
    <ThemeProvider theme={theme}>
    <MaterialLayout location={location}>
      <Box >
        <RenderHelmet title={siteTitle} />

        <Container >
          <br />
          <Grid container spacing={1} justify="center">
            <Grid item>
              <PcaCard
                
                image="../images/1.Join the Fun.jpg"
                imageAlt="Members Toasting at an event."
                heading="Join the Fun"
                subHeader="Membership and communications"
                dark="true"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/2.Fun Runs.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Fun Runs"
                subHeader="Great roads & people"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/3.Autocross.jpg"
                imageAlt="Cars waiting on autocross tarmac in double chevron."
                heading="Autocrosss"
                subHeader="Your cars and our cones"
              >
                <ButtonGroup>
                  <Button href="/autocross">About</Button>
                  <Button href="autocross/first-timers/">Getting Started</Button>
                </ButtonGroup>
              </PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/4.Track.png"
                imageAlt="Race official standing in front of grid at race track."
                heading="Track"
                subHeader="Vroom. And then some."
                wide="true"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/5.Social.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Social"
                subHeader="It's not just the cars, it's the people!"
                dark="true"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/6.Concours.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Concours"
                subHeader="The clean machine"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/7.Sponsors.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Sponsors"
                subHeader="Thanks for pitching in!"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                
                image="../images/8.Club Archives.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Club Archives"
                subHeader="Been there. Done that."
              ></PcaCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MaterialLayout>
    </ThemeProvider>
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
