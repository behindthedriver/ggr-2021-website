import * as React from "react"
import { graphql, Link } from "gatsby"

import MaterialLayout from "../components/materiallayout"
import RenderHelmet from "../components/helmet"

import Button from "@material-ui/core/Button"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"

import Typography from "@material-ui/core/Typography"

const colorclubblau = "#0075e1"
const colorgoldengate = "#ff4f00"
const colorlightfont = "#F0F0F0"

const cardwidth = 400

const useStyles = makeStyles(theme => ({
  media: {
    height: 300,
  },
  Card: {
    width: cardwidth,
    height: 500,
    background: "#f0f0f0",
    color: "#000000",
    boxShadow: "0 0 0 0",
    borderRadius: "0 0 0 0",
  },
  darkCard: {
    width: cardwidth,
    height: 500,
    background: "#000000",
    color: "#ffffff",
    boxShadow: "0 0 0 0",
    borderRadius: "0 0 0 0",
  },
  wideCard: {
    width: cardwidth * 2 + 10,
    height: 500,
    background: "#f0f0f0",
    color: "#000000",
    boxShadow: "0 0 0 0",
    borderRadius: "0 0 0 0",
  },
  CardHeader: {
    color: colorgoldengate,
  },
  Button: {
    backgroundColor: colorclubblau,
    color: colorlightfont,
    position: "sticky",
    bottom: "0px",
  },
  Box: {
    backgroundColor: "linear-gradient(0deg, #1e1e1e, #252526)",
  },
  CardContent: {
    height: "100px",
  },
  Container: {
    maxWidth: "1400px",
    background: "transparent",
  },
}))

class PcaCard extends React.Component {
  constructor(props) {

    super(props);
    this.handleresize = this.handleresize.bind(this);
    
    this.state = {
      cardclass: this.props.classes.Card
    }

    if ( this.props.dark)
    {
      this.state = {
        cardclass: this.props.classes.darkCard
      }
    }
    if ( this.props.wide )
    {
      this.state = {
        cardclass: this.props.classes.wideCard
      }
    }
  }

   handleresize() {
     //do stuff
     if ( typeof(window) != 'undefined' )
     {
       if ( this.state.cardclass === this.props.classes.wideCard )
       {
        if( window.innerWidth < ( cardwidth * 2 + 20 ) ){
          this.setState({cardclass: this.props.classes.Card });
          console.log("shrinking");
        }
       }
       
       if ( window.innerWidth > ( cardwidth * 2 + 20 ) ){
         if ( this.props.wide ){
           this.setState({cardclass: this.props.classes.wideCard });
           console.log("growing");
         }
       }
      //console.log('changed width');
      
     }
     
   }

  componentDidMount()
  {
    console.log("component updated");
    //this.forceUpdate();
    window.addEventListener('resize',this.handleresize)

    
  }

  render() {
    const classes = this.props.classes;
    
    return (
      <Box>
        <Card className={this.state.cardclass}>
          <CardMedia
            className={classes.media}
            image={this.props.image}
            alt={this.props.imageAlt}
          />
          <CardContent className={classes.CardContent}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.CardHeader}
            >
              {this.props.heading}
            </Typography>
            <Typography>{this.props.subHeader}</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.Button}>Learn More</Button>
            <Typography>{this.props.children}</Typography>
          </CardActions>
        </Card>
      </Box>
    )
  }
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Home Page`

  const classes = useStyles()

  return (
    <MaterialLayout location={location}>
      <Box className={classes.Box}>
        <RenderHelmet title={siteTitle} />

        <Container className={classes.Container}>
          <br />
          <Grid container spacing={1} justify="center">
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/1.Join the Fun.jpg"
                imageAlt="Members Toasting at an event."
                heading="Join the Fun"
                subHeader="Membership and communications"
             
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/2.Fun Runs.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Fun Runs"
                subHeader="Great roads & people"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/3.Autocross.jpg"
                imageAlt="Cars waiting on autocross tarmac in double chevron."
                heading="Autocrosss"
                subHeader="Your cars and our cones"
                
              >
                <Link to="/autocross">About </Link>
                / 
                <Link to="/autocross/first-timers/"> Getting Started</Link>
              </PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/4.Track.png"
                imageAlt="Race official standing in front of grid at race track."
                heading="Track"
                subHeader="Vroom. And then some."
                
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/5.Social.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Social"
                subHeader="It's not just the cars, it's the people!"
                
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/6.Concours.jpg"
                imageAlt="Cars Driving through redwood forest."
                heading="Concours"
                subHeader="The clean machine"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
                image="../images/7.Sponsors.png"
                imageAlt="Cars Driving through redwood forest."
                heading="Sponsors"
                subHeader="Thanks for pitching in!"
              ></PcaCard>
            </Grid>
            <Grid item>
              <PcaCard
                classes={classes}
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
