import React from 'react';
import ItemCardTemplate from '../../components/templates/ItemCardTemplate';
import BodyTemplate from '../../components/templates/BodyTemplate';
import HeaderTemplate from '../../components/templates/HeaderTemplate';
import './styles.scss';

const Main: React.FC = () => {
  return (
    <div className="main fade-in">
      <HeaderTemplate />
      <BodyTemplate />
      <ItemCardTemplate />
    </div>
  );
};

export default Main;
