import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../libs/modules';
import {
  initialize,
  changeField,
  addItem,
  updateItem,
} from '../../libs/modules/add';
import AddItem from '../../components/items/AddItem';

const AddItemContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    name,
    native,
    divide,
    price,
    unit,
    error,
    originalItemId,
  } = useSelector(({ add }: RootState) => ({
    name: add.name,
    native: add.native,
    divide: add.divide,
    price: add.price,
    unit: add.unit,
    item: add.item,
    error: add.error,
    originalItemId: add.originalItemId,
  }));
  const [errorStr, setErrorStr] = useState(null);

  const onChangeNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value: parseInt(value) }));
    },
    [dispatch]
  );

  const onChangeString = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch]
  );

  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = () => {
    if (originalItemId) {
      dispatch(
        updateItem({
          name,
          native,
          divide,
          price,
          unit,
          id: originalItemId,
        })
      );
      history.push('/items');
      return;
    }
    dispatch(addItem({ name, native, divide, price, unit }));
    history.push('/items');
  };

  const onList = () => {
    history.push('/items');
  };

  useEffect(() => {
    return () => {
      dispatch(
        initialize({
          name: '',
          native: '현역',
          divide: '식사(뷔페)',
          price: 0,
          unit: '',
          item: null,
          error: null,
          originalItemId: null,
        })
      );
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setErrorStr(errorStr);
    }
  }, [error, errorStr]);

  return (
    <AddItem
      name={name}
      native={native}
      divide={divide}
      price={price}
      unit={unit}
      onChangeNumber={onChangeNumber}
      onChangeString={onChangeString}
      onChangeSelect={onChangeSelect}
      onSubmit={onSubmit}
      onList={onList}
      error={errorStr}
    />
  );
};
export default AddItemContainer;
