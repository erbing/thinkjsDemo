export default class extends think.controller.base {

    async loginAction () {
        this.assign('title', '登录 - Vuejs 中文社区 ')

        if (this.isPost()) {
            // 用户登录成功写入 session
            let name = this.post('username');
            let psw = this.post('password');
        }
        return this.display();
    }

}