import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

interface PageButtonProps {
  disabled?: boolean;
  to?: string;
}

const PageButton: React.FC<PageButtonProps> = (props) => {
  return props.to ? (
    <StyledLink {...props} to={props.to} />
  ) : (
    <StyledButton {...props} />
  );
};

export default PageButton;

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${oc.gray[8]};
  &:hover {
    background: ${oc.gray[6]};
  }
  &:disabled {
    background: ${oc.gray[3]};
    color: ${oc.gray[5]};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)<PageButtonProps>`
  ${buttonStyle}
`;
