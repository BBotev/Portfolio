import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <img  src={require('../Images/logo.jpg')} alt='' style={{width:'50px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{margin:'0 auto'}}>
                <Nav.Link href="/" style={{fontSize:'20px',marginRight:'50px'}}>Home</Nav.Link>
                <Nav.Link href="/about" style={{fontSize:'20px',marginRight:'50px'}}>About</Nav.Link>
                <Nav.Link href="/projects" style={{fontSize:'20px'}}>Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <a style={{backgroundColor:'#C6081F',color:'white',padding:'10px 20px',border:'2px solid white',borderRadius:'5px',textDecoration:'none'}} href="/contactme">Contact me</a>
          </Container>
        </Navbar>
      
  );
}

export default NavBar;