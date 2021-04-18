import * as React from "react"
import { graphql } from "gatsby"

import MaterialLayout from "../components/materiallayout"
import RenderHelmet from "../components/helmet"

import Button from "@material-ui/core/Button"
import {
  AppBar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container"

import Typography from "@material-ui/core/Typography"


const colorvsdarkgrey = "#1e1e1e";
const colorlightgrey = "#494f5c";
const colorclubblau = "#0075e1";
const colorgoldengate= "#ff4f00";
const colorlightfont= "white";

const useStyles = makeStyles( (theme) => (
  {
    media: {
      height: 150,
    },
    Card: {
      width: 200,
      background: 'linear-gradient(0deg, #1e1e1e, #494f5c)',
      color: colorlightfont,
      boxShadow: "0 0 0 0",
      borderRadius: "0 0 0 0",
    },
    CardHeader: {
      color: colorgoldengate,
    },
    Button: {
      backgroundColor: colorclubblau,
      color: colorlightfont,
    },
    Box: {
      backgroundColor: colorlightgrey,
    }

  }
));

class PcaCard extends React.Component {
  constructor(props) {
    super(props);
    //this.children = props.children;
    //to make callback resolve 'this'
    
  }
  render() {
    const classes = this.props.classes;
    return (
      <Box>
      <Card className={classes.Card}>
      <CardMedia
                  className={classes.media} 
                  image={this.props.image}
                  alt={this.props.imageAlt}
                  />
                <CardContent>
                    <Typography
                      component="h5"
                      variant="h5"
                      className={classes.CardHeader}>
                      {this.props.heading}
                      
                    </Typography>
                    <Typography
                      >
                      {this.props.subHeader}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.Button}>Learn More</Button>
                </CardActions>
              </Card>
      </Box>
    )
  }
    
  
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Home Page`
  
  const classes = useStyles();

  return (
    <MaterialLayout location={location}>
      <Box  className={classes.Box}>
      
      <RenderHelmet title={siteTitle} />
      
      <main>
        <br></br>
        <Container 
          maxWidth="md"
          className={classes.container}>
          <br />
          <Grid container spacing={2} justify="center">
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/1.Join the Fun.jpg"
                imageAlt="Members Toasting at an event."
                heading="Join the Fun"
                subHeader="Membership and Communications">
              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/2.Fun Runs.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Fun Runs"
                subHeader="Great Roads & People">
              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/3.Autocross.jpg"
                imageAlt="Cars waiting on autocross tarmac in double chevron."
                heading="Autocrosss"
                subHeader="Your cars and our cones">
              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/4.Track.png"
                imageAlt="Race official standing in front of grid at race track."
                heading="Track"
                subHeader="Vroom. And then some.">
              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/5.Social.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Social"
                subHeader="It's not just the cars; it's the people!">
              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/6.Concours.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Concours"
                subHeader="The clean machine">

              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/7.Sponsors.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Sponsors"
                subHeader="Thanks for pitching in!">

              </PcaCard>
            </Grid>
            <Grid item>
            <PcaCard
                classes={classes}
                image="../images/8.Club Archives.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Club Archives"
                subHeader="Been There. Done that.">

              </PcaCard>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Box>
    </MaterialLayout>
   
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
