import Pokédex from "./Pokédex"
import React from 'react'
import PikachuImage from "../PokemonPictures/Pikachu.png"
import { Text, Container, Image } from "atomize";

class PokédexOutput extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:[
            {   "#":"1", 
                "Name":"Pikachu", 
                "Picture": "null1",
                "Type":"Electric", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
                
            },
            
            {
                "#":"2", 
                "Name":"Charizard", 
                "Picture":"null2",
                "Type":"Fire", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"3", 
                "Name":"Onix", 
                "Picture":"null3",
                "Type":"Rock", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"4", 
                "Name":"Mewtwo", 
                "Picture":"null4",
                "Type":"Psychic", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"5", 
                "Name":"Eevee", 
                "Picture":"null5",
                "Type":"Normal", 
                "Health":"30", 
                "Attack":"30", 
                "Defense":"30" 
            },
            
            
            {
                "#":"6", 
                "Name":"Gengar", 
                "Picture":"null6",
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
    <h1 id="pokedexTitle">Pokédex</h1>
    <br/>
    <Pokédex data={this.state.data}/>
    </div>

    );
}
}

export default PokédexOutput;

