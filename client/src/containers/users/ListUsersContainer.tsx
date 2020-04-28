import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { listUsers } from '../../libs/modules/users';
import { RootState } from '../../libs/modules';
import ListUsers from '../../components/users/ListUsers';

const ListUsersContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { users, error, loading } = useSelector(
    ({ users, loading }: RootState) => ({
      users: users.users,
      error: users.error,
      loading: loading['users/LIST_USERS'],
    })
  );
  const [search, setSearch] = useState('');

  // Search
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === '') {
      history.push('/users');
    } else {
      history.push(`/users?username=${search}`);
    }
  };

  const onUser = (id: string) => {
    history.push(`/users/${id}`);
  };

  useEffect(() => {
    const { page, username } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listUsers({ page, username }));
  }, [dispatch, location.search]);

  return (
    <ListUsers
      users={users}
      error={error}
      loading={loading}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onUser={onUser}
    />
  );
};

export default ListUsersContainer;
