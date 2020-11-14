import React from 'react';
import { Container } from 'react-bootstrap';
import PromoCardList from '../../organisms/PromoCardList';

import './styles.scss';

const BodyComponent: React.FC = () => (
  <>
    <Container className="body-container">
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
      <PromoCardList />
    </Container>
  </>
);

export default BodyComponent;
