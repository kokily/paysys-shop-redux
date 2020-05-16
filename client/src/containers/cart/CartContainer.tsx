import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { initialize, changeField, addBill } from '../../libs/modules/bills';
import { getCookie, setCookie } from '../../libs/cookie';
import Cart from '../../components/cart/Cart';
import { RootState } from '../../libs/modules';
import { CartType } from '../../libs/api/bills';

const CartContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, hall, etc, list } = useSelector(({ bills }: RootState) => ({
    title: bills.title,
    hall: bills.hall,
    etc: bills.etc,
    list: bills.list,
  }));
  const [newList, setNewList] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [newCartList, setNewCartList] = useState<CartType[]>([]);

  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch]
  );

  const onRemove = (key: string) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const itemId = key;
      let cartList: any = {};

      if (getCookie('__PAYSYS_CART__')) {
        cartList = JSON.parse(getCookie('__PAYSYS_CART__'));
        delete cartList[itemId];
      }

      setCookie('__PAYSYS_CART__', JSON.stringify(cartList), 3);
      document.location.href = '/cart';
    }
    return false;
  };

  const onRemoveAll = () => {
    if (window.confirm('전체 삭제하시겠습니까?')) {
      setCookie('__PAYSYS_CART__', '', 0);
      document.location.href = '/cart';
    }

    return false;
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!newCartList || newCartList.length === 0) {
      alert('먼저 전표를 등록하세요!');
      return;
    }

    if (window.confirm('전표를 전송하시겠습니까?')) {
      if (title && hall && etc && totalAmount && newCartList) {
        dispatch(
          addBill({ title, hall, etc, total: totalAmount, list: newCartList })
        );
        toast.success('전표 전송!');
        setCookie('__PAYSYS_CART__', '', 0);
        history.push('/front');
      }
      return;
    }
  };

  useEffect(() => {
    let readList = getCookie('__PAYSYS_CART__');
    let totalAmount = 0;
    let newList = [];

    if (readList) {
      let cartList = JSON.parse(unescape(readList));

      for (let key in cartList) {
        totalAmount += parseInt(cartList[key].amount);
        newList.push(cartList[key]);
      }
    } else {
      return;
    }

    setNewList(readList);
    setTotalAmount(totalAmount);
    setNewCartList(newList);

    dispatch(
      initialize({
        title: '',
        hall: '',
        etc: '',
        total: 0,
        list: [],
        bill: null,
        error: null,
      })
    );
  }, [list, totalAmount, dispatch]);

  return (
    <Cart
      title={title}
      hall={hall}
      etc={etc}
      newList={newList}
      onChangeField={onChangeField}
      totalAmount={totalAmount}
      onRemove={onRemove}
      onRemoveAll={onRemoveAll}
      onSubmit={onSubmit}
    />
  );
};

export default CartContainer;
