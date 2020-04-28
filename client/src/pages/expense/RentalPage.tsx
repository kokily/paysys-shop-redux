import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import RentalContainer from '../../containers/expense/RentalContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const RentalPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <RentalContainer />
    </ExpenseTemplate>
  );
};

export default RentalPage;
