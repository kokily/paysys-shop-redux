import React from 'react';
import ExpenseTemplate from '../../components/common/ExpenseTemplate';
import EditContainer from '../../containers/edit/EditContainer';

const EditPage = () => {
  return (
    <ExpenseTemplate>
      <EditContainer />
    </ExpenseTemplate>
  );
};

export default EditPage;
