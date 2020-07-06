import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from './page/Main';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <Main />
    <GlobalStyles />
    <ToastContainer autoClose={3000} />
  </>
);

export default App;
