import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import InfoButton from '../common/InfoButton';

interface UpdateReserveProps {
  reserve: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const UpdateReserve: React.FC<UpdateReserveProps> = ({
  reserve,
  onChange,
  onSubmit,
  onBack,
}) => {
  const reserveRef = useRef<HTMLInputElement>(null);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    reserveRef.current.focus();
  });

  return (
    <Container>
      <LogoWrapper>예약금 입력</LogoWrapper>
      <Content>
        <h2 className="title">예약금</h2>

        <table>
          <tbody>
            <tr>
              <th>예약금</th>
              <td>
                <Input
                  type="text"
                  name="reserve"
                  value={reserve}
                  onChange={onChange}
                  ref={reserveRef}
                  onKeyPress={onKeyPress}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <InfoButton onSubmit={onSubmit} onCancel={onBack} />
      </Content>
    </Container>
  );
};

export default UpdateReserve;

// Styling
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  ${shadow(1)};
  transform: translate(-50%, -50%);
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
    width: 160px;
    text-align: center;
  }
  th {
    background: ${oc.indigo[4]};
    color: white;
  }
`;

const Input = styled.input`
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
