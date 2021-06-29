/**
 
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
        <h4>{this.props.title}</h4>
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
        <button
          className={cardStyles.cardbutton}
          tabIndex={0}
        >Learn More</button>
          
        </div>        
        );
    }
  }
}

export default Card
