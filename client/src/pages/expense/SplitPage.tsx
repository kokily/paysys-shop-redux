import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import SplitContainer from '../../containers/expense/SplitContainer';

const SplitPage = () => {
  return (
    <ExpenseTemplate>
      <SplitContainer />
    </ExpenseTemplate>
  );
};

export default SplitPage;
