import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">APLIKASI DATABASE</div>
            <div className="title">ARSY HOSPITAL</div>
            <br></br>
            <div className="title1">
              <h1>Kualitas Pelayanan Kesehatan Menjadi Prioritas Utama Kami</h1>
            </div>
            <br></br>
            <div className="introButton text-center">
              <Link to="/registrasi">
                <Button size="lg" variant="light">
                  Register Here
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
