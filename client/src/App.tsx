import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from './libs/styles';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SoldierPage from './pages/home/SoldierPage';
import ReservePage from './pages/home/ReservePage';
import GeneralPage from './pages/home/GeneralPage';
import MenuListPage from './pages/menu/MenuListPage';
import MenuDetailPage from './pages/menu/MenuDetailPage';
import CartPage from './pages/cart/CartPage';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/soldier" component={SoldierPage} />
      <Route path="/reserve" component={ReservePage} />
      <Route path="/general" component={GeneralPage} />

      <Route exact path="/menu" component={MenuListPage} />
      <Route path="/menu/:menuId" component={MenuDetailPage} />

      <Route path="/cart" component={CartPage} />
    </>
  );
};

export default App;
