import React, { Component} from 'react'
//import Dashbuttons from "./Dashbuttons"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import {ButtonGroup } from 'reactstrap';

class Dashboard extends Component{

        render(){

        return(
        <div className="dashcontainer"> 
        <Container className = "vertAllignCont">
            <Container className="horiAllignCont">
                <Row>
                    <Col>
                    <ButtonGroup className="d-flex">
                    <Link to="/" className="btn btn-primary" id="dashboardbtn" >Battle</Link>  
                    </ButtonGroup>
                    </Col>
                    <Col>
                    <ButtonGroup className="d-flex">
                    <Link to="/" className="btn btn-primary" id="dashboardbtn">Pokedex</Link>  
                    </ButtonGroup>
                    </Col>
                    <Col>
                    <ButtonGroup className="d-flex">
                    <Link to="/" className="btn btn-primary" id="dashboardbtn">FAQ</Link>  
                    </ButtonGroup>
                    </Col>
                </Row>
  
            </Container>
        </Container>
           
           
        </div>
        )

    
}
}

export default Dashboard;