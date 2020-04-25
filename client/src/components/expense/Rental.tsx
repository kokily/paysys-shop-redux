import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface RentalProps {
  husbandRental: string;
  brideRental: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Rental: React.FC<RentalProps> = ({
  husbandRental,
  brideRental,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  const husbandRentalRef = useRef<HTMLInputElement>(null);
  const brideRentalRef = useRef<HTMLInputElement>(null);

  const onBrideTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideRentalRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    husbandRentalRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">웨딩홀 사용료</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>
                웨딩홀 사용료
                <br />
                (신랑)
              </th>
              <td>
                <Input
                  type="text"
                  name="husbandRental"
                  value={husbandRental}
                  onChange={onChange}
                  ref={husbandRentalRef}
                  onKeyPress={onBrideTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                웨딩홀 사용료
                <br />
                (신부)
              </th>
              <td>
                <Input
                  type="text"
                  name="brideRental"
                  value={brideRental}
                  onChange={onChange}
                  ref={brideRentalRef}
                  onKeyPress={onKeyPress}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <MenuButton onSubmit={onSubmit} onBack={onBack} onCancel={onCancel} />
      </Content>
    </Container>
  );
};

export default Rental;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
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
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
