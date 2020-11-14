import React from 'react';
import SearchBar from '../../organisms/SearchBar';
import HeaderComponent from '../../organisms/HeaderComponent';

import './styles.scss';

const HeaderTemplate: React.FC = () => (
  <div className="header-container">
    <HeaderComponent />
    <div className="title">
      <h1>O mundo se tornou um local pequeno demais para seus sonhos</h1>
    </div>
    <SearchBar />
  </div>
);

export default HeaderTemplate;
