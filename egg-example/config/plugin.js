'use strict';

// had enabled by egg
// exports.static = true;

// exports.mongoose = {
//     enabled: true,
//     package: 'egg-mongoose',
// };

exports.mysql = {
    enabled: true,
    package: 'egg-mysql',
};

exports.io = {
    enabled: true,
    package: 'egg-socket.io',
};

exports.redis = {
    enabled: true,
    package: 'egg-redis',
};