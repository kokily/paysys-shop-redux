import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import ItemListContainer from '../../containers/items/ItemListContainer';

const ItemListPage = () => {
  return (
    <PageTemplate>
      <ItemListContainer />
    </PageTemplate>
  );
};

export default ItemListPage;
