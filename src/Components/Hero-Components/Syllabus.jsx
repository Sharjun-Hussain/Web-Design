import { Col, Container, Row} from "react-bootstrap";
import ColouredLine from "../../Utilities/ColouredLine";
import WebDesign from "../../Utilities/Web-Design-Name";

const Syllabus = () => {

  

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
              <p className="Sub-heading Syllabus">Topics Covered By This Course</p>
         
            </div>
           
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12} xs={12}>
          <Container className="mt-3 ps-0 ">
            <Row>
              
              <Col xs={12} md={4} lg={6} xl={6}>
                    {/* <div style={{fontSize:"2rem"}}>Learner outcomes on courses you will take</div> */}
                    <div className="content-font ms-5" style={{borderLeft:"red 2px solid", paddingLeft:"15px"}} >
                         
                            <div>Introduction to Web Development</div>
                            <div>Servers and Domain</div>
                            <div>HTML  CSS Bootstrap</div>
                            <div>Introduction to WP</div>
                            <div>Installing On Windows</div>
                            <div>WordPress Basics</div>
                            <div>Pages & Post</div>
                            <div>WordPress Settings</div>
                            <div>Plugins</div>
                            <div>Work with Elementor</div>
                            <div>Templates</div>
                            <div>CG01 - Structure plan</div>
                            <div>Theme</div>
                            <div>Work with Designing Plugins</div>
                            <div>Forms</div>
                            <div>Work with Dynamic oriented Plugins</div>
                            <div>User Administration</div>
                            <div>WordPress Security</div>
                            <div>Header Footer & Menu</div>
                            <div>Design and Develop together</div>
                            <div>Mobile Responsive Site</div>
                            <div>Site Backup</div>
                            <div>Domain and Hosting Purchase</div>
                            <div>C-Panel</div>
                            <div>Installing On Cloud</div>
                            <div>Restore and Migration</div>
                            <div>E-commerce</div>
                            <div>SEO</div>
                            <div>CG02 - Structure Design Planning</div>
                            <div>CG03 - Execute the MKT Project</div>
                            <div>Payment Gateway Consultations</div>
                            <div>Figma for Wordpress Designers and Managers</div>
                            <div>Fiverr for Wordpress Designers and Managers</div>
                            <div>chatGPT for Wordpress Designers and Managers</div>
                            <div>Convert Site as Android App</div>
                           
                          
                    </div>
              </Col>
             
             
            </Row>
            
          </Container>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12} xs={12}>
          <div className="wrapper mt-5">
            <div className="details">
              <p className="Sub-heading Syllabus">Things you Master from Course</p>
         
            </div>
           
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12} xs={12}>
          <Container className="mt-3 ps-0 ">
            <Row>
              
              <Col xs={12} md={4} lg={6} xl={6}>
                    {/* <div style={{fontSize:"2rem"}}>Learner outcomes on courses you will take</div> */}
                    <div className="content-font ms-5" style={{borderLeft:"red 2px solid", paddingLeft:"15px"}}>
                         
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>WORDPRESS</div>
                            <div>BOOTSTRAP</div>
                            <div>ELEMENTOR</div>
                           
                           
                           
                          
                    </div>
              </Col>
              
             
            </Row>
            
          </Container>
        </Col>

      </Row>
     
     
    </Container>
  )
}

export default Syllabus