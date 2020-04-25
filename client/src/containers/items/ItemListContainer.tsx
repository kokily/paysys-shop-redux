import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { listItems } from '../../libs/modules/items';
import ItemList from '../../components/items/ItemList';
import { RootState } from '../../libs/modules';

const ItemListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { items, error, loading } = useSelector(
    ({ items, loading }: RootState) => ({
      items: items.items,
      error: items.error,
      loading: loading['items/LIST_ITEMS'],
    })
  );
  const [search, setSearch] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === '') {
      history.push('/items');
    } else {
      history.push(`/items?name=${search}`);
    }
  };

  const onItem = (id: string) => {
    history.push(`/items/${id}`);
  };

  useEffect(() => {
    const { page, name } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listItems({ page, name }));
  }, [dispatch, location.search]);

  return (
    <ItemList
      items={items}
      error={error}
      loading={loading}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onItem={onItem}
    />
  );
};

export default ItemListContainer;
