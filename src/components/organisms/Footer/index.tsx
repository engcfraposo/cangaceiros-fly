/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../../assets/images/Logo.png';
import NewYork from '../../../assets/images/new-york-city-silhouette.png';

import './styles.scss';

const Footer = () => (
  <Container fluid className="footer-master">
    <img src={NewYork} alt="background" />
    <Row className="footer">
      <Col xs={1} sm={1} md={1} lg={1} />
      <Col xs={4} sm={3} md={3} lg={3} className="center alinhar">
        <Row>
          <p className="primary">Desenvolvido por:</p>
        </Row>
        <Row>
          <a href="#" target="_blank_"><img src={Logo} alt="Logo Calango fly" className="logo-canlango" /></a>
        </Row>
      </Col>
      <Col xs={3} sm={3} md={3} lg={3} />
      <Col xs={5} sm={5} md={5} lg={5} className="center"><p className="secondary">Todos os agradecimentos ao xablau, thuma e tony!</p></Col>

    </Row>
  </Container>
);

export default Footer;
