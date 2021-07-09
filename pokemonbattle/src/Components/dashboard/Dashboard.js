import React, { Component} from 'react'
//import Dashbuttons from "./Dashbuttons"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class Dashboard extends Component{

        render(){

        return(
        <div className="dashcontainer"> 
        <Container className = "vertAllignCont">
            <Container className="horiAllignCont">
                <Row>
                    <Col>
                    <Link to="/Battle" className="btn btn-primary" id="dashboardbtn" >Battle</Link>  

                    </Col>
                    <Col>

                    <Link to="/PokédexOutput" className="btn btn-primary" id="dashboardbtn">Pokédex</Link>  

                    </Col>
                    <Col>

                    <Link to="/FAQ" className="btn btn-primary" id="dashboardbtn">FAQ</Link>  

                    </Col>
                </Row>
  
            </Container>
        </Container>
           
           
        </div>
        )

    
}
}

export default Dashboard;