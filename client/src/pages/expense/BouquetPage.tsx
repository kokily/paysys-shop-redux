import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import BouquetContainer from '../../containers/expense/BouquetContainer';

const BouquetPage = () => {
  return (
    <ExpenseTemplate>
      <BouquetContainer />
    </ExpenseTemplate>
  );
};

export default BouquetPage;
