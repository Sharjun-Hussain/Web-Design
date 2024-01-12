import { Col, Container, Row, Image } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const Awarding = () => {
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
              <p className="Sub-heading">Awarding</p>
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
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
              <Col md={12} lg={3} xl={3} xs={12}>
                <Image src="https://dummyimage.com/1500x1000" thumbnail />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Awarding