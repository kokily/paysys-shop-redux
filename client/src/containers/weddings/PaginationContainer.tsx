import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import Pagination from '../../components/weddings/Pagination';
import { RootState } from '../../libs/modules';

const PaginationContainer = () => {
  const location = useLocation();
  const { weddings, lastPage, loading } = useSelector(
    ({ weddings, loading }: RootState) => ({
      weddings: weddings.weddings,
      lastPage: weddings.lastPage,
      loading: loading['weddings/LIST_WEDDINGS'],
    })
  );

  if (!weddings || weddings.length === 0) return null;
  if (loading) return null;

  const { page = 1, husband, bride } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      husband={husband}
      bride={bride}
      lastPage={lastPage.toString()}
    />
  );
};

export default PaginationContainer;
