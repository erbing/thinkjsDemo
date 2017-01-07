export default class extends think.controller.base {

    async registerAction () {
        this.assign('title', '注册 - Vuejs 中文社区 ')
        let name = this.post('username') ||  123456;
        let psw = this.post('psw') || 123456;
        let model = this.model('user');
        let result = await model.add({
            username: name,
            psw: psw
        });
        this.assign('res', result)
        return this.display();
    }

}