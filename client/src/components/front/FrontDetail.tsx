import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import RemoveModal from '../common/RemoveModal';
import { media, shadow } from '../../libs/styles';
import { BillResponse } from '../../libs/api/bills';
import { AuthResponse } from '../../libs/api/auth';
import { admin1 } from '../../libs/isAdmin';

interface ButtonProps {
  remove?: boolean;
  menu?: boolean;
}

interface FrontDetailProps {
  front: BillResponse | null;
  error: Error | null;
  loading: boolean;
  user: AuthResponse | null;
  onList: () => void;
  onRemove: () => void;
}

const FrontDetail: React.FC<FrontDetailProps> = ({
  front,
  error,
  loading,
  user,
  onList,
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

  if (error) return <Container>에러 발생!!</Container>;
  if (loading || !front) return null;

  const { title } = front;

  return (
    <>
      <Helmet>
        <title>{title} - 전표</title>
      </Helmet>
      <Container>
        {!loading && front && (
          <WhiteBoard>
            <InfoHeader>
              <h2>
                전표 세부내역
                <br />
                <small>[ {front.title} ]</small>
              </h2>
            </InfoHeader>

            <DownBorder />

            <InfoContent>
              <table>
                <tbody>
                  <tr>
                    <th>작성자</th>
                    <td>{front.user.username} 님</td>
                  </tr>
                  <tr>
                    <th>작성일자</th>
                    <td>{new Date(front.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th>작성시간</th>
                    <td>{new Date(front.createdAt).toLocaleTimeString()}</td>
                  </tr>
                  <tr>
                    <th>행사장소</th>
                    <td>{front.hall}</td>
                  </tr>
                </tbody>
              </table>
            </InfoContent>

            <Content>
              <table className="table">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>단가/총가격</th>
                  </tr>
                </thead>
                <tbody>
                  {front.list.map((item) => (
                    <tr key={item._id}>
                      <td>{item.native}</td>
                      <td>{item.name}</td>
                      <td>{item.count}</td>
                      <td>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        원 /
                        <br />
                        <strong>
                          {item.amount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          원
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <hr />

              <TotalPane>
                <div className="total">
                  결제금액 :{' '}
                  <span style={{ color: 'red', fontSize: '2rem' }}>
                    {front.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                  원
                </div>
              </TotalPane>

              <ButtonPane>
                {user &&
                  (user.username === admin1 || front.user._id === user._id) && (
                    <Button remove onClick={onRemoveClick}>
                      삭제하기
                    </Button>
                  )}
                <Button menu onClick={onList}>
                  목록으로
                </Button>
              </ButtonPane>
            </Content>
          </WhiteBoard>
        )}
        <RemoveModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Container>
    </>
  );
};

export default FrontDetail;

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.wide} {
    width: 1200px;
  }
  ${media.desktop} {
    width: 100%;
  }
  ${media.phone} {
    width: 100%;
  }
`;

const WhiteBoard = styled.div`
  width: 80%;
  ${media.phone} {
    width: 100%;
  }
`;

const InfoHeader = styled.div`
  text-align: center;
  padding-bottom: -1.5rem;
  small {
    color: ${oc.indigo[9]};
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
  ${media.tablet} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const InfoContent = styled.div`
  float: right;
  text-align: center;
  position: relative;
  width: 280px;
  font-size: 0.8rem;
  margin: 30px auto;
  margin-right: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${media.phone} {
    margin-right: 0.6rem;
  }
  table {
    width: 100%;
    padding: 0;
  }
  tr:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  th,
  td {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    text-align: center;
  }
  th {
    background: ${oc.indigo[9]};
    color: white;
  }
`;

const Content = styled.div`
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  tr:hover {
    background: ${oc.indigo[3]};
    color: white;
    strong {
      color: ${oc.red[9]};
    }
  }
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    strong {
      color: ${oc.indigo[9]};
    }
  }
  th {
    background: ${oc.indigo[9]};
    color: white;
  }
`;

const TotalPane = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  .total {
    float: right;
  }
`;

const ButtonPane = styled.div`
  margin-top: 1rem;
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
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 0.5rem;
  }
`;
