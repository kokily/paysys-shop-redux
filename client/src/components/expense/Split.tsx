import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface SplitProps {
  reserve: string;
  meal: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Split: React.FC<SplitProps> = ({
  reserve,
  meal,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">대금 분할 방법</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>예약금 분할</th>
            </tr>
            <tr>
              <td>
                <Select name="reserve" value={reserve} onChange={onChange}>
                  <option value="half">예약금 반반</option>
                  <option value="husband">예약금 신랑</option>
                  <option value="bride">예약금 신부</option>
                </Select>
              </td>
            </tr>

            <tr>
              <td></td>
            </tr>

            <tr>
              <th className="orange">식대 분할</th>
            </tr>
            <tr>
              <td>
                <Select name="meal" value={meal} onChange={onChange}>
                  <option value="privacy">식사비용 각각</option>
                  <option value="husband">식사비용 신랑</option>
                  <option value="bride">식사비용 신부</option>
                </Select>
              </td>
            </tr>
          </tbody>
        </table>
        <MenuButton onSubmit={onSubmit} onBack={onBack} onCancel={onCancel} />
      </Content>
    </Container>
  );
};

export default Split;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoWrapper = styled.div`
  background: ${oc.violet[5]};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.512rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.violet[2]};
  }
`;

const Content = styled.div`
  background: white;
  padding: 1.215rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2.title {
    color: ${oc.indigo[9]};
    padding-bottom: 0.3rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  table {
    width: 100%;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    text-align: center;
  }
  th {
    background: ${oc.indigo[4]};
    color: white;
    &.orange {
      background: ${oc.orange[4]};
    }
  }
`;

const Select = styled.select`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
