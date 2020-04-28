import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import AddItemContainer from '../../containers/items/AddItemContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const AddItemPage = () => {
  return (
    <PageTemplate>
      <AdminRedirectContainer />
      <AddItemContainer />
    </PageTemplate>
  );
};

export default AddItemPage;
