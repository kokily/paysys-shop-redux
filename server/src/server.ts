import serve from 'koa-static';
import send from 'koa-send';
import path from 'path';

import './env';
import app from './app';
import { Context } from 'koa';

const { PORT } = process.env;
const rootDir = path.resolve(__dirname, './../../client/build');

app.use(serve(rootDir));
app.use(async (ctx: Context) => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', {
      root: rootDir,
    });
  }
});

app.listen(PORT, () => {
  console.log(`ReDesign Server on ${PORT} port`);
});
