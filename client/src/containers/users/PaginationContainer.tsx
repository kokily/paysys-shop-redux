import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { RootState } from '../../libs/modules';
import Pagination from '../../components/users/Pagination';

const PaginationContainer = () => {
  const location = useLocation();
  const { users, lastPage, loading } = useSelector(
    ({ users, loading }: RootState) => ({
      users: users.users,
      lastPage: users.lastPage,
      loading: loading['users/LIST_USERS'],
    })
  );

  if (!users || users.length === 0) return null;
  if (loading) return null;

  const { page = 1, username } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      lastPage={lastPage.toString()}
      username={username}
    />
  );
};

export default PaginationContainer;
