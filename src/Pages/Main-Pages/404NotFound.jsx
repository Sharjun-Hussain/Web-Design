import { Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            color: "white",
            height: "100vh",
          }}
        >
          <Row>
            <h1> OOOOPS </h1>
          </Row>

          <Row>
            <h1> 404 Not Found </h1>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
