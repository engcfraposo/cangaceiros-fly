import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import PromoCard from '../../molecules/PromoCard';
import { settings } from './settings';

import './styles.scss';

const PromoCardList = () => (
  <Container fluid className="promo-list">
    <Slider {...settings}>
      <Col>
        <PromoCard />
      </Col>
      <Col>
        <PromoCard />
      </Col>
      <Col>
        <PromoCard />
      </Col>
      <Col>
        <PromoCard />
      </Col>
    </Slider>
  </Container>
);

export default PromoCardList;
