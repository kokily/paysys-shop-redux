import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import InfoButton from '../common/InfoButton';

interface InfoProps {
  husband: string;
  bride: string;
  reservePay: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const Info: React.FC<InfoProps> = ({
  husband,
  bride,
  reservePay,
  onChange,
  onSubmit,
  onCancel,
}) => {
  const husbandRef = useRef<HTMLInputElement>(null);
  const brideRef = useRef<HTMLInputElement>(null);
  const reserveRef = useRef<HTMLInputElement>(null);

  const onBrideTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideRef.current.focus();
    }
  };

  const onReserveTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      reserveRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    husbandRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>웨딩 정보 입력</LogoWrapper>
      <Content>
        <h2 className="title">정보 입력</h2>

        <table>
          <tbody>
            <tr>
              <th>신랑 이름</th>
              <td>
                <Input
                  type="text"
                  name="husband"
                  value={husband}
                  onChange={onChange}
                  ref={husbandRef}
                  onKeyPress={onBrideTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>신부 이름</th>
              <td>
                <Input
                  type="text"
                  name="bride"
                  value={bride}
                  onChange={onChange}
                  ref={brideRef}
                  onKeyPress={onReserveTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>예약금</th>
              <td>
                <Input
                  type="text"
                  name="reservePay"
                  value={reservePay}
                  onChange={onChange}
                  ref={reserveRef}
                  onKeyPress={onKeyPress}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <InfoButton onSubmit={onSubmit} onCancel={onCancel} />
      </Content>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  ${shadow(1)}
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
