/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { states as statesApi } from '../../../services/api';
import PromoCard from '../../molecules/PromoCard';
import { settings } from './settings';
import { States } from './interfaces';
import './styles.scss';

const PromoCardList = () => {
  const [allStates, setStates] = useState<States[]>([]);

  useEffect(() => {
    statesApi.get('')
      .then((response) => setStates(response.data));
  }, []);

  return (
    <Container fluid className="promo-list">
      <Slider {...settings}>
        {allStates.map((uf: States) => (
          <Col key={uf.id}>
            <PromoCard uf={uf} />
          </Col>
        ))}
      </Slider>
    </Container>
  );
};

export default PromoCardList;
