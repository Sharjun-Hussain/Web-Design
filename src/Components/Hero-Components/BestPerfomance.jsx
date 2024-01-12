import { Col, Container, Row,Card , Button } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const BestPerfomance = () => {
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
                    <Card.Text>Sharjun Hussain</Card.Text>
                    <Card.Text style={{marginTop:"-16px"}}>Batch-01</Card.Text>
                   
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
                    <Card.Text>Sharjun Hussain</Card.Text>
                    <Card.Text style={{marginTop:"-16px"}}>Batch-02</Card.Text>
                   
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
                    <Card.Text>Sharjun Hussain</Card.Text>
                    <Card.Text style={{marginTop:"-16px"}}>Batch-03</Card.Text>
                   
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
                    <Card.Text>Sharjun Hussain</Card.Text>
                    <Card.Text style={{marginTop:"-16px"}}>Batch-04</Card.Text>
                   
                  </Card.Body>
                </Card>
              </Col>
              <Button className="p-3" style={{fontSize:"1.4rem",fontWeight:"600"}}>Explore the Perfomed Students </Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default BestPerfomance