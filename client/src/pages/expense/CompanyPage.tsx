import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import CompanyContainer from '../../containers/expense/CompanyContainer';

const CompanyPage = () => {
  return (
    <ExpenseTemplate>
      <CompanyContainer />
    </ExpenseTemplate>
  );
};

export default CompanyPage;