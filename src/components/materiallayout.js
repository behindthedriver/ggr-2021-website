import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"


const MaterialLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

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
        
      
      <br />
      </header>
      <main>
      
        {children}</main>
      <footer>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item >
          <StaticImage
        //className="bio-avatar"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/ggr-logo.svg"
        width={150}
        height={150}
        quality={95}
        alt="GGR Logo" />
          <Typography>
          © {new Date().getFullYear()}, 
            PCA-GGR
        
          </Typography>
          </Grid>
          <Grid item >
            <Typography>
            Built with 
          <a href="https://www.gatsbyjs.com">Gatsby</a>
            </Typography>
          
          </Grid>
          <Grid item >
            <Typography>
            Zone 7 Logo
              </Typography>
          </Grid>
        </Grid>
        </Container>
          
      </footer>
    </div>
    
  )
}

export default MaterialLayout