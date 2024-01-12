import { Col, Container, Row,Card } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const Bonus = () => {
  return (
    <Container className=" Content">
    <Row>
      <Col md={12} sm={12} xs={12}>
        <WebDesign />
      </Col>
      <ColouredLine color="white" />
    </Row>
    <Row>
      <Col md={12} lg={12} xs={12}>
        <div className="wrapper">
          <div className="details">
            <p className="Sub-heading">Best Perfomance OF Batches</p>
          </div>
          {/* <ColouredLine /> */}
        </div>
      </Col>
    </Row>

    <Row>
      <Col md={12} lg={12} xs={12}>
        <Container className="mt-3 ps-0 ">
          <Row style={{ rowGap: "30px" }}>
          <Col xs={12} md={4} lg={3} xl={3}>
              <Card
                className=" mb-4 Consultant-Card "
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                
              >
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/1500x1000"
                  width="34"
                  loading="lazy"
                />
                <Card.Body className="Consultant-Card-Body">
                  <Card.Text>English</Card.Text>
                  <Card.Text style={{marginTop:"-16px"}}>Description</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3} xl={3}>
              <Card
                className=" mb-4 Consultant-Card "
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                
              >
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/1500x1000"
                  width="34"
                  loading="lazy"
                />
                <Card.Body className="Consultant-Card-Body">
                  <Card.Text>English</Card.Text>
                  <Card.Text style={{marginTop:"-16px"}}>Description</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={3} xl={3}>
              <Card
                className=" mb-4 Consultant-Card "
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
                
              >
                <Card.Img
                  variant="top"
                  src="https://dummyimage.com/1500x1000"
                  width="34"
                  loading="lazy"
                />
                <Card.Body className="Consultant-Card-Body">
                  <Card.Text>English</Card.Text>
                  <Card.Text style={{marginTop:"-16px"}}>Description</Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  )
}

export default Bonus