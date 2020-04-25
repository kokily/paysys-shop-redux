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
import FrontListPage from './pages/front/FrontListPage';
import FrontDetailPage from './pages/front/FrontDetailPage';
import ItemListPage from './pages/items/ItemListPage';
import ItemDetailPage from './pages/items/ItemDetailPage';
import AddItemPage from './pages/items/AddItemPage';
import ExpensePage from './pages/expense/ExpensePage';
import InfoPage from './pages/expense/InfoPage';
import RentalPage from './pages/expense/RentalPage';
import CompanyPage from './pages/expense/CompanyPage';
import BouquetPage from './pages/expense/BouquetPage';
import PlayPage from './pages/expense/PlayPage';
import MealPage from './pages/expense/MealPage';
import SplitPage from './pages/expense/SplitPage';
import AllPage from './pages/expense/AllPage';

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

      <Route exact path="/front" component={FrontListPage} />
      <Route path="/front/:frontId" component={FrontDetailPage} />

      <Route exact path="/items" component={ItemListPage} />
      <Route path="/items/:itemId" component={ItemDetailPage} />
      <Route path="/add" component={AddItemPage} />

      <Route exact path="/expense" component={ExpensePage} />
      <Route path="/expense/info" component={InfoPage} />
      <Route path="/expense/rental" component={RentalPage} />
      <Route path="/expense/company" component={CompanyPage} />
      <Route path="/expense/bouquet" component={BouquetPage} />
      <Route path="/expense/play" component={PlayPage} />
      <Route path="/expense/meal" component={MealPage} />
      <Route path="/expense/split" component={SplitPage} />
      <Route path="/expense/all" component={AllPage} />
    </>
  );
};

export default App;
