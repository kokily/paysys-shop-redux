import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import { MenuResponse } from '../../libs/api/menu';

interface MenuListProps {
  menu: MenuResponse[] | null;
  error: Error | null;
  loading: boolean;
  onBack: () => void;
  onMenu: (id: string) => void;
}

const MenuList: React.FC<MenuListProps> = ({
  menu,
  error,
  loading,
  onBack,
  onMenu,
}) => {
  if (error) return null;
  if (!menu) return null;

  return (
    <Container>
      {!loading && menu && (
        <>
          <div className="title">
            <h2>{menu[0] && menu[0].divide}</h2>
            <Button onClick={onBack}>뒤 로</Button>
          </div>

          <MenuPane>
            {menu.map((item) => (
              <MenuItem
                key={item._id}
                className={`${item.native}`}
                onClick={() => onMenu(item._id)}
                style={{ cursor: 'pointer' }}
              >
                {item.name} |{' '}
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} |{' '}
                {item.native}
              </MenuItem>
            ))}
          </MenuPane>
        </>
      )}
    </Container>
  );
};

export default MenuList;

const Container = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MenuPane = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
`;

const MenuItem = styled.div`
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

  &.현역 {
    background: ${oc.cyan[6]};
  }

  &.예비역 {
    background: ${oc.lime[5]};
  }

  &.일반 {
    background: ${oc.orange[4]};
  }

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

const Button = styled.button`
  width: 120px;
  padding: 0.4rem 0.25rem;
  background: white;
  color: ${oc.indigo[8]};
  border: 2px solid ${oc.indigo[8]};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    color: white;
    border: 2px outset white;
    background: ${oc.indigo[8]};
  }
  &:active {
    transform: translateY(3px);
  }
`;
