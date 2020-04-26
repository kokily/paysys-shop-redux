import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import WeddingListContainer from '../../containers/weddings/WeddingListContainer';

const WeddingListPage = () => {
  return (
    <PageTemplate>
      <WeddingListContainer />
    </PageTemplate>
  );
};

export default WeddingListPage;
