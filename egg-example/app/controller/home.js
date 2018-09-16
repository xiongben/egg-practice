'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log("=====app=====");
    console.log(this.ctx.app);
    console.log("==========");
    console.log(this.ctx.query);
    this.ctx.body = 'hi, egg,this is new begin';
  }
}

module.exports = HomeController;
