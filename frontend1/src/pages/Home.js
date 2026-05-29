 import React from 'react';
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
const SchoolHomePage = () => {
  return (
    <div>
      <header  className='headd'>
         
        <Navbar/> <br></br>
                  
        <h1>Welcome To ERMIYAS ACADEMY</h1><br></br>
        <p>One Team , One Dream  </p>
             <Button variant="light">Join us</Button>
      </header> <br></br>
      <main>
        <section>
         
           
      <Row style={{paddingLeft:'100px', }}>
        <Col>
           
    <Card className='kk'>
      <Card.Img variant="top" src="IMG_20260212_153728_241.jpg" />
      
    </Card>
          </Col> <br></br>

        <Col>
        <Card.Title><b> WELCOME ! <br></br> A MESSAGE FROM THE DIRECTOR</b></Card.Title>
      
        I welcome you to a rich and fulfilling experience with Ermiyas Football Academy and
         invite you to become a part of our world-class Football training programs.
          Ermiyas provides a broad and balanced environment where youth players can grow into successful, 
          confident, and influential soccer players. 
        We are dedicated to helping all of our players realize their true potentials.
Students at Ermiyas Academy do not only excel in academics. The Academy is committed to 
a balanced program that allows players to discover their talents and strengths and grow as individuals. 
This balance results in excellence in all areas including athletics, academics, service, and leadership.
Ermiyas Academy actively promotes character, creativity, and citizenship that will set our players apart
 for the rest of their lives. Since the founding of the academy, a goal of KIS is to encourage our players 
 to become professional footballers. We know our players will make a difference, and we believe in each of them.
We invite you to join our Ermiyas community for the best time of your life.


          </Col>
      </Row> 
    
    <br></br>
    <div>
      <h1>About Us</h1>
      <p>“Ermiyas” just like the meaning of its name “HOPE” aims to give courage and provide 
        the proper training to the players, who strive to achieve their dreams. Ermiyas Football
         Academy being the first football academy in Ethiopia; it sets the standard of Football 
         Academies in Ethiopia.Ermiyas Football Academy is youth football academy registered with 
         Ethiopian Football Federation. The academy provides direction to individuals who are 
         keen to develop athletes of all ages in secure, professional environment, and foster one’s 
         sense of belong together and confidence which will allow individuals to make progress, 
         on and off the field.Throughout the years, Ermiyas aims not only to install football passion
          into young hopefuls, but also to foster world-class football player. This will be accomplished 
          through expert football training and systematic management system where players progress 
          from one level to another,
             MISSION
           why we are here for
           "To train Professi</p>
    </div>
    
         <div style={{width:'', paddingLeft:'70px'}}>
           
           <Row>
          <Col className='yyy'>
          <Card>
          <Card.Title>
         <h1 className='ty'><b>Mission</b></h1> 
         <h4>why we are here for</h4>
         <h4>"To train professional footballers equipped with right valu"</h4>
</Card.Title>
</Card>
          </Col>
          <hr></hr>
          <Col className='fff'>
          <Card>
           <Card.Title>
           <h1 className='ew'><b>Vision </b> </h1>
           <h4> What we are going to achieve</h4>
           <h4>play to serve, hope ein truth</h4>
</Card.Title>
            </Card>
          </Col>
          <hr></hr>
          <Col className='ermi'>
          <Card>
          <Card.Title>
            <h1 className='zx'><b>VALUE</b></h1> 
            <h4>How We Work </h4>
            <h4>Attempt: challenge to change</h4>
            <h4>Respect: Open comunicaton</h4>
            <h4>Serve: Value Others above ourselves with humble hearts</h4>
            </Card.Title>
            </Card>
          </Col>
          <hr></hr>
            </Row> 
            
          </div>
          <br></br>
          <Col>
<div> <h1>OUR COACHES</h1> <hr></hr>
<h6>ERMIYAS Academy provides training with most experienced caches 
  from overseas to foster players equipped with word-class level of
   physical strength, techninque, speed, agility, stamina,reactions, 
   spatial awareness and flexibility with emphasis of individual's 
   menatality.</h6>
   </div>
  </Col>
 <div>
      <Container>
        
       <Row>
         
        <Col> 
         <Card className='eyu'>
    <Card.Img variant="top" src="Yigerem_Profile_Photo_new.webp" />
        <h4>Aschenaki Tesfaye</h4>
        <p>Coach</p>
      
        </Card> 
      </Col>
        <Col>
         <Card className='efrem' >
        <Card.Title>
     <h5>Nationality<p><b>/Ethiopian</b></p></h5>
     <h5>Qualification</h5>
     <p>-CAF - D Licence</p>
     <p>Level 3 EFF Certificate</p>
     <p>Level 2 sport Friends international certifcate</p>
     <h5>Career</h5>
     <p>- Droga Fc</p>
  
     
        </Card.Title>
        </Card> </Col> 

        <Col> 
        <Card className='sami' >
         <Card.Img variant="top" src="Meklit_Profile_Photo_new.webp" />
        <h4>Meklit Abebe</h4>
        <p>Coach</p>
         </Card>
         </Col>

        <Col > 
         <Card  className='Jo'> 
         
          <Card.Title>
            <h5>Nationality<p><b>/Ethiopian</b></p></h5>
     <h5>Qualification</h5>
     <p>-CAF - D Licence</p>
     <p>Level 3 EFF Certificate</p>
     <p>Level 2 sport Friends international certifcate</p>
     <h5>Career</h5>
     <h6>Addis Ketema sub-city Fc Player</h6>
    
            </Card.Title>
             </Card>
        
          </Col>
           <Col > 
        <Card  className='abeni'>
         <Card.Img variant="top" src="Tio_Profile_Photo_new.webp" />
        <h2>Tio Abebe</h2>
        <p>Coach</p>
         </Card>
         </Col>

        <Col > 
         <Card className='almi' > 
         
          <Card.Title>
            <h5>Nationality<p><b>/Ethiopian</b></p></h5>
     <h5>Qualification</h5>
     <p>-CAF - D Licence</p>
     <p>Level 3 EFF Certificate</p>
     <p>Level 2 sport Friends international certifcate</p>
     <h5>Career</h5>
     <h6>Addis Ketema sub-city Fc Player</h6>
     <h6></h6>
            </Card.Title>
             </Card>
          </Col>
          <Col > 
        <Card  className='bana'>
         <Card.Img variant="top" src="Boch_Profile_Photo.webp" />
        <h4>Yigerem Ermiyas </h4>
        <p>Coach</p>
         </Card>
         </Col>
<Col> 
         <Card className='roza' > 
         
          <Card.Title>
            <h5>Nationality<p><b>/Ethiopian</b></p></h5>
     <h5>Qualification</h5>
     <p>-CAF - D Licence</p>
     <p>Level 3 EFF Certificate</p>
     <p>Level 2 sport Friends international certifcate</p>
     <h5>Career</h5>
     <h6>Addis Ketema sub-city Fc Player</h6>
     <h6></h6>
            </Card.Title>
             </Card>
          </Col>
        
      </Row>
    </Container>  
      </div>
         </section>
      </main>
<br></br>
      <Row  style={{backgroundColor:'#e1c7c7', borderRadius:'20px'}}>
        
      <h2>Our Training Day</h2>
      <Col><h6>Monday</h6>
      <h6>4:00Pm - 6:00pm</h6>
      </Col>
      <Col> 
      <h6>wensday</h6>
      <h6>10:00pm - 12:00Am</h6>
      </Col>
      <Col>
     <h6> Friday</h6>
     <h6>4:00pm - 6:00pm</h6>
      </Col>
      
      </Row>
      <br></br>

<Row style={{backgroundColor:'#424040', color:'white', borderRadius:'20px', position:'relative',}}>
        <Col><h2>CONTACT US </h2><hr></hr>
       <h6>+251-934-201844 (Mr.Ermiyas)</h6>
       <h6>+251-937-981763(Mr.Abenezer)</h6>
      <a href=" "> <p>Email:</p> ermiasefrem827@gmail.com</a>
        </Col>
        <Col > 
        <h2>Menu</h2><hr></hr>
               <div className='link'>
                <Link to="/">
                  <p style={{color:'#f4efef'}}>Home</p>
                </Link>
                <Link to="/Register">
                  <p style={{color:'#f4efef'}}>Register</p>
                </Link>
                <Link to="/Studentlist">
                  <p style={{color:'#f4efef'}}>playerlist</p>
                </Link>
                <Link to="/Gallery">
                <p style={{color:'#f4efef'}}>Gallery</p> 
                </Link>
               </div>
        </Col>
        
      </Row>
      
      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.8em' }}>
        <p>&copy; 2026  ERMIYAS Academy  .</p>
      </footer>
    </div>
  );
};

export default SchoolHomePage;
    