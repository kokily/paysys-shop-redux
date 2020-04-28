import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import CompanyContainer from '../../containers/expense/CompanyContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const CompanyPage = () => {
  return (
    <ExpenseTemplate>
      <AdminRedirectContainer />
      <CompanyContainer />
    </ExpenseTemplate>
  );
};

export default CompanyPage;