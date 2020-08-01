import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

interface AllProps {
  husband: string;
  bride: string;
  husbandRental: number;
  brideRental: number;
  sumRental: number;
  husbandCompany: number;
  brideCompany: number;
  sumCompany: number;
  husbandAdd: number;
  brideAdd: number;
  sumAdd: number;
  husbandToday: number;
  brideToday: number;
  sumToday: number;
  husbandNum: number;
  brideNum: number;
  sumNum: number;
  husbandBouquet: number;
  brideBouquet: number;
  sumBouquet: number;
  husbandCeremony: number;
  brideCeremony: number;
  sumCeremony: number;
  husbandHanbok: number;
  brideHanbok: number;
  sumHanbok: number;
  husbandPlay: number;
  bridePlay: number;
  sumPlay: number;
  husbandAnthem: number;
  brideAnthem: number;
  sumAnthem: number;
  husbandModerator: number;
  brideModerator: number;
  sumModerator: number;
  husbandOfficiate: number;
  brideOfficiate: number;
  sumOfficiate: number;
  husbandEtc: number;
  brideEtc: number;
  sumEtc: number;
  husbandWedding: number;
  brideWedding: number;
  totalWedding: number;
  reserve: string;
  husbandReserve: number;
  brideReserve: number;
  reservePay: number;
  meal: string;
  mealsPrice: number;
  husbandSum: number;
  brideSum: number;
  husbandMeal: number;
  brideMeal: number;
  totalMeals: number;
  weddingAt: string;
  eventAt: string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AllMobile: React.FC<AllProps> = ({
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
  husbandToday,
  brideToday,
  sumToday,
  husbandNum,
  brideNum,
  sumNum,
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
  husbandSum,
  brideSum,
  husbandMeal,
  brideMeal,
  totalMeals,
  weddingAt,
  eventAt,
  onSubmit,
}) => {
  return (
    <Container>
      <Content>
        <h2 className="title">웨딩 정산 내역</h2>

        <h3 className="name">
          신랑 : <strong>{husband} ♡</strong> 신부: <strong>{bride}</strong>
        </h3>

        <h4>
          웨딩일자: {new Date(weddingAt).toLocaleDateString()} {eventAt}
        </h4>

        <hr style={{ width: '90%' }} />

        <h3>예식비용</h3>
        <table>
          <tbody>
            <tr>
              <th>구분</th>
              <th className="basic" style={{ background: 'skyblue' }}>
                신랑
              </th>
              <th className="basic" style={{ background: 'pink' }}>
                신부
              </th>
              <th className="basic red">계</th>
            </tr>

            <tr>
              <th>웨딩홀 사용료</th>
              <td>
                {husbandRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>웨딩업체</th>
              <td>
                {husbandCompany
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideCompany.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td className="sub">
                {sumCompany.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>웨딩업체 추가</th>
              <td>
                {husbandAdd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td>
                {brideAdd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumAdd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>업체당일 추가</th>
              <td>
                {husbandToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td>
                {brideToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>부 케</th>
              <td>
                {husbandRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>폐백음식</th>
              <td>
                {husbandBouquet
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideBouquet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td className="sub">
                {sumBouquet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>한 복</th>
              <td>
                {husbandHanbok.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideHanbok.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumHanbok.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>연 주</th>
              <td>
                {husbandPlay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td>
                {bridePlay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumPlay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>축 가</th>
              <td>
                {husbandAnthem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideAnthem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumAnthem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>사회자</th>
              <td>
                {husbandModerator
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideModerator
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td className="sub">
                {sumModerator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
            </tr>

            <tr>
              <th>주 례</th>
              <td>
                {husbandOfficiate
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideOfficiate
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td className="sub">
                {sumOfficiate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
            </tr>

            <tr>
              <th>기 타</th>
              <td>
                {husbandEtc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td>
                {brideEtc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
              <td className="sub">
                {sumEtc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>총 예식비용</th>
              <td>
                {husbandWedding
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td>
                {brideWedding.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td className="sub">
                {totalWedding.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ width: '90%' }} />

        <h3>식사비용</h3>
        <table>
          <tbody>
            <tr>
              <th>구분</th>
              <th className="basic" style={{ background: 'skyblue' }}>
                신랑
              </th>
              <th className="basic" style={{ background: 'pink' }}>
                신부
              </th>
              <th className="basic red">계</th>
            </tr>

            <tr>
              <th>식대 분할</th>
              <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                {(function () {
                  if (meal === 'privacy') {
                    return '각각 결제';
                  } else if (meal === 'husband') {
                    return '신랑 결제';
                  } else if (meal === 'bride') {
                    return '신부 결제';
                  }
                })()}
              </td>
            </tr>

            <tr>
              <th>식대 분할</th>
              <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                {mealsPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>

            <tr>
              <th>하객 인원</th>
              <td>
                {husbandNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
              <td>
                {brideNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
              <td>
                {sumNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
            </tr>

            <tr>
              <th>식대 총 비용</th>
              <td>
                {husbandSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
              <td>
                {brideSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
              <td>
                {totalMeals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ width: '90%' }} />

        <h3>예약금</h3>
        <table>
          <tbody>
            <tr>
              <th>구분</th>
              <th className="basic" style={{ background: 'skyblue' }}>
                신랑
              </th>
              <th className="basic" style={{ background: 'pink' }}>
                신부
              </th>
              <th className="basic red">계</th>
            </tr>

            <tr>
              <th>예약금 분할</th>
              <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                {(function () {
                  if (reserve === 'half') {
                    return '예약금 반반';
                  } else if (reserve === 'husband') {
                    return '예약금 신랑';
                  } else if (reserve === 'bride') {
                    return '예약금 신부';
                  }
                })()}
              </td>
            </tr>

            <tr>
              <th>예약금</th>
              <td style={{ color: 'red' }}>
                -
                {husbandReserve
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td style={{ color: 'red' }}>
                -{brideReserve.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
              <td style={{ color: 'red' }}>
                -{reservePay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ width: '90%' }} />

        <h3>
          신랑 총 결제비용:{' '}
          {(husbandWedding + husbandMeal - husbandReserve)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </h3>
        <h3>
          신부 총 결제비용:{' '}
          {(brideWedding + brideMeal - brideReserve)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </h3>
        <Button onClick={onSubmit}>전송하기</Button>
      </Content>
    </Container>
  );
};

export default AllMobile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .title {
    font-size: 1.512rem;
    color: ${oc.violet[7]};
  }
  .name {
    text-align: center;
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Content = styled.div`
  table {
    font-size: 0.95rem;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid ${oc.gray[4]};
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: ${oc.violet[4]};
    color: white;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
    &.red {
      background: ${oc.red[4]};
    }
  }
  td {
    width: 93.3px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  width: 140px;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
  background: ${oc.violet[6]};
  color: white;
  transition: 0.2s all;
  &:active {
    transform: translateY(3px);
  }
`;
