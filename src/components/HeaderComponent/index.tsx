import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Logo from '../../images/Logo.png';
import './styles.scss';

const HeaderComponent: React.FC = () => {
  return (
        <div className="header">
            <div className="menu">
            <img src={Logo} alt="logo"/>
            <ul>
                <li>
                    Features
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Community
                </li>
                <li>
                    Support
                </li>
            </ul>
            </div>
            <div className="button">
                <ButtonBase className="primary">
                    Login
                </ButtonBase>
                <ButtonBase className="secundary">
                    Register
                </ButtonBase>
            </div>
        </div>
        );
}

export default HeaderComponent;