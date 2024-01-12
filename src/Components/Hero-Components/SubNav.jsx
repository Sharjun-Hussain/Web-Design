import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import ColouredLine from "../../Utilities/ColouredLine";
import { motion } from "framer-motion";

function BasicExample() {
  const SubNavItems1 = [
    {
      id: "1",
      to: "Home",
      name: "Course Details",
    },
    {
      id: "2",
      to: "Consultant",
      name: "Consultant",
    },
    {
      id: "3",
      to: "Feedback",
      name: "Feedback",
    },
    {
      id: "4",
      to: "Stories",
      name: "Stories",
    },
    {
      id: "5",
      to: "Related",
      name: "Related Webinar",
    },
    {
      id: "6",
      to: "Performance",
      name: "Best Performance",
    },
    {
      id: "7",
      to: "Batch-Summary",
      name: "Batch Summary",
    },
  ];

  const SubNavItems2 = [
    {
      id: "8",
      to: "Why-US",
      name: "Features",
    },
    
    {
      id: "10",
      to: "Outcomes",
      name: "Outcomes",
    },
    {
      id: "11",
      to: "Teaching-Shots",
      name: "Teaching Shots",
    },
    {
      id: "12",
      to: "Syllabus",
      name: "Syllabus",
    },
    {
      id: "13",
      to: "Bonus",
      name: "Bonus Courses",
    },
    {
      id: "14",
      to: "Awardings",
      name: "Awardings",
    },
  ];
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#C90014" }} sticky="botto">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          restoreFocus={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              style={{
                fontWeight: "700",
                textAlign: "center",
                marginInline: "auto",
              }}
              id={`offcanvasNavbarLabel-expand-md`}
            >
              Studyz Academy
            </Offcanvas.Title>
            <ColouredLine />
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <div style={{ marginInline: "auto" }}>
              <div>
                <Row>
                  <Nav className="me-auto">
                    {" "}
                    {SubNavItems1.map((menu) => (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={menu.id}
                      >
                        <Nav.Link as={NavLink} to={menu.to}>
                          {menu.name}
                        </Nav.Link>
                      </motion.div>
                    ))}
                  </Nav>
                </Row>
              </div>

              <div>
                <Row>
                  <Nav className="me-auto justify-content-center">
                  {SubNavItems2.map((menu) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    key={menu.id}
  >
    <Nav.Link as={NavLink} to={menu.to}>
      {menu.name}
    </Nav.Link>
  </motion.div>
))}
                  </Nav>
                </Row>
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

// {
//   SubNavItems.map((menu) => (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       key={menu.id}
//     >
//       <Nav.Link as={NavLink} to={menu.to}>
//         {menu.name}
//       </Nav.Link>
//     </motion.div>
//   ));
// }
