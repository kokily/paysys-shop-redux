import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { listFronts } from '../../libs/modules/fronts';
import Front from '../../components/front/FrontList';
import { RootState } from '../../libs/modules';

const FrontListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fronts, error, loading } = useSelector(
    ({ fronts, loading }: RootState) => ({
      fronts: fronts.fronts,
      error: fronts.error,
      loading: loading['fronts/LIST_FRONTS'],
    })
  );
  const [search, setSearch] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === '') {
      history.push('/front');
    } else {
      history.push(`/front?title=${search}`);
    }
  };

  const onDetail = (id: string) => {
    history.push(`/front/${id}`);
  };

  useEffect(() => {
    const { page, title, username } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listFronts({ page, title, username }));
  }, [dispatch, location.search]);

  return (
    <Front
      fronts={fronts}
      search={search}
      error={error}
      loading={loading}
      onChange={onChange}
      onSearch={onSearch}
      onDetail={onDetail}
    />
  );
};

export default FrontListContainer;
