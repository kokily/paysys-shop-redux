import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import MealContainer from '../../containers/expense/MealContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const MealPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <MealContainer />
    </ExpenseTemplate>
  );
};

export default MealPage;
