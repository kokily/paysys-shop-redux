import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import PageButton from '../common/PageButton';

interface PaginationProps {
  page: number;
  title: string;
  lastPage: string;
}

const queryLink = ({
  page,
  title,
}: {
  page: number;
  title: string;
}): string => {
  const query = qs.stringify({ page, title });
  return `/front?${query}`;
};

const Pagination: React.FC<PaginationProps> = ({ page, title, lastPage }) => {
  return (
    <Container>
      <PageButton
        disabled={page === 1}
        to={page === 1 ? undefined : queryLink({ page: page - 1, title })}
      >
        이전 페이지
      </PageButton>
      <div className="now">{page} 페이지</div>
      <PageButton
        disabled={page === parseInt(lastPage)}
        to={
          page === parseInt(lastPage)
            ? undefined
            : queryLink({ page: page + 1, title })
        }
      >
        다음 페이지
      </PageButton>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  .now {
    display: flex;
    align-items: center;
  }
`;
