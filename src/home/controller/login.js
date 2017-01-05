export default class extends think.controller.base {

    async loginAction () {
        this.assign('title', '登录 - Vuejs 中文社区 ')

        console.log(this.isPost(),1);
        if (this.isPost()) {
            // 用户登录成功写入 session
            let name = this.post('username');
            let psw = this.post('password');

            // 定义返回错误
            let msg = "1";

            let model = this.model('user');
            let data = await model.where({
                username: name
            }).find();
            
            if (data) {
                if (data.password === psw) {
                    msg = "登录成功！"
                } else {
                    msg = "密码错误！"
                }
            } else {
                msg = '404';
            }

            this.assign('res', 'data.username');
            this.assign('psw', 'data.password');
            this.assign('msg', msg);
            console.log(msg);
        }
        return this.display();
    }
}