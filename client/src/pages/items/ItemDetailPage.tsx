import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import ItemDetailContainer from '../../containers/items/ItemDetailContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const ItemDetailPage = () => {
  return (
    <PageTemplate>
      <AdminRedirectContainer />
      <ItemDetailContainer />
    </PageTemplate>
  );
};

export default ItemDetailPage;
