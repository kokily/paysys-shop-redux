import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import RentalContainer from '../../containers/expense/RentalContainer';

const RentalPage = () => {
  return (
    <ExpenseTemplate>
      <RentalContainer />
    </ExpenseTemplate>
  );
};

export default RentalPage;
