import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface MealProps {
  mealsPrice: string;
  husbandNum: string;
  brideNum: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Meal: React.FC<MealProps> = ({
  mealsPrice,
  husbandNum,
  brideNum,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  const mealsPriceRef = useRef<HTMLInputElement>(null);
  const husbandNumRef = useRef<HTMLInputElement>(null);
  const brideNumRef = useRef<HTMLInputElement>(null);

  const onHusbandNumTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandNumRef.current.focus();
    }
  };

  const onBrideNumTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideNumRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    mealsPriceRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">식사비용</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>식대 단가</th>
              <td>
                <Input
                  type="text"
                  name="mealsPrice"
                  value={mealsPrice}
                  onChange={onChange}
                  ref={mealsPriceRef}
                  onKeyPress={onHusbandNumTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">
                하객인원
                <br />
                (신랑)
              </th>
              <td>
                <Input
                  type="text"
                  name="husbandNum"
                  value={husbandNum}
                  onChange={onChange}
                  ref={husbandNumRef}
                  onKeyPress={onBrideNumTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">
                하객인원
                <br />
                (신부)
              </th>
              <td>
                <Input
                  type="text"
                  name="brideNum"
                  value={brideNum}
                  onChange={onChange}
                  ref={brideNumRef}
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

export default Meal;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
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
    &.orange {
      background: ${oc.orange[4]};
      padding-top: 0;
      padding-bottom: 0;
    }
    &.cyan {
      background: ${oc.cyan[4]};
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
