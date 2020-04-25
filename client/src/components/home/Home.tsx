import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';

interface MenuType {
  id: number;
  divide: string;
}

interface ItemColor {
  soldier?: boolean;
  reserve?: boolean;
  general?: boolean;
}

interface HomeProps {
  menu: MenuType[];
  native: string;
  onMenu: (divide: string) => void;
}

const Home: React.FC<HomeProps> = ({ menu, native, onMenu }) => {
  return (
    <Container>
      <MenuPane>
        {native === 'soldier' &&
          menu.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => onMenu(item.divide)}
              style={{ cursor: 'pointer' }}
              soldier
            >
              {item.divide}
            </MenuItem>
          ))}

        {native === 'reserve' &&
          menu.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => onMenu(item.divide)}
              style={{ cursor: 'pointer' }}
              reserve
            >
              {item.divide}
            </MenuItem>
          ))}

        {native === 'general' &&
          menu.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => onMenu(item.divide)}
              style={{ cursor: 'pointer' }}
              general
            >
              {item.divide}
            </MenuItem>
          ))}
      </MenuPane>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 3rem;
`;

const MenuPane = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
`;

const MenuItem = styled.div<ItemColor>`
  ${(props) =>
    props.soldier &&
    css`
      background: ${oc.cyan[7]};
    `}
  ${(props) =>
    props.reserve &&
    css`
      background: ${oc.teal[7]};
    `}
  ${(props) =>
    props.general &&
    css`
      background: ${oc.red[7]};
    `}
  color: white;
  ${shadow(1)};
  font-size: 1.215rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 55px;
  -webkit-filter: brightness(0.9);
  filter: brightness(0.9);
  &:hover {
    -webkit-filter: brightness(1);
    filter: brightness(1);
  }
  &:active {
    transform: translateY(3px);
  }
`;
