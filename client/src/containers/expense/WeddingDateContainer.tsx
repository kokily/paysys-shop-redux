import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import WeddingDate from '../../components/expense/WeddingDate';

const WeddingDateContainer = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());

  const onChange = (date: Date) => {
    setStartDate(date);
  };

  const onSubmit = () => {
    let newList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['WeddingDate'] = {
      weddingAt: startDate,
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/all');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    delete prevList.WeddingDate;
    delete prevList.Split;

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/split');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됨다!!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return false;
  };

  return (
    <WeddingDate
      startDate={startDate}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default WeddingDateContainer;
