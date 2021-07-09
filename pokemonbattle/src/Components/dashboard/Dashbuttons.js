import React from 'react'
import { Link } from 'react-router-dom'

const Dashbuttons = (props) => {


    return(
        
        <Link to="/" className="btn btn-primary" id="dashboardbtn">{props.name}</Link>  
              
       
    )
    
    
    
} 

export default Dashbuttons;