import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loadable from '@loadable/component';
import { GlobalStyle } from './libs/styles';

// Templates
import AuthTemplate from './components/auth/AuthTemplate';
import PageTemplate from './components/common/PageTemplate';
import ExpenseTemplate from './components/common/ExpenseTemplate';

import SoldierPage from './pages/home/SoldierPage';
import ReservePage from './pages/home/ReservePage';
import GeneralPage from './pages/home/GeneralPage';

const AuthConfig = {
  fallback: <AuthTemplate />,
};

const LoginPage = loadable(() => import('./pages/LoginPage'), AuthConfig);
const RegisterPage = loadable(() => import('./pages/RegisterPage'), AuthConfig);

const PageConfig = {
  fallback: <PageTemplate />,
};

const MenuListPage = loadable(
  () => import('./pages/menu/MenuListPage'),
  PageConfig
);
const MenuDetailPage = loadable(
  () => import('./pages/menu/MenuDetailPage'),
  PageConfig
);
const CartPage = loadable(() => import('./pages/cart/CartPage'), PageConfig);
const FrontListPage = loadable(
  () => import('./pages/front/FrontListPage'),
  PageConfig
);
const FrontDetailPage = loadable(
  () => import('./pages/front/FrontDetailPage'),
  PageConfig
);
const ListUsersPage = loadable(
  () => import('./pages/users/ListUsersPage'),
  PageConfig
);
const ReadUserPage = loadable(
  () => import('./pages/users/ReadUserPage'),
  PageConfig
);

const ExpenseConfig = {
  fallback: <ExpenseTemplate />,
};

const ItemListPage = loadable(
  () => import('./pages/items/ItemListPage'),
  ExpenseConfig
);
const ItemDetailPage = loadable(
  () => import('./pages/items/ItemDetailPage'),
  ExpenseConfig
);
const AddItemPage = loadable(
  () => import('./pages/items/AddItemPage'),
  ExpenseConfig
);
const ExpensePage = loadable(
  () => import('./pages/expense/ExpensePage'),
  ExpenseConfig
);
const InfoPage = loadable(
  () => import('./pages/expense/InfoPage'),
  ExpenseConfig
);
const RentalPage = loadable(
  () => import('./pages/expense/RentalPage'),
  ExpenseConfig
);
const CompanyPage = loadable(
  () => import('./pages/expense/CompanyPage'),
  ExpenseConfig
);
const BouquetPage = loadable(
  () => import('./pages/expense/BouquetPage'),
  ExpenseConfig
);
const PlayPage = loadable(
  () => import('./pages/expense/PlayPage'),
  ExpenseConfig
);
const MealPage = loadable(
  () => import('./pages/expense/MealPage'),
  ExpenseConfig
);
const SplitPage = loadable(
  () => import('./pages/expense/SplitPage'),
  ExpenseConfig
);
const WeddingDatePage = loadable(
  () => import('./pages/expense/WeddingDatePage'),
  ExpenseConfig
);
const AllPage = loadable(
  () => import('./pages/expense/AllPage'),
  ExpenseConfig
);
const WeddingListPage = loadable(
  () => import('./pages/weddings/WeddingListPage'),
  ExpenseConfig
);
const WeddingDetailPage = loadable(
  () => import('./pages/weddings/WeddingDetailPage'),
  ExpenseConfig
);

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Helmet>
        <title>행사전표시스템 - v2.1</title>
      </Helmet>

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
      <Route path="/expense/weddingdate" component={WeddingDatePage} />
      <Route path="/expense/all" component={AllPage} />

      <Route exact path="/wedding" component={WeddingListPage} />
      <Route path="/wedding/:weddingId" component={WeddingDetailPage} />

      <Route exact path="/users" component={ListUsersPage} />
      <Route path="/users/:userId" component={ReadUserPage} />
    </>
  );
};

export default App;
