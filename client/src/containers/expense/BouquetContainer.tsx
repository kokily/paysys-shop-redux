import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Bouquet from '../../components/expense/Bouquet';

interface StateProps {
  husbandBouquet: string;
  brideBouquet: string;
  husbandCeremony: string;
  brideCeremony: string;
  husbandHanbok: string;
  brideHanbok: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const BouquetContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    husbandBouquet: '',
    brideBouquet: '',
    husbandCeremony: '',
    brideCeremony: '',
    husbandHanbok: '',
    brideHanbok: '',
  });
  const {
    husbandBouquet,
    brideBouquet,
    husbandCeremony,
    brideCeremony,
    husbandHanbok,
    brideHanbok,
  } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if (
      [
        husbandBouquet,
        brideBouquet,
        husbandCeremony,
        brideCeremony,
        husbandHanbok,
        brideHanbok,
      ].includes('')
    ) {
      alert('빈 칸을 모두 입력하세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['Bouquet'] = {
      husbandBouquet,
      brideBouquet,
      sumBouquet: (
        parseInt(husbandBouquet) + parseInt(brideBouquet)
      ).toString(),
      husbandCeremony,
      brideCeremony,
      sumCeremony: (
        parseInt(husbandCeremony) + parseInt(brideCeremony)
      ).toString(),
      husbandHanbok,
      brideHanbok,
      sumHanbok: (parseInt(husbandHanbok) + parseInt(brideHanbok)).toString(),
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/play');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));

      delete prevList.Bouquet;
      delete prevList.Company;
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/company');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됨다!!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return;
  };

  return (
    <Bouquet
      husbandBouquet={husbandBouquet}
      brideBouquet={brideBouquet}
      husbandCeremony={husbandCeremony}
      brideCeremony={brideCeremony}
      husbandHanbok={husbandHanbok}
      brideHanbok={brideHanbok}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default BouquetContainer;
