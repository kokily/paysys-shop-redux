import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import WeddingListContainer from '../../containers/weddings/WeddingListContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const WeddingListPage = () => {
  return (
    <PageTemplate>
      <AdminRedirectContainer />
      <WeddingListContainer />
    </PageTemplate>
  );
};

export default WeddingListPage;
