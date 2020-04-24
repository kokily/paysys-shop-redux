import Router from 'koa-router';
import * as itemsCtrl from './items';
import { isAdminIn } from '../../libs/utils';

const items = new Router();

items.post('/', isAdminIn, itemsCtrl.addItem);
items.get('/', isAdminIn, itemsCtrl.listItems);

const item = new Router();

item.get('/', isAdminIn, itemsCtrl.readItem);
item.delete('/', isAdminIn, itemsCtrl.removeItem);
item.patch('/', isAdminIn, itemsCtrl.updateItem);

items.use('/:id', itemsCtrl.getById, item.routes());

export default items;
