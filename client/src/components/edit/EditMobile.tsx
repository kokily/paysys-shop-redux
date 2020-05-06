import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

interface ButtonProps {
  menu?: boolean;
  remove?: boolean;
  patch?: boolean;
}

interface EditWideProps {
  husband: string;
  bride: string;
  reservePay: number;
  husbandRental: number;
  husbandCompany: number;
  husbandAdd: number;
  husbandBouquet: number;
  husbandCeremony: number;
  husbandHanbok: number;
  husbandPlay: number;
  husbandAnthem: number;
  husbandModerator: number;
  husbandOfficiate: number;
  husbandEtc: number;
  brideRental: number;
  brideCompany: number;
  brideAdd: number;
  brideBouquet: number;
  brideCeremony: number;
  brideHanbok: number;
  bridePlay: number;
  brideAnthem: number;
  brideModerator: number;
  brideOfficiate: number;
  brideEtc: number;
  sumRental: number;
  sumCompany: number;
  sumAdd: number;
  sumBouquet: number;
  sumCeremony: number;
  sumHanbok: number;
  sumPlay: number;
  sumAnthem: number;
  sumModerator: number;
  sumOfficiate: number;
  sumEtc: number;
  husbandWedding: number;
  brideWedding: number;
  totalWedding: number;
  mealsPrice: number;
  husbandNum: number;
  brideNum: number;
  sumNum: number;
  husbandSum: number;
  brideSum: number;
  husbandMeal: number;
  brideMeal: number;
  totalMeals: number;
  reserve: string;
  husbandReserve: number;
  brideReserve: number;
  meal: string;
  weddingAt: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBack: () => void;
  onCalculate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const EditMobile: React.FC<EditWideProps> = ({
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
  weddingAt,
  onChange,
  onChangeText,
  onBack,
  onCalculate,
  onSubmit,
}) => {
  return (
    <Container>
      <h2 className="title">웨딩 정산 내역 수정</h2>

      <>
        <Content>
          <h3 className="name">
            신랑님:{' '}
            <strong>
              <input
                className="name"
                type="text"
                name="husband"
                value={husband}
                onChange={onChange}
              />
            </strong>
          </h3>
          <h3 className="name">
            신부님:{' '}
            <strong>
              <input
                className="name"
                type="text"
                name="bride"
                value={bride}
                onChange={onChange}
              />
            </strong>
          </h3>

          웨딩일자: {new Date(weddingAt).toLocaleDateString()}

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
                  <input
                    type="number"
                    name="husbandRental"
                    value={husbandRental}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideRental"
                    value={brideRental}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumRental.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>

              <tr>
                <th>웨딩업체</th>
                <td>
                  <input
                    type="number"
                    name="husbandCompany"
                    value={husbandCompany}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideCompany"
                    value={brideCompany}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumCompany.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>웨딩업체 추가</th>
                <td>
                  <input
                    type="number"
                    name="husbandAdd"
                    value={husbandAdd}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideAdd"
                    value={brideAdd}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumAdd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>

              <tr>
                <th>부 케</th>
                <td>
                  <input
                    type="number"
                    name="husbandBouquet"
                    value={husbandBouquet}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideBouquet"
                    value={brideBouquet}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumBouquet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>폐백음식</th>
                <td>
                  <input
                    type="number"
                    name="husbandCeremony"
                    value={husbandCeremony}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideCeremony"
                    value={brideCeremony}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumCeremony.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>한 복</th>
                <td>
                  <input
                    type="number"
                    name="husbandHanbok"
                    value={husbandHanbok}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideHanbok"
                    value={brideHanbok}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumHanbok.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>

              <tr>
                <th>연 주</th>
                <td>
                  <input
                    type="number"
                    name="husbandPlay"
                    value={husbandPlay}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="bridePlay"
                    value={bridePlay}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumPlay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>

              <tr>
                <th>축 가</th>
                <td>
                  <input
                    type="number"
                    name="husbandAnthem"
                    value={husbandAnthem}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideAnthem"
                    value={brideAnthem}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumAnthem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>

              <tr>
                <th>사회자</th>
                <td>
                  <input
                    type="number"
                    name="husbandModerator"
                    value={husbandModerator}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideModerator"
                    value={brideModerator}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumModerator
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>주 례</th>
                <td>
                  <input
                    type="number"
                    name="husbandOfficiate"
                    value={husbandOfficiate}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideOfficiate"
                    value={brideOfficiate}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumOfficiate
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>기 타</th>
                <td>
                  <input
                    type="number"
                    name="husbandEtc"
                    value={husbandEtc}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideEtc"
                    value={brideEtc}
                    onChange={onChange}
                  />
                </td>
                <td>
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
                  {brideWedding
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {totalWedding
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
                  <select name="meal" value={meal} onChange={onChangeText}>
                    <option value="privacy">각각 결제</option>
                    <option value="husband">신랑 결제</option>
                    <option value="bride">신부 결제</option>
                  </select>
                </td>
              </tr>

              <tr>
                <th>식대 단가</th>
                <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                  <input
                    type="number"
                    name="mealsPrice"
                    value={mealsPrice}
                    onChange={onChange}
                    style={{ textAlign: 'center' }}
                  />
                </td>
              </tr>

              <tr>
                <th>하객 인원</th>
                <td>
                  <input
                    type="number"
                    name="husbandNum"
                    value={husbandNum}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="brideNum"
                    value={brideNum}
                    onChange={onChange}
                  />
                </td>
                <td>
                  {sumNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명
                </td>
              </tr>

              <tr>
                <th>식대 총 비용</th>
                <td>
                  {husbandMeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {brideMeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
                <td>
                  {totalMeals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
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
                  <select
                    name="reserve"
                    value={reserve}
                    onChange={onChangeText}
                  >
                    <option value="half">예약금 반반</option>
                    <option value="husband">예약금 신랑</option>
                    <option value="bride">예약금 신부</option>
                  </select>
                </td>
              </tr>

              <tr>
                <th className="orange">반환 예약금</th>
                <td style={{ color: 'red' }}>
                  -
                  {husbandReserve
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td style={{ color: 'red' }}>
                  -
                  {brideReserve
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td style={{ color: 'red' }}>
                  -{reservePay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
            </tbody>
          </table>

          <hr style={{ width: '90%' }} />

          <h3>총 결제비용</h3>
          <table>
            <tbody>
              <tr>
                <th colSpan={2}>결제비용 총액</th>
                <td
                  className="total"
                  colSpan={2}
                  style={{ fontWeight: 'bold', color: 'blue' }}
                >
                  {(
                    husbandWedding +
                    husbandMeal -
                    husbandReserve +
                    brideWedding +
                    brideMeal -
                    brideReserve
                  )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
              <tr>
                <th colSpan={2}>신랑 총 결제비용</th>
                <td
                  className="total"
                  colSpan={2}
                  style={{ fontWeight: 'bold' }}
                >
                  {(husbandWedding + husbandMeal - husbandReserve)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
              <tr>
                <th colSpan={2}>신부 총 결제비용</th>
                <td
                  className="total"
                  colSpan={2}
                  style={{ fontWeight: 'bold' }}
                >
                  {(brideWedding + brideMeal - brideReserve)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
            </tbody>
          </table>

          <ButtonPane>
            <Button remove={true} onClick={onBack}>
              취소하기
            </Button>
            <Button menu={true} onClick={onCalculate}>
              다시계산
            </Button>
            <Button patch={true} onClick={onSubmit}>
              저장하기
            </Button>
          </ButtonPane>
        </Content>
      </>
    </Container>
  );
};

export default EditMobile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  
  h3 {
    text-align: center;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: ${oc.violet[4]};
    color: white;
    width: 160px;
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
    width: 90px;
    font-size: 0.85rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
    &.total {
      width: 160px;
    }
  }
  input:not(.name) {
    width: 100%;
    border: none;
    text-align: right;
  }
  input.name {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 1rem;
    border: 1px solid ${oc.pink[6]};
    border-radius: 4px;
  }
  select {
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
  }
  .none {
    display: none;
  }
`;

const ButtonPane = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
`;

const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.remove &&
    css`
      border: 1px solid ${oc.red[6]};
      background: white;
      color: ${oc.red[6]};
      &:hover {
        background: ${oc.red[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.menu &&
    css`
      border: 1px solid ${oc.indigo[6]};
      background: white;
      color: ${oc.indigo[6]};
      &:hover {
        background: ${oc.indigo[6]};
        color: white;
        ${shadow(1)};
      }
    `}
    ${(props) =>
      props.patch &&
      css`
        border: 1px solid ${oc.yellow[6]};
        background: white;
        color: ${oc.yellow[6]};
        &:hover {
          background: ${oc.yellow[6]};
          color: white;
          ${shadow(1)};
        }
      `}
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const DateWrapper = styled.div`
  background: white;
  padding: 1.215rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
