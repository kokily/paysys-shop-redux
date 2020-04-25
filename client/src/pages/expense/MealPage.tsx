import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import MealContainer from '../../containers/expense/MealContainer';

const MealPage = () => {
  return (
    <ExpenseTemplate>
      <MealContainer />
    </ExpenseTemplate>
  );
};

export default MealPage;
