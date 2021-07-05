import Koa from 'koa';
import youngerFutharkController from './controllers/younger-futhark';
import elderFutharkController from './controllers/elder-futhark';

const app = new Koa();

app
  .use(youngerFutharkController.routes())
  .use(youngerFutharkController.allowedMethods())
  .use(elderFutharkController.routes())
  .use(elderFutharkController.allowedMethods());

export default app;
