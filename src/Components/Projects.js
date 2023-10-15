import NavBar from "./NavBar";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

function Projects(){
    return(
        <div>
            <NavBar/>
            <Row style={{margin:'0',height:'100vh'}}>
                <Col lg={4} md={12} xs={12}>
            <Image  src={require('../Images/projects.jpg')} alt="" style={{width:'500px',marginTop:'50px'}} fluid/>
            </Col>
            <Col lg={8} md={12} xs={12}>
            <div style={{marginTop:'150px',border:'2px solid black',borderRadius:'5px',backgroundColor:'#c8c7c1'}}>
                <h3 style={{textAlign:'center'}}>First project</h3>
                <p style={{marginLeft:'20px',fontSize:'100%'}}>
            My first project is a game made with html css and javascript.The game is based on clicks with which the user has to reach the final 
            goal.It is possible to buy workers as well as accessories for them or simply accumulate resources with your own labor. 
            The ultimate goal is to cast a golden statuette.
                    </p>
                    <Row>
                        <Col lg={6} md={6} xs={12} style={{textAlign:'center',marginBottom:'10px'}}>
                    <a href="https://gold-mine.netlify.app/" style={{color:'#00294f',fontSize:'20px'}}>Visit the game</a>
                    </Col>
                    <Col lg={6} md={6} xs={12} style={{textAlign:'center',marginBottom:'10px'}}>
                    <a href="https://github.com/BBotev/MyGame" style={{color:'#00294f',fontSize:'20px'}}>Source code</a>
                    </Col>
                    </Row>
            </div>
            <div style={{marginTop:'100px',border:'2px solid black',borderRadius:'5px',backgroundColor:'#c8c7c1'}}>
            <h3 style={{textAlign:'center'}}>Second project</h3>
            <p style={{marginLeft:'20px',fontSize:'100%'}}
            >My second project is a full stack application which is a massage studio website.You can register on the site, after which you can 
            make a request to an administrator with selected procedures. The administrator processes the order and sends the user the new status
             of the order.The site is made with the so-called MERN sack (mongodb,express,react,node)
            </p>
            <Row>
            <Col lg={4} md={4} xs={12} style={{textAlign:'center',marginBottom:'10px'}}>
            <a href="https://joys-bg.netlify.app/" style={{color:'#00294f',fontSize:'20px'}}>Visit the website</a>
            </Col>
            <Col lg={4} md={4} xs={12} style={{textAlign:'center',marginBottom:'10px'}}>
            <a href="https://github.com/BBotev/Joys" style={{color:'#00294f',fontSize:'20px'}}>Source code frontend</a>
            </Col>
            <Col lg={4} md={4} xs={12} style={{textAlign:'center',marginBottom:'10px'}}>
            <a href="https://github.com/BBotev/Joys-Backend" style={{color:'#00294f',fontSize:'20px'}}>Source code backend</a>
            </Col>
            </Row>
            </div>
            </Col>
           
            </Row>
        </div>
    )
}

export default Projects;