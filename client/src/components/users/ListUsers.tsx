import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../libs/styles';
import { AuthResponse } from '../../libs/api/auth';
import Search from '../common/Search';
import PaginationContainer from '../../containers/users/PaginationContainer';

interface ListUsersProps {
  users: AuthResponse[] | null;
  loading: boolean;
  error: Error | null;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onUser: (id: string) => void;
}

const ListUsers: React.FC<ListUsersProps> = ({
  users,
  loading,
  error,
  search,
  onChange,
  onSearch,
  onUser,
}) => {
  if (error) return <Container>에러 발생!!</Container>;

  return (
    <Container>
      <h1>사용자 목록</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>성명</th>
            <th>가입일</th>
          </tr>
        </thead>

        <tbody>
          {users === null || users.length === 0 ? (
            <tr>
              <td colSpan={3}>데이터가 없습니다.</td>
            </tr>
          ) : (
            !loading &&
            users &&
            users.map((user) => (
              <tr
                key={user._id}
                style={{ cursor: 'pointer' }}
                onClick={() => onUser(user._id)}
              >
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <PaginationContainer />

      <Search
        mode="이름"
        search={search}
        onChange={onChange}
        onSearch={onSearch}
      />
    </Container>
  );
};

export default ListUsers;

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  h1 {
    text-align: center;
  }

  .table {
    ${shadow(1)}
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
    border-radius: 0.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  
  th {
    background: ${oc.cyan[6]};
    color: white;
  }
`;
