import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { setCookie } from '../../libs/cookie';
import Info from '../../components/expense/Info';

interface StateProps {
  husband: string;
  bride: string;
  reservePay: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    husband: '',
    bride: '',
    reservePay: '',
  });
  const { husband, bride, reservePay } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if ([husband, bride, reservePay].includes('')) {
      alert('빈 칸을 다 채우세요!');
      return;
    }

    newList['Info'] = {
      husband,
      bride,
      reservePay,
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/rental');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됨다!!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return false;
  };

  return (
    <Info
      husband={husband}
      bride={bride}
      reservePay={reservePay}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
};

export default InfoContainer;
