export default class extends think.controller.base {

    async loginAction () {
        this.assign('title', '登录 - Vuejs 中文社区 ')
        return this.display();
    }

}