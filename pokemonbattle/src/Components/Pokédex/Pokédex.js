import React from 'react'
import PikachuImage from "../PokemonPictures/Pikachu.png"
import EeveeImage from "../PokemonPictures/Eevee.png"
import GengarImage from "../PokemonPictures/Gengar.png"
import OnixImage from "../PokemonPictures/Onix.png"
import CharizardImage from "../PokemonPictures/Charizard.png"
import MewtwoImage from "../PokemonPictures/Mewtwo.png"
import { Text, Container, Image } from "atomize";

class Pokédex extends React.Component{

    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getValues = this.getValues.bind(this);
        this.getKeys = this.getKeys.bind(this);
        }



    getHeader = () => {
        var keys = this.getKeys();
        return keys.map((key, index)=>{

        return <th key={key}>{key.toUpperCase()}</th>

        })
        }

    getKeys = () => {
        return Object.keys(this.props.data[0]);
    }

    getValues = () => {
        var values = this.props.data;
        var keys = this.getKeys();
        return values.map((row, index)=>{
        return <tr key={index}> <RowOutput key = {index} data = {row} keys = {keys}/> </tr>
 })
    }
  

    render() {

        return (
        <div>

        <table id="tabledex">

        <thead>

        <tr>{this.getHeader()}</tr>

        </thead>

        <tbody>

        {this.getValues()}

        </tbody>

        </table>

        </div>
        
        );
        }
       }
    

       const RowOutput = (props) => {

        return props.keys.map((key, index) => {
            var picturesArray = [PikachuImage, EeveeImage, OnixImage, MewtwoImage, CharizardImage, GengarImage]
            for(let i=0; i<picturesArray.length;i++){
                if(props.data[key] == "null1"){

                    return <td><img src={picturesArray[0]} /> </td>
                
                }

                else if(props.data[key] == "null2"){
                    return <td><img src={picturesArray[1]} /> </td>
                }

                else if(props.data[key] == "null3"){
                    return <td><img src={picturesArray[2]} /> </td>
                }

                else if(props.data[key] == "null4"){
                    return <td><img src={picturesArray[3]} /> </td>
                }

                else if(props.data[key] == "null5"){
                    return <td><img src={picturesArray[4]} /> </td>
                }

                else if(props.data[key] == "null6"){
                    return <td><img src={picturesArray[5]} /> </td>
                }
 
            
                else{
                    return <td key={props.data[key]}>{props.data[key]} </td>
                }
                
            }
    
        
    
        })
    
       }

export default Pokédex;