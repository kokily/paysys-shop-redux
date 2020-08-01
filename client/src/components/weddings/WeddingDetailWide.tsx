import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import RemoveModal from '../common/RemoveModal';
import { WeddingResponse } from '../../libs/api/weddings';
import { AuthResponse } from '../../libs/api/auth';
import { admin1 } from '../../libs/isAdmin';

interface ButtonProps {
  menu?: boolean;
  patch?: boolean;
  remove?: boolean;
}

interface WideProps {
  wedding: WeddingResponse | null;
  error: Error | null;
  loading: boolean;
  user: AuthResponse | null;
  onEdit: (id: string) => void;
  onWeddingList: () => void;
  onRemove: () => void;
}

const WeddingDetailWide: React.FC<WideProps> = ({
  wedding,
  error,
  loading,
  user,
  onEdit,
  onWeddingList,
  onRemove,
}) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  if (error) return <Container>에러 발생!!!</Container>;
  if (loading) return null;

  return (
    <Container>
      <h2 className="title">웨딩 정산 내역</h2>

      {!loading && wedding && (
        <Content>
          <h3 className="name">
            신랑님: <strong>{wedding.husband}</strong>{' '}
            <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
            <strong>{wedding.bride}</strong>
          </h3>

          <h4>
            웨딩일자: {new Date(wedding.weddingAt).toLocaleDateString()}{' '}
            {wedding.eventAt && wedding.eventAt}
          </h4>

          <hr style={{ width: '90%' }} />

          <h3>예식비용</h3>
          <table>
            <tbody>
              <tr>
                <th colSpan={4}>예식비용</th>
                <th colSpan={4}>식사비용</th>
              </tr>

              <tr>
                <th>구분</th>
                <th className="basic">신랑</th>
                <th className="basic">신부</th>
                <th className="basic red">계</th>

                <th>구분</th>
                <th className="basic">신랑</th>
                <th className="basic">신부</th>
                <th className="basic red">계</th>
              </tr>

              <tr>
                <th>웨딩홀 사용료</th>
                <td>
                  {wedding.husbandRental
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideRental
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumRental
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>식대 분할</th>
                <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                  {(function () {
                    if (wedding.meal === 'privacy') {
                      return '각각 결제';
                    } else if (wedding.meal === 'husband') {
                      return '신랑 결제';
                    } else if (wedding.meal === 'bride') {
                      return '신부 결제';
                    }
                  })()}
                </td>
              </tr>

              <tr>
                <th>웨딩업체</th>
                <td>
                  {wedding.husbandCompany
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideCompany
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumCompany
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>식대 단가</th>
                <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                  {wedding.mealsPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>웨딩업체 추가</th>
                <td>
                  {wedding.husbandAdd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideAdd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumAdd
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>하객인원</th>
                <td>
                  {wedding.husbandNum
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  명
                </td>
                <td>
                  {wedding.brideNum
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  명
                </td>
                <td className="sub">
                  {wedding.sumNum
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  명
                </td>
              </tr>

              <tr>
                <th>업체당일 추가</th>
                <td>
                  {wedding.husbandToday
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideToday
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumToday
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>식대 총 비용</th>
                <td>
                  {wedding.husbandSum
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideSum
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.totalMeals
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>부 케</th>
                <td>
                  {wedding.husbandBouquet
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideBouquet
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumBouquet
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>폐백음식</th>
                <td>
                  {wedding.husbandCeremony
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideCeremony
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumCeremony
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>한 복</th>
                <td>
                  {wedding.husbandHanbok
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideHanbok
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumHanbok
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th colSpan={4}>예약금</th>
              </tr>

              <tr>
                <th>연 주</th>
                <td>
                  {wedding.husbandPlay
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.bridePlay
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumPlay
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>예약금 분할</th>
                <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
                  {(function () {
                    if (wedding.reserve === 'half') {
                      return '예약금 반반';
                    } else if (wedding.reserve === 'husband') {
                      return '예약금 신랑';
                    } else if (wedding.reserve === 'bride') {
                      return '예약금 신부';
                    }
                  })()}
                </td>
              </tr>

              <tr>
                <th>축 가</th>
                <td>
                  {wedding.husbandAnthem
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideAnthem
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumAnthem
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>

                <th>예약금</th>
                <td style={{ color: 'red' }}>
                  -
                  {wedding.husbandReserve
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td style={{ color: 'red' }}>
                  -
                  {wedding.brideReserve
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub" style={{ color: 'red' }}>
                  -
                  {wedding.reservePay
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>사회자</th>
                <td>
                  {wedding.husbandModerator
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideModerator
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumModerator
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>주 례</th>
                <td>
                  {wedding.husbandOfficiate
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideOfficiate
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumOfficiate
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th>기 타</th>
                <td>
                  {wedding.husbandEtc
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideEtc
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.sumEtc
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>

              <tr>
                <th className="orange">총 예식비용</th>
                <td>
                  {wedding.husbandWedding
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>
                  {wedding.brideWedding
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td className="sub">
                  {wedding.totalWedding
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
              </tr>
            </tbody>
          </table>

          <hr style={{ width: '90%' }} />

          <h3 style={{ color: 'silver' }}>
            웨딩 총 비용:{' '}
            {(
              wedding.husbandWedding +
              wedding.husbandSum +
              wedding.brideWedding +
              wedding.brideSum
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </h3>

          <h3 style={{ color: 'blue' }}>
            결제비용 총액:{' '}
            {(
              wedding.husbandWedding +
              wedding.husbandSum -
              wedding.husbandReserve +
              wedding.brideWedding +
              wedding.brideSum -
              wedding.brideReserve
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </h3>
          <h3>
            신랑 총 결제비용:{' '}
            {(
              wedding.husbandWedding +
              wedding.husbandMeal -
              wedding.husbandReserve
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </h3>
          <h3>
            신부 총 결제비용:{' '}
            {(wedding.brideWedding + wedding.brideMeal - wedding.brideReserve)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </h3>

          <ButtonPane>
            <Button menu onClick={onWeddingList}>
              목록으로
            </Button>
            {user &&
              (user.username === wedding.user.username ||
                user.username === admin1) && (
                <>
                  <Button patch onClick={() => onEdit(wedding._id)}>
                    수정하기
                  </Button>
                  <Button remove onClick={onRemoveClick}>
                    삭제하기
                  </Button>
                </>
              )}
          </ButtonPane>
        </Content>
      )}

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
};

export default WeddingDetailWide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
