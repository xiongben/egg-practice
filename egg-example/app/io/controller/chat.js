module.exports = app => {
    class Controller extends app.Controller {
      async index() {
        const message = this.ctx.args[0];
        console.log('chat :', message + ' : ' + process.pid);
        // const say = await this.ctx.service.user.say();
        const say = "okokok";
        this.ctx.socket.emit('res', say);
      }
    }
    return Controller;
  };