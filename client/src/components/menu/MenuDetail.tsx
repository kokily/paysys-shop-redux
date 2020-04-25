import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import { MenuResponse } from '../../libs/api/menu';

interface ButtonProps {
  submit?: boolean;
  cancel?: boolean;
}

interface InputProps {
  input: MenuResponse | null;
  error: Error | null;
  loading: boolean;
  price: number;
  count: string;
  amount: number;
  onChangeCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const Input: React.FC<InputProps> = ({
  input,
  error,
  loading,
  price,
  count,
  amount,
  onChangeCount,
  onChangePrice,
  onKeyPress,
  onBack,
  onSubmit,
}) => {
  if (error) return <Container>에러 발생!!</Container>;

  if (loading || !input) return null;

  const { name, native, divide } = input;

  return (
    <>
      <Helmet>
        <title>
          {name} - ({native}, {divide})
        </title>
      </Helmet>
      <Container>
        <LogoWrapper>
          {divide} | {native}
        </LogoWrapper>
        <Content>
          <table>
            <tbody>
              <tr>
                <th>구 분</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>단 가</th>
                <td>
                  {input.price === 0 ? (
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={onChangePrice}
                    />
                  ) : (
                    <>
                      {input.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      원
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <th>단 위</th>
                <td>{input.unit}</td>
              </tr>
            </tbody>
          </table>
          <hr />

          <div className="number">
            <label htmlFor="count">수 량 :</label>
            <input
              type="text"
              value={count}
              onChange={onChangeCount}
              name="count"
              onKeyPress={onKeyPress}
              autoFocus
            />
          </div>

          <div className="total">
            <h3>
              합계 금액:{' '}
              {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
            </h3>
          </div>

          <ButtonBlock>
            <Button
              submit={true}
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              전표전송
            </Button>
            <Button cancel={true} onClick={onBack}>
              뒤로가기
            </Button>
          </ButtonBlock>
        </Content>
      </Container>
    </>
  );
};

export default Input;

// Styling
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
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
  background: ${oc.red[5]};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.red[2]};
  }
`;

const Content = styled.div`
  background: white;
  padding: 1.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  tr {
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    width: 160px;
    text-align: center;
    input {
      outline: none;
      padding: 0.5rem;
      border-radius: 4px;
      width: 75%;
      height: 1.5rem;
    }
  }
  th {
    background: ${oc.indigo[4]};
    color: white;
  }
  input {
    outline: none;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 4px;
  }
  .total {
    text-align: right;
    color: red;
    margin-bottom: 0;
    padding-bottom: 0.5rem;
    h3 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const ButtonBlock = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: bold;
  width: 110px;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.cancel &&
    css`
      border: 1px solid ${oc.red[6]};
      background: white;
      color: ${oc.red[6]};
      &:hover {
        background: ${oc.red[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.submit &&
    css`
      border: 1px solid ${oc.indigo[6]};
      background: white;
      color: ${oc.indigo[6]};
      &:hover {
        background: ${oc.indigo[6]};
        color: white;
        ${shadow(1)};
      }
    `}
`;
