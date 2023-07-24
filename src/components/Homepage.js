import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide1 from '../assets/image/slide1.jpg';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homee" style={{ backgroundImage: `url(${Slide1})` }}>
        <div className="contenthome">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title1">SELAMAT DATANG DI APLIKASI</div>
                <br></br>
                <div className="title1">DATABASE ARSY HOSPITAL</div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="h2 bold">
                  <h1>Kualitas Pelayanan Kesehatan Menjadi Prioritas Utama Kami</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
