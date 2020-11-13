import React from 'react';

// import { Container } from './styles';

const HeaderMenu = () => {
  const menuList: string[] = ['Features', 'Pricing', 'Community', 'Support'];
  return (
    <ul>
      {menuList.map((item) => <li>{item}</li>)}
    </ul>
  );
};

export default HeaderMenu;
