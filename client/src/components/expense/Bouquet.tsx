import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface BouquetProps {
  husbandBouquet: string;
  brideBouquet: string;
  husbandCeremony: string;
  brideCeremony: string;
  husbandHanbok: string;
  brideHanbok: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Bouquet: React.FC<BouquetProps> = ({
  husbandBouquet,
  brideBouquet,
  husbandCeremony,
  brideCeremony,
  husbandHanbok,
  brideHanbok,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  const husbandBouquetRef = useRef<HTMLInputElement>(null);
  const brideBouquetRef = useRef<HTMLInputElement>(null);
  const husbandCeremonyRef = useRef<HTMLInputElement>(null);
  const brideCeremonyRef = useRef<HTMLInputElement>(null);
  const husbandHanbokRef = useRef<HTMLInputElement>(null);
  const brideHanbokRef = useRef<HTMLInputElement>(null);

  const onBrideBouquetTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideBouquetRef.current.focus();
    }
  };

  const onHusbandCeremonyTarget = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandCeremonyRef.current.focus();
    }
  };

  const onBrideCeremonyTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideCeremonyRef.current.focus();
    }
  };

  const onHusbandHanbokTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandHanbokRef.current.focus();
    }
  };

  const onBrideHanbokTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideHanbokRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    husbandBouquetRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">부케|폐백|한복</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>부케(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandBouquet"
                  value={husbandBouquet}
                  onChange={onChange}
                  ref={husbandBouquetRef}
                  onKeyPress={onBrideBouquetTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>부케(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideBouquet"
                  value={brideBouquet}
                  onChange={onChange}
                  ref={brideBouquetRef}
                  onKeyPress={onHusbandCeremonyTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">폐백음식(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandCeremony"
                  value={husbandCeremony}
                  onChange={onChange}
                  ref={husbandCeremonyRef}
                  onKeyPress={onBrideCeremonyTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">폐백음식(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideCeremony"
                  value={brideCeremony}
                  onChange={onChange}
                  ref={brideCeremonyRef}
                  onKeyPress={onHusbandHanbokTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="cyan">한복(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandHanbok"
                  value={husbandHanbok}
                  onChange={onChange}
                  ref={husbandHanbokRef}
                  onKeyPress={onBrideHanbokTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="cyan">한복(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideHanbok"
                  value={brideHanbok}
                  onChange={onChange}
                  ref={brideHanbokRef}
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

export default Bouquet;

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
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
