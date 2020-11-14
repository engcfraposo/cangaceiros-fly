import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ItemCard from '../../molecules/ItemCard';
import { States } from '../../organisms/PromoCardList/interfaces';
import { states as statesApi } from '../../../services/api';

import './styles.scss';

const CardList = () => {
  const [allStates, setStates] = useState<States[]>([]);

  useEffect(() => {
    statesApi.get('')
      .then((response) => setStates(response.data));
  }, []);
  return (
    <Container>
      <Row>
        {allStates.map((uf) => (
          <Col key={uf.id} sm={12} md={6} lg={3}>
            <ItemCard uf={uf} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
