import Pokédex from "./Pokédex"
import React from 'react'

export default class PokédexOutput extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:[
            {   "#":"1", 
                "Name":"Pikachu", 
                "Picture":"null",
                "Type":"Electric", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
                
            },
            
            {
                "#":"2", 
                "Name":"Charizard", 
                "Picture":"null",
                "Type":"Fire", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"3", 
                "Name":"Onix", 
                "Picture":"null",
                "Type":"Rock", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"4", 
                "Name":"Mewtwo", 
                "Picture":"null",
                "Type":"Psychic", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"5", 
                "Name":"Eevee", 
                "Picture":"null",
                "Type":"Normal", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"6", 
                "Name":"Gengar", 
                "Picture":"null",
                "Type":"Ghost", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            }
          ]
        }
      }
      
render(){



    return(

<div className="App">
    <h1 style={{'text-allign':'center'}}>Pokédex</h1>
    <br/>
    <Pokédex data={this.state.data}/>
    </div>

    );
}
}



