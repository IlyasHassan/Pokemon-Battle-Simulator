import React, { Component} from 'react'
import RowOutput from "./PokédexRow"
import K from ".../"
class Pokédex extends Component{

    constructor(props){
        super(props);
        this.getHeader = this.getHeader;
        this.getValues = this.getValues;
        this.getKeys = this.getKeys;
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

        <table>

        <thead>

        <tr>{this.getHeader()}</tr>

        </thead>

        <tbody>

        {this.getRowsData()}

        </tbody>

        </table>

        </div>
        
        );
        }
       }

export default Pokédex;