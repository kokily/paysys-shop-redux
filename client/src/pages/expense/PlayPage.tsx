import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import PlayContainer from '../../containers/expense/PlayContainer';

const PlayPage = () => {
  return (
    <ExpenseTemplate>
      <PlayContainer />
    </ExpenseTemplate>
  );
};

export default PlayPage;
