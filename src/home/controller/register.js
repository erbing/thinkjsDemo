export default class extends think.controller.base {

    async registerAction () {
       this.assign('title', '注册 - Vuejs 中文社区 ')
        return this.display();
    }

}