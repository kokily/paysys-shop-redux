import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { AuthResponse } from '../../libs/api/auth';
import { shadow, media } from '../../libs/styles';
import UserMenu from './UserMenu';
import useToggle from '../../libs/hooks/useToggle';
import Menu from './Menu';

interface HeaderProps {
  user: AuthResponse | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [userMenu, toggleUserMenu] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as any)) return;
      toggleUserMenu();
    },
    [toggleUserMenu]
  );

  return (
    <HeaderContainer>
      <Layout>
        <Content>
          <Logo to="/">국방컨벤션</Logo>

          <Spacer />

          {user && (
            <>
              <div ref={ref}>
                <UserMenu onClick={toggleUserMenu} />
              </div>
              <Menu
                user={user}
                onClose={onOutsideClick}
                onLogout={onLogout}
                visible={userMenu}
              />
            </>
          )}
        </Content>
      </Layout>

      <BottomBorder />
    </HeaderContainer>
  );
};

export default Header;

// Styles
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0px;
  ${shadow(1)};
  z-index: 20;
`;

const Layout = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const Content = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.wide} {
    width: 992px;
  }

  ${media.tablet} {
    width: 100%;
  }
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-shadow: 0.5px 0.5px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BottomBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;
