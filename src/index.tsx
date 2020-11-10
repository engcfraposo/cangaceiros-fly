import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './assets/css/fontawesome.min.css';
import './assets/css/all.min.css';
import './assets/scss/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
