import Router from 'koa-router';
import * as usersCtrl from './users';
import { isAdminIn } from '../../libs/utils';

const users = new Router();

users.get('/', isAdminIn, usersCtrl.list);

const user = new Router();

user.get('/', isAdminIn, usersCtrl.read);
user.delete('/', isAdminIn, usersCtrl.remove);

users.use('/:id', usersCtrl.getById, user.routes());

export default users;
