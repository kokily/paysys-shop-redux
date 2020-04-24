import Router from 'koa-router';
import * as weddingsCtrl from './weddings';
import { isAdminIn } from '../../libs/utils';

const weddings = new Router();

weddings.post('/', isAdminIn, weddingsCtrl.addWedding);
weddings.get('/', isAdminIn, weddingsCtrl.listWeddings);

const wedding = new Router();

wedding.get('/', isAdminIn, weddingsCtrl.readWedding);
wedding.delete('/', isAdminIn, weddingsCtrl.removeWedding);
wedding.patch('/', isAdminIn, weddingsCtrl.updateWedding);

weddings.use('/:id', weddingsCtrl.getById, wedding.routes());

export default weddings;
