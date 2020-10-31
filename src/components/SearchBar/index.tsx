import React from 'react';
import  Form  from 'react-bootstrap/Form';
import ButtonBase from '@material-ui/core/ButtonBase';

import './styles.scss';

const SearchBar: React.FC = () => {
  return (
      <div className="search-container">
          <h2>Seu sonho começa aqui</h2>
          <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Origem" />
                <Form.Control type="text" placeholder="Destino" />
                <Form.Control type="text" placeholder="Datas" />
                <Form.Control type="text" placeholder="Passageiros" />    
              </Form.Group>    
              <ButtonBase className="secundary">Buscar</ButtonBase> 
          </Form>
      </div>
  );
}

export default SearchBar;