import React from 'react';
import ItemCardTemplate from '../../components/templates/ItemCardTemplate';
import BodyTemplate from '../../components/templates/BodyTemplate';
import HeaderTemplate from '../../components/templates/HeaderTemplate';
import Footer from '../../components/organisms/Footer';
import './styles.scss';

const Main: React.FC = () => (
  <div className="main fade-in">
    <HeaderTemplate />
    <BodyTemplate />
    <ItemCardTemplate />
    <Footer />
  </div>
);

export default Main;
