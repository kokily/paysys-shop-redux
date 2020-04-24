import Router from 'koa-router';
import * as menuCtrl from './menu';
import { isLoggedIn } from '../../libs/utils';

const menu = new Router();

menu.get('/', isLoggedIn, menuCtrl.listMenu);
menu.get('/:id', isLoggedIn, menuCtrl.readMenu);

export default menu;
