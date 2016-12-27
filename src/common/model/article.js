'use strict';
/**
 * model
 */
export default class extends think.model.base {
  * articleAction(){
    let model = this.model('article');
    let data = yield model.select();
    data = [
        {
            name: 'z',
            age: 18
        }
    ];
    return this.success(data);
    //data returns {name: "thinkjs", email: "admin@thinkjs.org", ...}
  }
}