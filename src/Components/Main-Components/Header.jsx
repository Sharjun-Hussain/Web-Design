import { Container, Nav, Navbar,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
import SubNav from '../Hero-Components/SubNav'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" style={{backgroundColor:"black"}}>
        <Container fluid>
          <Navbar.Brand >
            <img
              alt="logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />
            <Link to="/">Studyz Academy </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
            <Nav className="ms-auto">
            
              <Nav.Link > <Link to="/Home">Home</Link></Nav.Link>
              <Nav.Link > <Link to="/Courses">Courses</Link></Nav.Link>
              <Nav.Link > <Link to="/Blog">Blog</Link></Nav.Link>
              <Nav.Link > <Link to="/About-us">About us</Link></Nav.Link>
              <Nav.Link > <Link to="/Contact-us">Contact us</Link></Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SubNav/>
    </div>
  );
};

export default Header;
