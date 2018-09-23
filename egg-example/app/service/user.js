


// module.exports = app => {
//     class UsersService extends app.Service {
//         async user() {
//             let res= "www";
//             // let res = yield this.app.mysql.get("use_info", {name: 'xiongben'});
//             return res;
//         }
//     }
//     return UsersService;
// }

const Service = require('egg').Service;

class UserService extends Service {
  async find(id) {
    const sql = `select * from use_info where id="${id}"`;
    const user = await this.app.mysql.query(sql);
    return user;
  }
}

module.exports = UserService;
