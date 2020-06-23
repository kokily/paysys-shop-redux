import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { media } from '../../libs/styles';
import { BillResponse } from '../../libs/api/bills';
import PaginationContainer from '../../containers/front/PaginationContainer';
import Search from '../common/Search';

interface FrontListProps {
  fronts: BillResponse[] | null;
  error: Error | null;
  loading: boolean;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onDetail: (id: string) => void;
}

const FrontList: React.FC<FrontListProps> = ({
  fronts,
  error,
  loading,
  search,
  onChange,
  onSearch,
  onDetail,
}) => {
  const history = useHistory();

  if (error) {
    history.push('/');
  }

  return (
    <Container>
      <h2>프런트 전표 현황</h2>

      <table className="table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>행사명</th>
            <th>장소</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {fronts === null || fronts.length === 0 ? (
            <tr>
              <td colSpan={4}>작성된 전표가 없습니다.</td>
            </tr>
          ) : (
            !loading &&
            fronts &&
            fronts.map((front: BillResponse) => (
              <tr key={front._id}>
                <td>{new Date(front.createdAt).toLocaleDateString()}</td>
                <td>
                  <strong onClick={() => onDetail(front._id)}>
                    {front.title}
                  </strong>
                </td>
                <td>{front.hall}</td>
                <td>
                  <Link to={`/front?username=${front.user.username}`}>
                    {front.user.username} 님
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <PaginationContainer />
      <Search
        mode="행사명"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />
    </Container>
  );
};

export default FrontList;

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.phone} {
    width: 100%;
  }
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: ${oc.cyan[7]};
    color: white;
  }
  td {
    strong {
      color: ${oc.cyan[9]};
      transition: 0.3s;
      overflow: hidden;
      padding: 0.3rem;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: ${oc.cyan[7]};
        color: white;
      }
    }
    a {
      font-weight: bold;
      color: ${oc.grape[9]};
      text-decoration: none;
      &:hover {
        color: ${oc.red[9]};
      }
    }
  }
`;
