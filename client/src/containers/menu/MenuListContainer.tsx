import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { listMenu } from '../../libs/modules/menu';
import { RootState } from '../../libs/modules';
import { QueryType } from '../../libs/api/menu';
import MenuList from '../../components/menu/MenuList';

const MenuListContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { menu, error, loading } = useSelector(
    ({ menu, loading }: RootState) => ({
      menu: menu.menu,
      error: menu.menuError,
      loading: loading['menu/LIST_MENU'],
    })
  );

  const onBack = () => {
    history.goBack();
  };

  const onMenu = (id: string) => {
    history.push(`/menu/${id}`);
  };

  useEffect(() => {
    const { native, divide }: QueryType = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listMenu({ native, divide }));
  }, [dispatch, location.search]);

  return (
    <MenuList
      menu={menu}
      error={error}
      loading={loading}
      onBack={onBack}
      onMenu={onMenu}
    />
  );
};

export default MenuListContainer;
