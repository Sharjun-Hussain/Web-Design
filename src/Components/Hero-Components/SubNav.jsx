
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function BasicExample() {
    return (
        <Navbar expand="lg"   style={{backgroundColor:"rgb(204,73,30)"}}>
            <Container fluid >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div style={{ marginInline: "auto" }}>
                        <div>
                            <Row>
                                <Nav className="me-auto">
                                    <Nav.Link > <Link to="Home">Course Details</Link></Nav.Link>
                                    <Nav.Link >  <Link to="Consultant">Consultants</Link></Nav.Link>
                                    <Nav.Link href="#feedback" >Feedback</Nav.Link>
                                    <Nav.Link href="#stories" className="pr-5">Stories</Nav.Link>
                                    <Nav.Link href="#webinar" className="pr-5">Related Webinar</Nav.Link>
                                    <Nav.Link href="#performence" className="pr-5">Best Performance</Nav.Link>
                                    <Nav.Link href="#summary" className="pr-5">Batch Summary</Nav.Link>
                                </Nav>
                            </Row>
                        </div>
                       
                        <div>
                            <Row>
                                <Nav className="me-auto justify-content-center">
                                    <Nav.Link href="#Features" className="pr-5">Features</Nav.Link>
                                    <Nav.Link href="#Benifits" className="pr-5">Benefits</Nav.Link>
                                    <Nav.Link href="#Outcome" className="pr-5">Outcome</Nav.Link>
                                    <Nav.Link href="#Teaching" className="pr-5">Teaching</Nav.Link>
                                    <Nav.Link href="#sylabus" className="pr-5">Syllabus</Nav.Link>
                                    <Nav.Link href="#Bonus" className="pr-5">Bonus</Nav.Link>
                                    <Nav.Link href="#Awardings" className="pr-5">Awardings</Nav.Link>
                                </Nav>
                            </Row>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
