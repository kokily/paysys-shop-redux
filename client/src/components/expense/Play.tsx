import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface PlayProps {
  husbandPlay: string;
  bridePlay: string;
  husbandAnthem: string;
  brideAnthem: string;
  husbandModerator: string;
  brideModerator: string;
  husbandOfficiate: string;
  brideOfficiate: string;
  husbandEtc: string;
  brideEtc: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Play: React.FC<PlayProps> = ({
  husbandPlay,
  bridePlay,
  husbandAnthem,
  brideAnthem,
  husbandModerator,
  brideModerator,
  husbandOfficiate,
  brideOfficiate,
  husbandEtc,
  brideEtc,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  const husbandPlayRef = useRef<HTMLInputElement>(null);
  const bridePlayRef = useRef<HTMLInputElement>(null);
  const husbandAnthemRef = useRef<HTMLInputElement>(null);
  const brideAnthemRef = useRef<HTMLInputElement>(null);
  const husbandModeratorRef = useRef<HTMLInputElement>(null);
  const brideModeratorRef = useRef<HTMLInputElement>(null);
  const husbandOfficiateRef = useRef<HTMLInputElement>(null);
  const brideOfficiateRef = useRef<HTMLInputElement>(null);
  const husbandEtcRef = useRef<HTMLInputElement>(null);
  const brideEtcRef = useRef<HTMLInputElement>(null);

  const onBridePlayTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      bridePlayRef.current.focus();
    }
  };

  const onHusbandAnthemTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandAnthemRef.current.focus();
    }
  };

  const onBrideAnthemTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideAnthemRef.current.focus();
    }
  };

  const onHusbandModeratorTaraget = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandModeratorRef.current.focus();
    }
  };

  const onBrideModeratorTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideModeratorRef.current.focus();
    }
  };

  const onHusbandOfficiateTarget = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandOfficiateRef.current.focus();
    }
  };

  const onBrideOfficiateTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideOfficiateRef.current.focus();
    }
  };

  const onHusbandEtcTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandEtcRef.current.focus();
    }
  };

  const onBrideEtcTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideEtcRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    husbandPlayRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">연주(축가 등)</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>연주(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandPlay"
                  value={husbandPlay}
                  onChange={onChange}
                  ref={husbandPlayRef}
                  onKeyPress={onBridePlayTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>연주(신부)</th>
              <td>
                <Input
                  type="text"
                  name="bridePlay"
                  value={bridePlay}
                  onChange={onChange}
                  ref={bridePlayRef}
                  onKeyPress={onHusbandAnthemTarget}
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="orange">축가(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandAnthem"
                  value={husbandAnthem}
                  onChange={onChange}
                  ref={husbandAnthemRef}
                  onKeyPress={onBrideAnthemTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">축가(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideAnthem"
                  value={brideAnthem}
                  onChange={onChange}
                  ref={brideAnthemRef}
                  onKeyPress={onHusbandModeratorTaraget}
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="cyan">사회자(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandModerator"
                  value={husbandModerator}
                  onChange={onChange}
                  ref={husbandModeratorRef}
                  onKeyPress={onBrideModeratorTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="cyan">사회자(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideModerator"
                  value={brideModerator}
                  onChange={onChange}
                  ref={brideModeratorRef}
                  onKeyPress={onHusbandOfficiateTarget}
                  required
                />
              </td>
            </tr>

            <tr>
              <th className="red">주례(신랑)</th>
              <td>
                <Input
                  type="text"
                  name="husbandOfficiate"
                  value={husbandOfficiate}
                  onChange={onChange}
                  ref={husbandOfficiateRef}
                  onKeyPress={onBrideOfficiateTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="red">주례(신부)</th>
              <td>
                <Input
                  type="text"
                  name="brideOfficiate"
                  value={brideOfficiate}
                  onChange={onChange}
                  ref={brideOfficiateRef}
                  onKeyPress={onHusbandEtcTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="pink">기 타</th>
              <td>
                <Input
                  type="text"
                  name="husbandEtc"
                  value={husbandEtc}
                  onChange={onChange}
                  ref={husbandEtcRef}
                  onKeyPress={onBrideEtcTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="pink">기 타</th>
              <td>
                <Input
                  type="text"
                  name="brideEtc"
                  value={brideEtc}
                  onChange={onChange}
                  ref={brideEtcRef}
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

export default Play;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  margin-bottom: 2rem;
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
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
    &.red {
      background: ${oc.red[4]};
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
