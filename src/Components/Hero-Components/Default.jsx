import { Card, Col, Container, Row } from "react-bootstrap";
import { RxTimer } from "react-icons/rx";
import ColouredLine from "../../Utilities/ColouredLine";
import { CiStreamOn } from "react-icons/ci";
import { PiMediumLogoFill } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import WebDesign from "../../Utilities/Web-Design";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Default = () => {
  useEffect(()=>{
    Aos.init({duration: 900})
  })
  return (
    <div className=" "  >
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
                <div>
                  <p>About This Course</p>
                  <p style={{ fontSize: "15px" }}>
                    Laravel 10 - Create a Dynamic News Portal / News Paper and
                    Magazine Website with Modern Features and Advanced
                    Techniques
                  </p>
                </div>
              </div>
              <ColouredLine />
              <div className="quatification" data-aos="fade-left">
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
                <Col  md={4} lg={6} xl={4} xs={6}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                    data-aos="flip-down"
                  >
                    <Card.Body>
                      <div>
                        <RxTimer size={40} />
                      </div>

                      <h1
                        style={{ color: "rgb(204,73,30)", fontSize: "1em" }}
                      >
                        Time Duration
                      </h1>
                      <h3
                        style={{
                          color: "white",
                          marginTop: "-10px",
                          fontSize: "1em",
                        }}
                        
                      >
                        3 Months
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={6} md={4} lg={6} xl={4}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                    data-aos="flip-down"
                  >
                    <Card.Body>
                      <div>
                        <PiMediumLogoFill size={40} />
                      </div>

                      <h1
                        style={{ color: "rgb(204,73,30)", fontSize: "1.2em" }}
                      >
                        Medium
                      </h1>
                      <h3
                        style={{
                          color: "white",
                          marginTop: "-10px",
                          fontSize: "1em",
                        }}
                      >
                        Tamil{" "}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={6} md={4} lg={6} xl={4}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                    data-aos="flip-down"
                  >
                    <Card.Body>
                      <div>
                        <CiStreamOn size={40} />
                      </div>

                      <h1
                        style={{ color: "rgb(204,73,30)", fontSize: "1.2em" }}
                      >
                        Stream On
                      </h1>
                      <h3
                        style={{
                          color: "white",
                          marginTop: "-10px",
                          fontSize: "1em",
                        }}
                      >
                        Zoom{" "}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>

                

                <Col xs={6} md={4} lg={6} xl={4}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                    data-aos="flip-down"
                  >
                    <Card.Body>
                      <div>
                        <MdAccessTime size={40} />
                      </div>

                      <h1
                        className="display-2"
                        style={{ color: "rgb(204,73,30)", fontSize: "1.2em" }}
                      >
                        Total Hours
                      </h1>
                      <h3
                        style={{
                          color: "white",
                          marginTop: "-10px",
                          fontSize: "1em",
                        }}
                      >
                        300 Hrs{" "}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} lg={6} xl={4}>
                  <Card
                    className="gap-3 mb-4 "
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid white",
                    }}
                    data-aos="flip-down"
                  >
                    <Card.Body>
                      <div>
                        <AiTwotoneSafetyCertificate size={40} />
                      </div>

                      <h1
                        className="display-2"
                        style={{ color: "rgb(204,73,30)", fontSize: "1.2em" }}
                      >
                        Certificate Type
                      </h1>
                      <h3
                        style={{
                          color: "white",
                          marginTop: "-10px",
                          fontSize: "1em",
                        }}
                      >
                        Diploma{" "}
                      </h3>
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

export default Default;
