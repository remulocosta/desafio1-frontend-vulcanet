import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from './page/Main';
import GlobalStyles from './styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <>
    <ToastContainer autoClose={3000} />
    <Main />
    <GlobalStyles />
  </>
);

export default App;
