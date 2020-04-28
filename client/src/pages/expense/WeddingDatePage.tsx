import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import WeddingDateContainer from '../../containers/expense/WeddingDateContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const WeddingDatePage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <WeddingDateContainer />
    </ExpenseTemplate>
  );
};

export default WeddingDatePage;
