import React from 'react';

class Appearance extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: 1000
    }
  } render(){
    return(
      <div>
       <h2>Appearance</h2> 
       <input></input>
      </div>
     )
  }
  
}




export default Appearance;