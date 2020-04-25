import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { RootState } from '../../libs/modules';
import Pagination from '../../components/items/Pagination';

const PaginationContainer = () => {
  const location = useLocation();
  const { items, lastPage, loading } = useSelector(
    ({ items, loading }: RootState) => ({
      items: items.items,
      lastPage: items.lastPage,
      loading: loading['items/LIST_ITEMS'],
    })
  );

  if (!items || items.length === 0) return null;
  if (loading) return null;

  const { page = 1, name } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      lastPage={lastPage.toString()}
      name={name}
    />
  );
};

export default PaginationContainer;
