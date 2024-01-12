import { Col, Container, Row, Image,Button } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const Summary = () => {
  return (
    

    <div>

      {/* Funny Moments   */}

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
                <p className="Sub-heading">Funny Moments</p>
              </div>
              {/* <ColouredLine /> */}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} xs={12}>
            <Container className="mt-3 ps-0 ">
              <Row style={{ rowGap: "30px" }}>
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>


       {/* Final Projects   */}
      
       <Container className=" Content mt-5">
       <ColouredLine />
        <Row>
          <Col md={12} lg={12} xs={12}>
            <div className="wrapper">
              <div className="details">
                <p className="Sub-heading">Final Projects</p>
              </div>
             
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} xs={12}>
            <Container className="mt-3 ps-0 ">
              <Row style={{ rowGap: "30px" }}>
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>{" "}
                <Col md={12} lg={3} xl={3} xs={12}>
                  <Image src="https://dummyimage.com/1500x1000" thumbnail />
                </Col>
                <Button className="p-3"  style={{fontSize:"1.4rem",fontWeight:"600"}}>Expand </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
