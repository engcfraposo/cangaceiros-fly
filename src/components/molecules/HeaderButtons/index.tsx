import React from 'react';
import ButtonComponent from '../../atoms/Button';

const HeaderButton = () => (
  <div className="button">
    <ButtonComponent text="Login" color="primary" />
    <ButtonComponent text="Register" color="secundary" />
  </div>
);

export default HeaderButton;
