import Router from 'koa-router';
import auth from './auth';
import items from './items';
import bills from './bills';
import weddings from './weddings';
import menu from './menu';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/items', items.routes());
api.use('/bills', bills.routes());
api.use('/weddings', weddings.routes());
api.use('/menu', menu.routes());

export default api;
