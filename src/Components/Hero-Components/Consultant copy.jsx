import { Col, Container, Row, Card } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";


const Consultant = () => {
  return (

       <div className="Content">
      <Container className=" ">
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="Heading" style={{ color: "white" }}>
              {" "}
              WEB <span style={{ color: "rgb(204,73,30)" }}>DESIGN</span>{" "}
            </div>
          </Col>
        </Row>
        <ColouredLine color="white" />
        <Row>
          <Col md={12} lg={6} xs={12}>
            <div className="wrapper">
              <div className="details">
                <div>
                  <p>About This Course</p>
                  <p>
                    Laravel 10 - Create a Dynamic News Portal / News Paper and
                    Magazine Website with Modern Features and Advanced
                    Techniques
                  </p>
                </div>
              </div>
              <ColouredLine />
              <div className="quatification">
                <p>Entry Requirements</p>
              </div>

              <ColouredLine />
              <div className="schedule">
                <p>Time Schedule</p>
              </div>
              <ColouredLine />
              <div className="Instructor-panel">
                <p>Instructor Panele</p>
              </div>
              <ColouredLine />
              <div className="Audience">
                <p>Target Audience</p>
              </div>
            </div>
          </Col>

          <Col md={12} lg={6} xs={12}>
            <Container className="mt-3">
              <Row>
                <Col xs={12} md={4} lg={6} xl={4}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                  >
                    <Card.Body>
                      <div>
                      
                      </div>

                      <h1 style={{ color: "rgb(204,73,30)",fontSize:"1.2em" }}>Time Duration</h1>
                      <h3 style={{color:"white", marginTop:"-10px", fontSize:"1em"}}>3 Months</h3>
                    </Card.Body>

                  </Card>
                </Col>

              

                


                
               
                

                
                
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Consultant;
