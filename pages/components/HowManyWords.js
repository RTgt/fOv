import React from 'react';

class HowManyWords extends React.Component{
  constructor(props){
    super(props) ;
    this.state={
      words: 0
    }   
    this.handleChange = this.handleChange.bind(this);
  }


handleChange(){
this.setState(
  {words: event.target.value}
)
}

render(){
  return(
    <div>
     <h2>HowManyWords????</h2>  
     <input onChange = {this.handleChange}></input>
     <p>{this.state.words} words</p>
    </div>
   )  
}
}
  
  





export default HowManyWords;
