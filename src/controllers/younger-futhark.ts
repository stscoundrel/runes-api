import { Context } from 'koa';
import Router from '@koa/router';
import runeService from '../services/runes';

const controller = new Router({
  prefix: '/younger-futhark',
});

controller.get('/:content', (ctx: Context) => {
  const { content } = ctx.params;
  ctx.body = runeService.toYoungerFuthark(content);
});

export default controller;
