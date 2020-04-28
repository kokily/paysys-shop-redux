import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import ItemListContainer from '../../containers/items/ItemListContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const ItemListPage = () => {
  return (
    <PageTemplate>
      <AdminRedirectContainer />
      <ItemListContainer />
    </PageTemplate>
  );
};

export default ItemListPage;
