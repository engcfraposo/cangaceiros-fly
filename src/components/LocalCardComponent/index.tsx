import ButtonBase from '@material-ui/core/ButtonBase';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Rio from '../../images/image_rio.jpg';

import './styles.scss';

const LocalCardComponent: React.FC = () => (

  <div className="local-container">
    <Card>
      <img src={Rio} alt="rio" />
      <div className="box-text">
        <p>Rio de Janeiro/RJ</p>
        <span>Consulte os preços</span>
      </div>
    </Card>
  </div>

);

export default LocalCardComponent;
