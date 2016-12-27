'use strict';

import Base from './base.js';

export default class extends Base {
  //login action
  async loginAction(self){
    //如果是get请求，直接显示登录页面
    if(this.isGet()){
      return this.display();
    }
    //这里可以通过post方法获取所有的数据，数据已经在logic里做了校验
    let data = this.post();
    let md5 = think.md5("think_" + data.pwd);
    //用户名和加密后的密码去匹配数据库中对于的条目
    let result = await this.model("user").where({name: data.name, pwd: md5}).find();
    //如果未匹配到任何数据，表示用户名或者密码错误
    if(think.isEmpty(result)){
      return this.fail("login fail");
    }
    //获取到用户信息后，将用户信息写入session
    await this.session("userInfo", result);
    return this.success();
  }
}