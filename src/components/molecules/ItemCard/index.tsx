import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonComponent from '../../atoms/Button';
import Rio from '../../../assets/images/image_rio.jpg';
import './styles.scss';

const CardComponent: React.FC = () => (
  <Card>
    <Card.Img variant="top" src={Rio} />
    <Card.Body>
      <Card.Title>Rio de Janeiro</Card.Title>
      <Card.Text>
        A partir de:
        <strong> R$1.000,00</strong>
        {' '}
        <br />
        {' '}
        ou
        <strong> 12x de R$ 100,00</strong>
      </Card.Text>
      <ButtonComponent text="Comprar Agora" color="secundary" />
    </Card.Body>
  </Card>
);

export default CardComponent;