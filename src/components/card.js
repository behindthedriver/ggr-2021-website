/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import * as cardStyles from "./card.module.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
    //this.children = props.children;
    //to make callback resolve 'this'
    this.handleClick = this.handleClick.bind(this);
    
    this.state = { open: false };
  }


  handleClick() {
    this.setState( {open: !this.state.open } );

    console.log(this.state.open);
  }

  render(){
    if ( this.state.open ){
      return(
      <div 
        className={cardStyles.cardopen} 
        onClick={this.handleClick}
        onKeyDown={this.handleClick} 
        role="button"
        tabIndex={0}
      >
        <h2>{this.props.children}</h2>
        <p>Card is open</p>
      </div>        
    );
    }
    else {
      return(
        <div 
          className={cardStyles.cardclosed} 
          onClick={this.handleClick} 
          onKeyDown={this.handleClick} 
          role="button"
          tabIndex={0}
          >
          <h2>{this.props.children}</h2>
        </div>        
        );
    }
  }
}

/*
const Card = ({children}) => {
  return (
    <div className="card">
      <h2>{children}</h2>
    </div>
  )
}
*/
export default Card
