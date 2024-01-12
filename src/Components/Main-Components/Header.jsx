import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
import SubNav from "../Hero-Components/SubNav";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidNavigation } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";



const Header = () => {

  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
        <Container fluid>
          <Navbar.Brand>
            <img
              alt="logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />
            <NavLink activeClassName="active" to="/">
              Studyz Academy{" "}
            </NavLink>
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
            <Nav className="ms-auto Nav-Responsive">
              <Nav.Link as={NavLink} className="Header-Nav" to="/Home">
                <FaHome
                  className="mx-2 Header-Icon"
                  style={{ marginTop: "-2px" }}
                />
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="Header-Nav" to="/Courses">
                <FaBookOpen className="mx-2" style={{ marginTop: "-2px" }} />
                Courses
              </Nav.Link>
              <Nav.Link as={NavLink} className="Header-Nav" to="/Blog">
                <FaBlog className="mx-2" style={{ marginTop: "-2px" }} />
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} className="Header-Nav" to="/About-us">
                <BiSolidUserDetail
                  className="mx-2"
                  style={{ marginTop: "-2px" }}
                />
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} className="Header-Nav" to="/Contact-us">
                <BiSolidNavigation
                  className="mx-2"
                  style={{ marginTop: "-2px" }}
                />
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SubNav />
    </div>
  );
};

export default Header;
