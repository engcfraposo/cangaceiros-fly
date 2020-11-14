import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ItemCard from '../../molecules/ItemCard';
import './styles.scss';

const CardList: React.FC = () => (
  <Container>
    <Row >
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
      <Col sm={12} md={6} lg={3}>
        <ItemCard />
      </Col>
    </Row>
  </Container>
);

export default CardList;
