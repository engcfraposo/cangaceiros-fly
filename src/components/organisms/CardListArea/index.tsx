import React from 'react';
import CardComponent from '../../molecules/Card';
import './styles.scss';

const CardList: React.FC = () => (
  <div className="grid-container">
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
  </div>
);

export default CardList;
