import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import AllContainer from '../../containers/expense/AllContainer';

const AllPage = () => {
  return (
    <ExpenseTemplate>
      <AllContainer />
    </ExpenseTemplate>
  );
};

export default AllPage;
