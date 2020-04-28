import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import ExpenseContainer from '../../containers/expense/ExpenseContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const ExpensePage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <ExpenseContainer />
    </ExpenseTemplate>
  );
};

export default ExpensePage;
