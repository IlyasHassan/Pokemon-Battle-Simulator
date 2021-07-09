import React from 'react'

export default class Pokédex extends React.Component{

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

        <table>

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
    
        return <td key={props.data[key]}>{props.data[key]} </td>
    
        })
    
       }