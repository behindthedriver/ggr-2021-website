import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"


const colorvsdarkgrey = "#1e1e1e";
const colorlightgrey = "#252526";
const colorclubblau = "#0075e1";
const colorgoldengate= "#ff4f00";
const colorlightfont= "white";



const useStyles = makeStyles( (theme) => (
  {
    root: {
      width: 200,
      backgroundColor: "pink",
      color: "pink",
    },
    Box: {
      backgroundColor: colorlightgrey,
    },
    media: {
      height: 150,
    },
    container: {
      backgroundColor: colorlightgrey,
      marginBottom: theme.spacing(4),
      color: colorlightfont,
    },
    title: {
      flexGrow: 1,
      background: "transparent",
      color: colorgoldengate,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appbar: {
        backgroundColor: "#1e1e1e",
      boxShadow: "0 0 0 0"
    },
    
  }
));


const MaterialLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const classes = useStyles();

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  header = ( <> <StaticImage
        //className="bio-avatar"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/ggr-logo.svg"
        width={150}
        height={150}
        quality={95}
        alt="GGR Logo" /> </> );

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">
        
      <AppBar className={classes.appbar}>
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
      </header>
      <main>{children}</main>
      <footer>
          <Container maxWidth="md">
          {header}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Container>
          
      </footer>
    </div>
  )
}

export default MaterialLayout
