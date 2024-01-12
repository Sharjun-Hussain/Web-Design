import { Col, Container, Row,  } from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const OutCome = () => {
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
              <p className="Sub-heading">OutComes</p>
            </div>
            {/* <ColouredLine /> */}
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12} xs={12}>
          <Container className="mt-3 ps-0 ">
            <Row>
              <Col xs={12} md={4} lg={6} xl={6}>
                    <div>Images</div>
              </Col>
              <Col xs={12} md={4} lg={6} xl={6}>
                    <div style={{fontSize:"2rem"}}>Learner outcomes on courses you will take</div>
                    <div>
                        <ul>
                            <li>Freelancing</li>
                            <li>Own Business Developement</li>
                            <li>Content Writing</li>
                            <li>Graphical Designing</li>
                            <li>Software Development Industries</li>
                            <li>UI/UX Designing</li>
                            <li>SEO</li>
                        </ul>
                    </div>
              </Col>

             
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default OutCome