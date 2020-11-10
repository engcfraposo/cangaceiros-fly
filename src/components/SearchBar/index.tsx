import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import ButtonBase from '@material-ui/core/ButtonBase';

import './styles.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="search-container">
      <h2>Seu sonho começa aqui</h2>
      <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Origem" />
          <FormControl type="text" placeholder="Destino" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Datas" />
          <FormControl type="text" placeholder="Passageiros" />
        </FormGroup>
        <ButtonBase className="secundary">Buscar</ButtonBase>
      </Form >
    </div >
  );
}

export default SearchBar;