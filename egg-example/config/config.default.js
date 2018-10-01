'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537024654888_4334';

  // add your config here
  config.middleware = [];

  config.test = "this is config test";

  config.mysql = {
    client: {
      host:'127.0.0.1',
      port:3306,
      user: 'root',
      password: '123456',
      database:'xbtest',
    },
    app: true,
    agent: false,
  };

  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  }

  return config;
};

