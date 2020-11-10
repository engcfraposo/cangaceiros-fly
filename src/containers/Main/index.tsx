import React, { useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import SearchBar from '../../components/SearchBar';

import './styles.scss';

const Main: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>();
  const [number, setNumber] = useState<number>(0);

  window.onscroll = (oEvent: object) => {
    const el: HTMLElement | null = document.getElementById('search');

    if (el) {
      if (el.offsetTop + 45 < window.pageYOffset) {
        setScroll(true);
        if (number > window.pageYOffset) {
          setScroll(false);
        }
      } else {
        setNumber(window.pageYOffset);
        setScroll(false);
      }
    }
  };
  return (
    <div className="main">

      <div className="header-container">
        <HeaderComponent />
        <div className="title">
          <h1>O mundo se tornou um local pequeno demais para seus sonhos</h1>
        </div>
        <SearchBar />
      </div>
      <div className="body-container">
        <aside>
          <h2>Snap photos and share like never before</h2>
          <div>
            <h3>Sed ut perspiciatis</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est.
                        </p>
          </div>
        </aside>
        <aside>
          <h2>Conheça nossos locais!</h2>
          <strong>Vôos Promocionais</strong>
        </aside>
      </div>
    </div>
  );
}

export default Main;