import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import ExpenseContainer from '../../containers/expense/ExpenseContainer';

const ExpensePage = () => {
  return (
    <ExpenseTemplate>
      <ExpenseContainer />
    </ExpenseTemplate>
  );
};

export default ExpensePage;
