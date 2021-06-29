//import { createMuiTheme } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core';


const colorclubblau = "#0075e1"
const colorgoldengate = "#ff4f00"
const colorlightfont = "#F0F0F0"

const cardwidth = 500

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorclubblau,
    },
    secondary: {
      main: colorgoldengate,
    }
  },
  overrides: {
    Container: {
      root:{
        maxWidth: "1100px",
        background: "transparent",
      }
    }, 
    MuiButton: {
      root: {
        backgroundColor: colorclubblau,
        color: colorlightfont,
        position: "sticky",
        bottom: "0px",
      }
    },
    MuiCard: {
      root: {
        width: cardwidth,
        height: 500,
        background: "#f0f0f0",
        color: "#000000",
        boxShadow: "0 0 0 0",
        borderRadius: "0 0 0 0",
      }
    },
    MuiBox: {
      root: {
        backgroundColor: "linear-gradient(0deg, #1e1e1e, #252526)",

      }
    },
    MuiCardContent: {
      root:
      {
        height: "100px",
      }
      
    },
    MuiCardMedia: {
      root: {
        height: "300px",
      }
    }
  },
     
      darkCard: {
        width: cardwidth,
        height: 500,
        background: "#000000",
        color: "#ffffff",
        boxShadow: "0 0 0 0",
        borderRadius: "0 0 0 0",
      },
      Card: {
        width: cardwidth,
        height: 500,
        background: "##f0f0f0",
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
      
      
      
      
});


export default theme;