import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { changeField, addExpense } from '../../libs/modules/expense';
import { getCookie, setCookie } from '../../libs/cookie';
import { RootState } from '../../libs/modules';
import AllWide from '../../components/expense/AllWide';
import AllMobile from '../../components/expense/AllMobile';

const AllContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    husband,
    bride,
    husbandRental,
    brideRental,
    sumRental,
    husbandCompany,
    brideCompany,
    sumCompany,
    husbandAdd,
    brideAdd,
    sumAdd,
    husbandBouquet,
    brideBouquet,
    sumBouquet,
    husbandCeremony,
    brideCeremony,
    sumCeremony,
    husbandHanbok,
    brideHanbok,
    sumHanbok,
    husbandPlay,
    bridePlay,
    sumPlay,
    husbandAnthem,
    brideAnthem,
    sumAnthem,
    husbandModerator,
    brideModerator,
    sumModerator,
    husbandOfficiate,
    brideOfficiate,
    sumOfficiate,
    husbandEtc,
    brideEtc,
    sumEtc,
    husbandWedding,
    brideWedding,
    totalWedding,
    reserve,
    husbandReserve,
    brideReserve,
    reservePay,
    meal,
    mealsPrice,
    husbandNum,
    brideNum,
    sumNum,
    husbandSum,
    brideSum,
    husbandMeal,
    brideMeal,
    totalMeals,
    weddingAt,
    eventAt,
  } = useSelector(({ expense }: RootState) => ({
    husband: expense.husband,
    bride: expense.bride,
    husbandRental: expense.husbandRental,
    brideRental: expense.brideRental,
    sumRental: expense.sumRental,
    husbandCompany: expense.husbandCompany,
    brideCompany: expense.brideCompany,
    sumCompany: expense.sumCompany,
    husbandAdd: expense.husbandAdd,
    brideAdd: expense.brideAdd,
    sumAdd: expense.sumAdd,
    husbandBouquet: expense.husbandBouquet,
    brideBouquet: expense.brideBouquet,
    sumBouquet: expense.sumBouquet,
    husbandCeremony: expense.husbandCeremony,
    brideCeremony: expense.brideCeremony,
    sumCeremony: expense.sumCeremony,
    husbandHanbok: expense.husbandHanbok,
    brideHanbok: expense.brideHanbok,
    sumHanbok: expense.sumHanbok,
    husbandPlay: expense.husbandPlay,
    bridePlay: expense.bridePlay,
    sumPlay: expense.sumPlay,
    husbandAnthem: expense.husbandAnthem,
    brideAnthem: expense.brideAnthem,
    sumAnthem: expense.sumAnthem,
    husbandModerator: expense.husbandModerator,
    brideModerator: expense.brideModerator,
    sumModerator: expense.sumModerator,
    husbandOfficiate: expense.husbandOfficiate,
    brideOfficiate: expense.brideOfficiate,
    sumOfficiate: expense.sumOfficiate,
    husbandEtc: expense.husbandEtc,
    brideEtc: expense.brideEtc,
    sumEtc: expense.sumEtc,
    husbandWedding: expense.husbandWedding,
    brideWedding: expense.brideWedding,
    totalWedding: expense.totalWedding,
    reserve: expense.reserve,
    husbandReserve: expense.husbandReserve,
    brideReserve: expense.brideReserve,
    reservePay: expense.reservePay,
    meal: expense.meal,
    mealsPrice: expense.mealsPrice,
    husbandNum: expense.husbandNum,
    brideNum: expense.brideNum,
    sumNum: expense.sumNum,
    husbandSum: expense.husbandSum,
    brideSum: expense.brideSum,
    husbandMeal: expense.husbandMeal,
    brideMeal: expense.brideMeal,
    totalMeals: expense.totalMeals,
    weddingAt: expense.weddingAt,
    eventAt: expense.eventAt,
  }));

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (window.confirm('정산 내역을 전송하시겠습니까?')) {
      dispatch(
        addExpense({
          husband,
          bride,
          husbandRental,
          brideRental,
          sumRental,
          husbandCompany,
          brideCompany,
          sumCompany,
          husbandAdd,
          brideAdd,
          sumAdd,
          husbandBouquet,
          brideBouquet,
          sumBouquet,
          husbandCeremony,
          brideCeremony,
          sumCeremony,
          husbandHanbok,
          brideHanbok,
          sumHanbok,
          husbandPlay,
          bridePlay,
          sumPlay,
          husbandAnthem,
          brideAnthem,
          sumAnthem,
          husbandModerator,
          brideModerator,
          sumModerator,
          husbandOfficiate,
          brideOfficiate,
          sumOfficiate,
          husbandEtc,
          brideEtc,
          sumEtc,
          husbandWedding,
          brideWedding,
          totalWedding,
          reserve,
          husbandReserve,
          brideReserve,
          reservePay,
          meal,
          mealsPrice,
          husbandNum,
          brideNum,
          sumNum,
          husbandSum,
          brideSum,
          husbandMeal,
          brideMeal,
          totalMeals,
          weddingAt,
          eventAt,
        })
      );

      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
  };

  useEffect(() => {
    let readList: any = getCookie('__PAYSYS_WEDDING_CART__');
    let newList: any = {};

    if (readList) {
      let cartList = JSON.parse(unescape(readList));

      newList = {
        ...cartList.Info,
        ...cartList.Rental,
        ...cartList.Company,
        ...cartList.Bouquet,
        ...cartList.Play,
        ...cartList.Meal,
        ...cartList.Split,
        ...cartList.WeddingDate,
        ...cartList.All,
      };
    } else {
      return;
    }

    // 쿠키 데이터 -> 리덕스 스테이트
    dispatch(changeField({ key: 'husband', value: newList.husband }));
    dispatch(changeField({ key: 'bride', value: newList.bride }));

    dispatch(
      changeField({
        key: 'husbandRental',
        value: parseInt(newList.husbandRental),
      })
    );
    dispatch(
      changeField({ key: 'brideRental', value: parseInt(newList.brideRental) })
    );
    dispatch(
      changeField({ key: 'sumRental', value: parseInt(newList.sumRental) })
    );

    dispatch(
      changeField({
        key: 'husbandCompany',
        value: parseInt(newList.husbandCompany),
      })
    );
    dispatch(
      changeField({
        key: 'brideCompany',
        value: parseInt(newList.brideCompany),
      })
    );
    dispatch(
      changeField({ key: 'sumCompany', value: parseInt(newList.sumCompany) })
    );

    dispatch(
      changeField({ key: 'husbandAdd', value: parseInt(newList.husbandAdd) })
    );
    dispatch(
      changeField({ key: 'brideAdd', value: parseInt(newList.brideAdd) })
    );
    dispatch(changeField({ key: 'sumAdd', value: parseInt(newList.sumAdd) }));

    dispatch(
      changeField({
        key: 'husbandBouquet',
        value: parseInt(newList.husbandBouquet),
      })
    );
    dispatch(
      changeField({
        key: 'brideBouquet',
        value: parseInt(newList.brideBouquet),
      })
    );
    dispatch(
      changeField({ key: 'sumBouquet', value: parseInt(newList.sumBouquet) })
    );

    dispatch(
      changeField({
        key: 'husbandCeremony',
        value: parseInt(newList.husbandCeremony),
      })
    );
    dispatch(
      changeField({
        key: 'brideCeremony',
        value: parseInt(newList.brideCeremony),
      })
    );
    dispatch(
      changeField({ key: 'sumCeremony', value: parseInt(newList.sumCeremony) })
    );

    dispatch(
      changeField({
        key: 'husbandHanbok',
        value: parseInt(newList.husbandHanbok),
      })
    );
    dispatch(
      changeField({ key: 'brideHanbok', value: parseInt(newList.brideHanbok) })
    );
    dispatch(
      changeField({ key: 'sumHanbok', value: parseInt(newList.sumHanbok) })
    );

    dispatch(
      changeField({ key: 'husbandPlay', value: parseInt(newList.husbandPlay) })
    );
    dispatch(
      changeField({ key: 'bridePlay', value: parseInt(newList.bridePlay) })
    );
    dispatch(changeField({ key: 'sumPlay', value: parseInt(newList.sumPlay) }));

    dispatch(
      changeField({
        key: 'husbandAnthem',
        value: parseInt(newList.husbandAnthem),
      })
    );
    dispatch(
      changeField({ key: 'brideAnthem', value: parseInt(newList.brideAnthem) })
    );
    dispatch(
      changeField({ key: 'sumAnthem', value: parseInt(newList.sumAnthem) })
    );

    dispatch(
      changeField({
        key: 'husbandModerator',
        value: parseInt(newList.husbandModerator),
      })
    );
    dispatch(
      changeField({
        key: 'brideModerator',
        value: parseInt(newList.brideModerator),
      })
    );
    dispatch(
      changeField({
        key: 'sumModerator',
        value: parseInt(newList.sumModerator),
      })
    );

    dispatch(
      changeField({
        key: 'husbandOfficiate',
        value: parseInt(newList.husbandOfficiate),
      })
    );
    dispatch(
      changeField({
        key: 'brideOfficiate',
        value: parseInt(newList.brideOfficiate),
      })
    );
    dispatch(
      changeField({
        key: 'sumOfficiate',
        value: parseInt(newList.sumOfficiate),
      })
    );

    dispatch(
      changeField({ key: 'husbandEtc', value: parseInt(newList.husbandEtc) })
    );
    dispatch(
      changeField({ key: 'brideEtc', value: parseInt(newList.brideEtc) })
    );
    dispatch(changeField({ key: 'sumEtc', value: parseInt(newList.sumEtc) }));

    dispatch(
      changeField({
        key: 'husbandWedding',
        value: parseInt(newList.husbandWedding),
      })
    );
    dispatch(
      changeField({
        key: 'brideWedding',
        value: parseInt(newList.brideWedding),
      })
    );
    dispatch(
      changeField({
        key: 'totalWedding',
        value: parseInt(newList.totalWedding),
      })
    );

    dispatch(changeField({ key: 'reserve', value: newList.reserve }));
    dispatch(
      changeField({
        key: 'husbandReserve',
        value: parseInt(newList.husbandReserve),
      })
    );
    dispatch(
      changeField({
        key: 'brideReserve',
        value: parseInt(newList.brideReserve),
      })
    );
    dispatch(
      changeField({ key: 'reservePay', value: parseInt(newList.reservePay) })
    );

    dispatch(changeField({ key: 'meal', value: newList.meal }));
    dispatch(
      changeField({ key: 'mealsPrice', value: parseInt(newList.mealsPrice) })
    );
    dispatch(
      changeField({ key: 'husbandNum', value: parseInt(newList.husbandNum) })
    );
    dispatch(
      changeField({ key: 'brideNum', value: parseInt(newList.brideNum) })
    );
    dispatch(changeField({ key: 'sumNum', value: parseInt(newList.sumNum) }));
    dispatch(
      changeField({ key: 'husbandSum', value: parseInt(newList.husbandSum) })
    );
    dispatch(
      changeField({ key: 'brideSum', value: parseInt(newList.brideSum) })
    );
    dispatch(
      changeField({ key: 'husbandMeal', value: parseInt(newList.husbandMeal) })
    );
    dispatch(
      changeField({ key: 'brideMeal', value: parseInt(newList.brideMeal) })
    );
    dispatch(
      changeField({ key: 'totalMeals', value: parseInt(newList.totalMeals) })
    );
    dispatch(changeField({ key: 'weddingAt', value: newList.weddingAt }));
    dispatch(changeField({ key: 'eventAt', value: newList.eventAt }));
  }, [dispatch]);

  return (
    <>
      <BrowserView>
        <AllWide
          husband={husband}
          bride={bride}
          husbandRental={husbandRental}
          brideRental={brideRental}
          sumRental={sumRental}
          husbandCompany={husbandCompany}
          brideCompany={brideCompany}
          sumCompany={sumCompany}
          husbandAdd={husbandAdd}
          brideAdd={brideAdd}
          sumAdd={sumAdd}
          husbandBouquet={husbandBouquet}
          brideBouquet={brideBouquet}
          sumBouquet={sumBouquet}
          husbandCeremony={husbandCeremony}
          brideCeremony={brideCeremony}
          sumCeremony={sumCeremony}
          husbandHanbok={husbandHanbok}
          brideHanbok={brideHanbok}
          sumHanbok={sumHanbok}
          husbandPlay={husbandPlay}
          bridePlay={bridePlay}
          sumPlay={sumPlay}
          husbandAnthem={husbandAnthem}
          brideAnthem={brideAnthem}
          sumAnthem={sumAnthem}
          husbandModerator={husbandModerator}
          brideModerator={brideModerator}
          sumModerator={sumModerator}
          husbandOfficiate={husbandOfficiate}
          brideOfficiate={brideOfficiate}
          sumOfficiate={sumOfficiate}
          husbandEtc={husbandEtc}
          brideEtc={brideEtc}
          sumEtc={sumEtc}
          husbandWedding={husbandWedding}
          brideWedding={brideWedding}
          totalWedding={totalWedding}
          reserve={reserve}
          husbandReserve={husbandReserve}
          brideReserve={brideReserve}
          reservePay={reservePay}
          meal={meal}
          mealsPrice={mealsPrice}
          husbandNum={husbandNum}
          brideNum={brideNum}
          sumNum={sumNum}
          husbandSum={husbandSum}
          brideSum={brideSum}
          husbandMeal={husbandMeal}
          brideMeal={brideMeal}
          totalMeals={totalMeals}
          weddingAt={weddingAt}
          eventAt={eventAt}
          onSubmit={onSubmit}
        />
      </BrowserView>

      <MobileView>
        <AllMobile
          husband={husband}
          bride={bride}
          husbandRental={husbandRental}
          brideRental={brideRental}
          sumRental={sumRental}
          husbandCompany={husbandCompany}
          brideCompany={brideCompany}
          sumCompany={sumCompany}
          husbandAdd={husbandAdd}
          brideAdd={brideAdd}
          sumAdd={sumAdd}
          husbandBouquet={husbandBouquet}
          brideBouquet={brideBouquet}
          sumBouquet={sumBouquet}
          husbandCeremony={husbandCeremony}
          brideCeremony={brideCeremony}
          sumCeremony={sumCeremony}
          husbandHanbok={husbandHanbok}
          brideHanbok={brideHanbok}
          sumHanbok={sumHanbok}
          husbandPlay={husbandPlay}
          bridePlay={bridePlay}
          sumPlay={sumPlay}
          husbandAnthem={husbandAnthem}
          brideAnthem={brideAnthem}
          sumAnthem={sumAnthem}
          husbandModerator={husbandModerator}
          brideModerator={brideModerator}
          sumModerator={sumModerator}
          husbandOfficiate={husbandOfficiate}
          brideOfficiate={brideOfficiate}
          sumOfficiate={sumOfficiate}
          husbandEtc={husbandEtc}
          brideEtc={brideEtc}
          sumEtc={sumEtc}
          husbandWedding={husbandWedding}
          brideWedding={brideWedding}
          totalWedding={totalWedding}
          reserve={reserve}
          husbandReserve={husbandReserve}
          brideReserve={brideReserve}
          reservePay={reservePay}
          meal={meal}
          mealsPrice={mealsPrice}
          husbandNum={husbandNum}
          brideNum={brideNum}
          sumNum={sumNum}
          husbandSum={husbandSum}
          brideSum={brideSum}
          husbandMeal={husbandMeal}
          brideMeal={brideMeal}
          totalMeals={totalMeals}
          weddingAt={weddingAt}
          eventAt={eventAt}
          onSubmit={onSubmit}
        />
      </MobileView>
    </>
  );
};

export default AllContainer;
