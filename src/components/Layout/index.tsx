import React from 'react';

import { Content } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Content>
        <button type="button">
          <div>Mensal</div>
          <div>Anual</div>
        </button>
      </Content>
    </>
  );
};

export default Layout;
