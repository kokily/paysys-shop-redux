import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { readItem } from '../../libs/modules/items';
import { setOriginalItem } from '../../libs/modules/add';
import { removeItem } from '../../libs/api/items';
import { RootState } from '../../libs/modules';
import ItemDetail from '../../components/items/ItemDetail';
import ItemButton from '../../components/items/ItemButton';
import { admin1, admin2, admin3 } from '../../libs/isAdmin';

const ItemDetailContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { itemId } = useParams();
  const { item, error, loading, user } = useSelector(
    ({ items, loading, user }: RootState) => ({
      item: items.item,
      error: items.error,
      loading: loading['items/READ_ITEM'],
      user: user.user,
    })
  );

  const onEdit = () => {
    if (item) {
      dispatch(setOriginalItem(item));
      history.push('/add');
    }
  };

  const onRemove = async () => {
    try {
      if (itemId) {
        await removeItem(itemId);
        history.push('/items');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onList = () => {
    history.push('/items');
  };

  useEffect(() => {
    if (itemId) {
      dispatch(readItem(itemId));
    }
  }, [dispatch, itemId]);

  return (
    <ItemDetail
      item={item}
      error={error}
      loading={loading}
      ItemButton={
        user &&
        (user.username === admin1 ||
          user.username === admin2 ||
          user.username === admin3) ? (
          <ItemButton onBack={onList} onEdit={onEdit} onRemove={onRemove} />
        ) : null
      }
    />
  );
};

export default ItemDetailContainer;
