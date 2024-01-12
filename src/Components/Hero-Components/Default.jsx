import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { RxTimer } from "react-icons/rx";
import ColouredLine from "../../Utilities/ColouredLine";
import { CiStreamOn } from "react-icons/ci";
import { PiMediumLogoFill } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import WebDesign from "../../Utilities/Web-Design-Name";
import { motion } from "framer-motion";
import Mentor from '../../assets/Images/mentor-1.jpg'

const Default = () => {
  return (
    <motion.div
      className=" "
      initial={{ x: -800, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Container className="Content ">
        {/* Course Name */}

        <Row>
          <Col md={12} sm={12} xs={12}>
            <WebDesign />
          </Col>
        </Row>
        <ColouredLine color="white" />

        {/* Content Area Start */}

        <Row>
          <Col md={12} lg={6} xs={12}>
            <div className="wrapper">
              <div className="details">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <p className="Sub-heading">
                    About This{" "}
                    <span
                      style={{
                        backgroundColor: "#C90014",
                        paddingInline: "10px",
                        paddingBottom: "3px",
                      }}
                    >
                      Course
                    </span>{" "}
                  </p>
                  <p className="content-font ">
                    Master WordPress web design effortlessly with our
                    beginner-friendly course. Learn hands-on skills for creating
                    responsive, customized websites, and delve into SEO and
                    e-commerce. Build a standout portfolio and unleash your
                    creativity in the world of web design.
                  </p>
                </motion.div>
              </div>
              <ColouredLine />
              <div className="quatification">
                <Row>
                  <Col xs={12}>
                    <p className="Sub-heading">
                      Entry{" "}
                      <span
                        style={{
                          backgroundColor: "#C90014",
                          paddingInline: "10px",
                          paddingBottom: "3px",
                        }}
                      >
                        Requirements
                      </span>{" "}
                    </p>
                  </Col>
                  <Col>
                    <p className="content-font">Basic Computer Knowledge</p>
                  </Col>
                </Row>
              </div>

              <ColouredLine />
              <div className="schedule">
                <Row>
                  <Col xs={12}>
                    <p className="Sub-heading">
                      Time{" "}
                      <span
                        style={{
                          backgroundColor: "#C90014",
                          paddingInline: "10px",
                          paddingBottom: "3px",
                        }}
                      >
                        Schedule
                      </span>
                    </p>
                  </Col>
                  <Col>
                    <p className="content-font">Monday 7 PM to 9 30 PM</p>
                    <p className="content-font">Wednesday 7 PM to 9 30 PM</p>
                  </Col>
                </Row>
              </div>
              <ColouredLine />
              <div className="Instructor-panel">
                <Row>
                  <Col xs={12} md={12}>
                    <p className="Sub-heading">
                      Instructor{" "}
                      <span
                        style={{
                          backgroundColor: "#C90014",
                          paddingInline: "10px",
                          paddingBottom: "3px",
                        }}
                      >
                        Panel
                      </span>{" "}
                    </p>
                  </Col>

                  <Col md={5} xs={12} className="mentor-container  d-md-block d-sm-flex  justify-content-sm-center ">
                    <Image src={Mentor} thumbnail className="mentor"/>
                    <div className="instructor-bg-1"></div>
                    <div className="instructor-bg-2"></div>
                  </Col>
                  <Col md={7} xs={12}>
                  <div className="content-font">Hi! My name is Mohamed Imdhiyas, <br/><span style={{color:"#c90014",fontWeight:"700"}}>Iam your Mentor</span></div>
                  </Col>
                </Row>
              </div>
              <ColouredLine />
              <div className="">
                <Row>
                  <Col xs={12}>
                    <p className="Sub-heading">Target Audience</p>
                  </Col>
                  <Col md={6} xs={12}>
                    <div className="audience">Job Seekers</div>
                  </Col>

                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">Job Seekers</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">
                      Freelancers or Part time Job Seekers
                    </div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">Undergraduates</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">IT Students</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">Undergraduates</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">After O/L and A/L</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">Business Peoples</div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">
                      Digitel Marketing Industry (Fresh/Current)
                    </div>
                  </Col>
                  <Col md={6} xs={12}>
                    {" "}
                    <div className="audience">
                      Software Development Industry
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            {/* <span style={{backgroundColor:"#C90014", paddingInline:"10px", paddingBottom:"3px"}}>Panel</span> */}
          </Col>

          <Col md={12} lg={6} xs={12}>
            <Container className="mt-3">
              <Row>
                <Col md={6} lg={6} xl={6} xs={12}>
                  <Card className="gap-3 mb-4 default-card ">
                    <Card.Body>
                      <div>
                        <RxTimer size={40} />
                      </div>

                      <p className="default-card-main-title">Time Duration</p>
                      <p className="default-card-sub-title">3 Months</p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} lg={6} xl={6} xs={12}>
                  <Card className="gap-3 mb-4  default-card">
                    <Card.Body>
                      <div>
                        <PiMediumLogoFill size={40} />
                      </div>

                      <p className="default-card-main-title">Medium</p>
                      <p className="default-card-sub-title">Tamil </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} lg={6} xl={6} xs={12}>
                  <Card className="gap-3 mb-4 default-card ">
                    <Card.Body>
                      <div>
                        <CiStreamOn size={40} />
                      </div>

                      <p className="default-card-main-title">Stream On</p>
                      <p className="default-card-sub-title">Zoom </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6} lg={6} xl={6} xs={12}>
                  <Card className="gap-3 mb-4 default-card ">
                    <Card.Body>
                      <div>
                        <MdAccessTime size={40} />
                      </div>

                      <p className="default-card-main-title">Total Hours</p>
                      <p className="default-card-sub-title">300 Hrs </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={6} xl={6} xs={12}>
                  <Card className="gap-3 mb-4 default-card ">
                    <Card.Body>
                      <div>
                        <AiTwotoneSafetyCertificate size={40} />
                      </div>

                      <p className="default-card-main-title">
                        Certificate Type
                      </p>
                      <p className="default-card-sub-title">Diploma </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={12} xl={12} xs={12}>
                  <Card className="gap-3 mb-4 default-card-extended ">
                    <Card.Body>
                      <div>
                        <AiTwotoneSafetyCertificate size={40} />
                      </div>

                      <p className="default-card-extended-main-title text-capitalize ">
                        Learning Tools & Materials Given
                      </p>
                      <p className="default-card-extended-sub-title text-capitalize">
                        Free Domain{" "}
                      </p>
                      <p className="default-card-extended-sub-title text-capitalize">
                        Free Hosting{" "}
                      </p>
                      <p className="default-card-extended-sub-title text-capitalize">
                        Canva Pro Account{" "}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Default;
