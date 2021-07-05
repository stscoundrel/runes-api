import Koa from 'koa';
import youngerFutharkController from './controllers/younger-futhark';

const app = new Koa();

app
  .use(youngerFutharkController.routes())
  .use(youngerFutharkController.allowedMethods());

export default app;
