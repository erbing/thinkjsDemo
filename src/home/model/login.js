/**
 * login model
 */
export default class extends think.model.base {
    * loginAction () {
        // 引入数据表
        let model = this.model("user");
        // let insertUser = yield model.add({
        //     username: '444',
        //     password: '555'
        // });
    }
}