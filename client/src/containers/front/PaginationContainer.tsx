import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { RootState } from '../../libs/modules';
import Pagination from '../../components/front/Pagination';

const PaginationContainer = () => {
  const location = useLocation();
  const { fronts, lastPage, loading } = useSelector(
    ({ fronts, loading }: RootState) => ({
      fronts: fronts.fronts,
      lastPage: fronts.lastPage,
      loading: loading['front/LIST_FRONTS'],
    })
  );

  if (!fronts || fronts.length === 0) return null;
  if (loading) return null;

  const { page = 1, title } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      lastPage={lastPage.toString()}
      title={title}
    />
  );
};

export default PaginationContainer;
