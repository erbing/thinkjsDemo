export default class extends think.controller.base {
   /**
   * index action
   * @return {Promise} []
   * 模块/控制器/方法
   */
    async articleAction() {

        let model = this.model('article');
        let data = await model.select();
        // this.success(data);

        var listArr = data ? data : [
            {
                name: 'zhangsan',
                age: 122
            },
            {
                name: 'lisis',
                age: 24
            },
            {
                name: 'wangwu',
                age: 36
            }
        ];

        const ip = this.ip();

        this.assign('ip', ip);
        this.assign('dataArr', listArr);
        this.assign('name', '这个是我的表单');
        return this.display();
    }
}