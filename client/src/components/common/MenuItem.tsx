import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  to?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to, onClick }) => {
  const jsx = <ItemBlock onClick={onClick}>{children}</ItemBlock>;

  return to ? (
    <WrapperLink to={to} style={{ display: 'block' }}>
      {jsx}
    </WrapperLink>
  ) : (
    jsx
  );
};

export default MenuItem;

// Styling -> velog
const WrapperLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const ItemBlock = styled.div`
  padding: 0.75rem 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${oc.gray[9]};
  cursor: pointer;

  &:hover {
    background: ${oc.teal[1]};
  }
`;
