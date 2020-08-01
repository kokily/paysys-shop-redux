import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Company from '../../components/expense/Company';

interface StateProps {
  husbandCompany: string;
  brideCompany: string;
  husbandAdd: string;
  brideAdd: string;
  husbandToday: string;
  brideToday: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const CompanyContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    husbandCompany: '',
    brideCompany: '',
    husbandAdd: '',
    brideAdd: '',
    husbandToday: '',
    brideToday: '',
  });
  const {
    husbandCompany,
    brideCompany,
    husbandAdd,
    brideAdd,
    husbandToday,
    brideToday,
  } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if (
      [
        husbandCompany,
        brideCompany,
        husbandAdd,
        brideAdd,
        husbandToday,
        brideToday,
      ].includes('')
    ) {
      alert('빈 칸을 다 채우세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['Company'] = {
      husbandCompany,
      brideCompany,
      sumCompany: (
        parseInt(husbandCompany) + parseInt(brideCompany)
      ).toString(),
      husbandAdd,
      brideAdd,
      sumAdd: (parseInt(husbandAdd) + parseInt(brideAdd)).toString(),
      husbandToday,
      brideToday,
      sumToday: (parseInt(husbandToday) + parseInt(brideToday)).toString(),
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/bouquet');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));

      delete prevList.Company;
      delete prevList.Rental;
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/rental');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됨다!!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return;
  };

  return (
    <Company
      husbandCompany={husbandCompany}
      brideCompany={brideCompany}
      husbandAdd={husbandAdd}
      brideAdd={brideAdd}
      husbandToday={husbandToday}
      brideToday={brideToday}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default CompanyContainer;
