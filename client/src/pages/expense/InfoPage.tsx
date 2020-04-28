import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import InfoContainer from '../../containers/expense/InfoContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const InfoPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <InfoContainer />
    </ExpenseTemplate>
  );
};

export default InfoPage;
