import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Rental from '../../components/expense/Rental';

interface StateProps {
  husbandRental: string;
  brideRental: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const RentalContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    husbandRental: '',
    brideRental: '',
  });
  const { husbandRental, brideRental } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if ([husbandRental, brideRental].includes('')) {
      alert('빈 칸을 다 채우세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['Rental'] = {
      husbandRental,
      brideRental,
      sumRental: (parseInt(husbandRental) + parseInt(brideRental)).toString(),
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/company');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));

      delete prevList.Rental;
      delete prevList.Info;
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/info');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됨다!!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return;
  };

  return (
    <Rental
      husbandRental={husbandRental}
      brideRental={brideRental}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default RentalContainer;
