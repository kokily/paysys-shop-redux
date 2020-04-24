import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import api from './api';

const app = new Koa();
const router = new Router();
const { MONGO_URI } = process.env;

if (MONGO_URI) {
  const mongoURI = MONGO_URI.substring(20);

  mongoose
    .connect(MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB connect -> ${mongoURI}`))
    .catch((err: Error) => console.log(err));
}

router.use('/api', api.routes());

app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
