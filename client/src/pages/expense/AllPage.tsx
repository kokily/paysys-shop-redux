import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import AllContainer from '../../containers/expense/AllContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const AllPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <AllContainer />
    </ExpenseTemplate>
  );
};

export default AllPage;
