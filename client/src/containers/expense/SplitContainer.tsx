import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Split from '../../components/expense/Split';

interface StateProps {
  reserve: string;
  meal: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const SplitContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    reserve: 'half',
    meal: 'privacy',
  });
  const { reserve, meal } = state;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if ([reserve, meal].includes('')) {
      alert('빈 칸을 다 채우세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    if (reserve === 'half') {
      if (meal === 'privacy') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          brideReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          husbandMeal: (
            parseInt(newList.Meal.husbandNum) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: (
            parseInt(newList.Meal.brideNum) * parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      } else if (meal === 'husband') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          brideReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          husbandMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: 0,
        };
      } else if (meal === 'bride') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          brideReserve: (parseInt(newList.Info.reservePay) / 2).toString(),
          husbandMeal: 0,
          brideMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      }
    } else if (reserve === 'husband') {
      if (meal === 'privacy') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: newList.Info.reservePay,
          brideReserve: 0,
          husbandMeal: (
            parseInt(newList.Meal.husbandNum) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: (
            parseInt(newList.Meal.brideNum) * parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      } else if (meal === 'husband') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: newList.Info.reservePay,
          brideReserve: 0,
          husbandMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: 0,
        };
      } else if (meal === 'bride') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: newList.Info.reservePay,
          brideReserve: 0,
          husbandMeal: 0,
          brideMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      }
    } else if (reserve === 'bride') {
      if (meal === 'privacy') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: 0,
          brideReserve: newList.Info.reservePay,
          husbandMeal: (
            parseInt(newList.Meal.husbandNum) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: (
            parseInt(newList.Meal.brideNum) * parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      } else if (meal === 'husband') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: 0,
          brideReserve: newList.Info.reservePay,
          husbandMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
          brideMeal: 0,
        };
      } else if (meal === 'bride') {
        newList['Split'] = {
          reserve,
          meal,
          husbandReserve: 0,
          brideReserve: newList.Info.reservePay,
          husbandMeal: 0,
          brideMeal: (
            (parseInt(newList.Meal.husbandNum) +
              parseInt(newList.Meal.brideNum)) *
            parseInt(newList.Meal.mealsPrice)
          ).toString(),
        };
      }
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/weddingdate');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    delete prevList.Split;
    delete prevList.Meal;

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/meal');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됩니다!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return false;
  };

  return (
    <Split
      reserve={reserve}
      meal={meal}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default SplitContainer;
