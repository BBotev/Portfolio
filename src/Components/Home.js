import image from "../Images/back.png";
import NavBar from "./NavBar";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

function Home(){
    return(
      <>
      <NavBar/>
        <div style={{width:'100vw',height:'auto',minHeight:'100vh',backgroundImage:`url(${image})`,backgroundSize:'100% 100%'}}>
        <Row style={{margin:'0px'}}>
        <Col lg={10} md={12} xs={12} style={{marginTop:'125px'}}>  
        <div className="me">     
            <h3 style={{marginLeft:'80px',color:'white'}}>Hi,i'm Borislav</h3>
            </div>
        <Image src={require('../Images/me.png')} fluid style={{marginLeft:'-100px'}}/>
        </Col> 
       <Col lg={2} md={12} xs={12} style={{marginTop:'125px'}}>     
        <h3 style={{color:'white',marginTop:'60px'}}>About me</h3>
        <p style={{color:'white'}}>I study programming with a specialty in business informatics</p>
        <a href="/about" style={{color:'white'}}>Learn more</a>     
        <h3 style={{color:'white',marginTop:'70px'}}>My work</h3>
        <p style={{color:'white'}}>I'm new to programming but I already have two projects</p>
        <a href="/projects" style={{color:'white'}}>Learn more</a>    
       </Col>
       </Row>
        </div>
        </>
    )
}
export default Home;