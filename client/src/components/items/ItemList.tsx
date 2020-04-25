import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow, media } from '../../libs/styles';
import { ItemResponse } from '../../libs/api/items';
import Search from '../common/Search';
import PaginationContainer from '../../containers/items/PaginationContainer';

interface AdminProps {
  items: ItemResponse[] | null;
  loading: boolean;
  error: Error | null;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onItem: (id: string) => void;
}

const Admin: React.FC<AdminProps> = ({
  items,
  loading,
  error,
  search,
  onChange,
  onSearch,
  onItem,
}) => {
  if (error) return <AdminBlock>에러 발생!</AdminBlock>;

  if (loading) return null;

  return (
    <AdminBlock>
      <h1>상품 리스트</h1>

      <table className="table">
        <thead>
          <tr>
            <th>분류</th>
            <th>구분</th>
            <th>상품명</th>
            <th>단가</th>
            <th>단위</th>
          </tr>
        </thead>
        <tbody>
          {items === null || items.length === 0 ? (
            <tr>
              <td colSpan={5}>데이터가 없습니다.</td>
            </tr>
          ) : (
            !loading &&
            items &&
            items.map((item) => (
              <tr
                key={item._id}
                onClick={() => onItem(item._id)}
                style={{ cursor: 'pointer' }}
              >
                <td>{item.divide}</td>
                <td>{item.native}</td>
                <td>{item.name}</td>
                <td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </td>
                <td>{item.unit}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <PaginationContainer />
      <AddButton to="/add">품목 추가</AddButton>
      <Search
        mode="상품명"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />
    </AdminBlock>
  );
};

export default Admin;

const AdminBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  h1 {
    text-align: center;
  }
  .table {
    margin-left: 5rem;
    margin-right: 5rem;
    ${media.tablet} {
      margin-left: 0;
      margin-right: 0;
    }

    border-radius: 0.8rem;
    overflow: hidden;
  }
  tr {
    &:hover {
      background: rgba(255, 187, 0, 0.2);
    }
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: ${oc.cyan[6]};
    color: white;
  }
`;

const AddButton = styled(Link)`
  width: 120px;
  float: right;
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
