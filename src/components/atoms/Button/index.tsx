import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { ButtonInterface } from './interfaces';

const Button = ({ text, color = 'primary' }: ButtonInterface) => (
  <ButtonBase className={color}>{text}</ButtonBase>
);

export default Button;
