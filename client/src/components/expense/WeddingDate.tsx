import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface WeddingDateProps {
  startDate: Date;
  eventAt: string;
  onChangeTime: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange: (date: Date) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const WeddingDate: React.FC<WeddingDateProps> = ({
  startDate,
  eventAt,
  onChangeTime,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">웨딩일자</h2>
      </LogoWrapper>

      <Content>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          dateFormat="MMMM dd, yyyy"
        />

        <Select name="eventAt" value={eventAt} onChange={onChangeTime}>
          <option value="11:30">11:30</option>
          <option value="13:00">13:00</option>
          <option value="14:30">14:30</option>
          <option value="16:00">16:00</option>
          <option value="17:30">17:30</option>
          <option value="19:00">19:00</option>
        </Select>

        <MenuButton onSubmit={onSubmit} onBack={onBack} onCancel={onCancel} />
      </Content>
    </Container>
  );
};

export default WeddingDate;

// Styles
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
`;

const Select = styled.select`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;