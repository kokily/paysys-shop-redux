import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

interface ExpenseProps {
  onInfoMenu: () => void;
}

const Expense: React.FC<ExpenseProps> = ({ onInfoMenu }) => {
  return (
    <Container>
      <h1 style={{ color: 'blue' }}>웨딩 빌지 입력</h1>
      <Button onClick={onInfoMenu}>입력 시작</Button>
    </Container>
  );
};

export default Expense;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  font-size: 1.512rem;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  background: ${oc.violet[6]};
  color: white;
  text-align: center;
  transition: 0.2s all;
  &:hover {
    border: 1px solid ${oc.violet[6]};
    background: white;
    color: ${oc.violet[6]};
    ${shadow(1)};
  }
  &:active {
    transform: translateY(3px);
    ${shadow(1)};
  }
`;
