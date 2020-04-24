import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from '../../libs/styles';

interface HeaderButtonProps {
  disabled?: boolean;
  to?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  return props.to ? (
    <StyledLink {...props} to={props.to} />
  ) : (
    <StyledButton {...props} />
  );
};

export default HeaderButton;

// Styles
const buttonStyle = css`
  font-weight: 600;
  text-decoration: none;
  color: ${oc.cyan[6]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border: 1px solid ${oc.cyan[6]};
  border-radius: 2px;
  transition: 0.2s all;

  &:hover {
    background: ${oc.cyan[6]};
    color: white;
    ${shadow(1)}
  }

  &:active {
    transform: translateY(3px);
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)<HeaderButtonProps>`
  ${buttonStyle}
`;
