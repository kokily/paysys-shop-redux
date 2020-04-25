import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { readMenu } from '../../libs/modules/menu';
import { getCookie, setCookie } from '../../libs/cookie';
import { RootState } from '../../libs/modules';
import MenuDetail from '../../components/menu/MenuDetail';

const MenuDetailContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { menuId } = useParams();
  const { input, error, loading } = useSelector(
    ({ menu, loading }: RootState) => ({
      input: menu.input,
      error: menu.menuError,
      loading: loading['menu/READ_MENU'],
    })
  );
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState('');
  const [amount, setAmount] = useState(0);

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    let number = e.target.value;

    if (input) {
      if (input.price !== 0) {
        setPrice(input.price);
        setAmount(parseInt(number) * input.price);
      } else {
        setPrice(price);
        setAmount(parseInt(number) * price);
      }
    }
    setCount(number);
  };

  const onChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(parseInt(e.target.value));
    },
    []
  );

  const onBack = () => {
    history.goBack();
  };

  const onSubmit = () => {
    let cartList: any = {};

    if (parseInt(count) < 1 || price < 1) {
      alert('단가 또는 수량이 입력되지 않았습니다!');
      return;
    }

    if (getCookie('__PAYSYS_CART__')) {
      cartList = JSON.parse(getCookie('__PAYSYS_CART__'));

      if (input && menuId) {
        cartList[menuId.toString()] = {
          name: input.name,
          native: input.native,
          divide: input.divide,
          price: price,
          unit: input.unit,
          count,
          amount,
        };

        setCookie('__PAYSYS_CART__', JSON.stringify(cartList), 10);
        alert('전표 추가 완료!');
        history.goBack();
      }
    } else {
      if (input && menuId) {
        cartList[menuId.toString()] = {
          name: input.name,
          native: input.native,
          divide: input.divide,
          price: price,
          unit: input.unit,
          count,
          amount,
        };

        setCookie('__PAYSYS_CART__', JSON.stringify(cartList), 10);
        alert('전표 추가 완료!');
        history.goBack();
      }
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    if (menuId) {
      dispatch(readMenu(menuId));
    } else {
      return;
    }
  }, [dispatch, menuId]);

  return (
    <MenuDetail
      input={input}
      error={error}
      loading={loading}
      price={price}
      count={count}
      amount={amount}
      onChangeCount={onChangeCount}
      onChangePrice={onChangePrice}
      onKeyPress={onKeyPress}
      onBack={onBack}
      onSubmit={onSubmit}
    />
  );
};

export default MenuDetailContainer;
