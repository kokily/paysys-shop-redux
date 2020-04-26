import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { listWeddings } from '../../libs/modules/weddings';
import { RootState } from '../../libs/modules';
import WeddingList from '../../components/weddings/WeddingList';

const WeddingListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { weddings, error, loading } = useSelector(
    ({ weddings, loading }: RootState) => ({
      weddings: weddings.weddings,
      error: weddings.error,
      loading: loading['weddings/LIST_WEDDINGS'],
    })
  );
  const [divide, setDivide] = useState('husband');
  const [search, setSearch] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onChangeDivide = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDivide(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === '') {
      history.push('/wedding');
    } else {
      if (divide === 'husband') {
        history.push(`/wedding?husband=${search}`);
      } else {
        history.push(`/wedding?bride=${search}`);
      }
    }
  };

  const onReadWedding = (id: string) => {
    history.push(`/wedding/${id}`);
  };

  useEffect(() => {
    const { page, husband, bride } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listWeddings({ page, husband, bride }));
  }, [dispatch, location.search]);

  return (
    <WeddingList
      weddings={weddings}
      error={error}
      loading={loading}
      onReadWedding={onReadWedding}
      search={search}
      divide={divide}
      onChange={onChange}
      onChangeDivide={onChangeDivide}
      onSearch={onSearch}
    />
  );
};

export default WeddingListContainer;
