import React from 'react';
import { useHistory } from 'react-router-dom';
import { setCookie } from '../../libs/cookie';
import Expense from '../../components/expense/Expense';

const ExpenseContainer = () => {
  const history = useHistory();

  const onInfoMenu = () => {
    setCookie('_PAYSYS_RENEWAL_WEDDING_CART_', '', 0);
    history.push('/expense/info');
  };

  return <Expense onInfoMenu={onInfoMenu} />;
};

export default ExpenseContainer;
