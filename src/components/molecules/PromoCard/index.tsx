import React from 'react';
import Card from 'react-bootstrap/Card';
import Rio from '../../../assets/images/image_rio.jpg';
import { PropsCard } from './interfaces';

import './styles.scss';

const PromoCard = ({ uf }: PropsCard) => (
  <div className="local-container">
    <Card>
      <img src={Rio} alt="rio" />
      <div className="box-text">
        <p>{uf.name}</p>
        <span>Consulte os preços</span>
      </div>
    </Card>
  </div>
);

export default PromoCard;
