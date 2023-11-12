
import NavBar from "./NavBar";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

function About(){
    return(
       
        <Row style={{margin:'0',backgroundColor:'black',height:'100%',minHeight:'100vh'}}>
        <NavBar/>
    <Col lg={10} md={12} xs={12} style={{marginTop:'120px'}}>
        <div style={{marginTop:'50px',textAlign:'center'}}>
    <p style={{color:'white',fontFamily:'mono',fontSize:'35px'}}>About me</p>
    <p style={{margin:'0 auto',fontSize:'30px',color:'white',fontFamily:'mono',marginTop:'10px'}}>
    Hello, my name is Borislav Ognyanov Botev and for 13 years I have been working in a company dealing with the production of joinery.
     My position there is a CNC operator. My English is at a very low level, even now I use google translator. I am currently studying 
     "business informatics" at the business academy in the city of Svishtov and I am in my third year. I have been doing programming for about a
      year, learning it mainly from videos on the Internet. During this time I realized that this is the job I want to do. 
      I believe that I could I am developing in this field..
    </p>
    </div>
    </Col>
    <Col lg={2} md={12} xs={12} style={{marginTop:'120px'}}>   
<Image  src={require('../Images/abouthtml.jpg')} alt='' fluid/>
<Image  src={require('../Images/aboutcss.png')} alt='' fluid />
<Image  src={require('../Images/aboutjs.jpg')} alt='' fluid />
<Image  src={require('../Images/aboutreact.png')} alt='' fluid />
</Col>

</Row>


    )
}

export default About;