import { Col, Container, Row } from "react-bootstrap";
// import { MdCompassCalibration } from "react-icons/md";
import ColouredLine from "../../Utilities/ColouredLine";
// import { CiStreamOn } from "react-icons/ci";
// import { PiMediumLogoFill } from "react-icons/pi";
// import { AiTwotoneSafetyCertificate } from "react-icons/ai";
// import { MdAccessTime } from "react-icons/md";
import WebDesign from "../../Utilities/Web-Design-Name";
import { motion } from "framer-motion";
// import WhyChooseUsIcon from '../../assets/Images/Why-Choose-Us.png'

const WhyChoose = () => {
  const AcademicBenefits = [
    "Registered Company",
    "Qualified Lecture Panel",
    "Active Social Medias",
    "Certificate Verifications",
    "100% Online Practical Sessions",
    "Training Request Letters",
    "Cloud & onsite Internships",
    "100% Career based & Guranteed",
  ];

  const CourseBenefits = [
    "Instant Session Recordings",
    "Ask Anything with Lecture Panel",
    "Special HelpLine Support",
    "Course Flow And Overview",
    "Unmute Anytime",
    "Extra Discussion Classes",
    "Individual Discussion Class    ",
    "Fixed Time Schedule",
    "Limited Seats To Improve Quality",
    "100% Online Practical Sessions",
    "Batch Grouping",
    "Discussion Groups",
    "Attendance Monitoring",
    "Best Performer Benefits",
  ];

  const CareerBenefits = [
    "Industrial & Trending Updates",
    "CV Preparation",
    "Interview Preparation",
    " Portfolio Preparation",
    " Student Forum",
    " Special Language Training",
    " Digital Assets & Supports",
    " Basic IT and Application Trainings",
  ];

  // const container = {
  //   hidden: { opacity: 0, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.7,
  //       staggerChildren: 0.7,
  //     },
  //   },
  // };

  const children = {
    hidden: { opacity: 0, y: -1000 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          <Col md={12} lg={12} xs={12}>
            <div className="wrapper">
              <div className="details">
                <motion.div>
                  <p
                    className="Sub-heading"
                    style={{ textTransform: "uppercase" }}
                  >
                    Benefits & Features{" "}
                  </p>
                </motion.div>
              </div>
              {/* <ColouredLine /> */}
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="feature-heading">Academy Benefits</div>
            <div className="ms-3 mb-5"  style={{borderLeft:"red 2px solid", }}>
              {AcademicBenefits.map((item) => (
                <div key={item}>
                  <motion.div
                    className="feature-item"
                    variants={children}
                    initial="hidden"
                    animate="visible"
                  >
                    {item}
                  </motion.div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="feature-heading">Course Benefits</div>
            <div className="ms-3 mb-5"  style={{borderLeft:"red 2px solid",}}>
              {CourseBenefits.map((item) => (
                <div key={item} className="" >
                  <motion.div
                    className="feature-item"
                    variants={children}
                    initial="hidden"
                    animate="visible"
                  >
                    {item}
                  </motion.div>
                </div>
              ))}
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="feature-heading">Career Benefits</div>
            <div className="ms-3 mb-5" style={{borderLeft:"red 2px solid", paddingLeft:"15px"}}>
              {CareerBenefits.map((item) => (
                <div key={item} >
                  
                  <motion.div
                    className="feature-item"
                    variants={children}
                    initial="hidden"
                    animate="visible"
                  >
                    {item}
                  </motion.div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default WhyChoose;

{ 
  /* <Col md={12} lg={12} xs={12}>
<Container className="mt-3">
  <Row>
    {ChooseusItems.map((item) => (
      <Col xs={12} md={4} lg={3} xl={2} key={item}>
        <motion.div
          className="Why-Choose-Us-Circle"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="Why-Choose-Us-Circle-Content">
            <MdCompassCalibration className="Why-Choose-Us-Circle-Content-Icon" />
          </div>
        </motion.div>
        <motion.div
          className="Why-Choose-Us-Title"
          variants={children}
          initial="hidden"
          animate="visible"
        >
          {item}
        </motion.div>
      </Col>
    ))}
  </Row>
</Container>
</Col> */
}
