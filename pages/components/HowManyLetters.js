import React from 'react';



class HowManyLetters extends React.Component{
constructor(props){
  super(props);
  this.state = {
    letters: 0
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
  this.setState(
    {letters: event.target.value}
  )
}

render(){
  return(
    <div>
      <h2>How many letters?</h2>
      <input onChange = {this.handleChange} ></input> 
      <p>{this.state.letters} letters</p>
    </div> 
  )
 }
}


export default HowManyLetters;