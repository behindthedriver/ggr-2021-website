import * as React from "react"
import { graphql } from "gatsby"

//import Layout from "../components/layout"
import RenderHelmet from "../components/helmet"

import Button from "@material-ui/core/Button"
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

import Container from "@material-ui/core/Container"

import Typography from "@material-ui/core/Typography"

import MenuIcon from "@material-ui/icons/Menu"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles( (theme) => (
  {
    root: {
      width: 200,
    },
    media: {
      height: 150,
    },
    container: {
      backgroundcolor: 444,
      marginBottom: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      color: "textPrimary"
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
      <>
      <Card className={classes.root}>
                <CardMedia
                  className={classes.media} 
                  image={this.props.image}
                  alt={this.props.imageAlt}
                  />
                <CardContent>
                    <Typography
                      component="h5"
                      variant="h5">
                      {this.props.heading}
                    </Typography>
                    <Typography
                      >
                      {this.props.subHeader}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
      </>
    )
  }
    
  
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Home Page`
  
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <RenderHelmet title={siteTitle} />
      <Container maxWidth="md" className={classes.container}>
      
      <AppBar>
        <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.menuButton}
          aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography 
          component="h6" 
          variant="h6" 
          
          className={classes.title}>
          Porsche Club of America - Golden Gate Region
        </Typography>
        </Toolbar>
        
      </AppBar>
      </Container>
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
