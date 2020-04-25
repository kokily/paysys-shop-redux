import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import menu from '../../libs/menu.json';
import Tabs from '../../components/home/Tabs';
import Home from '../../components/home/Home';

const HomeContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const [native, setNative] = useState('');

  const onMenu = (divide: string) => {
    let menu = '';

    if (native === 'soldier') {
      menu = '현역';
    } else if (native === 'reserve') {
      menu = '예비역';
    } else if (native === 'general') {
      menu = '일반';
    }

    history.push(`/menu?native=${menu}&divide=${divide}`);
  };

  useEffect(() => {
    setNative(location.pathname.substring(1));
  }, [history, location.pathname]);

  return (
    <>
      <Tabs native={native} />
      <Home menu={menu} native={native} onMenu={onMenu} />
    </>
  );
};

export default HomeContainer;
