import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Gallery extends Component {
  render() {
    return (
        

      <div>
        <Navbar></Navbar>
        
          <div>
        <h1>Gallery</h1>
        <div>
        <Row>
        <Col className='jk'> 
        <img src='IMG_20250626_131434_432.jpg' width="170px" style={{borderRadius:'30px'  , }}></img>
        </Col>
        
        <Col className='hj'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='gh'> 
        <img src='IMG_20250626_131434_432.jpg' width="170px" style={{borderRadius:'30px'}}></img>
        </Col>
        
        <Col className='fg'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
           <Col className='df'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        </Row><br></br>
        <Row>
        <Col className='sd'>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>


         <Col className='as'> 
        <img src='IMG_20250626_131434_432.jpg' width="170px" style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='pa'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='op'>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='io'> 
        <img src='IMG_20250626_131434_432.jpg' width="170px" style={{borderRadius:'30px'}}></img>
        </Col>
          <Col className='ui'> 
        <img src='IMG_20250626_131434_432.jpg' width="170px" style={{borderRadius:'30px'}}></img>
        </Col>
        </Row> <br></br>
        <Row>
        <Col className='yu'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='ty'>
         <img src='IMG_20250626_133002_070.jpg' width='170px'style={{borderRadius:'30px'}}></img>
        </Col>
         <Col className='rt'> 
        <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col  className='er'>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
         <Col className='we'>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        <Col className='qw'>
         <img src='IMG_20250626_133002_070.jpg' width='170px' style={{borderRadius:'30px'}}></img>
        </Col>
        </Row>
        </div>
      </div>
      </div>
      
    )
  }
}
