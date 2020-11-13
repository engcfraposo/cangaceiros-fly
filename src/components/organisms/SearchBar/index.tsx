import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import ButtonComponent from '../../atoms/Button';

import './styles.scss';

const SearchBar: React.FC = () => (
  <div className="search-container">
    <h2>Seu sonho começa aqui</h2>
    <Form>
      <FormGroup>
        <FormControl type="text" placeholder="Origem" />
        <FormControl type="text" placeholder="Destino" />
      </FormGroup>
      <FormGroup>
        <FormControl type="date" placeholder="Datas" />
        <FormControl type="text" placeholder="Passageiros" />
      </FormGroup>
      <ButtonComponent text="Buscar" color="secundary" />
    </Form>
  </div>
);

export default SearchBar;
