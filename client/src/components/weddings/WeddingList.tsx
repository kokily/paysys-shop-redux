import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import { WeddingResponse } from '../../libs/api/weddings';
import PaginationContainer from '../../containers/weddings/PaginationContainer';
import WeddingSearch from '../common/WeddingSearch';

interface WeddingListProps {
  weddings: WeddingResponse[] | null;
  error: Error | null;
  loading: boolean;
  onReadWedding: (id: string) => void;
  search: string;
  divide: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDivide: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const WeddingList: React.FC<WeddingListProps> = ({
  weddings,
  error,
  loading,
  onReadWedding,
  search,
  divide,
  onChange,
  onChangeDivide,
  onSearch,
}) => {
  if (error) return <Container>에러 발생!!</Container>;

  return (
    <Container>
      <h2>웨딩 빌지 리스트</h2>

      <Content>
        <table className="table">
          <thead>
            <tr>
              <th>웨딩일자</th>
              <th>신랑</th>
              <th>신부</th>
            </tr>
          </thead>
          <tbody>
            {weddings === null || weddings.length === 0 ? (
              <tr>
                <td colSpan={3}>데이터가 없습니다.</td>
              </tr>
            ) : (
              !loading &&
              weddings &&
              weddings.map((wedding) => (
                <tr key={wedding._id}>
                  <td>
                    <strong onClick={() => onReadWedding(wedding._id)}>
                      {new Date(wedding.weddingAt).toLocaleDateString()}
                    </strong>
                  </td>
                  <td>{wedding.husband}</td>
                  <td>{wedding.bride}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <AddButton to="/expense">웨딩빌지 추가</AddButton>

        <PaginationContainer />
        <WeddingSearch
          mode="구 분"
          search={search}
          divide={divide}
          onChange={onChange}
          onChangeDivide={onChangeDivide}
          onSearch={onSearch}
        />
      </Content>
    </Container>
  );
};

export default WeddingList;

const Container = styled.div`
  h2 {
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 20px auto;
  .table {
    width: 100%;
    padding: 0;
    margin-bottom: 1.5rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }
  th {
    background: ${oc.violet[7]};
    color: white;
  }
  td {
    strong {
      color: ${oc.violet[7]};
      transition: 0.3s;
      overflow: hidden;
      padding: 0.3rem;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: ${oc.violet[7]};
        color: white;
      }
    }
    a {
      font-weight: bold;
      color: ${oc.violet[7]};
      &:hover {
        color: ${oc.red[7]};
      }
    }
  }
`;

const AddButton = styled(Link)`
  width: 120px;
  display: block;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.4rem 0.25rem;
  border: 2px solid ${oc.orange[8]};
  border-radius: 8px;
  text-align: center;
  color: ${oc.orange[8]};
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    color: white;
    border: 2px solid ${oc.yellow[8]};
    background: ${oc.orange[8]};
  }
`;
