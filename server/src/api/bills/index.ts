import Router from 'koa-router';
import * as billsCtrl from './bills';
import { isLoggedIn } from '../../libs/utils';

const bills = new Router();

bills.post('/', isLoggedIn, billsCtrl.addBill);
bills.get('/', isLoggedIn, billsCtrl.listBill);

const bill = new Router();

bill.get('/', isLoggedIn, billsCtrl.readBill);
bill.delete('/', isLoggedIn, billsCtrl.ownBill, billsCtrl.removeBill);

bills.use('/:id', billsCtrl.getById, bill.routes());

export default bills;
