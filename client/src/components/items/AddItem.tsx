import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

interface ButtonProps {
  cyan?: boolean;
}

interface AddItemProps {
  name: string;
  native: string;
  divide: string;
  price: number;
  unit: string;
  onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeString: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: () => void;
  onList: () => void;
  error: string | null;
}

const AddItem: React.FC<AddItemProps> = ({
  name,
  native,
  divide,
  price,
  unit,
  onChangeNumber,
  onChangeString,
  onChangeSelect,
  onSubmit,
  onList,
  error,
}) => {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <Container>
      <LogoWrapper onClick={onList}>품목 등록</LogoWrapper>
      <Form onSubmit={onSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChangeString}
            required
            autoFocus
          />
          <span className="bar" />
          <label>품목명</label>
        </InputGroup>
        <InputGroup>
          <Select name="native" value={native} onChange={onChangeSelect}>
            <option value="현역">현역</option>
            <option value="예비역">예비역</option>
            <option value="일반">일반</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Select name="divide" value={divide} onChange={onChangeSelect}>
            <option value="식사(뷔페)">식사(뷔페)</option>
            <option value="식사(중식)">식사(중식)</option>
            <option value="식사(양식)">식사(양식)</option>
            <option value="식사(한식)">식사(한식)</option>
            <option value="식사(수행)">식사(수행)</option>
            <option value="식사(다과)">식사(다과)</option>
            <option value="대관료">대관료</option>
            <option value="레드와인">레드와인</option>
            <option value="화이트와인/샴페인">화이트와인/샴페인</option>
            <option value="주스/차">주스/차</option>
            <option value="민속주/고량주">민속주/고량주</option>
            <option value="양주">양주</option>
            <option value="기타주류">기타주류</option>
            <option value="칵테일">칵테일</option>
            <option value="반입료">반입료</option>
            <option value="부대비용">부대비용</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Input
            type="number"
            name="price"
            value={price}
            onChange={onChangeNumber}
            required
          />
          <div className="bar" />
          <label>단 가</label>
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            name="unit"
            value={unit}
            onChange={onChangeString}
            onKeyPress={onKeyPress}
            required
          />
          <div className="bar" />
          <label>단 위</label>
        </InputGroup>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button cyan type="submit">
          등록하기
        </Button>
      </Form>
    </Container>
  );
};

export default AddItem;

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
  background: ${oc.cyan[5]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.cyan[2]};
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  height: auto;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: ${oc.gray[9]};
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      background: ${oc.cyan[8]};
      height: 3px;
      transition: left 0.2s ease-out, right 0.2s ease-out;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${oc.cyan[6]};
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: ${oc.teal[6]};
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

const Select = styled.select`
  background: ${oc.gray[0]};
  width: 100%;
  padding: 10px;
  padding-left: 0px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid ${oc.cyan[6]};
  margin-bottom: -1rem;
  &:focus {
    background: ${oc.indigo[6]};
    color: white;
  }
`;

const Button = styled.button<ButtonProps>`
  background: ${oc.gray[6]};
  width: 100%;
  border: none;
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.4rem;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  ${shadow(1)};
  &:hover {
    background-color: ${oc.gray[5]};
    ${shadow(2)};
  }
  &:active {
    background-color: ${oc.gray[6]};
  }
  ${(props) =>
    props.cyan &&
    css`
      background: ${oc.cyan[6]};
      &:hover {
        background-color: ${oc.cyan[5]};
        ${shadow(2)};
      }
      &:active {
        background-color: ${oc.cyan[6]};
      }
    `}
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
