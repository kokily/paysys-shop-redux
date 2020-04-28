import React from 'react';
import PageTemplate from '../../components/common/PageTemplate';
import WeddingDetailContainer from '../../containers/weddings/WeddingDetailContainer';
import AdminRedirectContainer from '../../containers/common/AdminRedirectContainer';

const WeddingDetailPage = () => {
  return (
    <PageTemplate>
      <AdminRedirectContainer />
      <WeddingDetailContainer />
    </PageTemplate>
  );
};

export default WeddingDetailPage;
