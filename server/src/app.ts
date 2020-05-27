import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import api from './api';
import jwt_middleware from './libs/token';

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

app.use(helmet());
app.use(logger());
app.use(bodyParser());
app.use(jwt_middleware);
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
