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
        <h2>{this.props.title}</h2>
        <h4>{this.props.subtitle}</h4>
        {this.props.children}
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
          <h2>{this.props.title}</h2>
        <h4>{this.props.subtitle}</h4>
        <buton
          className={cardStyles.cardbutton}
          role="button"
          tabIndex={0}
        >Learn More</buton>
          
        </div>        
        );
    }
  }
}

export default Card
