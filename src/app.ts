import Koa from 'koa';
import youngerFutharkController from './controllers/younger-futhark';
import elderFutharkController from './controllers/elder-futhark';
import futhorcController from './controllers/futhorc';

const app = new Koa();

app
  .use(youngerFutharkController.routes())
  .use(youngerFutharkController.allowedMethods())
  .use(elderFutharkController.routes())
  .use(elderFutharkController.allowedMethods())
  .use(futhorcController.routes())
  .use(futhorcController.allowedMethods());

export default app;
