import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import PlayContainer from '../../containers/expense/PlayContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const PlayPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <PlayContainer />
    </ExpenseTemplate>
  );
};

export default PlayPage;
