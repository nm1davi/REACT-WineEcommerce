import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { CartWidget } from "../cartwidget/CartWidget";
 import imagevino from "../../assets/img/logo_transparent.png";
import "./NavBar.css"
import { Link } from 'react-router-dom';


export const NavBar = () => (
      <div className='contenedor'>
      <Navbar className='navBar'>
        <Container>
          <div className='logo'>
          <img className='ImagenLogo' src={imagevino} alt="Logo del vino" />
          <div className='nombreLocal'>
          <Navbar.Brand href="/">MendoVino</Navbar.Brand>
          </div>
          </div>
          <div className='categorias'>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/categoria/Blend">Blends</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Cabernet Sauvignon">Cabernet Sauvignon</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Chardonnay">Chardonnay</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Malbec">Malbec</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Pinot">Pinot</Nav.Link>
            <Nav.Link as={Link} to="/categoria/Sauvignon Blanc">SauvignonBlanc</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
          </div>
          <div className='carrito'>
          <CartWidget />
          </div>
        </Container>
      </Navbar>
      </div>
);



                  