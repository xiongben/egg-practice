'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    var id = this.ctx.query.id;
    var res = await this.service.user.find(id);
    // let params = this.ctx.query;
    this.ctx.body = res;
  }
}

module.exports = UserController;

