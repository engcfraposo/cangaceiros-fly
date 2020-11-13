import React from 'react';
import Logo from '../../../assets/images/Logo.png';
import HeaderButton from '../../molecules/HeaderButtons';
import HeaderMenu from '../../molecules/HeaderMenu';
import './styles.scss';

const HeaderComponent: React.FC = () => (
  <div className="header">
    <div className="menu">
      <img src={Logo} alt="logo" />
      <HeaderMenu />
    </div>
    <HeaderButton />
  </div>
);
export default HeaderComponent;
