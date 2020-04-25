import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Meal from '../../components/expense/Meal';

interface StateProps {
  mealsPrice: string;
  husbandNum: string;
  brideNum: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const MealContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    mealsPrice: '',
    husbandNum: '',
    brideNum: '',
  });
  const { mealsPrice, husbandNum, brideNum } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if ([mealsPrice, husbandNum, brideNum].includes('')) {
      alert('빈 칸을 모두 입력하세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['Meal'] = {
      mealsPrice,
      husbandNum,
      brideNum,
      sumNum: (parseInt(husbandNum) + parseInt(brideNum)).toString(),
      husbandSum: (parseInt(husbandNum) * parseInt(mealsPrice)).toString(),
      brideSum: (parseInt(brideNum) * parseInt(mealsPrice)).toString(),
      totalMeals: (
        (parseInt(husbandNum) + parseInt(brideNum)) *
        parseInt(mealsPrice)
      ).toString(),
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/split');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));

      delete prevList.Meal;
      delete prevList.All;
      delete prevList.Play;
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/play');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됩니다!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return false;
  };

  return (
    <Meal
      mealsPrice={mealsPrice}
      husbandNum={husbandNum}
      brideNum={brideNum}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default MealContainer;
