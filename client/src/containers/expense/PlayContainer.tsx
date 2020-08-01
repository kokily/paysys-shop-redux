import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getCookie, setCookie } from '../../libs/cookie';
import Play from '../../components/expense/Play';

interface StateProps {
  husbandPlay: string;
  bridePlay: string;
  husbandAnthem: string;
  brideAnthem: string;
  husbandModerator: string;
  brideModerator: string;
  husbandOfficiate: string;
  brideOfficiate: string;
  husbandEtc: string;
  brideEtc: string;
}

function reducer(state: StateProps, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const PlayContainer = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    husbandPlay: '',
    bridePlay: '',
    husbandAnthem: '',
    brideAnthem: '',
    husbandModerator: '',
    brideModerator: '',
    husbandOfficiate: '',
    brideOfficiate: '',
    husbandEtc: '',
    brideEtc: '',
  });
  const {
    husbandPlay,
    bridePlay,
    husbandAnthem,
    brideAnthem,
    husbandModerator,
    brideModerator,
    husbandOfficiate,
    brideOfficiate,
    husbandEtc,
    brideEtc,
  } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  const onSubmit = () => {
    let newList: any = {};

    if (
      [
        husbandPlay,
        bridePlay,
        husbandAnthem,
        brideAnthem,
        husbandModerator,
        brideModerator,
        husbandOfficiate,
        brideOfficiate,
        husbandEtc,
        brideEtc,
      ].includes('')
    ) {
      alert('빈 칸을 모두 입력하세요!');
      return;
    }

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      newList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));
    }

    newList['Play'] = {
      husbandPlay,
      bridePlay,
      sumPlay: (parseInt(husbandPlay) + parseInt(bridePlay)).toString(),
      husbandAnthem,
      brideAnthem,
      sumAnthem: (parseInt(husbandAnthem) + parseInt(brideAnthem)).toString(),
      husbandModerator,
      brideModerator,
      sumModerator: (
        parseInt(husbandModerator) + parseInt(brideModerator)
      ).toString(),
      husbandOfficiate,
      brideOfficiate,
      sumOfficiate: (
        parseInt(husbandOfficiate) + parseInt(brideOfficiate)
      ).toString(),
      husbandEtc,
      brideEtc,
      sumEtc: (parseInt(husbandEtc) + parseInt(brideEtc)).toString(),
    };

    newList['All'] = {
      husbandWedding: (
        parseInt(newList.Rental.husbandRental) +
        parseInt(newList.Company.husbandCompany) +
        parseInt(newList.Company.husbandAdd) +
        parseInt(newList.Company.husbandToday) +
        parseInt(newList.Bouquet.husbandBouquet) +
        parseInt(newList.Bouquet.husbandCeremony) +
        parseInt(newList.Bouquet.husbandHanbok) +
        parseInt(newList.Play.husbandPlay) +
        parseInt(newList.Play.husbandAnthem) +
        parseInt(newList.Play.husbandModerator) +
        parseInt(newList.Play.husbandOfficiate) +
        parseInt(newList.Play.husbandEtc)
      ).toString(),
      brideWedding: (
        parseInt(newList.Rental.brideRental) +
        parseInt(newList.Company.brideCompany) +
        parseInt(newList.Company.brideAdd) +
        parseInt(newList.Company.brideToday) +
        parseInt(newList.Bouquet.brideBouquet) +
        parseInt(newList.Bouquet.brideCeremony) +
        parseInt(newList.Bouquet.brideHanbok) +
        parseInt(newList.Play.bridePlay) +
        parseInt(newList.Play.brideAnthem) +
        parseInt(newList.Play.brideModerator) +
        parseInt(newList.Play.brideOfficiate) +
        parseInt(newList.Play.brideEtc)
      ).toString(),
      totalWedding: (
        parseInt(newList.Rental.husbandRental) +
        parseInt(newList.Company.husbandCompany) +
        parseInt(newList.Company.husbandAdd) +
        parseInt(newList.Company.husbandToday) +
        parseInt(newList.Bouquet.husbandBouquet) +
        parseInt(newList.Bouquet.husbandCeremony) +
        parseInt(newList.Bouquet.husbandHanbok) +
        parseInt(newList.Play.husbandPlay) +
        parseInt(newList.Play.husbandAnthem) +
        parseInt(newList.Play.husbandModerator) +
        parseInt(newList.Play.husbandOfficiate) +
        parseInt(newList.Play.husbandEtc) +
        parseInt(newList.Rental.brideRental) +
        parseInt(newList.Company.brideCompany) +
        parseInt(newList.Company.brideAdd) +
        parseInt(newList.Company.brideToday) +
        parseInt(newList.Bouquet.brideBouquet) +
        parseInt(newList.Bouquet.brideCeremony) +
        parseInt(newList.Bouquet.brideHanbok) +
        parseInt(newList.Play.bridePlay) +
        parseInt(newList.Play.brideAnthem) +
        parseInt(newList.Play.brideModerator) +
        parseInt(newList.Play.brideOfficiate) +
        parseInt(newList.Play.brideEtc)
      ).toString(),
    };

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(newList), 10);
    history.push('/expense/meal');
  };

  const onBack = () => {
    let prevList: any = {};

    if (getCookie('__PAYSYS_WEDDING_CART__')) {
      prevList = JSON.parse(getCookie('__PAYSYS_WEDDING_CART__'));

      delete prevList.Play;
      delete prevList.Bouquet;
    }

    setCookie('__PAYSYS_WEDDING_CART__', JSON.stringify(prevList), 10);
    history.push('/expense/bouquet');
  };

  const onCancel = () => {
    if (window.confirm('전체 내용이 삭제됩니다!')) {
      setCookie('__PAYSYS_WEDDING_CART__', '', 0);
      history.push('/wedding');
    }
    return false;
  };

  return (
    <Play
      husbandPlay={husbandPlay}
      bridePlay={bridePlay}
      husbandAnthem={husbandAnthem}
      brideAnthem={brideAnthem}
      husbandModerator={husbandModerator}
      brideModerator={brideModerator}
      husbandOfficiate={husbandOfficiate}
      brideOfficiate={brideOfficiate}
      husbandEtc={husbandEtc}
      brideEtc={brideEtc}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      onCancel={onCancel}
    />
  );
};

export default PlayContainer;
