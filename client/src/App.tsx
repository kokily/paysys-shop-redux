import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './containers/common/HeaderContainer';
import { GlobalStyle } from './libs/styles';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />

      <Route exact path="/" component={HomePage} />
    </>
  );
};

export default App;
