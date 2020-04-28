import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import BouquetContainer from '../../containers/expense/BouquetContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const BouquetPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <BouquetContainer />
    </ExpenseTemplate>
  );
};

export default BouquetPage;
