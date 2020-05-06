import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { changeField, updateExpense } from '../../libs/modules/expense';
import { RootState } from '../../libs/modules';
import EditWide from '../../components/edit/EditWide';
import EditMobile from '../../components/edit/EditMobile';

const EditContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    husband,
    bride,
    reservePay,
    husbandRental,
    husbandCompany,
    husbandAdd,
    husbandBouquet,
    husbandCeremony,
    husbandHanbok,
    husbandPlay,
    husbandAnthem,
    husbandModerator,
    husbandOfficiate,
    husbandEtc,
    brideRental,
    brideCompany,
    brideAdd,
    brideBouquet,
    brideCeremony,
    brideHanbok,
    bridePlay,
    brideAnthem,
    brideModerator,
    brideOfficiate,
    brideEtc,
    sumRental,
    sumCompany,
    sumAdd,
    sumBouquet,
    sumCeremony,
    sumHanbok,
    sumPlay,
    sumAnthem,
    sumModerator,
    sumOfficiate,
    sumEtc,
    husbandWedding,
    brideWedding,
    totalWedding,
    mealsPrice,
    husbandNum,
    brideNum,
    sumNum,
    husbandSum,
    brideSum,
    husbandMeal,
    brideMeal,
    totalMeals,
    reserve,
    husbandReserve,
    brideReserve,
    meal,
    originalExpenseId,
    weddingAt,
  } = useSelector(({ expense }: RootState) => ({
    husband: expense.husband,
    bride: expense.bride,
    reservePay: expense.reservePay,
    husbandRental: expense.husbandRental,
    husbandCompany: expense.husbandCompany,
    husbandAdd: expense.husbandAdd,
    husbandBouquet: expense.husbandBouquet,
    husbandCeremony: expense.husbandCeremony,
    husbandHanbok: expense.husbandHanbok,
    husbandPlay: expense.husbandPlay,
    husbandAnthem: expense.husbandAnthem,
    husbandModerator: expense.husbandModerator,
    husbandOfficiate: expense.husbandOfficiate,
    husbandEtc: expense.husbandEtc,
    brideRental: expense.brideRental,
    brideCompany: expense.brideCompany,
    brideAdd: expense.brideAdd,
    brideBouquet: expense.brideBouquet,
    brideCeremony: expense.brideCeremony,
    brideHanbok: expense.brideHanbok,
    bridePlay: expense.bridePlay,
    brideAnthem: expense.brideAnthem,
    brideModerator: expense.brideModerator,
    brideOfficiate: expense.brideOfficiate,
    brideEtc: expense.brideEtc,
    sumRental: expense.sumRental,
    sumCompany: expense.sumCompany,
    sumAdd: expense.sumAdd,
    sumBouquet: expense.sumBouquet,
    sumCeremony: expense.sumCeremony,
    sumHanbok: expense.sumHanbok,
    sumPlay: expense.sumPlay,
    sumAnthem: expense.sumAnthem,
    sumModerator: expense.sumModerator,
    sumOfficiate: expense.sumOfficiate,
    sumEtc: expense.sumEtc,
    husbandWedding: expense.husbandWedding,
    brideWedding: expense.brideWedding,
    totalWedding: expense.totalWedding,
    mealsPrice: expense.mealsPrice,
    husbandNum: expense.husbandNum,
    brideNum: expense.brideNum,
    sumNum: expense.sumNum,
    husbandSum: expense.husbandSum,
    brideSum: expense.brideSum,
    husbandMeal: expense.husbandMeal,
    brideMeal: expense.brideMeal,
    totalMeals: expense.totalMeals,
    reserve: expense.reserve,
    husbandReserve: expense.husbandReserve,
    brideReserve: expense.brideReserve,
    meal: expense.meal,
    error: expense.error,
    originalExpenseId: expense.originalExpenseId,
    weddingAt: expense.weddingAt,
  }));

  // onChange 리스트
  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value: parseInt(value) }));
    },
    [dispatch]
  );

  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch]
  );

  const onBack = () => {
    history.push(`/wedding/${originalExpenseId}`);
  };

  const onCalculate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(
      changeField({
        key: 'sumRental',
        value: husbandRental + brideRental,
      })
    );
    dispatch(
      changeField({
        key: 'sumCompany',
        value: husbandCompany + brideCompany,
      })
    );
    dispatch(
      changeField({
        key: 'sumAdd',
        value: husbandAdd + brideAdd,
      })
    );
    dispatch(
      changeField({
        key: 'sumBouquet',
        value: husbandBouquet + brideBouquet,
      })
    );
    dispatch(
      changeField({
        key: 'sumCeremony',
        value: husbandCeremony + brideCeremony,
      })
    );
    dispatch(
      changeField({
        key: 'sumHanbok',
        value: husbandHanbok + brideHanbok,
      })
    );
    dispatch(
      changeField({
        key: 'sumPlay',
        value: husbandPlay + bridePlay,
      })
    );
    dispatch(
      changeField({
        key: 'sumAnthem',
        value: husbandAnthem + brideAnthem,
      })
    );
    dispatch(
      changeField({
        key: 'sumModerator',
        value: husbandModerator + brideModerator,
      })
    );
    dispatch(
      changeField({
        key: 'sumOfficiate',
        value: husbandOfficiate + brideOfficiate,
      })
    );
    dispatch(
      changeField({
        key: 'sumEtc',
        value: husbandEtc + brideEtc,
      })
    );
    dispatch(
      changeField({
        key: 'husbandWedding',
        value:
          husbandRental +
          husbandCompany +
          husbandAdd +
          husbandBouquet +
          husbandCeremony +
          husbandHanbok +
          husbandPlay +
          husbandAnthem +
          husbandModerator +
          husbandOfficiate +
          husbandEtc,
      })
    );
    dispatch(
      changeField({
        key: 'brideWedding',
        value:
          brideRental +
          brideCompany +
          brideAdd +
          brideBouquet +
          brideCeremony +
          brideHanbok +
          bridePlay +
          brideAnthem +
          brideModerator +
          brideOfficiate +
          brideEtc,
      })
    );
    dispatch(
      changeField({
        key: 'totalWedding',
        value:
          husbandRental +
          husbandCompany +
          husbandAdd +
          husbandBouquet +
          husbandCeremony +
          husbandHanbok +
          husbandPlay +
          husbandAnthem +
          husbandModerator +
          husbandOfficiate +
          husbandEtc +
          brideRental +
          brideCompany +
          brideAdd +
          brideBouquet +
          brideCeremony +
          brideHanbok +
          bridePlay +
          brideAnthem +
          brideModerator +
          brideOfficiate +
          brideEtc,
      })
    );

    dispatch(
      changeField({
        key: 'husbandSum',
        value: husbandNum * mealsPrice,
      })
    );
    dispatch(
      changeField({
        key: 'brideSum',
        value: brideNum * mealsPrice,
      })
    );
    dispatch(
      changeField({
        key: 'sumNum',
        value: husbandNum + brideNum,
      })
    );
    dispatch(
      changeField({
        key: 'totalMeals',
        value: (husbandNum + brideNum) * mealsPrice,
      })
    );

    dispatch(changeField({ key: 'meal', value: meal }));
    dispatch(changeField({ key: 'reserve', value: reserve }));

    if (meal === 'privacy') {
      dispatch(
        changeField({
          key: 'husbandMeal',
          value: husbandNum * mealsPrice,
        })
      );
      dispatch(
        changeField({
          key: 'brideMeal',
          value: brideNum * mealsPrice,
        })
      );
    } else if (meal === 'husband') {
      dispatch(
        changeField({
          key: 'husbandMeal',
          value: (husbandNum + brideNum) * mealsPrice,
        })
      );
      dispatch(changeField({ key: 'brideMeal', value: 0 }));
    } else if (meal === 'bride') {
      dispatch(changeField({ key: 'husbandMeal', value: 0 }));
      dispatch(
        changeField({
          key: 'brideMeal',
          value: (husbandNum + brideNum) * mealsPrice,
        })
      );
    }

    if (reserve === 'half') {
      dispatch(changeField({ key: 'husbandReserve', value: reservePay / 2 }));
      dispatch(changeField({ key: 'brideReserve', value: reservePay / 2 }));
    } else if (reserve === 'husband') {
      dispatch(changeField({ key: 'husbandReserve', value: reservePay }));
      dispatch(changeField({ key: 'brideReserve', value: 0 }));
    } else if (reserve === 'bride') {
      dispatch(changeField({ key: 'husbandReserve', value: 0 }));
      dispatch(changeField({ key: 'brideReserve', value: reservePay }));
    }
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (originalExpenseId) {
      dispatch(
        updateExpense({
          husband,
          bride,
          reservePay,
          husbandRental,
          husbandCompany,
          husbandAdd,
          husbandBouquet,
          husbandCeremony,
          husbandHanbok,
          husbandPlay,
          husbandAnthem,
          husbandModerator,
          husbandOfficiate,
          husbandEtc,
          brideRental,
          brideCompany,
          brideAdd,
          brideBouquet,
          brideCeremony,
          brideHanbok,
          bridePlay,
          brideAnthem,
          brideModerator,
          brideOfficiate,
          brideEtc,
          sumRental,
          sumCompany,
          sumAdd,
          sumBouquet,
          sumCeremony,
          sumHanbok,
          sumPlay,
          sumAnthem,
          sumModerator,
          sumOfficiate,
          sumEtc,
          husbandWedding,
          brideWedding,
          totalWedding,
          mealsPrice,
          husbandNum,
          brideNum,
          sumNum,
          husbandSum,
          brideSum,
          husbandMeal,
          brideMeal,
          totalMeals,
          reserve,
          husbandReserve,
          brideReserve,
          meal,
          id: originalExpenseId,
          weddingAt,
        })
      );
      history.push('/wedding');
    }
    return;
  };

  return (
    <>
      <BrowserView>
        <EditWide
          husband={husband}
          bride={bride}
          reservePay={reservePay}
          husbandRental={husbandRental}
          husbandCompany={husbandCompany}
          husbandAdd={husbandAdd}
          husbandBouquet={husbandBouquet}
          husbandCeremony={husbandCeremony}
          husbandHanbok={husbandHanbok}
          husbandPlay={husbandPlay}
          husbandAnthem={husbandAnthem}
          husbandModerator={husbandModerator}
          husbandOfficiate={husbandOfficiate}
          husbandEtc={husbandEtc}
          brideRental={brideRental}
          brideCompany={brideCompany}
          brideAdd={brideAdd}
          brideBouquet={brideBouquet}
          brideCeremony={brideCeremony}
          brideHanbok={brideHanbok}
          bridePlay={bridePlay}
          brideAnthem={brideAnthem}
          brideModerator={brideModerator}
          brideOfficiate={brideOfficiate}
          brideEtc={brideEtc}
          sumRental={sumRental}
          sumCompany={sumCompany}
          sumAdd={sumAdd}
          sumBouquet={sumBouquet}
          sumCeremony={sumCeremony}
          sumHanbok={sumHanbok}
          sumPlay={sumPlay}
          sumAnthem={sumAnthem}
          sumModerator={sumModerator}
          sumOfficiate={sumOfficiate}
          sumEtc={sumEtc}
          husbandWedding={husbandWedding}
          brideWedding={brideWedding}
          totalWedding={totalWedding}
          mealsPrice={mealsPrice}
          husbandNum={husbandNum}
          brideNum={brideNum}
          sumNum={sumNum}
          husbandSum={husbandSum}
          brideSum={brideSum}
          husbandMeal={husbandMeal}
          brideMeal={brideMeal}
          totalMeals={totalMeals}
          reserve={reserve}
          husbandReserve={husbandReserve}
          brideReserve={brideReserve}
          meal={meal}
          weddingAt={weddingAt}
          onChangeName={onChangeName}
          onChange={onChange}
          onChangeText={onChangeText}
          onBack={onBack}
          onCalculate={onCalculate}
          onSubmit={onSubmit}
        />
      </BrowserView>

      <MobileView>
        <EditMobile
          husband={husband}
          bride={bride}
          reservePay={reservePay}
          husbandRental={husbandRental}
          husbandCompany={husbandCompany}
          husbandAdd={husbandAdd}
          husbandBouquet={husbandBouquet}
          husbandCeremony={husbandCeremony}
          husbandHanbok={husbandHanbok}
          husbandPlay={husbandPlay}
          husbandAnthem={husbandAnthem}
          husbandModerator={husbandModerator}
          husbandOfficiate={husbandOfficiate}
          husbandEtc={husbandEtc}
          brideRental={brideRental}
          brideCompany={brideCompany}
          brideAdd={brideAdd}
          brideBouquet={brideBouquet}
          brideCeremony={brideCeremony}
          brideHanbok={brideHanbok}
          bridePlay={bridePlay}
          brideAnthem={brideAnthem}
          brideModerator={brideModerator}
          brideOfficiate={brideOfficiate}
          brideEtc={brideEtc}
          sumRental={sumRental}
          sumCompany={sumCompany}
          sumAdd={sumAdd}
          sumBouquet={sumBouquet}
          sumCeremony={sumCeremony}
          sumHanbok={sumHanbok}
          sumPlay={sumPlay}
          sumAnthem={sumAnthem}
          sumModerator={sumModerator}
          sumOfficiate={sumOfficiate}
          sumEtc={sumEtc}
          husbandWedding={husbandWedding}
          brideWedding={brideWedding}
          totalWedding={totalWedding}
          mealsPrice={mealsPrice}
          husbandNum={husbandNum}
          brideNum={brideNum}
          sumNum={sumNum}
          husbandSum={husbandSum}
          brideSum={brideSum}
          husbandMeal={husbandMeal}
          brideMeal={brideMeal}
          totalMeals={totalMeals}
          reserve={reserve}
          husbandReserve={husbandReserve}
          brideReserve={brideReserve}
          meal={meal}
          weddingAt={weddingAt}
          onChangeName={onChangeName}
          onChange={onChange}
          onChangeText={onChangeText}
          onBack={onBack}
          onCalculate={onCalculate}
          onSubmit={onSubmit}
        />
      </MobileView>
    </>
  );
};

export default EditContainer;
