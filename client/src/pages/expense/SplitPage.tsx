import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import SplitContainer from '../../containers/expense/SplitContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const SplitPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <SplitContainer />
    </ExpenseTemplate>
  );
};

export default SplitPage;
