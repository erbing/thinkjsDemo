export default class extends think.controller.base {

    async registerAction () {
        this.assign('title', '注册 - Vuejs 中文社区 ')
        let name = this.post('username');
        let psw = this.post('password');
        let model = this.model('user');
        let result = await model.add({
            username: name,
            password: psw
        });
        this.assign('res', result)
        return this.display();
    }

}