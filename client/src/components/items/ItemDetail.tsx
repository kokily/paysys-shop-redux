import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../libs/styles';
import { ItemResponse } from '../../libs/api/items';

interface ItemDetailProps {
  item: ItemResponse | null;
  error: Error | null;
  loading: boolean;
  ItemButton: React.ReactNode;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  item,
  error,
  loading,
  ItemButton,
}) => {
  if (error) return <Container>에러 발생!!</Container>;

  if (loading || !item) return null;

  const { name, native, divide, price, unit } = item;

  return (
    <Container>
      <WhiteBoard>
        <ItemHeader>
          <h2>품목 상세보기</h2>
        </ItemHeader>

        <DownBorder />

        {ItemButton}

        <Content>
          <table className="table">
            <tbody>
              <tr>
                <th>품 명</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>출 신</th>
                <td>{native}</td>
              </tr>
              <tr>
                <th>구 분</th>
                <td>{divide}</td>
              </tr>
              <tr>
                <th>단 가</th>
                <td>
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </td>
              </tr>
              <tr>
                <th>단 위</th>
                <td>{unit}</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </WhiteBoard>
    </Container>
  );
};

export default ItemDetail;

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.tablet} {
    padding: 0.2rem;
  }
`;

const WhiteBoard = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: ${oc.indigo[1]};
  ${media.tablet} {
    width: 100%;
  }
`;

const ItemHeader = styled.div`
  h2 {
    font-size: 1.712rem;
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.indigo[5]});
  ${media.tablet} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Content = styled.div`
  position: relative;
  width: 300px;
  margin: 36px auto;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  ${shadow(1)};
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  tr:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: ${oc.indigo[9]};
    color: white;
  }
`;
