import React from 'react';
import library from './components/library';

class Game extends React.Component{
  constructor(props){
    super(props)
  }

  
  render(){
    
    const libr = library.filter(item  => item.length < 6).map (item => <li>{item}</li>) ;
    return(
      <div>
       <h2>i am the Game!!!!!!!!!!!!!!!</h2>
        <ul>
         {libr}
        </ul>                  
    
      </div>
     )
  }
  
}




export default Game;
