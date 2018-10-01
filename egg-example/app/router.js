'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
  router.get('/', controller.home.index);
  
  router.get('/user', controller.user.index);
  //报错机制
  app.on('error',(err, ctx) => {
    console.log(err);
  });
  // app.on('request', ctx => {
  //   console.log(ctx.request.url);
  // })
};
